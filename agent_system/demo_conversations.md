# EcoRoute - Demo Conversations

These simulated conversations showcase how EcoRoute processes items using the Single-Agent Reasoning Workflow and formats the output.

---

## Demo 1: Lays Chips Packet (Campus Context)

### User Input
> "I am on Prototype Campus. I have an empty Lays potato chips packet. It has a metallic lining inside. How should I dispose of this?"

### Agent Reasoning (Internal Trace)
1.  **Observe**: Identified Lays packaging; material is multi-layer plastic/foil; condition is empty and dry.
2.  **Classify**: Category A (Difficult-to-recycle packaging).
3.  **Retrieve**: Found `Prototype Campus Sustainability Initiative Guide (Spring 2026)` listing the "Eco-Club Flexible Plastics Collection Drive".
4.  **Reason**: Drive is ACTIVE (expires June 30, 2026). Selected as highest priority.
5.  **Verify**: Dropping point is "Student Sustainability Hub, Room 102" on Thursdays, 2-5 PM. Verified.
6.  **Respond**: Formulate final recommendation.

### Final Response
```markdown
## Classification
Multi-layer plastic packaging (Category A)

## Why I identified it this way
This chips wrapper fuses plastic with a metallic foil layer, making it difficult for standard municipal sorting systems to separate and recycle.

## Recommended Action
Wash and dry the packet, then drop it off at the Student Sustainability Hub, Room 102 during the weekly Eco-Club Flexible Plastics Collection Drive (Thursdays, 2:00 PM to 5:00 PM).

## Source Used
Prototype Campus Sustainability Initiative Guide (Spring 2026)

## Confidence
High
```

---

## Demo 2: PET Bottle (Municipal Context)

### User Input
> "I have a clean plastic PET water bottle. I am at home in Prototype Municipal Zone. Where should this go?"

### Agent Reasoning (Internal Trace)
1.  **Observe**: Identified water bottle; material is PET plastic; condition is clean.
2.  **Classify**: Category B (Standard recyclable packaging).
3.  **Retrieve**: Found `Prototype Municipal Zone Waste Guidelines (2026)` dry recyclables rule.
4.  **Reason**: Bin target is Blue Dry Waste Bin.
5.  **Verify**: Confirmed collection schedule is Tuesday and Friday morning.
6.  **Respond**: Formulate final recommendation.

### Final Response
```markdown
## Classification
Standard recyclable packaging (Category B)

## Why I identified it this way
This is a standard mono-material PET bottle, which is highly recyclable and easily sorted by standard waste facilities.

## Recommended Action
Rinse the bottle, flatten it, and place it in the Blue Dry Waste Bin for curbside collection on Tuesday or Friday morning.

## Source Used
Prototype Municipal Zone Waste Guidelines (2026)

## Confidence
High
```

---

## Demo 3: Shampoo Sachet (Municipal Context)

### User Input
> "I have empty shampoo sachets from a local brand. I washed them out. I live in Prototype Municipal Zone. What should I do with them?"

### Agent Reasoning (Internal Trace)
1.  **Observe**: Identified shampoo sachets; material is laminated plastic; condition is clean and dry.
2.  **Classify**: Category A (Difficult-to-recycle packaging).
3.  **Retrieve**: Checked campus drives (none matching, user is not on campus) and brand directory (no matching brand takeback). Checked `Prototype Municipal Zone Waste Guidelines (2026)` for Multi-layer plastics.
4.  **Reason**: Directs to Yellow Non-Recyclable Dry Waste Bin for energy recovery.
5.  **Verify**: Verified schedule is Wednesday morning.
6.  **Respond**: Formulate final recommendation.

### Final Response
```markdown
## Classification
Multi-layer plastic packaging (Category A)

## Why I identified it this way
Sachets consist of laminated layers of plastic and linings to protect the product, making them unsuitable for normal paper or plastic recycle bins.

## Recommended Action
Ensure the sachets are clean and dry, then place them in the Yellow Non-Recyclable Dry Waste Bin for curbside collection on Wednesday morning.

## Source Used
Prototype Municipal Zone Waste Guidelines (2026)

## Confidence
High
```
