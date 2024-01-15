"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_pro_sidebar_1 = require("react-pro-sidebar");
function SimpleSideBar({}) {
    console.log("sidebar is rendering");
    return (react_1.default.createElement(react_pro_sidebar_1.Sidebar, null,
        react_1.default.createElement(react_pro_sidebar_1.Menu, null,
            react_1.default.createElement(react_pro_sidebar_1.SubMenu, { label: "Charts" },
                react_1.default.createElement(react_pro_sidebar_1.MenuItem, null, " Pie charts "),
                react_1.default.createElement(react_pro_sidebar_1.MenuItem, null, " Line charts ")),
            react_1.default.createElement(react_pro_sidebar_1.MenuItem, null, " Documentation "),
            react_1.default.createElement(react_pro_sidebar_1.MenuItem, null, " Calendar "))));
}
exports.default = SimpleSideBar;
//# sourceMappingURL=SimpleSideBar.js.map