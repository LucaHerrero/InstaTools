import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import ProductPage from '../pages/product.f7.html';
import SettingsPage from '../pages/settings.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import {addtoHistory, getHistory} from './app';

var routes = [{
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/user/:userName/',
    async: function ({
      router,
      to,
      resolve
    }) {
      // App instance
      var app = router.app;


      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userName = to.params.userName;

      // Simulate Ajax Request

      app.request({
        url: 'https://www.instagram.com/' + userName + '/?__a=1',
        crossDomain: true,
        error: function() {
          app.request(this);
        },
        success: function(data){
          console.log(data);
          let user = JSON.parse(data);
          user = user.graphql.user;
          resolve({
            component: RequestAndLoad,
          }, {
            props: {
              user: user,
            }
          });

          addtoHistory(user.full_name, user.username, user.profile_pic_url);

          app.preloader.hide();
        }
      })
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;