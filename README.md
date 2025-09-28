```bash
bunx create-next-app@latest [app-name] -e https://github.com/snelusha/something
```
```Fonts
:root {
  --default-font: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Raleway", sans-serif;
  --nav-font: "Lato", sans-serif;
}

/* Global Colors - The following color variables are used throughout the website. Updating them here will change the color scheme of the entire website */
:root {
  --background-color: #f2f2f2; /* Background color for the entire website, including individual sections */
  --default-color: #0d1f40; /* Default color used for the majority of the text content across the entire website */
  --heading-color: #2b4980; /* Color for headings, subheadings and title throughout the website */
  --accent-color: #ffcc00; /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --surface-color: #f2f2f2; /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
  --contrast-color: #2b4980; /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */
  --accent-color-b: #f9d93a;
}

/* Nav Menu Colors - The following color variables are used specifically for the navigation menu. They are separate from the global colors to allow for more customization options */
:root {
  --nav-color: #f2f2f2; /* The default color of the main navmenu links */
  --nav-hover-color: #ffcc00; /* Applied to main navmenu links when they are hovered over or active */
  --nav-mobile-background-color: #f2f2f2; /* Used as the background color for mobile navigation menu */
  --nav-dropdown-background-color: #f2f2f2; /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
  --nav-dropdown-color: #0d1f40; /* Used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-hover-color: #ffcc00; /* Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
}

/* Color Presets - These classes override global colors when applied to any section or element, providing reuse of the sam color scheme. */

.light-background {
  --background-color: #f9f9f9;
  --surface-color: #ffffff;
}

.dark-background {
  --background-color: #0d1f40;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #0d1f40;
  --contrast-color: #0d1f40;
}

/* Smooth scroll */
:root {
  scroll-behavior: smooth;
}

/*body */
body {
  color: var(--default-color);
  background-color: var(--background-color);
  font-family: var(--default-font);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, var(--accent-color), transparent 25%);
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}


/* Footer */
#footer {
  background: var(--default-color);
  color: var(--background-color);
  padding: 40px 0 20px 0;
  font-size: 14px;
  line-height: 24px;
}```