"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeArtist = exports.fakeArtistDataInit = exports.fakeArtistConfigInit = void 0;
var server_1 = require("../server");
var data_1 = require("../data");
/**
 * Variable
*/
var eventName = 'fakeArtist';
var context = '';
/**
 * Data
*/
/**
 * Function
*/
var fakeArtistConfigInit = function () {
    var initialConfig = null;
    (0, data_1.setCurrentConfig)(initialConfig);
};
exports.fakeArtistConfigInit = fakeArtistConfigInit;
var fakeArtistDataInit = function () {
    // const initialData: fakeArtistData 
};
exports.fakeArtistDataInit = fakeArtistDataInit;
exports.fakeArtist = {
    init: function () {
        server_1.socket.on("".concat(eventName, ":hoge"), function (imgContext) {
            context = imgContext;
            server_1.serverSocket.emit("".concat(eventName, ":fuga"), context);
        });
    }
};
