"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theGame = exports.theGameDataInit = exports.theGameConfigInit = void 0;
var data_1 = require("../data");
/**
 * Variable
*/
var eventName = 'theGame';
/**
 * Type
*/
/**
 * Data
*/
/**
 * Function
*/
var theGameConfigInit = function () {
    var initialConfig = null;
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.theGameConfigInit = theGameConfigInit;
var theGameDataInit = function () {
    // 初期化
};
exports.theGameDataInit = theGameDataInit;
exports.theGame = {
    init: function () {
        //
    }
};
