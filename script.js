// Variables
let pageFlip = null;
let zoomLevel = 1;
const maxZoom = 2;
const minZoom = 0.5;

// Elements
const homepage = document.getElementById('homepage');
const flipbookPage = document.getElementById('flipbookContainer');
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const closeBtn = document.getElementById('closeBtn');
const flipContainer = document.getElementById('page-flip-container');

// Sample page images (replace with your PDF page images)
const pages = [
  'https://via.placeholder.com/600x800?text=Page+1',
  'https://via.placeholder.com/600x800?text=Page+2',
  'https://via.placeholder.com/600x800?text=Page+3',
  'https://via.placeholder.com/600x800?text=Page+4',
  'https://via.placeholder.com/600x800?text=Page+5',
];

// Show flipbook on button click
startBtn.onclick = () => {
  homepage.classList.add('hidden');
  flipbookPage.classList.remove('hidden');
  initFlipbook();
};

// Initialize flipbook
function initFlipbook() {
  if (pageFlip) return; // Prevent re-initialization
  pageFlip = new PageFlip(document.getElementById("page-flip-container"), {
    width: 600,
    height: 800,
    minWidth: 300,
    maxWidth: 1200,
    minHeight: 400,
    maxHeight: 1600,
    size: "auto",
    minShadowOpacity: 0.2,
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: true,
    useMouseEvents: true,
    startPage: 0,
  });

  // Add pages
  pages.forEach((pageImg) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';
    const img = document.createElement('img');
    img.src = pageImg;
    img.style.width = '100%';
    img.style.height = '100%';
    pageDiv.appendChild(img);
    pageFlip.loadFromHTML(pageDiv.innerHTML);
  });

  // Load pages
  loadPages();

  // Optional: handle page change
  // pageFlip.on('flip', () => {});
}

// Load pages into flipbook
function loadPages() {
  const container = document.querySelector('#page-flip-container');
  container.innerHTML = ''; // Clear previous
  pages.forEach((pageImg) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';
    const img = document.createElement('img');
    img.src = pageImg;
    img.style.width = '100%';
    img.style.height = '100%';
    pageDiv.appendChild(img);
    container.appendChild(pageDiv);
  });
  // Refresh the flipbook
  if (pageFlip) {
    pageFlip.loadFromHTML(container.innerHTML);
  }
}

// Navigation buttons
prevBtn.onclick = () => {
  if (pageFlip) pageFlip.flipPrev();
};
nextBtn.onclick = () => {
  if (pageFlip) pageFlip.flipNext();
};

// Zoom controls
zoomInBtn.onclick = () => {
  if (zoomLevel < maxZoom) {
    zoomLevel += 0.1;
    updateZoom();
  }
};
zoomOutBtn.onclick = () => {
  if (zoomLevel > minZoom) {
    zoomLevel -= 0.1;
    updateZoom();
  }
};

function updateZoom() {
  document.querySelector('#page-flip-container').style.transform = `scale(${zoomLevel})`;
}

// Fullscreen toggle
fullscreenBtn.onclick = () => {
  const elem = document.getElementById('flipbookContainer');
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => alert(`Error attempting to enable fullscreen mode: ${err.message}`));
  } else {
    document.exitFullscreen();
  }
};

// Close flipbook
closeBtn.onclick = () => {
  // Destroy flipbook instance
  if (pageFlip) {
    pageFlip.destroy();
    pageFlip = null;
  }
  // Reset zoom
  zoomLevel = 1;
  document.querySelector('#page-flip-container').style.transform = '';
  // Show homepage
  flipbookPage.classList.add('hidden');
  homepage.classList.remove('hidden');
};
