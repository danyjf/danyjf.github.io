import './styles/modern-normalize.scss'
import './styles/style.scss';
import './styles/components/header.scss';
import './styles/components/hero.scss';
import './styles/components/about.scss';
import './styles/components/projects.scss';
import './styles/components/project-details.scss';
import './styles/components/contact.scss';
import './styles/components/footer.scss';
import './styles/components/mobile-nav.scss';
import './styles/utils.scss';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';
import projectDetails from './utils/project-details';

mobileNav();
projectDetails();
darkMode();
lazyLoading();
