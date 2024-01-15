"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Button({ text, onClick, style }) {
    return (react_1.default.createElement("div", { onClick: onClick, style: style }, text));
}
exports.default = Button;
//# sourceMappingURL=Button.js.map