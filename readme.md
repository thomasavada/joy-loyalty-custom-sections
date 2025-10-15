# Joy Loyalty Custom Sections & Widgets

Custom components and sections for Joy Loyalty program that can be styled and configured for any design.

---

## Available Components

### Snippets (Reusable Widgets)

**`joy-points-redemption-form.liquid`** ⭐
- Compact redemption form for cart drawers
- Two-step collapsible UI with point selection
- Auto-applies discount code and redirects to checkout
- **Usage:**
  ```liquid
  {% render 'joy-points-redemption-form' %}
  <joy-points-redemption-form data-customer-id="{{ customer.id | default: '' }}"></joy-points-redemption-form>
  ```
- **Docs:** [POINTS_REDEMPTION_README.md](./POINTS_REDEMPTION_README.md)

**`joy-rewards-carousel.liquid`** ⭐ **New**
- Horizontal scrolling carousel of available reward coupons
- Shows coupon codes with values and expiry dates
- Copy-to-clipboard functionality
- **Usage:**
  ```liquid
  {% render 'joy-rewards-carousel' %}
  <joy-rewards-carousel data-customer-id="{{ customer.id | default: '' }}"></joy-rewards-carousel>
  ```

**`joy-earning-programs.liquid`**
- Display earning opportunities with flexible layouts
- Grid, list, or card layouts
- **Usage:**
  ```liquid
  {% render 'joy-earning-programs' %}
  <joy-earning-programs data-customer-id="{{ customer.id }}"></joy-earning-programs>
  ```

**`joy-redeeming-programs.liquid`**
- Display redemption options with modal interactions
- Variable point selection for dynamic rewards
- **Usage:**
  ```liquid
  {% render 'joy-redeeming-programs' %}
  <joy-redeeming-programs data-customer-id="{{ customer.id }}"></joy-redeeming-programs>
  ```

**`joy-base-component.liquid`**
- Foundation component for Joy SDK integration
- Include before using other Joy components

---

## Available Sections (Theme Editor)

### Loyalty Pages

- **`joy-loyalty-hub.liquid`** - Complete loyalty page with earning & redemption
- **`joy-rewards-carousel.liquid`** - Horizontal carousel of reward coupons ⭐ **New**
- **`joy-custom-way-to-earn.liquid`** - Legacy earning programs display
- **`joy-custom-way-to-redeem.liquid`** - Legacy redemption programs display
- **`joy-points-redemption.liquid`** - Section wrapper for redemption form

### Display & Engagement

- **`joy-banner-with-background.liquid`** - Promotional banner with background image
- **`joy-image-with-text-two-buttons.liquid`** - Image with text and dual CTAs
- **`joy-reward-reminder.liquid`** - Customer reward reminders

### VIP Tiers

- **`joy-vip-tiers.liquid`** - Standard VIP tier display
- **`joy-vip-tiers-cards.liquid`** - Card-based VIP tier layout
- **`joy-vip-tiers-table.liquid`** - Table comparison layout

### Referral Programs

- **`joy-referral-program-style-1.liquid`** - Referral display (Style 1)
- **`joy-referral-program-style-2.liquid`** - Referral display (Style 2)

---

## Quick Start

### Cart Drawer Integration
```liquid
<!-- In theme/snippets/cart-drawer.liquid -->

<!-- Show available reward coupons -->
{% render 'joy-rewards-carousel' %}
<joy-rewards-carousel
  data-customer-id="{{ customer.id | default: '' }}"
></joy-rewards-carousel>

<!-- Points redemption form -->
{% render 'joy-points-redemption-form' %}
<joy-points-redemption-form
  data-customer-id="{{ customer.id | default: '' }}"
></joy-points-redemption-form>
```

### Page Sections
Add any of the sections above through the Theme Editor:
1. Go to theme customizer
2. Click "Add section"
3. Search for "Joy:"
4. Select desired section

---

## Customization

All components use CSS custom properties for easy theming:

```liquid
<style>
  /* Customize rewards carousel */
  joy-rewards-carousel {
    --joy-rewards-primary: #YOUR_COLOR;
    --joy-rewards-border: #YOUR_COLOR;
    --joy-rewards-text: #YOUR_COLOR;
  }

  /* Customize redemption form */
  joy-points-redemption-form .joy-redemption-form {
    --joy-redemption-primary: #YOUR_COLOR;
    --joy-redemption-border: #YOUR_COLOR;
    --joy-redemption-text: #YOUR_COLOR;
  }
</style>
```

Sections include extensive Theme Editor settings for colors, layout, typography, and content.

---

## Design Philosophy

These components are **open for any design** - they provide the functionality while being fully customizable through:
- CSS custom properties
- Theme Editor settings (for sections)
- Custom styling in your theme
- Flexible HTML structure

Perfect for creating unique loyalty program experiences that match your brand.
