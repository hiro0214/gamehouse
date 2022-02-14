"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeArtist = exports.fakeArtistDataInit = exports.fakeArtistConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
var utility_1 = require("../utility");
/**
 * Variable
*/
var eventName = 'fakeArtist';
/**
 * Data
*/
var gameData = {
    players: [],
    fakeMan: 0,
    category: '',
    theme: '',
    context: '',
    turn: 0
};
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
};
exports.fakeArtistDataInit = fakeArtistDataInit;
exports.fakeArtist = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":getData"), function () {
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
        server_1.socket.on("".concat(eventName, ":hoge"), function (imgContext) {
            gameData.context = imgContext;
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
        });
    }
};
