
# Landing Page Project

## 1. Building the Navigation

### Dynamically Create Navigation Links
- **Select Sections:** `const sections = document.querySelectorAll('section');`
- **Loop Through Sections:** Create a list item with a link for each section.
- **Set Navigation HTML:** `document.querySelector("#navbar__list").innerHTML = result;`

## 2. Add Active Class to Section Near Top of Viewport

### Scroll Event Listener
- **Add Event Listener:** `document.addEventListener('scroll', activeSection);`
- **Check Viewport Position:** Use `getBoundingClientRect()` to determine if a section is in the viewport.
- **Toggle Active Class:** Add or remove the `your-active-class` based on the section's position.

## 3. Smooth Scrolling

### Enable Smooth Scrolling to Sections
- **Select Navigation Links:** `const navLinks = document.querySelectorAll('.menu__link');`
- **Prevent Default Action:** Disable the default link behavior.
- **Scroll to Section:** Use `scrollIntoView({ behavior: 'smooth' })` for smooth scrolling to the target section.

## 4. Toggle Read More/Less

### Toggle Additional Content Visibility
- **Select Buttons:** `const buttons = document.querySelectorAll('button');`
- **Toggle Visibility:** Add or remove the `read-more` class from the previous sibling element and update the button text.

## Project Description

The Landing Page Project dynamically builds navigation, highlights the active section in the viewport upon scrolling, and ensures smooth scrolling to sections when navigation links are clicked. It also includes a feature to toggle the visibility of additional content.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Author

**Batool Raid Sbaih**
