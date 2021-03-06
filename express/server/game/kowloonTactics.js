"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kowloonTactics = exports.kowloonTacticsDataInit = exports.kowloonTacticsConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var utility_1 = require("../utility");
var eventName = 'kowloonTactics', judgeArray = [];
var gameData = {}, turn = 'red', redHand = 0, blueHand = 0;
var kowloonTacticsConfigInit = function () {
    var initialConfig = {
        redPlayer: {
            id: '',
            name: '',
            icon: '',
            isAdmin: false
        },
        bluePlayer: {
            id: '',
            name: '',
            icon: '',
            isAdmin: false
        },
        redSupporter: [],
        blueSupporter: []
    };
    var random = Math.floor(Math.random() * 2);
    turn = random === 0 ? 'red' : 'blue';
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.kowloonTacticsConfigInit = kowloonTacticsConfigInit;
var kowloonTacticsDataInit = function () {
    var initialData = {
        redPlayer: {
            "hand": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "field": []
        },
        bluePlayer: {
            "hand": [1, 2, 3, 4, 5, 6, 7, 8, 9],
            "field": []
        }
    };
    (0, utility_1.shuffle)(initialData.redPlayer.hand);
    (0, utility_1.shuffle)(initialData.bluePlayer.hand);
    gameData = initialData;
    judgeArray.length = 0;
};
exports.kowloonTacticsDataInit = kowloonTacticsDataInit;
var includeCheck = function (user) {
    var initial = {
        id: '',
        name: '',
        icon: '',
        isAdmin: false
    };
    if (data_1.currentConfig.redPlayer.id === user.id) {
        data_1.currentConfig.redPlayer = initial;
    }
    else if (data_1.currentConfig.bluePlayer.id === user.id) {
        data_1.currentConfig.bluePlayer = initial;
    }
    else if (data_1.currentConfig.redSupporter.some(function (v) { return v.id === user.id; })) {
        var index = data_1.currentConfig.redSupporter.findIndex(function (_a) {
            var id = _a.id;
            return id === user.id;
        });
        data_1.currentConfig.redSupporter.splice(index, 1);
    }
    else if (data_1.currentConfig.blueSupporter.some(function (v) { return v.id === user.id; })) {
        var index = data_1.currentConfig.blueSupporter.findIndex(function (_a) {
            var id = _a.id;
            return id === user.id;
        });
        data_1.currentConfig.blueSupporter.splice(index, 1);
    }
};
var reverseTurn = function (turn) {
    return turn === 'red' ? 'blue' : 'red';
};
exports.kowloonTactics = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":updateConfig"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setRedPlayer"), function (user) {
            includeCheck(user);
            data_1.currentConfig.redPlayer = user;
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setBluePlayer"), function (user) {
            includeCheck(user);
            data_1.currentConfig.bluePlayer = user;
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setRedSupporter"), function (user) {
            includeCheck(user);
            data_1.currentConfig.redSupporter.push(user);
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setBlueSupporter"), function (user) {
            includeCheck(user);
            data_1.currentConfig.blueSupporter.push(user);
            server_1.serverSocket.emit("".concat(eventName, ":updateConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":getData"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":getTurn"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getTurn"), turn);
        });
        server_1.socket.on("".concat(eventName, ":selectHand"), function (req) {
            var user = req[0], index = req[1];
            if (data_1.currentConfig.redPlayer.id === user.id) {
                var selectHand = gameData.redPlayer.hand.splice(index, 1)[0];
                gameData.redPlayer.field.push(selectHand);
                redHand = selectHand;
            }
            else if (data_1.currentConfig.bluePlayer.id === user.id) {
                var selectHand = gameData.bluePlayer.hand.splice(index, 1)[0];
                gameData.bluePlayer.field.push(selectHand);
                blueHand = selectHand;
            }
            if (redHand !== 0 && blueHand !== 0) {
                var judge = redHand === 1 && blueHand === 9 ? 'red' :
                    redHand === 9 && blueHand === 1 ? 'blue' :
                        redHand > blueHand ? 'red' :
                            redHand < blueHand ? 'blue' :
                                'draw';
                redHand = 0;
                blueHand = 0;
                judgeArray.push(judge);
                turn =
                    judge === 'red' ? 'red' :
                        judge === 'blue' ? 'blue' :
                            reverseTurn(turn);
                var isFinish_1 = judgeArray.length === 9 && true;
                server_1.serverSocket.emit("".concat(eventName, ":checkAnimate"));
                setTimeout(function () {
                    server_1.serverSocket.emit("".concat(eventName, ":getJudge"), [judgeArray, isFinish_1]);
                    server_1.serverSocket.emit("".concat(eventName, ":getTurn"), turn);
                }, 4000);
            }
            else {
                turn = reverseTurn(turn);
                server_1.serverSocket.emit("".concat(eventName, ":getTurn"), turn);
            }
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
    }
};
