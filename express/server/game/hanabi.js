"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hanabi = exports.hanabiDataInit = exports.hanabiConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var eventName = 'hanabi';
var hanabiConfigInit = function () {
    var initialConfig = {
        colorNum: 4,
        handNum: 4
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
        server_1.socket.on("".concat(eventName, ":getColorNum"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getColorNum"), data_1.currentConfig.colorNum);
        });
        server_1.socket.on("".concat(eventName, ":getHandNum"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getHandNum"), data_1.currentConfig.handNum);
        });
        server_1.socket.on("".concat(eventName, ":setColorNum"), function (colorNum) {
            data_1.currentConfig.colorNum = Number(colorNum);
            server_1.serverSocket.emit("".concat(eventName, ":getColorNum"), data_1.currentConfig.colorNum);
        });
        server_1.socket.on("".concat(eventName, ":setHandNum"), function (handNum) {
            data_1.currentConfig.handNum = Number(handNum);
            server_1.serverSocket.emit("".concat(eventName, ":getHandNum"), data_1.currentConfig.handNum);
        });
    }
};
