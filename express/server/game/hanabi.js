"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hanabi = exports.hanabiDataInit = exports.hanabiConfigInit = void 0;
var data_1 = require("../data");
var eventName = 'hanabi';
var hanabiConfigInit = function () {
    var initialConfig = {
        key: 'init'
    };
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.hanabiConfigInit = hanabiConfigInit;
var hanabiDataInit = function () {
    var initialData = {
        key: 'data'
    };
    (0, data_1.setGameData)(initialData);
};
exports.hanabiDataInit = hanabiDataInit;
exports.hanabi = {
    init: function () {
        console.log('ok');
    }
};
