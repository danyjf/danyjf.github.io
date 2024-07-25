import './styles/modern-normalize.scss'
import './styles/style.scss';
import './styles/components/modal.scss'
import './styles/components/header.scss';
import './styles/components/hero.scss';
import './styles/components/about.scss';
import './styles/components/projects.scss';
import './styles/components/project-details.scss';
import './styles/components/contact.scss';
import './styles/components/footer.scss';
import './styles/components/mobile-nav.scss';
import './styles/utils.scss';

import './assets/images/placeholder_square.jpg';
import './assets/images/placeholder_square_red.jpg';
import './assets/images/placeholder_square_green.jpg';
import './assets/images/placeholder_square_blue.jpg';
import './assets/videos/placeholder_video.webm';

import './assets/images/hero.jpg';

import './assets/images/space_warfare_main_picture.png';
import './assets/images/space_warfare_satellite_selected_interface.png';
import './assets/images/space_warfare_satellite_view_screen.png';
import './assets/images/space_warfare_satellite_launch_interface.png';
import './assets/videos/space_warfare_video.mp4';

import './assets/images/sons_of_almeida_main_picture.png';
import './assets/images/sons_of_almeida_sfx_volume.png';
import './assets/images/sons_of_almeida_room.png';
import './assets/images/sons_of_almeida_church.png';
import './assets/videos/sons_of_almeida_video.mp4';

import './assets/images/grief_main_picture.png';
import './assets/images/grief_tutorial.jpg';
import './assets/images/grief_boxes.png';
import './assets/images/grief_boss.png';
import './assets/videos/grief_video.mp4';

import './assets/images/virulent_odissey_main_picture.png';
import './assets/images/virulent_odissey_main_menu.png';
import './assets/images/virulent_odissey_dodge.png';
import './assets/images/virulent_odissey_protein.png';
import './assets/videos/virulent_odissey_video.mp4';

import './assets/images/avoid_main_picture.jpg';
import './assets/images/avoid_level_1.png';
import './assets/images/avoid_level_2.png';
import './assets/images/avoid_level_3.png';
import './assets/videos/avoid_video.mp4';

import './assets/images/break_the_game_main_picture.png';
import './assets/images/break_the_game_level_1.png';
import './assets/images/break_the_game_level_2.png';
import './assets/images/break_the_game_level_6.png';
import './assets/videos/break_the_game_video.mp4';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';
import projectDetails from './utils/project-details';
import modal from './utils/modal';

modal();
mobileNav();
projectDetails();
darkMode();
lazyLoading();
