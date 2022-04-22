"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hot_loader_1 = require("react-hot-loader");
var react_1 = __importDefault(require("react"));
var App = function () {
    var _a = react_1.default.useState(0), count = _a[0], setCount = _a[1];
    var increment = function () {
        setCount(function (count) { return count + 1; });
    };
    var decrement = function () {
        setCount(function (count) { return count - 1; });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null,
            "Number: ",
            react_1.default.createElement("b", null, count)),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { onClick: function () { return increment(); } }, "Increment"),
        ' ',
        react_1.default.createElement("button", { onClick: function () { return decrement(); } }, "Decrement"),
        ' '));
};
exports.default = (0, react_hot_loader_1.hot)(module)(App);
