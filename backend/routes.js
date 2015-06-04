/*
* Application routes
*/

'use strict';

import core from './controllers/core-controller.js';
import auth from './controllers/auth-controller.js';


let routes = (app) => {
  // Authentication routes
  app.route('/signup')
   .get(auth.signUp)
   .post(auth.processSignUp);

  app.route('/signin')
    .get(auth.signIn)
    .post(auth.processSignIn);

  app.route('/signout')
    .get(auth.signOut);

  // Core routes
  // app.route('/api/v1/users/:user')
  //   .get(user.findUser)
  //   .put(user.updateUser)
  //   .delete(user.deleteUser);

  // Core routes
  app.route('/').get(core.index);
  app.use(core.error404);
  app.use(core.error505);
};

export default routes;
