const express = require('express');

const appRouter = express.Router();
const userService = require('../services/userService');
const questionService = require('../services/questionService');

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
  
appRouter.route('/postQuestion')
  .post(questionService.postQuestion);
  
  appRouter.route('/getAllQuestions')
  .get(questionService.getAllQuestions);
  
appRouter.route('/addLike')
    .post(questionService.addLike);

appRouter.route('/addDislike')
    .post(questionService.addDislike);

module.exports = appRouter;
