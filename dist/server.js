"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)(), PORT = process.env.PORT || 8000;
app
    .use(express_1.default.static('dist'))
    .get('/', function (req, res) { return res.render(__dirname + './index.html'); });
app.listen(PORT, function () {
    console.log("Listening on " + PORT + " \n access to http://localhost:" + PORT + "/");
});
