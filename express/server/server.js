"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = exports.serverSocket = void 0;
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var common_1 = require("./common");
var kowloonTactics_1 = require("./game/kowloonTactics");
var hanabi_1 = require("./game/hanabi");
var fakeArtist_1 = require("./game/fakeArtist");
var theGame_1 = require("./game/theGame");
var app = (0, express_1.default)(), server = http_1.default.createServer(app), PORT = process.env.PORT || 8080;
exports.serverSocket = new socket_io_1.default.Server(server);
app
    .use(express_1.default.static('dist'))
    .get('/', function (req, res) { return res.render(__dirname + './index.html'); });
server.listen(PORT, function () {
    console.log("Listening on ".concat(PORT, " \n access to http://localhost:").concat(PORT, "/"));
});
exports.serverSocket.on('connection', function (connect) {
    exports.socket = connect;
    common_1.common.init();
    kowloonTactics_1.kowloonTactics.init();
    hanabi_1.hanabi.init();
    fakeArtist_1.fakeArtist.init();
    theGame_1.theGame.init();
    // socket.on('disconnect', () => {
    //   const removeConnectIndex = connectList.findIndex(v => v.socketId === socket.id)
    //   if (removeConnectIndex === -1) return;
    //   const userId = connectList[removeConnectIndex].userId;
    //   const removeUserIndex = userList.findIndex(v => v.id === userId);
    //   connectList.splice(removeConnectIndex, 1);
    //   userList.splice(removeUserIndex, 1);
    //   serverSocket.emit('common:getUser', userList);
    // })
});
