// * * * IMPORTS * * *
import '../pages/index.css'; // connecting the font table

import { configScrollSmoother, configAnimationHeader, configGallery, sectionsColumnsCards } from '../utils/constants.js';
import Gsap from '../components/Gsap.js';
import Gallery from '../components/Gallery.js';

// * * * CONSTS * * *
const gsapClass = new Gsap();
const itemsLeft = gsapClass.returnArr(sectionsColumnsCards.left); // cards on the left
const itemsRight = gsapClass.returnArr(sectionsColumnsCards.right); // cards on the right
const gallery = new Gallery(configGallery, { itemsLeft: itemsLeft, itemsRight: itemsRight }, gsapClass.animationfromTo.bind(gsapClass));

// * * * MAIN CODE * * *
gsapClass.configScrollSmoother(configScrollSmoother); // enabling smooth scrolling
gsapClass.animationfromTo(configAnimationHeader); // animation for the site header

gallery.animationItems(); // enabling card animation
gallery.setEventListeners(); // enabling the listener
