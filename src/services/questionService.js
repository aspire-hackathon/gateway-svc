// const request = require('request');
const rp = require('request-promise');

const questionService = {

  postQuestion: (req, res, next) => {
    try {
      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/postQuestion',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };

    return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(201).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  getAllQuestions: (req, res, next) => {
    const options = {
      method: 'GET',
      uri: `http://question-service.default.svc.cluster.local/api/getAllQuestions`,
      json: true // Automatically stringifies the body to JSON
    };
    try {
      return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(200).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  addLike: (req, res, next) => {
    try {
      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/addLike',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };

    return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(201).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

  addDislike: (req, res, next) => {
    try {
      const options = {
        method: 'POST', 
        uri: 'http://question-service.default.svc.cluster.local/api/addDislike',
        body: req.body,
        json: true // Automatically stringifies the body to JSON
    };

    return rp(options)
        .then((response) => {
          res.set('Content-Type', 'application/json');
          res.status(201).send(response);
        }).catch(err => {
          res.status(500).send({ statusCode: err.statusCode, msg: err.error.msg });
      })
    } catch (error) {
      next(error);
    }
  },

}

module.exports = questionService;
