export default class Gallery {
  constructor ({ configFromLeft, configFromRight }, { itemsLeft = [], itemsRight = [] }, animationfromTo) {
    this._configFromLeft = configFromLeft; // adjusting the movement of the card from left to right
    this._configFromRight = configFromRight; // adjusting the movement of the card from right to left
    this._itemsLeft = itemsLeft; // array of cards on the left
    this._itemsRight = itemsRight; // array of cards on the right
    this._items = this._itemsLeft.concat(this._itemsRight); // shared array
    this._animationfromTo = animationfromTo; // from-to motion function
  }
  // returning a ready-made setting to describe the movement from left to right
  _configAnimationItemLeft (sectionItem) {
    const { from, to } = this._configFromLeft;
    to.scrollTrigger.trigger = sectionItem;
    return {
      section: sectionItem,
      from,
      to
    }
  }
  // returning a ready-made setting to describe the movement from right to left
  _configAnimationItemRight (sectionItem) {
    const { from, to } = this._configFromRight;
    to.scrollTrigger.trigger = sectionItem;
    return {
      section: sectionItem,
      from,
      to
    }
  }
  // enabling card animations
  animationItems () {
    if (window.innerWidth < 768) {
      this._items.forEach((item, index) => {
        if (index % 2 === 0) {
          this._animationfromTo(this._configAnimationItemLeft(item));
        } else {
          this._animationfromTo(this._configAnimationItemRight(item));
        }
      });
    } else {
      this._itemsLeft.forEach(item => {
        this._animationfromTo(this._configAnimationItemLeft(item));
      });    
      this._itemsRight.forEach(item => {
        this._animationfromTo(this._configAnimationItemRight(item));
      });
    }
  }
  // enabling listeners
  setEventListeners () {
    // changing the screen size
    window.addEventListener("resize", event => {
      this.animationItems();
    });    
  }
}