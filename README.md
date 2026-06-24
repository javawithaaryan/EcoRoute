# EcoRoute

### Agentic Sustainability Decision Support System for Responsible Packaging Disposal

## Why EcoRoute?

The idea started with a simple observation: most people are willing to dispose of waste responsibly, but they often do not know which option is actually correct for their local area.

Many difficult-to-recycle packaging materials such as chips packets, laminated wrappers, and shampoo sachets are usually mixed with regular waste because people lack clear local guidance.

EcoRoute bridges that information gap by combining local sustainability documents with an AI reasoning workflow that produces simple, location-aware recommendations.

## How It Works

EcoRoute combines a single-agent reasoning workflow with a local RAG knowledge base. Rather than returning generic recycling advice, it checks available campus and municipal guidance and recommends a practical next step supported by verified information.

## Key Features

• Single-Agent Reasoning Workflow

Processes user inputs through structured observation, classification, retrieval, verification, and recommendation steps.

• Local RAG Integration

Retrieves disposal rules from campus and municipal documents instead of relying on generic AI memory.

• Temporal Validation

Checks whether collection drives or take-back programs are still active before recommending them and automatically falls back to municipal guidance when needed.

• Responsible AI Safeguards

Refuses to invent NGOs, addresses, schedules, carbon savings, or unsupported statistics. Every recommendation includes a source reference and confidence level.

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- JSON Knowledge Base
- Prompt Engineering
- Retrieval-Augmented Generation (Prototype)
- Responsible AI Principles

## Repository

The repository includes an interactive web prototype that demonstrates the EcoRoute reasoning workflow and local RAG retrieval process.

The prototype runs entirely client-side using local JSON knowledge documents, making it lightweight and easy to explore without external services.

## Prototype Notice

EcoRoute is an educational prototype created for the IBM SkillsBuild and 1M1B AI for Sustainability program.

The included knowledge base contains demonstration data designed to showcase the reasoning workflow and Responsible AI safeguards.

## SDG Alignment

Primary: SDG 12 – Responsible Consumption and Production

Secondary: SDG 11 – Sustainable Cities and Communities
