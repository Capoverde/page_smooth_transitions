import Highway from '@dogstudio/highway';
import Fade from './transitions';
import { navchange } from '/js/navBg'


const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});


// event listener:
document.addEventListener('scroll', navchange)
