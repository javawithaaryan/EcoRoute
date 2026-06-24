# EcoRoute - Responsible AI Guidelines

This document outlines the safety guardrails, hallucination prevention strategies, and ethical guidelines integrated into **EcoRoute**.

## 1. Safety Guardrails for Hazardous Items

**Core Policy**: If an item is identified as Category C (Hazardous or Out-of-Scope), the system ceases routing attempts to standard recycling centers, collection drives, or brand drop-offs.

-   **Precautionary Principle**: If a user uploads an image or text description matching a battery, syringe, medical blister pack, paint can, pesticide, or electronic item, the system automatically redirects the recommendation to focus on:
    1.  **Immediate Isolation**: Keep the item away from food, moisture, and children.
    2.  **Safety Precautions**: Use protective gloves if the item is leaking or damaged.
    3.  **Local Municipal Ward Hazardous Drop-off**: Direct the user to local ward-level hazard waste centers.
-   **No Guessing**: The system will never guess if a chemical container is safe. It defaults to the hazardous routing pathway.

## 2. Hallucination Prevention & Retrieval-Grounding

EcoRoute enforces strict restrictions on text generation to maintain factual accuracy:

-   **Explicit Constraints**:
    -   **No Program Invention**: The agent cannot invent NGOs or collection drives. It only cites the exact names from the active drives in `campus_sustainability_guide.json`.
    -   **No Address Invention**: The agent cannot invent streets, zip codes, or store numbers. It only outputs the exact location string listed in the database.
    -   **No Schedule Speculation**: The agent must use the exact schedule wording of the retrieved document.
-   **Verifier (Double-Check Loop)**: The workflow includes a verification stage where the drafted advice is checked against the raw retrieved JSON. Any claims not present in the source files are stripped.

## 3. Carbon Savings and Metric Restrictions

-   **No Carbon Speculation**: AI systems often generate arbitrary or poorly sourced environmental metrics.
-   **Grounding Policy**: EcoRoute strictly forbids carbon savings estimation unless the metric is explicitly documented in the retrieved file. If no carbon data is in the database, the agent provides zero carbon claims.

## 4. Temporal Validation Sentry

-   **Stale Data Prevention**: Sustainability initiatives, particularly campus drives and brand promotions, have fixed campaign periods.
-   **Grounding Policy**: EcoRoute implements temporal checking. Any retrieved record marked as `EXPIRED` or whose validation date is past the current system clock is disqualified, forcing the reasoning engine to fallback to permanent municipal services.
