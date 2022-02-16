"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeArtist = exports.fakeArtistDataInit = exports.fakeArtistConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var utility_1 = require("../utility");
/**
 * Variable
*/
var eventName = 'fakeArtist', colors = ['#ff0f0f', '#0f0fff', '#0fff0f', '#ffff05', '#ff840a', '#ff0aff', '#0affff', '#840aff', '#bc611e', '#ff9498', '#00afcc', '#9cbb1c', '#003f8e'];
/**
 * Data
*/
var gameData = {
    players: [],
    fakeMan: 0,
    colors: colors,
    category: '',
    theme: '',
    context: '',
    turn: 0
};
var lap = 0;
/**
 * Theme
*/
var themeList = [
    {
        category: '海の生き物',
        theme: ['イルカ', 'タコ', 'イカ']
    },
    {
        category: '建物',
        theme: ['スカイツリー', '万里の長城', '凱旋門']
    }
];
/**
 * Function
*/
var fakeArtistConfigInit = function () {
    var initialConfig = null;
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.fakeArtistConfigInit = fakeArtistConfigInit;
var fakeArtistDataInit = function () {
    // 初期化
    gameData.players = data_1.userList;
    gameData.fakeMan = 0;
    gameData.category = '';
    gameData.theme = '';
    gameData.context = '';
    gameData.turn = 0;
    var targetCategory = themeList[(0, utility_1.randomInt)(themeList.length)];
    gameData.category = targetCategory.category;
    gameData.theme = targetCategory.theme[(0, utility_1.randomInt)(targetCategory.theme.length)];
    (0, utility_1.shuffle)(gameData.players);
    gameData.fakeMan = (0, utility_1.randomInt)(data_1.userList.length);
    (0, utility_1.shuffle)(gameData.colors);
};
exports.fakeArtistDataInit = fakeArtistDataInit;
exports.fakeArtist = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":getData"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":draw"), function (imgContext) {
            gameData.context = imgContext;
            if (gameData.turn === gameData.players.length - 1) {
                gameData.turn = 0;
                lap += 1;
            }
            else {
                gameData.turn += 1;
            }
            if (lap < 2) {
                server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
            }
            else {
                server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
                server_1.serverSocket.emit("".concat(eventName, ":vote"));
            }
        });
    }
};
