# Art Galleria – Image Gallery Web App

**Art Galleria** is a modern and fully responsive image gallery web application built using HTML, CSS, and JavaScript. It allows users to browse images by category, view them in a lightbox, and enjoy smooth hover effects with a vintage look.

---

## **Features**

- **Dynamic Image Gallery**: Easily add new images without changing HTML; just add them to the `images/` folder and update the JS array.
- **Category Filters**: Browse images by Coffee, Cats, Nature, or City.
- **Lightbox View**: Click an image to open a larger view with Next/Previous navigation.
- **Hover Effects**: Smooth zoom and vintage sepia effect on hover.
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile screens.
- **Footer with Contact**: Shows Gmail and LinkedIn links.

---

## **Technologies Used**

- **HTML5** – Structure of the gallery.
- **CSS3** – Styling, hover effects, responsive design.
- **JavaScript (ES6)** – Dynamic gallery, category filters, lightbox functionality.
- **Google Fonts** – Playfair Display (modern italic font for vintage aesthetic).

---

## **Installation / Usage**

1. Clone or download this repository:
2. Open the project folder.
3. Open index.html in any modern browser (Chrome, Firefox, Edge, etc.).
4. Enjoy browsing the gallery!
5. Optional (for live preview / development):
- Open in VS Code, install Live Server extension, then right-click index.html → Open with Live Server.

---

## **Adding Images**

1. Place your images in the images/ folder.
2. Add each image to the images array in script.js:
- { src: 'images/newimage.jpg', category: 'coffee' }
(category should match one of the filter buttons: coffee, cats, nature, city.)
