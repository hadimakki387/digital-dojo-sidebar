"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const rdd = __importStar(require("react-device-detect"));
const react_pro_sidebar_1 = require("react-pro-sidebar");
const SubItemIcon_1 = __importDefault(require("../icons/SubItemIcon"));
function SidebarLayout(_a) {
    var { expanded = false, collapsed = false, toggled = false, broken = false, rtl = false, theme = "light", open = true, navItems = [
        {
            name: `Item 1`, // Random name
            path: `/path1`, // Random path
            icon: (props) => react_1.default.createElement(SubItemIcon_1.default, Object.assign({}, props)),
            subItems: [], // Empty array for subItems
            id: "fdsfdsg", // Random id
        },
        {
            name: `Item 2`, // Random name
            path: `/path2`, // Random path
            icon: (props) => react_1.default.createElement(SubItemIcon_1.default, Object.assign({}, props)),
            subItems: [], // Empty array for subItems
            id: "tyuktmtk", // Random id
        },
        {
            name: `Item 3`, // Random name
            path: `/path3`, // Random path
            icon: (props) => react_1.default.createElement(SubItemIcon_1.default, Object.assign({}, props)),
            subItems: [
                {
                    name: "Test 1",
                    path: "test/test1",
                    icon: SubItemIcon_1.default,
                },
                {
                    name: "Test 2",
                    path: "test/test2",
                    icon: SubItemIcon_1.default,
                },
                {
                    name: "Test 3",
                    path: "test/test3",
                    icon: SubItemIcon_1.default,
                },
            ],
            id: "luiolui;", // Random id
        },
    ], navList = ["/path1", "/path2", "/path3"], setOpen, setToggled, setBroken, setExpanded, sidebarHeader = react_1.default.createElement("div", null, "This is the header"), handleLogout, FooterItems, path, params, searchParams, id, handleRouteChange, menuItemStyles, themes } = _a, rest = __rest(_a, ["expanded", "collapsed", "toggled", "broken", "rtl", "theme", "open", "navItems", "navList", "setOpen", "setToggled", "setBroken", "setExpanded", "sidebarHeader", "handleLogout", "FooterItems", "path", "params", "searchParams", "id", "handleRouteChange", "menuItemStyles", "themes"]);
    // Split the URL into parts
    const urlParts = path === null || path === void 0 ? void 0 : path.split("/");
    // Extract the first two items
    const firstTwoItems = urlParts === null || urlParts === void 0 ? void 0 : urlParts.slice(0, 2).join("/");
    return (react_1.default.createElement("div", { className: `flex h-full overflow-auto relative z-[101] `, style: { borderTopRightRadius: 40, borderBottomRightRadius: 40 } },
        collapsed && !broken && react_1.default.createElement("div", { className: "h-2 w-[83px]" }),
        react_1.default.createElement(react_pro_sidebar_1.Sidebar, Object.assign({ collapsed: collapsed && !expanded, toggled: toggled, onBackdropClick: () => {
                if (setToggled)
                    setToggled(false);
            }, onBreakPoint: (value) => {
                if (setBroken)
                    setBroken(value);
            }, rtl: rtl, breakPoint: "xl", backgroundColor: "#003F6D", style: { borderTopRightRadius: 40, borderBottomRightRadius: 40 }, rootStyles: {
                width: "15vw",
                color: themes[theme].sidebar.color,
                border: "none",
                position: collapsed && !broken ? "fixed" : undefined,
                top: collapsed && !broken ? 0 : undefined,
                bottom: collapsed && !broken ? 0 : undefined,
                minHeight: collapsed && !broken ? "100vh" : undefined,
                zIndex: 100,
                boxShadow: collapsed && !broken && expanded
                    ? "0px 0px 10px #0000001a"
                    : undefined,
                transition: "all 0.3s ease-in-out",
            }, onMouseEnter: () => {
                if (collapsed && !broken && !rdd.isMobile && setExpanded)
                    setExpanded(true);
            }, onMouseLeave: () => {
                if (setExpanded)
                    setExpanded(false);
            } }, rest),
            react_1.default.createElement("div", { style: {
                    display: "flex",
                    backgroundColor: "#003F6D",
                    color: "white",
                    flexDirection: "column",
                    height: "100%",
                    borderTopRightRadius: 40,
                    borderBottomRightRadius: 40,
                    position: "relative",
                }, id: "noScrollBar" },
                sidebarHeader,
                react_1.default.createElement("div", { style: {
                        flex: 1,
                        marginBottom: "10px",
                        paddingLeft: `${collapsed && !expanded ? "1rem" : "2rem"}`,
                        position: "relative",
                        top: "-0.7rem",
                        transition: "all 0.3s ease-in-out",
                    } },
                    react_1.default.createElement(react_pro_sidebar_1.Menu, { menuItemStyles: menuItemStyles }, navItems === null || navItems === void 0 ? void 0 : navItems.map((item, index) => {
                        if (item.subItems) {
                            if (path)
                                return (react_1.default.createElement("div", { key: index },
                                    react_1.default.createElement(react_pro_sidebar_1.SubMenu, { style: {
                                            backgroundColor: "#003F6D",
                                            paddingLeft: 10,
                                            borderBottomRightRadius: navList.indexOf(path) -
                                                navList.indexOf(`${item.path}`) ==
                                                1
                                                ? 40
                                                : 0,
                                            borderTopRightRadius: navList.indexOf(`${item.path}`) -
                                                navList.indexOf(path) ==
                                                1
                                                ? 40
                                                : 0,
                                        }, label: expanded || !collapsed ? item.name : "", onClick: () => {
                                            if (setOpen)
                                                setOpen({
                                                    key: `${item.path}`,
                                                    value: !open[`${item.path}`],
                                                });
                                        }, className: "", icon: item.icon({
                                            fill: path != `${item.path}` ? "white" : "#003F6D",
                                            size: 25,
                                        }) }, item.subItems.map((subItem, index) => {
                                        return (react_1.default.createElement("div", { key: index, className: `${path == `${item.path}/${subItem.path}`
                                                ? "rounded-l-full overflow-hidden h-10 flex items-center "
                                                : ""}pl-3 `, style: {
                                                backgroundColor: path === `${item.path}/${subItem.path}` ||
                                                    (`${item.path}/${subItem.path}` !== "/" &&
                                                        `${item.path}/${subItem.path}` &&
                                                        path.includes(`${item.path}/${subItem.path}`))
                                                    ? "var(--main-bg)"
                                                    : "#003F6D",
                                                borderTopLeftRadius: path == `${item.path}/${subItem.path}`
                                                    ? 9999999
                                                    : 0,
                                                borderBottomLeftRadius: path == `${item.path}/${subItem.path}`
                                                    ? 9999999
                                                    : 0,
                                                overflow: path == `${item.path}/${subItem.path}`
                                                    ? "hidden"
                                                    : "visible",
                                                display: path == `${item.path}/${subItem.path}`
                                                    ? "flex"
                                                    : "inherit",
                                                placeItems: path == `${item.path}/${subItem.path}`
                                                    ? "center"
                                                    : "inherit",
                                            } },
                                            react_1.default.createElement(react_pro_sidebar_1.MenuItem, { onClick: () => {
                                                    if (subItem.path && item.path) {
                                                        if (setToggled)
                                                            setToggled(false);
                                                        if (handleRouteChange)
                                                            handleRouteChange(`${item.path}/${subItem.path}`);
                                                    }
                                                }, icon: subItem.icon({
                                                    size: 25,
                                                    fill: path != `${item.path}/${subItem.path}`
                                                        ? "white"
                                                        : "#003F6D",
                                                }), style: {
                                                    borderBottomRightRadius: navList.indexOf(path) -
                                                        navList.indexOf(`${item.path}/${subItem.path}`) ==
                                                        1
                                                        ? 40
                                                        : 0,
                                                    borderTopRightRadius: navList.indexOf(`${item.path}/${subItem.path}`) -
                                                        navList.indexOf(path) ==
                                                        1
                                                        ? 40
                                                        : 0,
                                                    backgroundColor: path === `${item.path}/${subItem.path}`
                                                        ? "var(--main-bg)" //selected item
                                                        : "#003F6D",
                                                    color: path != `${item.path}/${subItem.path}`
                                                        ? "white"
                                                        : "#003F6D",
                                                } }, subItem.name)));
                                    }))));
                        }
                        else {
                            if (path)
                                return (react_1.default.createElement("div", { key: index, className: `${path == item.path ||
                                        (firstTwoItems == item.path &&
                                            firstTwoItems !== "/broadcast")
                                        ? "rounded-l-full overflow-hidden h-10 flex items-center space-y-4 "
                                        : ""}pl-2  `, style: {
                                        backgroundColor: path === item.path ||
                                            (item.path !== "/" &&
                                                item.path &&
                                                path.includes(item.path))
                                            ? "var(--main-bg)"
                                            : "#003F6D",
                                        borderTopLeftRadius: path == item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? 9999999
                                            : 0,
                                        borderBottomLeftRadius: path == item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? 9999999
                                            : 0,
                                        overflow: path == item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? "hidden"
                                            : "visible",
                                        display: path == item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? "flex"
                                            : "inherit",
                                        placeItems: path == item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? "center"
                                            : "inherit",
                                    } },
                                    react_1.default.createElement(react_pro_sidebar_1.MenuItem, { onClick: () => {
                                            if (item.path) {
                                                if (setToggled)
                                                    setToggled(false);
                                                if (handleRouteChange)
                                                    handleRouteChange(item.path);
                                            }
                                        }, icon: item.icon({
                                            fill: path != item.path &&
                                                firstTwoItems &&
                                                firstTwoItems != item.path
                                                ? "white"
                                                : "#003F6D",
                                            size: 25,
                                        }), style: {
                                            borderBottomRightRadius: navList.indexOf(path) -
                                                navList.indexOf(`${item.path}`) ==
                                                1 ||
                                                (firstTwoItems &&
                                                    firstTwoItems !== "/broadcast" &&
                                                    navList.indexOf(firstTwoItems) -
                                                        navList.indexOf(`${item.path}`) ==
                                                        1)
                                                ? 40
                                                : 0,
                                            borderTopRightRadius: navList.indexOf(`${item.path}`) === 0
                                                ? 0
                                                : navList.indexOf(`${item.path}`) -
                                                    navList.indexOf(path) ==
                                                    1 ||
                                                    (firstTwoItems &&
                                                        firstTwoItems !== "/broadcast" &&
                                                        navList.indexOf(`${item.path}`) -
                                                            navList.indexOf(firstTwoItems) ==
                                                            1)
                                                    ? 40
                                                    : 0,
                                            backgroundColor: path === item.path ||
                                                (item.path !== "/" &&
                                                    item.path &&
                                                    path.includes(item.path))
                                                ? "var(--main-bg)"
                                                : "#003F6D",
                                            color: path === item.path ||
                                                (item.path !== "/" &&
                                                    item.path &&
                                                    path.includes(item.path)) ||
                                                (firstTwoItems === item.path &&
                                                    firstTwoItems !== "/broadcast")
                                                ? "#003F6D"
                                                : undefined,
                                            width: item.name === "" ? "101%" : "",
                                        } }, expanded || !collapsed ? item.name : "")));
                        }
                    }))),
                react_1.default.createElement(react_pro_sidebar_1.Menu, { menuItemStyles: menuItemStyles, style: {
                        marginBottom: "10px",
                        paddingLeft: `${collapsed && !expanded ? "1rem" : "2rem"}`,
                        transition: "all 0.3s ease-in-out",
                    } },
                    react_1.default.createElement("div", { style: {
                            height: "1.5px",
                            backgroundColor: "#4C4E6444",
                            margin: "15px auto",
                            width: collapsed && !expanded
                                ? "calc(100% - 30px)"
                                : "calc(100% - 40px)",
                            transition: "all 0.3s ease-in-out",
                        } }),
                    FooterItems.map((item, index) => {
                        if (item.subItems) {
                            if (path)
                                return (react_1.default.createElement(react_2.Fragment, { key: index },
                                    react_1.default.createElement(react_pro_sidebar_1.SubMenu, { style: {
                                            paddingLeft: 8,
                                            backgroundColor: "#003F6D",
                                        }, label: expanded || !collapsed ? item.name : "", onClick: () => {
                                            if (setOpen)
                                                setOpen({
                                                    key: `${item.path}`,
                                                    value: !open[`${item.path}`],
                                                });
                                        }, icon: item.icon({
                                            size: 25,
                                            fill: path != `${item.path}` ? "white" : "#003F6D",
                                        }) }, item.subItems.map((subItem) => {
                                        return (react_1.default.createElement("div", { key: index, className: `${path == `${item.path}/${subItem.path}`
                                                ? "rounded-l-full overflow-hidden h-10 flex items-center "
                                                : ""}pl-3 `, style: {
                                                backgroundColor: path === `${item.path}/${subItem.path}` ||
                                                    (`${item.path}/${subItem.path}` !== "/" &&
                                                        `${item.path}/${subItem.path}` &&
                                                        path.includes(`${item.path}/${subItem.path}`))
                                                    ? "var(--main-bg)"
                                                    : "#003F6D",
                                                borderTopLeftRadius: path == `${item.path}/${subItem.path}`
                                                    ? 9999999
                                                    : 0,
                                                borderBottomLeftRadius: path == `${item.path}/${subItem.path}`
                                                    ? 9999999
                                                    : 0,
                                                overflow: path == `${item.path}/${subItem.path}`
                                                    ? "hidden"
                                                    : "visible",
                                                display: path == `${item.path}/${subItem.path}`
                                                    ? "flex"
                                                    : "inherit",
                                                placeItems: path == `${item.path}/${subItem.path}`
                                                    ? "center"
                                                    : "inherit",
                                            } },
                                            react_1.default.createElement(react_pro_sidebar_1.MenuItem, { key: index, onClick: () => {
                                                    if (subItem.path && item.path) {
                                                        if (setToggled)
                                                            setToggled(false);
                                                        if (handleRouteChange)
                                                            handleRouteChange(`${item.path}/${subItem.path}`);
                                                    }
                                                }, icon: subItem.icon({
                                                    size: 25,
                                                    fill: path != `${item.path}/${subItem.path}`
                                                        ? "white"
                                                        : "#003F6D",
                                                }), style: {
                                                    borderBottomRightRadius: navList.indexOf(path) -
                                                        navList.indexOf(`${item.path}/${subItem.path}`) ==
                                                        1
                                                        ? 40
                                                        : 0,
                                                    borderTopRightRadius: navList.indexOf(`${item.path}/${subItem.path}`) -
                                                        navList.indexOf(path) ==
                                                        1
                                                        ? 40
                                                        : 0,
                                                    backgroundColor: path === `${item.path}/${subItem.path}`
                                                        ? "white"
                                                        : "#003F6D",
                                                    color: path === `${item.path}/${subItem.path}`
                                                        ? "#003F6D"
                                                        : undefined,
                                                } }, subItem.name)));
                                    }))));
                        }
                        else {
                            if (path)
                                return (react_1.default.createElement("div", { key: index, className: `${path == item.path
                                        ? "rounded-l-full overflow-hidden h-10 flex items-center space-y-4 "
                                        : ""}pl-2  `, style: {
                                        backgroundColor: path === item.path ||
                                            (item.path !== "/" &&
                                                item.path &&
                                                path.includes(item.path))
                                            ? "var(--main-bg)"
                                            : "#003F6D",
                                        borderTopLeftRadius: path === item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? 9999999
                                            : 0,
                                        borderBottomLeftRadius: path === item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? 9999999
                                            : 0,
                                        overflow: path === item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? "hidden"
                                            : "visible",
                                        display: path === item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? "flex"
                                            : "inherit",
                                        placeItems: path === item.path ||
                                            (firstTwoItems == item.path &&
                                                firstTwoItems !== "/broadcast")
                                            ? "center"
                                            : "inherit",
                                    } },
                                    react_1.default.createElement(react_pro_sidebar_1.MenuItem, { onClick: () => {
                                            if (item.path) {
                                                if (setToggled)
                                                    setToggled(false);
                                                if (handleRouteChange)
                                                    handleRouteChange(item.path);
                                            }
                                            else {
                                                if (handleLogout)
                                                    handleLogout();
                                            }
                                        }, icon: item.icon({
                                            fill: path === item.path ||
                                                (item.path && path.includes(item.path))
                                                ? "#003F6D"
                                                : "white",
                                        }), style: {
                                            backgroundColor: path === item.path ||
                                                (item.path && path.includes(item.path))
                                                ? "white"
                                                : "#003F6D",
                                            color: path === item.path ||
                                                (item.path && path.includes(item.path))
                                                ? "#003F6D"
                                                : "white",
                                        } }, expanded || !collapsed ? item.name : "")));
                        }
                    }))))));
}
exports.default = SidebarLayout;
//# sourceMappingURL=SideBar.js.map