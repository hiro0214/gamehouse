"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrentConfig = exports.setCurrentGame = exports.initConfig = exports.currentConfig = exports.currentGame = exports.userList = exports.connectList = void 0;
var kowloonTactics_1 = require("./game/kowloonTactics");
var hanabi_1 = require("./game/hanabi");
var fakeArtist_1 = require("./game/fakeArtist");
exports.connectList = [];
exports.userList = [];
exports.currentGame = null, exports.currentConfig = null;
var initConfig = function (game) {
    switch (game) {
        case 'クーロンタクティクス':
            (0, kowloonTactics_1.kowloonTacticsConfigInit)();
            break;
        case 'Hanabi':
            (0, hanabi_1.hanabiConfigInit)();
            break;
        case 'エセ芸術家 ニューヨークへ行く':
            (0, fakeArtist_1.fakeArtistConfigInit)();
            break;
        case 'ザ・ゲーム':
            (0, fakeArtist_1.fakeArtistConfigInit)();
            break;
    }
};
exports.initConfig = initConfig;
var setCurrentGame = function (game) { return exports.currentGame = game; };
exports.setCurrentGame = setCurrentGame;
var setCurrentConfig = function (config) { return exports.currentConfig = config; };
exports.setCurrentConfig = setCurrentConfig;
