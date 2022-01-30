"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = exports.serverSocket = void 0;
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var data_1 = require("./data");
var common_1 = require("./common");
var kowloonTactics_1 = require("./game/kowloonTactics");
var hanabi_1 = require("./game/hanabi");
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
    exports.socket.on('disconnect', function () {
        var removeConnectIndex = data_1.connectList.findIndex(function (v) { return v.socketId === exports.socket.id; });
        if (removeConnectIndex === -1)
            return;
        var userId = data_1.connectList[removeConnectIndex].userId;
        var removeUserIndex = data_1.userList.findIndex(function (v) { return v.id === userId; });
        data_1.connectList.splice(removeConnectIndex, 1);
        data_1.userList.splice(removeUserIndex, 1);
        exports.serverSocket.emit('common:getUser', data_1.userList);
    });
});
