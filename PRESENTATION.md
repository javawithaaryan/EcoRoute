# EcoRoute - Hackathon Presentation Outline & Script
*Prepared for IBM SkillsBuild & 1M1B AI for Sustainability*

This document contains the slide-by-slide structure, core messages, and script for the EcoRoute pitch deck.

---

## Slide 1: Title Slide
*   **Visual**: A clean, minimalist design showing the EcoRoute user panel.
*   **Headline**: **EcoRoute**: Agentic Sustainability Decision Support System.
*   **Sub-headline**: Helping users make better waste disposal decisions using verified local knowledge.
*   **Presenters**: Team Sustainability Volunteers
*   **Script**:
    > "Hello judges. Every day, millions of people hold packaging waste like chip wrappers or shampoo sachets and ask, 'Can I recycle this?' The answer is usually complicated. Standard municipal systems send these multi-layer plastics straight to landfills or incinerators. Today, we present EcoRoute—a decision support system that connects users with active local and circular disposal pathways."

---

## Slide 2: The Problem
*   **Visual**: Infographics showing:
    1.  Multi-layer plastics make up 40% of household dry waste.
    2.  Landfills and open-burning of plastic packaging release toxic emissions.
    3.  Users want to recycle, but municipal rules are complex and search engines return generic, unverified advice.
*   **Key Message**: Packaging waste is difficult to recycle, and information is highly fragmented.
*   **Script**:
    > "Standard recyclable plastics like PET bottles have clear pathways. But composite packaging—multi-layer plastic wraps and cosmetic sachets—are rejected by standard recycling. Meanwhile, campuses, brands, and city wards run local collection drives and take-back programs, but they are buried in PDFs, emails, and website subpages. Users need a single, reliable point of verification."

---

## Slide 3: The Solution - EcoRoute
*   **Visual**: A screenshot of the EcoRoute dashboard showing the Single-Agent Reasoning Workflow.
*   **Key Pillars**:
    *   **Observe & Classify**: Accurately detects composite foil-plastics.
    *   **Local RAG Knowledge Base**: Indexes city guidelines, campus programs, and brand directories.
    *   **Temporal Validation**: Ignores expired programs and falls back to safe alternatives.
    *   **Responsible AI Sentry**: Rejects hallucinated addresses or schedules.
*   **Script**:
    > "EcoRoute is not a chatbot; it is a decision support system. Users upload an image or type a description, and specify their location. The system executes a structured Single-Agent Reasoning Workflow: observing the material, classifying the category, searching local databases using Retrieval-Augmented Generation, and evaluating the best option based on circular economy principles."

---

## Slide 4: System Architecture & Agent Workflow
*   **Visual**: A simplified block diagram of the pipeline showing the Retrieval and Verification stages.
*   **Bullet Points**:
    *   **Retrieval**: Links standard items to specific database JSON entries.
    *   **Hierarchy Sorter**: Prioritizes local Eco-Club drives and brand take-back programs over municipal landfills.
    *   **Safety Guard**: Catches hazardous items (batteries, electronics) and enforces safe handling.
*   **Script**:
    > "Under the hood, EcoRoute uses a RAG pipeline. It retrieves details from three local databases: campus guides, brand programs, and municipal schedules. Our key innovation is the Verification stage, which acts as a safety guard, cross-checking the recommendation against the database to guarantee zero hallucinations before outputting the final instruction."

---

## Slide 5: Demo & Use Cases
*   **Visual**: Three side-by-side demo cases:
    1.  *Lays Packet*: Guided to the campus drive at Student Sustainability Hub, Room 102.
    2.  *PET Bottle*: Guided to standard dry waste Blue Bin.
    3.  *Shampoo Sachet*: Guided to Yellow Non-Recyclable Bin for municipal energy recovery.
*   **Script**:
    > "Here is EcoRoute in action. A student on campus with a Lays packet is directed to the weekly campus collection drive. A resident with a PET bottle is directed to standard dry waste. A user with empty shampoo sachets is guided to the municipal difficult packaging collection bin. If no local programs are found, the system honestly admits it, instructing the user to keep the item dry and separated rather than guessing."

---

## Slide 6: Social & Environmental Impact
*   **Visual**: Charts projecting:
    *   30% reduction in flexible plastic landfill routing within participating communities.
    *   High user trust due to verified sources.
    *   Increased participation in brand-incentivized circular programs.
*   **Script**:
    > "By matching difficult waste with specialized recyclers, EcoRoute diverts high-energy waste from open fires and landfills. It educates users on the value of clean, dry storage and directly boosts participation in brand circularity initiatives. It's a scalable tool for campus hubs, residential societies, and cities."

---

## Slide 7: Future Roadmap & Ask
*   **Visual**: Timeline showing integration with WhatsApp Business API, computer vision model tuning, and expansion of the brand directory.
*   **Key Ask**: Support for municipal database integrations and corporate coalition expansions.
*   **Script**:
    > "Our next step is integrating EcoRoute with WhatsApp Business to reach users without internet access. We are also building out our brand take-back API so retailers can update their schedules in real time. Help us route waste away from landfills. Join us in making EcoRoute the final mile of circular waste management. Thank you."
