
import Framework7, { createStore, getDevice, request, utils } from 'framework7';
import Checkbox from 'framework7/components/checkbox';
import Dialog from 'framework7/components/dialog';
import Form from 'framework7/components/form';
import Input from 'framework7/components/input';
import Preloader from 'framework7/components/preloader';
import Radio from 'framework7/components/radio';
import Searchbar from 'framework7/components/searchbar';
import Tabs from 'framework7/components/tabs';
import Toggle from 'framework7/components/toggle';
import Typography from 'framework7/components/typography';
import Tooltip from 'framework7/components/tooltip';
import Toast from 'framework7/components/toast';
import Actions from 'framework7/components/actions';
import PhotoBrowser from 'framework7/components/photo-browser';
import Popup from 'framework7/components/popup';
import Swiper from 'framework7/components/swiper';

Framework7.use([
  Dialog,
  Preloader,
  Tabs,
  Form,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Searchbar,
  Typography,
  Tooltip,
  Toast,
  Actions,
  PhotoBrowser,
  Popup,
  Swiper
]);

export default Framework7;
export { request, utils, getDevice, createStore };

