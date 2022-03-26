const rp = require('request-promise');

const causeService = {

    getCauses: (req, res, next) => {
      console.log('inside causeService-------------------');
        const options = {
            method: 'GET',
            uri: `http://user-service.default.svc.cluster.local/cause/`,
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

    registerCause: (req, res, next) => {
        try {
          const options = {
            method: 'POST', 
            uri: 'http://user-service.default.svc.cluster.local/cause/register',
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

    updateStatus: (req, res, next) => {
        try {
          const options = {
            method: 'PATCH', 
            uri: `http://user-service.default.svc.cluster.local/cause/status/${req.params.id}`,
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

    addVolunteer: (req, res, next) => {
        try {
          const options = {
            method: 'PATCH', 
            uri: `http://user-service.default.svc.cluster.local/cause/${req.params.id}/${req.params.volid}`,
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

    getCauseById: (req, res, next) => {
        const options = {
          method: 'GET',
          uri: `http://user-service.default.svc.cluster.local/cause/byid/${req.params.id}`,
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

    getCauseByOwner: (req, res, next) => {
        const options = {
          method: 'GET',
          uri: `http://user-service.default.svc.cluster.local/cause/byowner/${req.params.id}`,
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

}

module.exports = causeService;