"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theGame = exports.theGameDataInit = exports.theGameConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var utility_1 = require("../utility");
/**
 * Variable
*/
var eventName = 'theGame';
var deckLength = 98;
var handLength = 6;
/**
 * Type
*/
/**
 * Data
*/
var gameData = {
    playerList: [],
    fieldCards: [[], [], [], []],
    deck: [],
    score: 0,
    turn: 0,
};
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
    gameData.playerList.length = 0;
    gameData.fieldCards[0].length = 0;
    gameData.fieldCards[1].length = 0;
    gameData.fieldCards[2].length = 0;
    gameData.fieldCards[3].length = 0;
    gameData.deck.length = 0;
    gameData.score = 0;
    gameData.turn = 0;
    __spreadArray([], Array(deckLength), true).map(function (_, i) { return gameData.deck.push(i + 2); });
    (0, utility_1.shuffle)(gameData.deck);
    var copyUserList = __spreadArray([], data_1.userList, true);
    var _loop_1 = function (i) {
        var player = {
            user: copyUserList[i],
            hand: []
        };
        __spreadArray([], Array(handLength), true).map(function () { return player.hand.push(gameData.deck.shift()); });
        gameData.playerList.push(player);
    };
    for (var i = 0; i < copyUserList.length; i++) {
        _loop_1(i);
    }
    (0, utility_1.shuffle)(gameData.playerList);
};
exports.theGameDataInit = theGameDataInit;
exports.theGame = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":getData"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":playCard"), function (data) {
            var player = gameData.playerList.find(function (p) { return p.user.id === data.userId; });
            // 選んだ手札をフィールドに移動
            var selectHand = player.hand.splice(data.selectIndex, 1)[0];
            var selectField = gameData.fieldCards[data.fieldIndex];
            if (selectField.length === 5)
                selectField.shift();
            selectField.push(selectHand);
            // scoreの更新
            gameData.score += 1;
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":turnFinish"), function () {
            // 手札の補充
            var player = gameData.playerList[gameData.turn];
            while (player.hand.length < 6 && gameData.deck.length) {
                var newHand = gameData.deck.shift();
                player.hand.push(newHand);
            }
            // turnの更新
            var playerLength = gameData.playerList.length;
            gameData.turn = gameData.turn === playerLength - 1 ? 0 : gameData.turn + 1;
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
    }
};
