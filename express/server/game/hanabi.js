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
var gameData = {
    deck: [],
    players: [],
    fields: [],
    cemetery: [],
    score: 0,
    turn: 0,
    extra: 6,
    hint: 8,
    miss: 0
};
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
    gameData.deck.length = 0;
    gameData.players.length = 0;
    gameData.fields.length = 0;
    gameData.cemetery.length = 0;
    gameData.score = 0;
    gameData.turn = 0;
    gameData.extra = 6;
    gameData.hint = 8;
    gameData.miss = 0;
    var _loop_1 = function (i) {
        var color = colorVal[i];
        numVal.forEach(function (num) {
            var hand = { color: color, num: num };
            gameData.deck.push(hand);
        });
        gameData.fields[i] = { color: color, num: 0 };
        gameData.cemetery[i] = { color: color, num: [] };
    };
    for (var i = 0; i < data_1.currentConfig.colorNum; i++) {
        _loop_1(i);
    }
    ;
    (0, utility_1.shuffle)(gameData.deck);
    for (var i = 0; i < data_1.userList.length; i++) {
        var user = data_1.userList[i];
        gameData.players[i] = { player: user, hands: [] };
        for (var j = 0; j < data_1.currentConfig.handNum; j++) {
            var hand = gameData.deck.shift();
            hand.colorHint = false;
            hand.numHint = false;
            gameData.players[i].hands.push(hand);
        }
    }
    (0, utility_1.shuffle)(gameData.players);
};
exports.hanabiDataInit = hanabiDataInit;
var useHand = function (player, selectIndex) {
    player.hands.splice(selectIndex, 1);
    var newHand = gameData.deck.shift();
    if (newHand) {
        newHand.colorHint = false;
        newHand.numHint = false;
        player.hands.push(newHand);
    }
};
var moveCemetery = function (targetColor, hand) {
    var cemeteryColor = gameData.cemetery.find(function (v) { return v.color === targetColor.color; });
    cemeteryColor.num.push(hand.num);
    cemeteryColor.num.sort(function (a, b) { return a - b; });
};
var changeTurn = function () {
    var playerLength = gameData.players.length;
    gameData.turn = gameData.turn === playerLength - 1 ? 0 : gameData.turn + 1;
    if (gameData.deck.length === 0) {
        gameData.extra -= 1;
    }
};
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
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":playHand"), function (select) {
            var player = gameData.players[select.player];
            var hand = player.hands[select.index];
            var targetColor = gameData.fields.find(function (v) { return v.color === hand.color; });
            var action = null;
            // 数字チェック
            if (targetColor.num === hand.num - 1) {
                targetColor.num += 1;
                gameData.score += 1;
                if (hand.num === 5 && gameData.hint !== 8)
                    gameData.hint += 1;
            }
            else {
                gameData.miss += 1;
                moveCemetery(targetColor, hand);
                // ゲームオーバー
                if (gameData.miss === 3) {
                    gameData.turn = 999;
                    action = 'gameover';
                }
                else {
                    action = 'miss';
                }
            }
            useHand(player, select.index);
            changeTurn();
            if (gameData.extra === 0) {
                gameData.turn = 999;
                action = 'finish';
            }
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData, action);
        });
        server_1.socket.on("".concat(eventName, ":discardHand"), function (select) {
            var player = gameData.players[select.player];
            var hand = player.hands[select.index];
            var targetColor = gameData.fields.find(function (v) { return v.color === hand.color; });
            var action = null;
            moveCemetery(targetColor, hand);
            // ヒントの回復
            if (gameData.hint !== 8)
                gameData.hint += 1;
            useHand(player, select.index);
            changeTurn();
            if (gameData.extra === 0) {
                gameData.turn = 999;
                action = 'finish';
            }
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData, action);
        });
        server_1.socket.on("".concat(eventName, ":colorHint"), function (select) {
            var player = gameData.players[select.player];
            var color = player.hands[select.index].color;
            var action = null;
            player.hands.forEach(function (hand) {
                if (hand.color === color)
                    hand.colorHint = true;
            });
            // ヒントの消費
            gameData.hint -= 1;
            changeTurn();
            if (gameData.extra === 0) {
                gameData.turn = 999;
                action = 'finish';
            }
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData, action);
        });
        server_1.socket.on("".concat(eventName, ":numHint"), function (select) {
            var player = gameData.players[select.player];
            var num = player.hands[select.index].num;
            var action = null;
            player.hands.forEach(function (hand) {
                if (hand.num === num)
                    hand.numHint = true;
            });
            // ヒントの消費
            gameData.hint -= 1;
            changeTurn();
            if (gameData.extra === 0) {
                gameData.turn = 999;
                action = 'finish';
            }
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData, action);
        });
    }
};
