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
    turn: 0,
    mostVote: '',
    answerList: [],
    answer: ''
};
var voteArray = [];
var lap = 0;
/**
 * Theme
*/
var themeList = [
    // {
    //   category: '海の生き物',
    //   theme: ['イルカ', 'タコ', 'イカ']
    // },
    // {
    //   category: '建物',
    //   theme: ['スカイツリー', '万里の長城', '凱旋門']
    // }
    {
        category: 'sampleA',
        theme: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    },
    {
        category: 'sampleB',
        theme: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
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
    gameData.mostVote = '';
    gameData.answerList = [];
    gameData.answer = '';
    lap = 0;
    voteArray.length = 0;
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
        server_1.socket.on("".concat(eventName, ":vote"), function (index) {
            var votePlayer = gameData.players[index].name;
            voteArray.push(votePlayer);
            if (voteArray.length !== gameData.players.length)
                return;
            var obj = {};
            for (var i = 0; i < voteArray.length; i++) {
                obj[voteArray[i]] = obj[voteArray[i]] ? obj[voteArray[i]] + 1 : 1;
            }
            var val = Object.values(obj), key = Object.keys(obj), maxIndex = val.indexOf(Math.max.apply(Math, val));
            gameData.mostVote = key[maxIndex];
            server_1.serverSocket.emit("".concat(eventName, ":getData"), gameData);
            server_1.serverSocket.emit("".concat(eventName, ":voted"));
            setTimeout(function () {
                gameData.mostVote === gameData.players[gameData.fakeMan].name
                    ? reversalReady()
                    : server_1.serverSocket.emit("".concat(eventName, ":finish"), gameData);
            }, 20500);
        });
        var reversalReady = function () {
            var category = themeList.find(function (v) { return v.category === gameData.category; });
            var answerIndex = category.theme.findIndex(function (v) { return v === gameData.theme; });
            gameData.answerList.push(category.theme.splice(answerIndex, 1)[0]);
            while (gameData.answerList.length <= 17) {
                var random = (0, utility_1.randomInt)(category.theme.length);
                gameData.answerList.push(category.theme.splice(random, 1)[0]);
            }
            (0, utility_1.shuffle)(gameData.answerList);
            server_1.serverSocket.emit("".concat(eventName, ":reversal"), gameData);
        };
        server_1.socket.on("".concat(eventName, ":answer"), function (index) {
            gameData.answer = gameData.answerList[index];
            server_1.serverSocket.emit("".concat(eventName, ":answer"), gameData);
            setTimeout(function () { return server_1.serverSocket.emit("".concat(eventName, ":finish"), gameData); }, 12000);
        });
    }
};
