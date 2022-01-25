"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hanabi = exports.hanabiDataInit = exports.hanabiConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var utility_1 = require("../utility");
/**
 * Variable
*/
var eventName = 'hanabi', colorVal = ['red', 'blue', 'yellow', 'green', 'white', 'purple'], numVal = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];
/**
 * Data
*/
var deck = [], players = [], fields = [], cemetery = [];
var score, turn, hint, miss;
/**
 * Function
*/
var hanabiConfigInit = function () {
    var initialConfig = {
        colorNum: 5,
        handNum: 4
    };
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.hanabiConfigInit = hanabiConfigInit;
var hanabiDataInit = function () {
    // 初期化
    deck.length = 0;
    players.length = 0;
    fields.length = 0;
    cemetery.length = 0;
    score = 0;
    turn = 0;
    hint = 8;
    miss = 0;
    var _loop_1 = function (i) {
        var color = colorVal[i];
        numVal.forEach(function (num) {
            var hand = { color: color, num: num };
            deck.push(hand);
        });
        fields[i] = { color: color, num: 0 };
        cemetery[i] = { color: color, num: [] };
    };
    for (var i = 0; i < data_1.currentConfig.colorNum; i++) {
        _loop_1(i);
    }
    ;
    (0, utility_1.shuffle)(deck);
    for (var i = 0; i < data_1.userList.length; i++) {
        var user = data_1.userList[i];
        players[i] = { player: user, hands: [] };
        for (var j = 0; j < data_1.currentConfig.handNum; j++) {
            var hand = deck.shift();
            players[i].hands.push(hand);
        }
    }
    (0, utility_1.shuffle)(players);
};
exports.hanabiDataInit = hanabiDataInit;
exports.hanabi = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":getConfig"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setColorNum"), function (colorNum) {
            data_1.currentConfig.colorNum = Number(colorNum);
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setHandNum"), function (handNum) {
            data_1.currentConfig.handNum = Number(handNum);
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":getData"), function () {
            var data = {
                deck: deck,
                players: players,
                fields: fields,
                cemetery: cemetery,
                score: score,
                turn: turn,
                hint: hint,
                miss: miss
            };
            server_1.serverSocket.emit("".concat(eventName, ":getData"), data);
        });
    }
};
