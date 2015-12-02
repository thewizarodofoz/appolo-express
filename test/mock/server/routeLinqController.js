"use strict";
var appolo = require('../../../index');

class Controller extends appolo.Controller {

    test(req, res) {
        res.json({working: true, controllerName: this.route.controller, model: req.model})
    }

}

appolo.define('routeLinqController')
    .type(Controller)
    .routes([
        {
            abstract: true,
            validations: {
                user_name: appolo.validator.string().required()
            }
        },
        {
            path: '/test/route/linq',
            method: 'get',
            action: 'test'
        }

    ])
    .routes({
        path: '/test/route/linq_object',
        method: 'get',
        action: 'test',
        validations: {
            user_name: appolo.validator.string().required()
        }
    })
