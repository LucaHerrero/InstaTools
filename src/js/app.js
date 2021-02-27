import $ from 'dom7';
import Framework7 from './f7config';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';


var app = new Framework7({
  name: 'InstaTools', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
});

const addtoHistory = (name, username, profilPicURL) => {
  let history = getHistory();

  const user = {
    name: name,
    username: username,
    profilPicURL: profilPicURL
  };

  if (history === null) {
    history = [];
    history.push(user);
  } else {
    let userdeleted = false;
    for (let i = 0; i < history.length; i++) {
      if (history[i].username === username) {
        history.splice(i, 1);
        userdeleted = true;
      }
    }

    if (userdeleted === false && history.length > 50) {
      history.pop();
    }
    history.unshift(user);
  }
  localStorage.setItem('history', JSON.stringify(history));
}

const getHistory = () => {
  const history = localStorage.getItem('history');

  if (history != null) {
    return JSON.parse(history);
  }

  return null;
}

export {addtoHistory, getHistory};