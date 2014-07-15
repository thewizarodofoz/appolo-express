var Controller = require('../../../lib/controller/controller');
var validator = require('joi');
module.exports = Controller.define({
    $config: {
        id: 'testRouteController',
        routes: [
            {
                abstract:true,
                validations:{
                    username:validator.string().required()
                }
            },
            {
                path: '/test/route/',
                method: 'get',
                action: 'test'
            }
        ]
    },

    test: function (req, res) {
        res.json({working: true, controllerName: this.route.controller})
    }

})