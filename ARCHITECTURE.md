# EcoRoute - System Architecture

This document describes the technical architecture and data flow of the **EcoRoute** decision support system.

## 1. System Pipeline

EcoRoute is built on a **Single-Agent Reasoning Workflow** that handles the user's packaging query through sequential reasoning steps, avoiding multi-agent communication overhead for deterministic verification.

```
       +---------------------------------------+
       |             User Interface            |
       |     (Internal Sustainability Panel)   |
       +-------------------+-------------------+
                           |
                           v
       +---------------------------------------+
       |           Observe Packaging           |
       |  (Extracts material, packaging type)  |
       +-------------------+-------------------+
                           |
                           v
       +---------------------------------------+
       |           Classify Material           |
       |    (Category A, B, or C assignment)   |
       +-------------------+-------------------+
                           |
                           v
       +---------------------------------------+
       |        Retrieve Knowledge (RAG)       |
       |     (Query local JSON documents)      |
       +-------------------+-------------------+
                           |
                           v
       +---------------------------------------+
       |         Reason & Validate             |
       |   (Option Hierarchy + Temporal Sentry) |
       +-------------------+-------------------+
                           |
                           v
       +---------------------------------------+
       |         Verify Recommendation         |
       |    (Fact-check against raw sources)   |
       +-------------------+-------------------+
                           |
                           v
       +---------------------------------------+
       |          Generate Response            |
       |     (Standardized formatted output)   |
       +---------------------------------------+
```

### Component Roles

1.  **User Interface (UI)**: A minimal, functional dashboard designed for university sustainability desks or municipal information terminals.
2.  **Observe Packaging**: Identifies the item name, brand, material composition, and condition.
3.  **Classify Material**: Deterministically buckets waste into Category A (difficult packaging), Category B (standard recyclable), or Category C (hazardous/out of scope).
4.  **Retrieve Knowledge (RAG)**: Indexes local data files (`municipal_waste_guide.json`, `campus_sustainability_guide.json`, and `brand_takeback_directory.json`) for matches.
5.  **Reason & Validate**: Evaluates available options (Campus Drives > Brand Programs > Municipal Bins). Applies *Temporal Validation* to disqualify expired campaigns.
6.  **Verify Recommendation**: Cross-checks facts, locations, and schedules against the retrieved JSON text. Removes speculative assertions or statistics.
7.  **Generate Response**: Formulates a simple, friendly recommendation in the specified visual layout.

---

## 2. Technology Stack & Integration

-   **Frontend**: HTML5, Vanilla JavaScript, CSS3. Styled with custom navy elements, maintaining a functional utility dashboard design (no flashing gradients or neon glassmorphism).
-   **Knowledge Base**: Local JSON files modeling campus sustainability programs, brand directories, and city garbage collection schedules. For the prototype, these are parsed via a client-side search function in `app.js` that maps material and location inputs to matching nodes.
-   **Core Processing**: Single-agent reasoning pipeline, with production targets including Google Gemini API for extraction and classification tasks. In production, this replaces client-side search with neural semantic matching.
