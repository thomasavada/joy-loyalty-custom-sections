# Joy Loyalty Custom Sections & Widgets

Custom components and sections for Joy Loyalty program that can be styled and configured for any design.

---

## Available Components

### Snippets (Reusable Widgets)

**`joy-points-redemption-form.liquid`**
- Compact redemption form for cart drawers
- Two-step collapsible UI with point selection
- Auto-applies discount code and redirects to checkout
- **Usage:**
  ```liquid
  {% render 'joy-points-redemption-form' %}
  <joy-points-redemption-form data-customer-id="{{ customer.id | default: '' }}"></joy-points-redemption-form>
  ```

**`joy-rewards-carousel.liquid`** 
- Horizontal scrolling carousel of available reward coupons
- Shows coupon codes with values and expiry dates
- Copy-to-clipboard functionality
- **Usage:**
  ```liquid
  {% render 'joy-rewards-carousel' %}
  <joy-rewards-carousel data-customer-id="{{ customer.id | default: '' }}"></joy-rewards-carousel>
  ```

**`joy-earning-programs.liquid`** (prefer to use section, or Joy App block)
- Display earning opportunities with flexible layouts
- Grid, list, or card layouts
- **Usage:**
  ```liquid
  {% render 'joy-earning-programs' %}
  <joy-earning-programs data-customer-id="{{ customer.id }}"></joy-earning-programs>
  ```

**`joy-redeeming-programs.liquid`** (prefer to use section, or Joy App block)
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
- **`joy-rewards-carousel.liquid`** - Horizontal carousel of reward coupons
![](https://cdn.shopify.com/s/files/1/0669/3158/9231/files/coupon-list.png?v=1760585770)
- **`joy-custom-way-to-earn.liquid`** - Legacy earning programs display
- **`joy-custom-way-to-redeem.liquid`** - Legacy redemption programs display
- **`joy-points-redemption.liquid`** - Section wrapper for redemption form
![](https://cdn.shopify.com/s/files/1/0669/3158/9231/files/redemption_block.png?v=1760585851)

### Display & Engagement

- **`joy-banner-with-background.liquid`** - Hero banner with background image
![](https://cdn.shopify.com/s/files/1/0669/3158/9231/files/hero-banner.png?v=1760586368)
  - Overlay or stack layout on mobile
  - Personalized greetings for logged-in customers (shows name, points, tier)
  - Separate content/buttons for guests vs logged-in users
  - Flexible positioning (7 horizontal × 3 vertical positions)
  - Customizable overlay, button styles, and heights
- **`joy-image-with-text-two-buttons.liquid`** - Image with text and dual CTAs
- **`joy-reward-reminder.liquid`** - Customer reward reminders


### VIP Tiers

- **`joy-vip-tiers-table.liquid`** - Table comparison layout
![](https://cdn.shopify.com/s/files/1/0669/3158/9231/files/vip-tier-table.png?v=1760585992)
- **`joy-vip-tiers-cards.liquid`** - Card-based VIP tier layout. Prefer the app block


### Referral Programs

- **`joy-referral-program-style-1.liquid`** - Referral display (Style 1)
![](https://cdn.shopify.com/s/files/1/0669/3158/9231/files/referral-1.png?v=1760586030)
- **`joy-referral-program-style-2.liquid`** - Referral display (Style 2)
![](https://cdn.shopify.com/s/files/1/0669/3158/9231/files/referral-2.png?v=1760586240)
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
