# 3D Flipbook Ebook Website

A responsive, modern website that displays an ebook with realistic 3D page-turn animations using **PageFlip.js**. Features include navigation buttons, zoom in/out, fullscreen mode, and mobile-friendly design.

---

## Features

- Homepage with ebook cover
- Flipbook viewer with 3D page flip animation
- Next / Previous page navigation
- Zoom in and out
- Fullscreen mode toggle
- Mobile-friendly, responsive layout
- Clean, modern UI

---

## Getting Started

These instructions will help you run the project locally on your machine.

### Prerequisites

- Web browser (Chrome, Firefox, Edge, etc.)
- A code editor (VSCode, Sublime Text, etc.)

### Setup

1. Clone or download the repository:
bash
git clone https://github.com/full-codes/3D-Flipbook-Ebook-Website-HTML-JS.git

2. Navigate into the project directory:
cd flipbook-website

3. Open index.html in your web browser:
Double-click the index.html file, or
Right-click and choose "Open with" your preferred browser

Customization
Adding Your Ebook Pages
Replace the URLs in the pages array in script.js with your actual ebook page images:
CopyRun
const pages = [
  'path/to/page1.jpg',
  'path/to/page2.jpg',
  // add more pages
];

Using PDF Files
To display a PDF instead of images, consider integrating pdf.js to render PDF pages as images dynamically.

Dependencies
PageFlip.js: Included via CDN in the HTML file
No other external dependencies are required

Files Structure
/project-root
|-- index.html
|-- styles.css
|-- script.js

License
This project is open-source. Feel free to modify and adapt it for your needs.

Contact
For questions or support, contact workdev497@gmail.com





