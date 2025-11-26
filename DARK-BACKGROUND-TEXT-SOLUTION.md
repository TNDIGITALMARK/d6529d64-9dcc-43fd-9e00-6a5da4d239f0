# Dark Background Text Contrast Solution

## Problem Statement
Text appearing dark on dark backgrounds throughout the Omega Contracting website, causing readability issues. The design uses multiple dark background colors (charcoal `#1A1A1A`, deep earth `#2C2416`, rich brown `#4A3822`) where white text is required for proper contrast.

## Solution Implemented

### Global CSS Utility Classes
Created comprehensive utility classes in `src/app/globals.css` (lines 388-544) to handle all dark background text scenarios.

---

## Usage Guide

### Method 1: Individual Element Class (Quick Fix)
Apply directly to any text element on a dark background:

```tsx
// Force white text
<p className="text-on-dark">This text is now white</p>

// Slightly transparent white (for secondary text)
<p className="text-on-dark-muted">This text is 80% white</p>

// More transparent white (for tertiary text)
<p className="text-on-dark-subtle">This text is 60% white</p>
```

**Use Cases:**
- Quick fixes for individual elements
- Overriding inherited colors
- Fine-grained control over specific text

---

### Method 2: Container Class (Recommended for Sections)
Apply to parent container with dark background - all child text automatically becomes white:

```tsx
<section className="bg-[hsl(0,0%,10%)] dark-bg-container">
  <h1>This heading is white</h1>
  <p>This paragraph is white (90% opacity)</p>
  <a href="#">This link is gold and hovers to lighter gold</a>
</section>
```

**Automatic Styling:**
- All headings (h1-h6): Pure white
- Paragraphs: White with 90% opacity
- Links: Gold (#D4AF37) with hover to lighter gold
- All other text: Pure white

**Use Cases:**
- Hero sections with dark backgrounds
- Footer sections
- Dark-themed card components
- Any section with consistent dark background

---

### Method 3: Semantic Background Classes
Use brand-specific dark background classes that include automatic white text:

```tsx
// Charcoal background (#1A1A1A) with white text
<div className="bg-charcoal">
  <h2>Automatically white text</h2>
  <p>All content here is readable</p>
</div>

// Deep Earth background (#2C2416) with white text
<div className="bg-deep-earth">
  <h3>White text on dark brown</h3>
</div>

// Rich Brown background (#4A3822) with white text
<div className="bg-rich-brown">
  <p>Perfect contrast guaranteed</p>
</div>
```

**Benefits:**
- Semantic naming matches brand colors
- Automatic text color handling
- Consistent with design system
- One class does both background and text

---

## Current Implementation Status

### ✅ Components Already Handled Correctly
The following components already use white text on dark backgrounds correctly:

1. **Header** (`src/components/omega/header/Header.tsx`)
   - Background: `bg-[hsl(0,0%,10%)]`
   - Text: `text-white` applied throughout
   - Status: ✅ No changes needed

2. **Footer** (`src/components/omega/footer/Footer.tsx`)
   - Background: `bg-[hsl(0,0%,10%)]`
   - Text: `text-white` applied throughout
   - Status: ✅ No changes needed

3. **Hero Section** (`src/app/page.tsx` lines 16-70)
   - Background: Dark gradient overlay
   - Text: `text-white` explicitly applied
   - Status: ✅ No changes needed

4. **Projects Section** (`src/app/page.tsx` lines 113-176)
   - Background: `bg-[hsl(0,0%,10%)]`
   - Headings: `text-white` explicitly applied
   - Descriptions: `text-white/70` with opacity
   - Status: ✅ No changes needed

5. **ProjectCard** (`src/components/omega/projects/ProjectCard.tsx`)
   - Background: `bg-[hsl(40,29%,13%)]`
   - Text: `text-white` applied to overlay content
   - Status: ✅ No changes needed

6. **TestimonialCard** (`src/components/omega/testimonials/TestimonialCard.tsx`)
   - Background: `bg-[hsl(40,29%,13%)]`
   - Quote: `text-white/90` with opacity
   - Author: `text-[hsl(45,64%,53%)]` (gold)
   - Status: ✅ No changes needed

---

## When to Use Each Method

### Use `.text-on-dark` when:
- You need to override a specific element's color
- Working with dynamic content where background might change
- Quick debugging or testing

### Use `.dark-bg-container` when:
- Creating new sections with dark backgrounds
- You want all child elements to automatically inherit white text
- Building reusable dark-themed components

### Use `.bg-charcoal`, `.bg-deep-earth`, `.bg-rich-brown` when:
- You want both background AND text handled by one class
- Working with brand-specific dark colors
- Building new components that match the design system

---

## CSS Selector Strategy

The utility classes use multiple targeting strategies to ensure comprehensive coverage:

1. **Direct utility classes** (`.text-on-dark`, `.dark-bg-container`)
2. **Semantic background classes** (`.bg-charcoal`, `.bg-deep-earth`, `.bg-rich-brown`)
3. **Attribute selectors** (`[class*="bg-[hsl(0,0%,10%)]"]`) - targets inline Tailwind classes
4. **Descendant selectors** (`.dark-bg-container h1`) - targets all children
5. **Important flags** (`!important`) - overrides conflicting styles

This multi-layered approach ensures white text is applied consistently across all scenarios.

---

## Examples

### Example 1: Dark Hero Section
```tsx
<section className="min-h-screen bg-[hsl(0,0%,10%)] dark-bg-container">
  <h1>Crafting Excellence</h1>
  <p>Premium Construction & Renovation</p>
  <a href="/contact">Get Started</a>
</section>
```
Result: White heading, white paragraph (90% opacity), gold link

### Example 2: Dark Card Component
```tsx
<div className="bg-deep-earth p-8 rounded-sm">
  <h3>Modern Kitchen Renovation</h3>
  <p>Transform your space with expert craftsmanship</p>
</div>
```
Result: White heading and paragraph on deep earth brown background

### Example 3: Mixed Content Section
```tsx
<section className="bg-charcoal py-24">
  <div className="container mx-auto">
    <h2 className="text-on-dark">Featured Projects</h2>
    <div className="grid grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
</section>
```
Result: White section heading with properly styled project cards

---

## Technical Details

### Color Values Used
- Pure White: `hsl(0 0% 100%)`
- Muted White: `hsl(0 0% 100% / 0.8)` (80% opacity)
- Subtle White: `hsl(0 0% 100% / 0.6)` (60% opacity)
- Paragraph White: `hsl(0 0% 100% / 0.9)` (90% opacity)
- Link Gold: `hsl(45 64% 53%)`
- Link Hover: `hsl(45 64% 63%)`

### Dark Background Colors
- Charcoal: `hsl(0 0% 10%)` - `#1A1A1A`
- Deep Earth: `hsl(40 29% 13%)` - `#2C2416`
- Rich Brown: `hsl(33 38% 21%)` - `#4A3822`

### No Theme Conflicts
The theme system uses `next-themes` with light/dark mode toggling via `.dark` class. The utility classes:
- Use `!important` flags to override inherited colors
- Target specific dark background colors (not theme variables)
- Work independently of the theme system
- No JavaScript runtime manipulation of CSS variables detected

---

## Testing Checklist

To verify the solution works across all dark backgrounds:

- [ ] Header text is white on dark background
- [ ] Footer text is white on dark background
- [ ] Hero section text is white on dark gradient
- [ ] Projects section headings are white
- [ ] Project cards have white text on hover overlays
- [ ] Testimonial cards have white quotes on dark brown
- [ ] All links on dark backgrounds show gold color
- [ ] Link hover states transition to lighter gold
- [ ] No dark text appearing on any dark background

---

## Future Usage

When creating NEW components with dark backgrounds:

1. **Option A (Recommended):** Use semantic background class
   ```tsx
   <div className="bg-charcoal p-8">
     {/* All content automatically white */}
   </div>
   ```

2. **Option B:** Use dark-bg-container
   ```tsx
   <div className="bg-[hsl(0,0%,10%)] dark-bg-container p-8">
     {/* All content automatically white */}
   </div>
   ```

3. **Option C:** Apply to individual elements
   ```tsx
   <div className="bg-[hsl(0,0%,10%)] p-8">
     <h2 className="text-on-dark">Title</h2>
     <p className="text-on-dark-muted">Description</p>
   </div>
   ```

---

## Summary

This solution provides **three flexible methods** for ensuring white text on dark backgrounds:
1. **Individual element classes** for precise control
2. **Container classes** for automatic child styling
3. **Semantic background classes** for brand consistency

All current dark background components are already correctly styled. The new utility classes provide a robust system for future development and edge cases.

**Key File Modified:**
- `src/app/globals.css` (lines 388-544)

**No Breaking Changes:**
- Existing components continue to work as designed
- New utilities are additive only
- No theme system conflicts detected
