const express = require('express');

const appRouter = express.Router();
const userService = require('../services/userService');
const causeService = require('../services/causeService');

appRouter.route('/register')
  .post(userService.registerUser);

appRouter.route('/login')
  .post(userService.loginUser);

appRouter.route('/logout')
  .get(userService.logoutUser);

appRouter.route('/user/byid/:id')
  .get(userService.getUserById);

appRouter.route('/user/byusername/:username')
  .get(userService.getUserByUsername);

appRouter.route('/causes')
  .get(causeService.getCauses);

appRouter.route('/cause/create')
  .post(causeService.registerCause);

appRouter.route('/cause/status/:id')
  .patch(causeService.updateStatus);

appRouter.route('/cause/:id/:volid')
  .patch(causeService.addVolunteer);

appRouter.route('/cause/byid/:id')
  .get(causeService.getCauseById);

appRouter.route('/cause/byowner/:id')
  .get(causeService.getCauseByOwner);

module.exports = appRouter;
