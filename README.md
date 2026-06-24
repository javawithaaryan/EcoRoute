# EcoRoute - Sustainability Decision Support System

EcoRoute is a decision support system developed for the **IBM SkillsBuild / 1M1B AI for Sustainability** hackathon. It helps campus students and municipal residents dispose of difficult-to-recycle packaging waste (like chips packets, biscuit wrappers, and shampoo sachets) responsibly.

Instead of returning generic advice, EcoRoute uses a **Single-Agent Reasoning Workflow** and **Retrieval-Augmented Generation (RAG)** over local sustainability databases (campus drives, brand take-back programs, municipal waste guides) to output verified, actionable instructions.

---

## 🌟 Key Features

1.  **Multi-layer Plastic Classification**: Automatically distinguishes Category A (difficult packaging) from Category B (standard recyclable) and Category C (hazardous/out-of-scope).
2.  **Local Knowledge Base RAG**: Connects user queries to localized sustainability documents.
3.  **Strict Preference Hierarchy**: Automatically steers users toward active community collection drives and brand take-back incentives before falling back to municipal waste bins.
4.  **Temporal Validation**: Ignores expired programs and automatically redirects routing.
5.  **Responsible AI Verification**: Double-checks the draft output against raw documents to prevent hallucinations of addresses, NGO names, schedules, or carbon savings.
6.  **Transparent Confidence Levels**: High, Medium, or Low tags that clearly detail the completeness of the retrieved information.

---

## 📁 Repository Structure

```text
EcoRoute/
├── .agents/
│   └── AGENTS.md                  # Workspace system prompt & rules
├── agent_system/
│   ├── AGENTS.md                  # Copy of agent system prompt & rules
│   ├── agent_workflow.md          # State machine and evaluation logic
│   ├── system_prompts.md          # Sub-agent prompts (Observation, Classification)
│   ├── example_prompts.md         # Example user queries
│   └── demo_conversations.md      # Simulated conversation transcripts
├── knowledge_base/
│   ├── municipal_waste_guide.json        # Prototype Municipal Zone waste rules
│   ├── campus_sustainability_guide.json  # Prototype Campus collection drives
│   └── brand_takeback_directory.json     # Retailer incentive programs
├── ui/
│   ├── index.html                 # Interactive prototype web interface
│   ├── style.css                  # Custom styling (Outfit font, dark mode, utilities)
│   └── app.js                     # RAG & Single-Agent simulation logic
├── ARCHITECTURE.md                # System components & pipeline
├── FUTURE_IMPROVEMENTS.md         # Future enhancements & scaling roadmap
├── RESPONSIBLE_AI.md              # Safety policies & hallucination prevention
├── TEST_CASES.md                  # QA testing matrix & validation checks
├── PRESENTATION.md                # Slide deck content and pitch script
└── README.md                      # Project overview (this file)
```

---

## 🚀 Running the Prototype UI Locally

The repository includes a complete, interactive, high-fidelity web dashboard that simulates the EcoRoute workflow.

To run the UI:
1.  Navigate to the `ui/` directory.
2.  Double-click [index.html](file:///E:/EcoRoute/ui/index.html) to open it in any modern web browser.
3.  Choose an item description from the dropdown or type a custom item (e.g. *CrunchTime Chips Packet* or *PureGlow Lotion Sachet*).
4.  Select a location context (e.g. *Prototype Campus* or *Prototype Municipal Zone*).
5.  Click **Analyze Packaging** and observe the live reasoning trace, RAG documents retrieved, and final formatted output.
