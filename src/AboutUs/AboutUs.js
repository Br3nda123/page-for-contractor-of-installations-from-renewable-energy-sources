import { Nav } from '../Home/Nav.js';
import { Footer } from '../Home/Footer.js';
import { MoveOnScroll } from './MoveOnScroll.js';

class AboutUs{
   constructor() {
      this.navigation = new Nav();
      this.btnShowBarNav = document.querySelector('.nav_bar');
      this.navBarArrowOffers = document.querySelector('.fa-arrow-alt-circle-down');

      this.btnShowBarNav.addEventListener('click', () => this.navigation.toggleMobileNav(this.btnShowBarNav));
      this.navBarArrowOffers.addEventListener('click', () => this.navigation.ejectOrHideNavOffers(this.navBarArrowOffers));

      this.footer = new Footer();

      this.move = new MoveOnScroll();
   }
}

const about = new AboutUs();