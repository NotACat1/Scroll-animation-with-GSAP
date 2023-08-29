// GSAP settings for smooth scrolling
export const configScrollSmoother = {
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.85,
  effects: true
};

// animation settings for the site header
export const configAnimationHeader = {
  section: '.header-section', 
  from: { opacity: 1 }, 
  to: {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header-section',
      start: 'center center',
      end: 'bottom top',
      scrub: true
    }
  }
};

// animation settings for card movement on the left
const configFromLeft = {
  from: {
    opacity: 0,
    x: -50
  },
  to: {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      start: '-850',
      end: '-100',
      scrub: true
    }
  }
};

// animation settings for card movement on the right
const configFromRight = {
  from: {
    opacity: 0,
    x: 50
  },
  to: {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      start: '-850',
      end: '-100',
      scrub: true
    }
  }
};

// animation settings for the gallery
export const configGallery = {
  configFromLeft: configFromLeft,
  configFromRight: configFromRight
};

// card column sections
export const sectionsColumnsCards = {
  left:  '.gallery__column_left .gallery__item',
  right: '.gallery__column_right .gallery__item'
};