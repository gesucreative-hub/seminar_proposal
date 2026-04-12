# **GELAMANG: BRAND IDENTITY CANVAS & DESIGN SYSTEM**

**Slogan:** Lombok local tourism hyper-local enabler.

**Document:** Complete Brand Guidelines & Design System

## **DESIGN SYSTEM INTRODUCTION**

This document is not just a visual guide, but a direct translation of Gelamang's mission as a *hyper-local enabler*. Gelamang's interface design must bridge two worlds: global travelers desiring world-class transaction convenience, and local (grassroots) vendors needing an inclusive and non-intimidating digital tool. Therefore, every pixel, whitespace, and color chosen in this system aims to reduce cognitive friction and build trust.

## **1\. BRAND STORY & PURPOSE**

Before stepping into the visual and technical guidelines, every developer and designer collaborating on this project must understand the "soul" of the Gelamang entity. Our design is a manifestation of this purpose.

### **What's Gelamang? (More Than Just a Platform)**

Gelamang is not just a noun or a mere marketplace platform—**Gelamang is a verb**.

It means to connect, empower, and move Lombok forward. We act as a digital bridge for Lombok's grassroots tourism. Gelamang exists to eliminate the friction that has historically limited global travelers from interacting directly with authentic, hyper-local vendors. We don't just list services; we digitalize the hustle of local operators, give them a global stage, and provide the technology they need to compete equally (*level the playing field*).

### **Brand Purpose (Core Objective & Manifesto)**

Our absolute goal is to **democratize Lombok's tourism economy**.

We are here to ensure that the digital revolution does not leave local operators behind as mere spectators. Our mission is to transform every grassroots vendor—from just a "hidden gem" into a *self-sustaining digital powerhouse*. We are building an ecosystem where travelers can unlock pure authenticity, and local communities reap the direct economic impact. No unnecessary middlemen, no complex friction—just pure, direct economic impact.

### **Strategic Vision & Mission**

* **Vision:** Democratizing the grassroots tourism economy in Lombok.  
* **Mission:** *Connecting travelers directly to local authenticity*.

### **Philosophical Implications on Design**

Because we serve the grassroots community, our User Interface (UI) is strictly forbidden from looking "intimidating," overly technical, or exclusive. The design must radiate warmth, absolute transparency, and digital inclusivity so that even vendors with the lowest technological literacy feel safe using this application.

## **2\. TYPOGRAPHY & TYPESCALE**

Gelamang's typography system is designed for extremely high readability in various lighting conditions (especially outdoors while traveling) and across different screen sizes.

### **Font Selection Philosophy**

The selection of **Lexend Deca** is based on its geometric design, specifically crafted to reduce visual crowding and increase reading speed. This characteristic is crucial for local vendors who might just be adapting to digital systems, as well as travelers who want to quickly scan tour package information.

### **Strict Font Usage Rules**

1. **Single Font Family:** You **MUST** exclusively use **Lexend Deca** for all text elements on the interface (Headings, Body, Buttons, Navigation). The use of secondary fonts, scripts, or alternatives is strictly prohibited to maintain brand identity consistency and application loading performance.  
2. **Fallback System:** If Lexend Deca fails to load due to network issues, the system must seamlessly use the modern web standard fallback stack built into Tailwind: ui-sans-serif, system-ui, \-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif.  
3. **Weight Limitations:** It is forbidden to use a font weight below 400 (such as Thin 100, Extra Light 200, or Light 300). Thin weights will break down and be difficult to read on low-resolution screens or under direct sunlight. Only use the range of 400 (Normal) to 700 (Bold).  
4. **Number & Price Formatting:** Because Gelamang is a *marketplace*, all price figures (e.g., Rp 150.000) must use a minimum font weight of Medium (500) so they are easily identifiable when users scan the page.

### **Detailed Typography Scale (Typescale & Use Cases)**

Use the following hierarchical scale mapped directly to the Tailwind CSS utility system:

* **Heading 1 (H1) \- The Showstopper**  
  * **Size:** text-4xl (36px) | **Line Height:** leading-tight (1.2)  
  * **Weight:** font-bold (700)  
  * **Use Case:** Main welcome text on the homepage (*Hero section*), for example: "Explore the Authentic Side of Lombok". Use a maximum of one H1 per page for SEO and hierarchy.  
* **Heading 2 (H2) \- The Section Divider**  
  * **Size:** text-3xl (30px) | **Line Height:** leading-tight (1.2)  
  * **Weight:** font-bold (700)  
  * **Use Case:** Starting a new content section like "Recommended Tour Packages", "About Us", or "Most Popular Vendors".  
* **Heading 3 (H3) \- The Component Header**  
  * **Size:** text-2xl (24px) | **Line Height:** leading-snug (1.375)  
  * **Weight:** font-semibold (600) or font-bold (700)  
  * **Use Case:** Specific titles within *Cards* (e.g., "Gili Trawangan Snorkeling Trip"), titles on *Modals*, or confirmation *Pop-ups*.  
* **Subtitle / Heading 4 (H4) \- The Supporting Act**  
  * **Size:** text-xl (20px) | **Line Height:** leading-snug (1.375)  
  * **Weight:** font-medium (500)  
  * **Use Case:** Subtitles explaining the Headline, short descriptions below H2, or quotes from customer reviews.  
* **Body Base (Main Paragraph)**  
  * **Size:** text-base (16px) | **Line Height:** leading-relaxed (1.625)  
  * **Weight:** font-normal (400)  
  * **Use Case:** Standard paragraph text, detailed descriptions of tour packages, blog article content, or terms & conditions. Ample line height is critical here to prevent eye fatigue.  
* **Body Small (UI Elements / Navigation)**  
  * **Size:** text-sm (14px) | **Line Height:** leading-normal (1.5)  
  * **Weight:** font-normal (400) or font-medium (500)  
  * **Use Case:** Input form labels, main/sidebar navigation menu text, metadata (e.g., "Departure Date: Nov 12"), and text on secondary buttons.  
* **Caption / Micro Text**  
  * **Size:** text-xs (12px) | **Line Height:** leading-none (1)  
  * **Weight:** font-normal (400)  
  * **Use Case:** *Tooltips* on hover, *tags/badges* ("Popular", "New"), and footer disclaimers or copyright text. Do not use this size for text longer than 2 lines.

## **3\. COLOR PALETTE**

Gelamang's colors reflect the energy of the tropical sun, local hospitality, and digital technology professionalism. We adopt the 60-30-10 principle: 60% Neutral colors for structure, 30% Secondary/Branding colors, and 10% Primary colors for Accents (CTAs).

### **Primary Colors (Main Colors / CTA Accents)**

This color represents the sun and the warmth of Lombok. This color is used exclusively for elements requiring user interaction.

* **Yellow Base (500):** \#db991d  
  * **Usage:** "Book Now" buttons, main icons, active links, slider indicators.  
* **Yellow Light (100):** \#ffd580 / \#f3ddb4  
  * **Usage:** Light highlight backgrounds, hover states for yellow elements, or decorative icons.

### **Secondary Colors (Balancing Colors)**

Represents the ocean, technology, and layered security (trust). This color cools down the warm nuances of the primary color.

* **Purple/Blue Base (500):** \#361edb  
  * **Usage:** Headers/Navbars, secondary graphic accents, illustrations, or secondary buttons.  
* **Purple/Blue Light (100):** \#dedaf9  
  * **Usage:** Badge or tag backgrounds, selection area markers on tables/cards.

### **Neutral & Surface Colors**

The foundation of Gelamang's design. Ensures content (tour images and text) becomes the main hero, not the UI.

* **Background / Surface (50):** \#f2f2f2 or \#ffffff (Pure White)  
  * **Usage:** White \#ffffff must be used for main cards/content. Light gray \#f2f2f2 is used for the entire page background (*body background*) so white cards stand out.  
* **Text Primary (600):** \#212125  
  * **Usage:** Very dark black/gray for all main text (H1-H4, Body Base). Avoid using solid \#000000 as it causes eye strain.  
* **Text Secondary/Muted (400):** \#6b6bbe / \#908f92  
  * **Usage:** Additional description text, placeholders in form input fields, disabled text, secondary icons.

### **Semantic / Tags / Accent Colors (System Colors)**

Used solely to communicate status or feedback to users.

* **Error / Danger (Red):** \#ed4544 / \#f77170  
  * **Usage:** Form error messages, destructive buttons ("Cancel Order"), out-of-stock text.  
* **Success (Green):** \#54c980  
  * **Usage:** Success messages ("Payment Successful", "Verified Vendor"), toast notifications.  
* **Info (Blue):** \#a0c9f3  
  * **Usage:** Information tooltips, standard system notifications, informative messages without specific actions.  
* **Accent (Purple):** \#ab82d3  
  * **Usage:** Premium elements, new features, or special discount markers.

## **4\. UI/UX STYLING PRINCIPLES**

Gelamang's design system is built on the philosophy of "Frictionless Flow". Users—both B2B and B2C—must feel guided through the application without confusion.

1. **Shapes & Corners (Border Radius): Friendly & Modern Impression**  
   Avoid sharp 90-degree corners that feel rigid and corporate. Gelamang is about community and vacations.  
   * Use rounded-xl (12px) for interactive elements like main buttons, input forms, and labels.  
   * Use rounded-2xl (16px) to rounded-3xl (24px) for large content container elements like Tour Cards, Modal pop-ups, and image containers.  
   * *Exception:* Sharp corners may only be used if the element attaches exactly to the edge of the screen (like full-width headers or footers).  
2. **Whitespace: Breathing Freely**  
   Whitespace is not "wasted space," but a visual aid for focus.  
   * **Macro Whitespace:** Provide very ample margins between sections (e.g., py-16 or py-20 in Tailwind) to distinguish one topic from another on the homepage.  
   * **Micro Whitespace:** Use consistent spacing (like gap-4 or gap-6) in grid and flex layouts. Never let text touch the edge of a box; always use a minimum padding of p-4 or p-6 inside cards.  
3. **Depth (Shadows) & Elevation: Visual Hierarchy**  
   Use soft, wide, and modern drop shadows instead of harsh dark shadows. We use a 3-tier elevation system:  
   * **Elevation 1 (shadow-sm):** For minor interactions, like input boxes, thin dropdown menus, or secondary buttons.  
   * **Elevation 2 (shadow-md to shadow-lg):** *Default* for all Tour Cards. Cards should look slightly "floating" above the \#f2f2f2 background.  
   * **Elevation 3 (shadow-xl to shadow-2xl):** Exclusive for Modals, Dialog boxes, and sticky/floating navigation that overlays the entire page content.  
4. **Mobile-First & Touch Targets (Ergonomic Design)**  
   Since 80% of B2C (travelers) and B2B (vendors) users access the system via mobile devices, all components must be touch-friendly.  
   * All buttons and clickable areas must have a minimum height or width of **44px** (Tailwind example: min-h-\[44px\], h-11, h-12).  
   * Do not place two links or buttons too close together without adequate margin to avoid misclicks.  
5. **Accessibility & Contrast (Digital Inclusivity)**  
   Gelamang must be usable by people from all walks of life.  
   * Ensure the color contrast between text (especially secondary text) and its background complies with the Web Content Accessibility Guidelines (WCAG) standard minimum contrast ratio of **4.5:1**.  
   * Never place white text directly on top of scenery photos without adding a dark-colored transparent gradient (overlay) beneath the text to guarantee readability.  
6. **Interactive States (Feedback Status)**  
   Every user interaction must be responded to by the system (Feedback Loop).  
   * **Hover:** Elements hovered on a desktop should slightly change color (lighter or darker) or elevate (-translate-y-1 with shadow-lg).  
   * **Active/Pressed:** Buttons must provide a "pressed" effect (slightly shrink with scale-95) when clicked.  
   * **Disabled:** Buttons or inputs that cannot be used yet must use the Text Secondary/Muted text color with a gray background, change the cursor to cursor-not-allowed, and lower opacity (opacity-50).

*This document is the absolute guide (Single Source of Truth) for developers, UI/UX designers, and accompanying AI Agents in building a cohesive Gelamang product interface.*