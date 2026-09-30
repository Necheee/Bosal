# Bosal Stores/Kitchen - Product Vision & Implementation Plan

## 1. Project Overview
Bosal Stores/Kitchen is a minimal, sophisticated, premium, and vibrant digital presence for a Nigerian restaurant located in Hilltop, Nsukka. It is built mobile-first and serves two primary purposes:
1. **Restaurant Presentation:** Showcasing the food, atmosphere, identity, and experience.
2. **Online Ordering:** Allowing customers to discover, browse, filter, view details, cart, and checkout seamlessly.

## 2. Target Audience & Identity
- **Audience:** General audience (students, professionals, families, etc.).
- **Identity:** Minimal, Sophisticated, Premium, Vibrant, Food-focused, Contemporary, Nigerian.
- **Brand Name:** Bosal Stores/Kitchen
- **Logo:** Wordmark + food/restaurant symbol (temporary visual treatment to be designed if logo unavailable).
- **Colour System:** Deep Green (Primary), Brighter Green (Accent), Sandy Beige (Background).
- **Typography:** Lora / Cormorant / Instrument Serif (Display) + Clean sans-serif (Body/UI).

## 3. Scope & Features

### In Scope (Customer)
- Landing/Home page
- About page
- Menu (with filtering by category and search)
- Food item details (modal/drawer/fullscreen)
- Online ordering (Pickup & Delivery with fixed fee)
- Guest checkout (No mandatory account creation)
- Payment UI (Provider agnostic for now)
- Order confirmation
- Contact & Opening hours
- Customer reviews & Gallery
- Optional Customer Account (Login, Signup, Profile, Order History)

### In Scope (Admin)
- Dashboard
- Orders management
- Menu management (CRUD)
- Customers view
- Reviews moderation
- Gallery management

### Out of Scope (Do Not Implement)
- Table reservations
- Live/GPS delivery tracking
- Driver management
- Multiple branches
- Complex delivery distance calculations
- Complex logistics/roles

## 4. Architecture & Stack
- **Frontend Stack:** React, Vite, Tailwind CSS, React Router, Motion / Framer Motion, Lucide React, React Hook Form, Zustand.
- **State Management:** Zustand for global cart state; local React state for UI; React Hook Form for forms.
- **Routing Structure:**
  - Customer: `/`, `/about`, `/menu`, `/menu/:id`, `/cart`, `/checkout`, `/order-confirmation`, `/gallery`, `/contact`, `/login`, `/signup`, `/account`, `/account/orders`
  - Admin: `/admin`, `/admin/orders`, `/admin/menu`, `/admin/customers`, `/admin/reviews`, `/admin/gallery`
- **Data Strategy:** Use structured mock data for menu, reviews, gallery, orders, etc. to allow easy backend integration later.
- **Design Strategy:** Hybrid card design, editorial composition (especially hero section), strong food-first imagery (placeholder online food photography initially).

## 5. Development Phases

- **PHASE 1 — FOUNDATION:** Frontend structure, routing foundation, Tailwind setup, global styling, colour system, typography, responsive foundations, temporary logo, navigation, footer.
- **PHASE 2 — BRAND & HOMEPAGE:** Editorial hero, featured dishes, intro, menu preview, restaurant experience, reviews, gallery, CTA.
- **PHASE 3 — MENU EXPERIENCE:** Menu page, filtering, search, food grid/cards, food details, responsive interactions.
- **PHASE 4 — CART:** Add/remove items, quantity, subtotal, fixed delivery fee, total, Zustand state.
- **PHASE 5 — CHECKOUT:** Pickup/Delivery selection, guest checkout, customer info, order summary, provider-agnostic Payment UI, confirmation.
- **PHASE 6 — AUTHENTICATION & CUSTOMER ACCOUNT:** Login, signup, profile, order history (Guest checkout remains default).
- **PHASE 7 — ADMIN:** Admin dashboard, orders, menu management, customers, reviews, gallery (mock data).
- **PHASE 8 — POLISH & QUALITY:** Responsive polish across breakpoints, accessibility, loading/empty/error states, animation consistency, overall visual quality.

## 6. Development Rules
- **No unapproved changes:** Do not add major features, change user journeys, change visual direction, or introduce reservations/tracking without approval.
- **Decision making:** Minor tech decisions should choose the simplest architecture-friendly path. Major product/design decisions require explicit approval.
- **Documentation:** This `vision.md` document remains the single source of truth and must be kept up to date.
