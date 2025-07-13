const carousel = document.querySelector('.carousel');
const indicatorWrapper = document.querySelector('.carousel_indicator_wrapper');
const blurbContainer = document.querySelector('.blurb_container');

let current_index = 0;
let images = [];
let indicators = [];
let blurbs = [];

const defaultItems = [
  {
    src: 'https://placehold.co/905x509?text=Test+Image+1',
    caption: 'Default 1',
    blurb: 'This is a placeholder image.'
  },
  {
    src: 'https://placehold.co/905x509?text=Test+Image+2',
    caption: 'Default 2',
    blurb: 'Another placeholder image.'
  },
  {
    src: 'https://placehold.co/905x509?text=Test+Image+3',
    caption: 'Default 3',
    blurb: 'Yet another placeholder.'
  },
  {
    src: 'https://placehold.co/905x509?text=Test+Image+4',
    caption: 'Default 4',
    blurb: 'Final placeholder image.'
  }
];

function render_carousel(items) {
  items.forEach((img, index) => {
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.caption || '';
    image.classList.add('carousel_image');
    image.style.display = index === 0 ? 'block' : 'none';
    carousel.appendChild(image);
    images.push(image);

    const dot = document.createElement('div');
    dot.classList.add('carousel_indicator');
    if (index === 0) dot.style.backgroundColor = 'blue';
    indicatorWrapper.appendChild(dot);
    indicators.push(dot);

    if (img.blurb) blurbs.push(img.blurb);
  });

  if (blurbContainer && blurbs.length > 0) {
    blurbContainer.innerText = blurbs[0];
  }

  setInterval(() => {
    images[current_index].style.display = 'none';
    indicators[current_index].style.backgroundColor = 'white';

    current_index = (current_index + 1) % images.length;

    images[current_index].style.display = 'block';
    images[current_index].style.animation = 'carousel_fade_in .5s'
    indicators[current_index].style.backgroundColor = 'blue';

    if (blurbs.length > 0) {
      blurbContainer.innerText = blurbs[current_index];
    }
  }, 3000);
}

// Try to fetch real carousel data
fetch('https://api.themcoldbloodeddrifters.com/carousel')
  .then(response => response.json())
  .then(carousel_items => {
    if (!Array.isArray(carousel_items) || carousel_items.length === 0) {
      console.warn("Empty API response, using defaults.");
      render_carousel(defaultItems);
    } else {
      render_carousel(carousel_items);
    }
  })
  .catch(error => {
    console.warn("Fetch error, using default images:", error);
    render_carousel(defaultItems);
  });
