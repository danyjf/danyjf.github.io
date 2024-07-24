﻿import './styles/modern-normalize.scss'
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
