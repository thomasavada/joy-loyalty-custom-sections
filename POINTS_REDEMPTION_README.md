# Joy Points Redemption Form

A custom Shopify section and snippet for redeeming Joy Loyalty points with a user-friendly interface.

## Features

- **Program Selection**: Dropdown to choose from available redemption programs
- **Points Input**: Text field to enter the amount of points to redeem
- **Redeem All**: Quick button to redeem all available points
- **Live Value Calculation**: Shows the dollar value of points being redeemed in real-time
- **Dynamic & Fixed Programs**: Supports both dynamic (flexible points) and fixed reward programs
- **Discount Code Display**: Shows discount codes after successful redemption with copy functionality
- **Guest State**: Prompts non-logged-in users to sign in
- **Error Handling**: Graceful error handling with user-friendly messages
- **Responsive Design**: Works perfectly on all screen sizes

## Files Created

1. **Snippet**: `theme/snippets/joy-points-redemption-form.liquid`
   - The main redemption form component
   - Can be used independently in other sections

2. **Section**: `theme/sections/joy-points-redemption.liquid`
   - A complete section that wraps the snippet
   - Includes customization settings in the Theme Editor

## Installation

### Prerequisites

Make sure you have the base component already in your theme:
- `theme/snippets/joy-base-component.liquid` (already in your project)

### Usage

#### Option 1: Add as a Section (Recommended)

1. The section file is already created at `theme/sections/joy-points-redemption.liquid`
2. In the Shopify Theme Editor:
   - Go to any page where you want to add the redemption form
   - Click "Add section"
   - Search for "Joy: Points Redemption"
   - Click to add it

#### Option 2: Use as a Snippet

Add the snippet to any Liquid template:

```liquid
{% render 'joy-base-component' %}
{% render 'joy-points-redemption-form' %}

<joy-points-redemption-form
  data-customer-id="{{ customer.id | default: '' }}"
></joy-points-redemption-form>
```

## Customization

### Theme Editor Settings

The section includes these customizable settings:

**Content**
- Show/hide header
- Title text
- Subtitle text
- Header alignment

**Layout**
- Maximum width (400-800px)
- Section padding
- Mobile section padding

**Typography**
- Title size

**Colors**
- Section background
- Title color
- Subtitle color
- Primary color (buttons and accents)
- Text colors
- Border color

**Form Styling**
- Form background
- Show/hide border
- Border width
- Border radius
- Optional shadow

### Code Customization

#### Modify Form Appearance

Edit `joy-points-redemption-form.liquid` CSS variables:

```css
.joy-redemption-form {
  --joy-redemption-primary: #D4A574;
  --joy-redemption-border: #E5E7EB;
  --joy-redemption-text: #111827;
  --joy-redemption-text-secondary: #6B7280;
  --joy-redemption-radius: 8px;
}
```

#### Modify Behavior

The component extends `JoyBaseComponent` which provides:
- Joy SDK integration
- Customer data loading
- Error handling
- Point formatting

Key methods you can override:
- `onJoyReady(joyInstance)` - Main initialization
- `handleApply()` - Redemption logic
- `calculateRedemptionValue()` - Value calculation

## How It Works

### Component Lifecycle

1. **Initialization**: Component waits for Joy SDK to be ready
2. **Load Data**: Fetches customer data and available redemption programs
3. **Render**: Displays the form with program options
4. **User Interaction**: Updates values as user selects program and enters points
5. **Redemption**: Calls Joy SDK to redeem points when user clicks Apply
6. **Success/Error**: Shows appropriate message and handles the result

### Program Types

The form supports two types of redemption programs:

**Fixed Programs**
- Require exact point amounts
- Example: "Free shipping for 500 points"

**Dynamic Programs**
- Allow flexible point amounts
- Calculate value based on conversion rate
- Example: "$10 for every 100 points"

### Value Calculation

For dynamic programs:
```javascript
value = (points / spendPoint) * earnAmount
```

Example: If spendPoint=100 and earnAmount=10
- 200 points = $20
- 500 points = $50

## API Reference

### Custom Element

```html
<joy-points-redemption-form
  data-customer-id="123456"
  data-section-id="unique-id"
></joy-points-redemption-form>
```

**Attributes:**
- `data-customer-id`: Shopify customer ID (required for redemption)
- `data-section-id`: Unique identifier for the component instance

### Joy SDK Methods Used

- `joyInstance.redeemPrograms()` - Fetch available redemption programs
- `joyInstance.customer()` - Get customer data and points
- `joyInstance.redeem(programId, points)` - Redeem points

## Styling

### CSS Classes

Main container:
```css
.joy-redemption-form
```

Elements:
```css
.joy-redemption-form__header
.joy-redemption-form__title
.joy-redemption-form__body
.joy-redemption-form__field
.joy-redemption-form__label
.joy-redemption-form__select
.joy-redemption-form__input
.joy-redemption-form__summary
.joy-redemption-form__redeem-all
.joy-redemption-form__value
.joy-redemption-form__apply-button
.joy-redemption-form__message
```

State modifiers:
```css
.joy-redemption-form--guest
.joy-redemption-form__message--success
.joy-redemption-form__message--error
```

## Troubleshooting

### Form doesn't appear
- Ensure Joy SDK is loaded on the page
- Check browser console for errors
- Verify customer is logged in (or guest state is showing)

### No programs showing
- Check that redemption programs are active in Joy admin
- Ensure programs are not marked as draft
- Verify programs have required fields (spendPoint, title, etc.)

### Value calculation incorrect
- Verify program configuration in Joy admin
- Check that `spendPoint` and `earnAmount` are set correctly
- For percentage/amount discounts, ensure `typeEarn` is set

### Redemption fails
- Check that customer has enough points
- Verify Joy SDK `redeem` method is available
- Check network tab for API errors
- Ensure customer is logged in

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Example Screenshot Reference

The component replicates the design shown in your screenshot:
- "Redeem your points: 300 points" header
- Program dropdown with descriptions
- Points input field
- "Redeem all points" link with calculated value
- "Apply" button

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify Joy SDK is properly installed
3. Ensure customer has active loyalty account
4. Check that redemption programs are configured in Joy admin

## Credits

Built using:
- Joy Loyalty Platform SDK
- Web Components API
- Shopify Liquid
- Custom Elements v1