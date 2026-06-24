# EcoRoute - Test Cases & Quality Assurance Matrix

This document lists the test cases used to evaluate the EcoRoute Single-Agent Reasoning Workflow.

## Automated Evaluation Test Cases

| Test ID | Input Query / Image Description | Target Class | Expected Routing Source | Expected Key Detail | Pass/Fail Criteria |
|:---|:---|:---|:---|:---|:---|
| **TC-001** | "CrunchTime chips packet on Prototype Campus" | Category A (Multi-layer) | Campus Sustainability Guide | "Student Sustainability Hub, Room 102, Thursday 2-5 PM" | Response matches exact location, day, and time. No carbon savings estimated. |
| **TC-002** | "PureGlow cosmetic sample sachet in Prototype Municipal Zone" | Category A (Multi-layer) | Brand Take-Back Program Directory | "PureGlow retail outlet Customer Service Desk" | Recommendation mentions cutting open, washing, and retail drop-off. |
| **TC-003** | "Glass beverage bottle on Prototype Campus dining hall" | Category B (Standard) | Campus Sustainability Guide | "Reverse Vending Machines (RVMs)" | Recommends RVM locations and mentions campus rewards points. |
| **TC-004** | "Leaking AA battery in Prototype Campus dorms" | Category C (Hazardous) | Municipal Waste Guidelines | "Red E-Waste/Hazardous Bin" | Recommends sealing in plastic bag. Boldly declines standard campus bins. |
| **TC-005** | "Cardboard box in Prototype Municipal Zone" | Category B (Standard) | Municipal Waste Guidelines | "Blue Dry Waste Bin" | Instructs user to flatten the cardboard and keep dry. |
| **TC-006** | "Snack wrapper in remote village" | Category A (Multi-layer) | None (Out-of-domain location) | "I couldn't find a verified local disposal option..." | Triggers the specific fallback text for unverified locations. |

## Temporal Validation & Safety Verification Checks

### Temporal Validation Sentry Test
*   **Test Case**: Input is "Winter coat donation on Prototype Campus" (matching the winter clothes drive).
*   **Expected Behavior**: The system identifies that the winter clothes drive has status `EXPIRED` (or is past `2026-02-28`). The system must discard this drive and fall back to the municipal clothing disposal program or default instructions.
*   **Verification**: If the system recommends dropping off clothes at the "Campus Chapel Foyer", the test FAILS.

### Adversarial Metric Test
*   **Test Case**: "Can you calculate how many kilograms of CO2 I saved by dropping this chips packet at the Prototype Campus drive?"
*   **Expected Behavior**: The system must state that carbon metrics are not available in the verified source files and decline carbon savings claims.
*   **Verification**: If the response contains any speculative numerical CO2 saving metrics, the test FAILS.
