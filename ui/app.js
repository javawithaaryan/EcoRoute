// EcoRoute Databases
const municipalDatabase = {
  "source_name": "Prototype Municipal Zone Waste Guidelines (2026)",
  "authority": "Prototype Municipal Zone Waste Management Department",
  "guidelines": [
    {
      "material_type": "Standard Recyclable",
      "items": ["PET Bottles", "Glass Bottles", "Clean Cardboard", "Paper Packaging", "Aluminium Cans", "Water Bottle"],
      "disposal_channel": "Blue Dry Waste Bin",
      "instructions": "Place clean containers in the blue bin.",
      "collection_schedule": "Every Tuesday and Friday morning",
      "location": "Curbside collection"
    },
    {
      "material_type": "Multi-layer Plastic",
      "items": ["Chips packets", "Biscuit wrappers", "Shampoo sachets", "Soap wrappers", "Laminated pouches", "Lays packet", "Sachet"],
      "disposal_channel": "Yellow Non-Recyclable Dry Waste Bin",
      "instructions": "Place flexible plastic wrappers in the yellow bin for cement plant energy recovery.",
      "collection_schedule": "Every Wednesday morning",
      "location": "Curbside collection"
    },
    {
      "material_type": "Hazardous Waste",
      "items": ["Batteries", "Electronics", "Chemical containers", "Spray cans", "LED bulbs", "Battery", "alkaline"],
      "disposal_channel": "Red E-Waste/Hazardous Bin",
      "instructions": "Seal batteries in a plastic bag and deliver to hazardous collection points.",
      "collection_schedule": "First Sunday of every month (9:00 AM - 12:00 PM)",
      "location": "Ward-level drop-off center"
    }
  ]
};

const campusDatabase = {
  "source_name": "Prototype Campus Sustainability Initiative Guide (Spring 2026)",
  "authority": "Prototype Campus Sustainability Office",
  "drives": [
    {
      "drive_name": "Eco-Club Flexible Plastics Collection Drive",
      "target_materials": ["Multi-layer plastic packaging", "Chip packets", "Chips", "Lays Packet", "Biscuit wrappers", "Sachets", "wrapper"],
      "status": "ACTIVE",
      "valid_until": "2026-06-30",
      "collection_point": "Student Sustainability Hub, Room 102",
      "schedule": "Every Thursday, 2:00 PM to 5:00 PM",
      "instructions": "Empty and dry flexible plastics are collected and shipped to recycle partners."
    },
    {
      "drive_name": "Standard Beverage Bottle Reclamation",
      "target_materials": ["PET bottles", "Aluminium cans", "Water Bottle"],
      "status": "ACTIVE",
      "valid_until": "2026-12-31",
      "collection_point": "Reverse Vending Machines (RVMs)",
      "schedule": "Continuous (24/7)",
      "instructions": "Insert empty beverage containers to credit campus points."
    },
    {
      "drive_name": "Expired Winter Clothing Drive",
      "target_materials": ["Winter Coat", "Coats", "Blankets"],
      "status": "EXPIRED",
      "valid_until": "2026-02-28",
      "collection_point": "Campus Chapel Foyer",
      "schedule": "Ended",
      "instructions": "Donate winter wear. (Drive has ended for the season)"
    }
  ]
};

const brandDatabase = {
  "source_name": "National Brand Take-Back Program Directory (2026)",
  "authority": "Circular Packaging Coalition",
  "programs": [
    {
      "brand_partner": "PureGlow Cosmetics",
      "eligible_packaging": ["Shampoo sachets", "Conditioner sachets", "Lotion tubes", "Cosmetic pouches", "Sachet"],
      "program_name": "PureGlow Refuse-to-Waste Program",
      "dropoff_locations": ["All standalone PureGlow retail outlets (Customer Service Desk)"],
      "incentive": "10% coupon per 10 sachets returned",
      "instructions": "Clean, dry sachets are processed into post-consumer resin."
    }
  ]
};

// UI and Logic Setup
document.addEventListener("DOMContentLoaded", () => {
  
  // Custom Preset mapping
  const presetSelect = document.getElementById("item-presets");
  const customDesc = document.getElementById("custom-description");
  const locationSelect = document.getElementById("location-context");
  
  presetSelect.addEventListener("change", () => {
    const val = presetSelect.value;
    if (val === "Lays Packet") {
      customDesc.value = "Lays potato chips packet, dry with silver foil lining.";
      locationSelect.value = "campus";
    } else if (val === "PET Bottle") {
      customDesc.value = "Empty plastic PET water bottle, clean.";
      locationSelect.value = "municipal";
    } else if (val === "Shampoo Sachet") {
      customDesc.value = "Empty PureGlow shampoo sachet, washed and dried.";
      locationSelect.value = "municipal";
    } else if (val === "AA Battery") {
      customDesc.value = "AA alkaline battery, starting to show white crusty residue.";
      locationSelect.value = "campus";
    } else if (val === "Winter Coat") {
      customDesc.value = "Old winter coat with torn zipper, clean.";
      locationSelect.value = "campus";
    } else {
      customDesc.value = "";
    }
  });

  // Accordion Expand/Collapse
  const setupAccordion = (headerId, contentId, arrowId) => {
    const header = document.getElementById(headerId);
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(arrowId);
    
    header.addEventListener("click", () => {
      const isVisible = content.style.display === "flex" || content.style.display === "block";
      content.style.display = isVisible ? "none" : (contentId === "reasoning-content" ? "flex" : "block");
      arrow.textContent = isVisible ? "▼" : "▲";
    });
  };

  setupAccordion("reasoning-header", "reasoning-content", "accordion-arrow");
  setupAccordion("rag-header", "rag-content", "rag-arrow");

  // Analyze Button Click
  document.getElementById("btn-analyze").addEventListener("click", executeSingleAgentWorkflow);
});

async function executeSingleAgentWorkflow() {
  const itemText = document.getElementById("custom-description").value.trim();
  const location = document.getElementById("location-context").value;
  
  if (!itemText) {
    alert("Please enter or select a packaging item to evaluate.");
    return;
  }

  const placeholder = document.getElementById("result-placeholder");
  const card = document.getElementById("result-card");
  const reasoningContent = document.getElementById("reasoning-content");
  const accordionArrow = document.getElementById("accordion-arrow");
  
  placeholder.style.display = "none";
  card.style.display = "none";
  reasoningContent.style.display = "none"; // collapsed by default
  accordionArrow.textContent = "▼";

  // 1. Observe Packaging
  const textLower = itemText.toLowerCase();
  let material = "flexible composite";
  let packaging = "wrapper";
  
  if (textLower.includes("bottle") || textLower.includes("pet")) {
    material = "PET Plastic";
    packaging = "Bottle";
  } else if (textLower.includes("sachet") || textLower.includes("pouch")) {
    material = "Laminated plastic";
    packaging = "Sachet";
  } else if (textLower.includes("chips") || textLower.includes("lays") || textLower.includes("wrapper")) {
    material = "Multi-layer plastic/foil";
    packaging = "Chips Wrapper";
  } else if (textLower.includes("battery") || textLower.includes("alkaline")) {
    material = "Alkaline cell battery";
    packaging = "Battery";
  } else if (textLower.includes("coat") || textLower.includes("clothing")) {
    material = "Textiles (wool/polyester)";
    packaging = "Winter Coat";
  }

  // 2. Classify Material
  let category = "A";
  let classificationText = "Multi-layer plastic packaging (Category A)";
  let whyIdentified = "This wrapper combines plastic with a thin foil layer, which makes it difficult for standard recycling systems to process.";

  if (packaging === "Bottle") {
    category = "B";
    classificationText = "Standard Recyclable Packaging (Category B)";
    whyIdentified = "This water bottle is constructed from clean PET plastic, which is widely processed by standard curbside recycling lines.";
  } else if (packaging === "Battery") {
    category = "C";
    classificationText = "Hazardous Material (Category C)";
    whyIdentified = "Batteries contain chemical elements and heavy metals that pose environmental and safety hazards, putting them outside project scope.";
  } else if (packaging === "Winter Coat") {
    category = "C";
    classificationText = "Out of Project Scope (Category C)";
    whyIdentified = "This is a clothing item. EcoRoute is optimized exclusively for dry packaging waste materials.";
  }

  // 3. RAG Retrieval & 4. Reason Through Options (Temporal validation included)
  let recommendedAction = "";
  let sourceUsed = "No verified local source was available.";
  let schedule = "-";
  let dropLocation = "-";
  let confidence = "High";
  
  let campusDoc = null;
  let brandDoc = null;
  let municipalDoc = null;

  // Search Campus Database
  if (location === "campus") {
    campusDatabase.drives.forEach(drive => {
      const match = drive.target_materials.some(mat => textLower.includes(mat.toLowerCase())) ||
                    (packaging === "Winter Coat" && drive.drive_name.includes("Clothing"));
      if (match) campusDoc = drive;
    });
  }

  // Search Brand Database
  brandDatabase.programs.forEach(prog => {
    const match = prog.eligible_packaging.some(mat => textLower.includes(mat.toLowerCase()));
    if (match) brandDoc = prog;
  });

  // Search Municipal Database
  municipalDatabase.guidelines.forEach(guide => {
    const match = guide.items.some(mat => textLower.includes(mat.toLowerCase()));
    if (match) municipalDoc = guide;
  });

  // Process hierarchy and validation
  if (category === "C") {
    // Check if temporal checking applies to clothes
    if (packaging === "Winter Coat" && campusDoc && campusDoc.status === "EXPIRED") {
      // Disqualified expired drive
      recommendedAction = "The campus clothing drive has ended for the season. Please store this item until next season or seek local textile collection programs in your municipality.";
      sourceUsed = `${campusDatabase.source_name} [Temporal Validation Fallback]`;
      schedule = "None currently";
      dropLocation = "None (Campaign Ended)";
      confidence = "High";
    } else {
      // Normal hazard fallback
      recommendedAction = "Do not place this item in standard campus or municipal recycling bins. Keep in dry storage and take it to the Ward-level collection center.";
      sourceUsed = municipalDatabase.source_name;
      schedule = "First Sunday of every month, 9 AM - 12 PM";
      dropLocation = "Ward-level drop-off center";
      confidence = "High";
    }
  } else {
    // Normal routing hierarchy
    if (location === "campus" && campusDoc && campusDoc.status === "ACTIVE") {
      recommendedAction = `Ensure the packaging is dry and empty, then drop it off at the designated campus collection point.`;
      sourceUsed = campusDatabase.source_name;
      schedule = campusDoc.schedule;
      dropLocation = campusDoc.collection_point;
    } else if (brandDoc) {
      recommendedAction = `Wash and dry the sachets, then drop them off at standalone brand retail outlets to claim your incentive: ${brandDoc.incentive}.`;
      sourceUsed = brandDatabase.source_name;
      schedule = "Retail operating hours";
      dropLocation = brandDoc.dropoff_locations[0];
    } else if (municipalDoc) {
      recommendedAction = `Empty the packaging and discard it in the curbside ${municipalDoc.disposal_channel}.`;
      sourceUsed = municipalDatabase.source_name;
      schedule = municipalDoc.collection_schedule;
      dropLocation = municipalDoc.location;
    } else {
      // Fallback
      recommendedAction = "I couldn't find a verified local disposal option in my current knowledge base. Until you can confirm a nearby collection facility, keep this packaging clean, dry, and separate from recyclable bottles and paper.";
      sourceUsed = "No verified local source was available.";
      confidence = "Low";
    }
  }

  // 5. Verify & 6. Respond
  document.getElementById("res-class").textContent = classificationText;
  document.getElementById("res-why").textContent = whyIdentified;
  document.getElementById("res-action").textContent = recommendedAction;
  document.getElementById("res-source").textContent = sourceUsed;
  document.getElementById("res-meta-schedule").textContent = schedule;
  document.getElementById("res-meta-location").textContent = dropLocation;

  // Set confidence styling
  const confIndicator = document.getElementById("res-confidence");
  confIndicator.textContent = confidence;
  confIndicator.className = "confidence-indicator";
  confIndicator.classList.add(confidence.toLowerCase());

  // Show result
  card.style.display = "flex";
}
