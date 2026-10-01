# Project Progress & Developer Journal

This document serves as a guide for collaborators to quickly understand where the project stands, what our ultimate goal is, and the technical hurdles we've navigated so far.

## 🎯 The Endpoint (Goal)

Our goal is to build a complete, highly-polished, mobile-first frontend for Bosal Stores/Kitchen. The final product will feature a beautiful editorial-style homepage, a fully functional menu with search and filtering, a robust cart system, a guest checkout flow, and a mock admin dashboard. The entire frontend will be powered by structured mock data, ensuring it is 100% ready for backend integration in the future.

## 📍 Current Stage

**We are currently at the beginning of Phase 7 (Admin Dashboard).**

### Milestones Completed

- [x] **Phase 1: Foundation** - Repository setup, routing scaffolding, Tailwind configuration, global styling, colour system, typography, Navbar, and Footer.
- [x] **Phase 2: Brand & Homepage** - Implementation of the editorial Hero section, featured dishes, restaurant experience intro, customer reviews, and photo gallery.
- [x] **Phase 3: Menu Experience** - Implementation of the `/menu` route, complete with a responsive grid, real-time search, category filtering, and a food details modal with quantity selection.
- [x] **Phase 4: Cart** - Global state management using Zustand, Add/Remove item logic, subtotal/total calculations, and a fully functional Cart UI with dynamic Navbar integration.
- [x] **Phase 5: Checkout** - Guest checkout flow, Pickup/Delivery method selection, mock payment UI (Card & Transfer), dynamic delivery fee toggling, and animated order confirmation screen.
- [x] **Phase 6: Auth & Accounts** - Login, signup, user profiles, order history tracking, and global auth store implementation.

### Upcoming Milestones

- [ ] **Phase 7: Admin Dashboard** - CMS views for orders, menu, customers, and reviews.
- [ ] **Phase 8: Polish** - Accessibility audits, animation refinement, and edge-case testing.

---

## 🧗‍♂️ Struggles & Technical Challenges

For any new collaborators joining the project, please review these resolved challenges to avoid recurring issues:

### 1. Image Hosting (403 Errors)

- **Struggle:** Initial mock data used Unsplash image URLs. Unsplash actively blocks hotlinking from certain dev environments, resulting in broken images (403 Forbidden).
- **Resolution:** We migrated all mock data to use reliable `images.pexels.com` URLs. **Rule:** Do not use Unsplash links in this project.

### 2. Editor Linting & False Positives

- **Struggle:** Standard VS Code HTML validators flag Tailwind's "Arbitrary Values" (e.g., `h-[600px]`, `w-[800px]`) as strict HTML syntax errors. Additionally, standard ESLint rules flagged Framer Motion's `<motion.div>` tags as "unused variables".
- **Resolution:**
  - We strictly use standard Tailwind utility classes (e.g., `h-96`, `w-full`). Where exact, non-standard pixel measurements are needed, we use inline React `style={{}}` attributes instead of Tailwind arbitrary brackets.
  - We added `/* eslint-disable no-unused-vars */` to files using Framer Motion to seamlessly suppress the false positive.

### 3. File Syncing During AI Collaboration

- **Struggle:** When collaborating with AI agents that edit the disk directly, code editors (like VS Code) with auto-save enabled can accidentally overwrite the agent's new changes with stale, in-memory tabs.
- **Resolution:** Always close active tabs before requesting major file changes, or be sure to click **"Accept Disk Version"** when prompted by the editor.
