"use strict";
import appolo = require('../../../index');
import {IDefinition} from "../../../lib/interfaces/IDefinition";

let $config = <IDefinition>{
    id: 'moduleController',
    inject: ['logger2'],
    routes: [
        {
            path: '/test/module/',
            method: "get",
            action: 'test'
        }
    ]
}

export class Controller extends appolo.Controller {
    logger2:any
    test(req, res) {
        res.json({working: true, controllerName: this.route.controller, logger: this.logger2.getName()})
    }

}

 appolo.define($config, Controller);