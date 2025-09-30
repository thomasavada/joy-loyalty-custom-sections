# Joy Loyalty Theme Components Documentation

## Overview
This documentation covers the complete Joy loyalty program theme component system, including both the legacy customizations and the new modular architecture designed for maximum flexibility and reusability.

---

## Legacy Customizations (Previous Work)

### MR: customize/toshi-lp Changes

#### 1. Birthday Modal Updates (dda7cc8)
- **Files Modified:**
    - `extensions/theme-extension/assets/avada-joy.js`
    - `packages/scripttag/src/Joy.js`
    - `theme/sections/custom-way-to-earn.liquid`
- **Description:** Enhanced birthday modal functionality in the loyalty program

#### 2. Input Field Enhancements (6bdcaa3)
- **Files Modified:**
    - `theme/sections/custom-way-to-earn.liquid`
- **Description:** Added more input fields for text customization in the earn points section

#### 3. Guest Modal Implementation (d2ed011)
- **Files Modified:**
    - `theme/sections/custom-way-to-earn.liquid`
- **Description:** Implemented guest modal functionality for non-logged in users

#### 4. Currency Label Updates (d2bd44c)
- **Files Modified:**
    - `theme/sections/custom-way-to-earn.liquid`
    - `theme/sections/custom-way-to-redeem.liquid`
- **Description:** Updated point currency labels for better user experience in both earn and redeem sections

#### 5. Text Configurability Updates (Latest)
- **Files Modified:**
    - `theme/sections/custom-way-to-earn.liquid`
- **Description:** Made all user-facing text configurable through section schema for Shopify Translate and Adapt compatibility. All modal content, button text, labels, placeholders, help text, and success/error messages are now configurable.

---

## Text Configurability for Shopify Translate and Adapt

All user-facing text in Joy loyalty sections is now configurable through Shopify section schemas for full Translate and Adapt compatibility. This enables merchants to translate content, customize messaging for different markets, and maintain consistent branding across languages.

### Key Features
- All modal content (labels, placeholders, buttons, messages) is configurable
- Implemented via `getSectionSetting()` method with fallback defaults
- Schema settings organized under "Modal Text Settings" header
- Supports birthday, newsletter, review, referral, and custom program modals

### Usage Pattern
```javascript
const birthdayLabel = this.getSectionSetting('modal_birthday_label') || 'Enter your birthday:';
```

---

## New Modular Component Architecture

### Component System Overview

The new Joy loyalty component system follows modern web standards and Avada coding practices:

- **Modular Design**: Each component is self-contained and reusable
- **Custom Elements**: Uses `customElements.define()` for proper encapsulation
- **CSS Custom Properties**: Flexible theming system
- **Event-Driven**: Components communicate via custom events
- **Accessibility**: Full WCAG compliance built-in
- **Error Handling**: Robust error handling and retry mechanisms
- **Caching**: Intelligent data caching for performance

### Core Components

#### 1. Base Component (`joy-base-component.liquid`)
**Purpose**: Foundation class providing common functionality for all Joy components

**Key Features**:
- SDK integration with automatic retry logic
- Standardized error handling and logging
- Event system for component communication
- Caching layer for performance optimization
- Accessibility support built-in
- Responsive design utilities

**Usage**:
```liquid
{% render 'joy-base-component' %}
```

#### 2. Earning Programs Component (`joy-earning-programs.liquid`)
**Purpose**: Display customer loyalty earning programs with flexible layouts

**Key Features**:
- Multiple layout options (grid, list, cards)
- Program filtering and sorting
- Completion status tracking
- Event delegation for performance
- Keyboard navigation support

**Usage**:
```html
<joy-earning-programs
  data-section-id="earning-section"
  data-customer-id="{{ customer.id }}"
  data-layout="grid"
  data-max-programs="6"
  data-show-completed="false"
  data-filter-types="signup,birthday,review">
</joy-earning-programs>
```

**Data Attributes**:
- `data-layout`: "grid" | "list" | "cards"
- `data-max-programs`: Maximum number of programs to display
- `data-show-completed`: Show completed programs
- `data-filter-types`: Comma-separated list of program types

#### 3. Redeeming Programs Component (`joy-redeeming-programs.liquid`)
**Purpose**: Display redemption programs with modal interactions

**Key Features**:
- Dynamic point selection for variable rewards
- Modal-based redemption flow
- Discount code handling
- Real-time point validation
- Success/error state management

**Usage**:
```html
<joy-redeeming-programs
  data-section-id="redeem-section"
  data-customer-id="{{ customer.id }}"
  data-layout="cards"
  data-modal-size="medium"
  data-show-disabled="true">
</joy-redeeming-programs>
```

**Data Attributes**:
- `data-modal-size`: "small" | "medium" | "large"
- `data-show-disabled`: Show programs customer can't afford
- `data-modal-cancel-text`: Cancel button text
- `data-modal-redeem-text`: Redeem button text

#### 4. Enhanced Section Template (`joy-loyalty-hub.liquid`)
**Purpose**: Complete loyalty page section combining earning and redeeming

**Key Features**:
- Customer points display with level progression
- Flexible layout options (split, stacked, custom order)
- Comprehensive customization settings
- Responsive design system
- Footer with terms link support

**Usage**:
Add as a Shopify section in the theme customizer.

### SDK Enhancements (`joy-sdk-enhancements.liquid`)

The SDK enhancement system extends the base Joy SDK with additional functionality:

#### Enhanced Methods:
- `executeProgram(programId, options)`: Execute earning programs with enhanced UX
- `showAuth(options)`: Improved authentication handling
- `applyDiscount(code, options)`: Enhanced discount application
- `getCustomerLevel(customerId)`: Get detailed level information
- `trackEvent(eventName, data)`: Enhanced analytics tracking

#### New Features:
- **Enhanced Birthday Modal**: Improved UX with better validation
- **Social Share Integration**: Native Web Share API support
- **Newsletter Integration**: Smart form detection and focus
- **Event System**: Component communication via custom events
- **Caching Layer**: Intelligent data caching for performance

---

## Implementation Guide

### For Merchants

#### 1. Basic Setup
```liquid
<!-- Include base components -->
{% render 'joy-base-component' %}
{% render 'joy-sdk-enhancements' %}

<!-- Add loyalty section to page -->
{% section 'joy-loyalty-hub' %}
```

#### 2. Customizing Layouts
The Loyalty Hub section provides extensive customization options:

- **Layout Styles**: Side-by-side, stacked, or earning-first
- **Color Scheme**: Primary, secondary, and accent colors
- **Typography**: Title sizes, font weights, alignment options
- **Spacing**: Section padding, element spacing, border radius
- **Content**: Custom titles, descriptions, footer text

#### 3. Advanced Customization
For advanced users, individual components can be used separately:

```liquid
<!-- Custom earning programs section -->
<div class="my-custom-earning-section">
  <h2>Ways to Earn Points</h2>
  <joy-earning-programs
    data-layout="list"
    data-filter-types="signup,birthday,review,social_share"
    data-max-programs="4">
  </joy-earning-programs>
</div>

<!-- Custom redeeming section -->
<div class="my-custom-redeem-section">
  <h2>Redeem Your Points</h2>
  <joy-redeeming-programs
    data-layout="cards"
    data-modal-size="large">
  </joy-redeeming-programs>
</div>
```

### For Developers

#### 1. Component Extension
Create custom components by extending the base:

```javascript
class MyCustomComponent extends window.JoyComponents.BaseComponent {
  static COMPONENT_NAME = 'my-custom-component';

  async onJoyReady(joyInstance) {
    // Your custom logic here
    const data = await joyInstance.customMethod();
    this.renderCustomContent(data);
  }

  renderCustomContent(data) {
    this.innerHTML = `<div>Custom content: ${data}</div>`;
  }
}

customElements.define(MyCustomComponent.COMPONENT_NAME, MyCustomComponent);
```

#### 2. Event Handling
Components communicate via custom events:

```javascript
// Listen for program actions
document.addEventListener('programaction', (event) => {
  const { program, element } = event.detail;

  // Custom handling
  if (program.event === 'custom_action') {
    event.preventDefault(); // Prevent default handling
    handleCustomAction(program);
  }
});

// Listen for redemption completion
document.addEventListener('programcomplete', (event) => {
  const { program } = event.detail;
  showCustomSuccess(program);
});
```

#### 3. CSS Customization
Components use CSS custom properties for theming:

```css
.joy-component {
  --joy-primary-color: #your-brand-color;
  --joy-border-radius: 8px;
  --joy-spacing-lg: 32px;
}
```

---

## Component API Reference

### Base Component Methods

#### Lifecycle Methods:
- `connectedCallback()`: Component mounted to DOM
- `disconnectedCallback()`: Component removed from DOM
- `onJoyReady(joyInstance)`: Joy SDK is ready (override in subclasses)

#### Utility Methods:
- `getCustomerPoints()`: Get customer point balance
- `formatPointsText(points)`: Format points with proper pluralization
- `escapeHtml(text)`: XSS protection
- `log(message, data)`: Component logging
- `setState(newState)`: Update component state

### Event System

#### Emitted Events:
- `statechange`: Component state changed
- `programaction`: User clicked a program
- `programcomplete`: Program successfully completed
- `programerror`: Program execution failed

#### SDK Enhancement Events:
- `joy:enhanced:ready`: SDK enhancements loaded
- `program:executed`: Program successfully executed
- `program:error`: Program execution failed

---

## Performance Considerations

### Optimization Features:
- **Lazy Loading**: Components initialize only when needed
- **Event Delegation**: Efficient event handling for multiple items
- **Data Caching**: Customer and program data cached intelligently
- **Debounced Updates**: UI updates batched for performance
- **Memory Management**: Automatic cleanup on component destruction

### Best Practices:
- Use the Loyalty Hub section for complete pages
- Use individual components for custom layouts
- Implement proper error boundaries in custom components
- Cache frequently accessed data at the application level
- Use CSS custom properties for consistent theming

---

## Browser Support

### Minimum Requirements:
- Chrome 54+ / Safari 12+ / Firefox 63+ / Edge 79+
- Support for Custom Elements v1
- Support for CSS Custom Properties
- Support for ES6+ features (async/await, classes, modules)

### Polyfill Support:
Components gracefully degrade on older browsers with appropriate polyfills.

---

## Troubleshooting

### Common Issues:

#### Component not loading:
1. Check browser console for errors
2. Verify Joy SDK is loaded before components
3. Check network connectivity for API calls

#### Styling issues:
1. Verify CSS custom properties are supported
2. Check for conflicting theme styles
3. Use browser dev tools to inspect computed styles

#### API errors:
1. Check Joy SDK configuration
2. Verify customer authentication status
3. Check network requests in browser dev tools

### Debug Mode:
Enable debug mode by adding `?joy_debug=true` to URL for detailed console logging.

---

## Migration Guide

### From Legacy Sections:
1. Replace `custom-way-to-earn.liquid` with `joy-earning-programs` component
2. Replace `custom-way-to-redeem.liquid` with `joy-redeeming-programs` component
3. Use `joy-loyalty-hub.liquid` for complete loyalty pages
4. Update custom JavaScript to use new event system
5. Migrate custom styles to CSS custom properties

### Benefits of Migration:
- Better performance through modern web standards
- Improved accessibility and keyboard navigation
- Enhanced error handling and retry logic
- Flexible theming system
- Better mobile responsiveness
- Easier maintenance and updates

---

This documentation provides a complete overview of both the legacy customizations and the new modular component system. The new architecture provides maximum flexibility for merchants while maintaining high code standards for future development and variations.
