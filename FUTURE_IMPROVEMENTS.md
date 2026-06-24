# EcoRoute - Future Enhancements

This document outlines the planned future technical improvements, production roadmap, and scaling strategy for the **EcoRoute** decision support system, specifically focusing on expanding its impact under UN Sustainable Development Goal 12 (Responsible Consumption and Production) and SDG 11 (Sustainable Cities and Communities).

---

## 1. Computer Vision (CV) Fine-Tuning
-   **Current Approach**: Observational and material properties are extracted via descriptive user text inputs or general multi-modal LLM calls.
-   **Future Improvement**: Train/fine-tune a custom mobile-optimized vision classifier to recognize standard packaging materials, laminated foil layers, and recycle symbols.
-   **Impact**: Enables fast, edge-based offline classification directly on mobile devices without requiring expensive cloud calls.

---

## 2. API Integrations & Proximity Geolocation
-   **Current Approach**: Contextual location dropdowns simulate campus vs residential zones.
-   **Future Improvement**: Integrate the HTML5 Geolocation API with Google Maps Geocoding and Places API.
-   **Impact**: Users can see the exact distance to the nearest Reverse Vending Machine (RVM), brand retail outlet, or ward-level waste bin, sorted by distance.

---

## 3. WhatsApp Business API & SMS Fallback
-   **Current Approach**: Web dashboard prototype.
-   **Future Improvement**: Build a Twilio-powered WhatsApp bot allowing users to send a photo of the item via WhatsApp.
-   **Impact**: Increases accessibility in rural communities or lower-income demographics where smartphones have limited storage for dedicated apps.

---

## 4. Incentive & Reward Gamification
-   **Current Approach**: Mock campus reward points (5 points per RVM insert) and retail discounts.
-   **Future Improvement**: Secure integration with campus digital wallets and brand coupon systems using a centralized API.
-   **Impact**: Incentivizes sustainable disposal behaviors, increasing collection rates of clean, dry multi-layer plastics by up to 40%.

---

## 5. Automated Data Scraping & Dynamic PDF Parsing
-   **Current Approach**: Hand-coded local JSON files.
-   **Future Improvement**: Develop web scrapers and unstructured PDF parsers that read municipal city portals and corporate sustainability reports.
-   **Impact**: Automatically updates collection schedules and take-back directories as they are published, preventing stale instructions.
