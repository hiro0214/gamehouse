"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
var server_1 = require("./server");
var data_1 = require("./data");
var kowloonTactics_1 = require("./game/kowloonTactics");
var hanabi_1 = require("./game/hanabi");
var fakeArtist_1 = require("./game/fakeArtist");
var eventName = 'common';
exports.common = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":newUser"), function (newUser) {
            var newConnect = {
                socketId: server_1.socket.id,
                userId: newUser.id
            };
            data_1.connectList.push(newConnect);
            data_1.userList.push(newUser);
        });
        server_1.socket.on("".concat(eventName, ":clearUser"), function () {
            data_1.connectList.length = 0;
            data_1.userList.length = 0;
        });
        server_1.socket.on("".concat(eventName, ":getUser"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getUser"), data_1.userList);
        });
        server_1.socket.on("".concat(eventName, ":getCurrentGame"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getCurrentGame"), data_1.currentGame);
        });
        server_1.socket.on("".concat(eventName, ":getCurrentConfig"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getCurrentConfig"), data_1.currentConfig);
        });
        server_1.socket.on("".concat(eventName, ":setCurrentGame"), function (game) {
            if (game) {
                (0, data_1.setCurrentGame)(game);
                (0, data_1.initConfig)(game);
            }
            else {
                (0, data_1.setCurrentGame)(null);
            }
            server_1.serverSocket.emit("".concat(eventName, ":setCurrentGame"), data_1.currentGame);
        });
        server_1.socket.on("".concat(eventName, ":updateInfo"), function (data) {
            var targetIndex = data_1.userList.findIndex(function (user) { return user.id === data.id; });
            data_1.userList[targetIndex] = data;
            server_1.serverSocket.emit("".concat(eventName, ":getUser"), data_1.userList);
        });
        server_1.socket.on("".concat(eventName, ":gameStart"), function () {
            switch (data_1.currentGame) {
                case 'クーロンタクティクス':
                    (0, kowloonTactics_1.kowloonTacticsDataInit)();
                    break;
                case 'Hanabi':
                    (0, hanabi_1.hanabiDataInit)();
                    break;
                case 'エセ芸術家 ニューヨークへ行く':
                    (0, fakeArtist_1.fakeArtistDataInit)();
                    break;
            }
            server_1.serverSocket.emit("".concat(eventName, ":gameStart"), (data_1.currentGame));
        });
        server_1.socket.on("".concat(eventName, ":toLobby"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":toLobby"));
        });
    }
};
