import { Slider } from './Slider.js';
import { Nav } from './Nav.js';
import { MoveOnScroll } from './MoveOnScroll.js';
import { Footer } from './Footer.js';

class Home{
   constructor() {
      this.navigation = new Nav();
      this.btnShowBarNav = document.querySelector('.nav_bar');
      this.navBarArrowOffers = document.querySelector('.fa-arrow-alt-circle-down');

      this.slider = new Slider();
      this.btnNextSlide = document.querySelector('.next_slide_button');
      this.btnPreviousSlide = document.querySelector('.previous_slide_button');

      this.slider.firstLoadPage();

      this.btnShowBarNav.addEventListener('click', () => this.navigation.toggleMobileNav(this.btnShowBarNav));
      this.navBarArrowOffers.addEventListener('click', () => this.navigation.ejectOrHideNavOffers(this.navBarArrowOffers));

      this.btnNextSlide.addEventListener('click', () => this.slider.nextSlide());
      this.btnPreviousSlide.addEventListener('click', () => this.slider.previousSlide());

      this.moveOnScroll = new MoveOnScroll();

      this.footer = new Footer();
   }
}

const home = new Home();