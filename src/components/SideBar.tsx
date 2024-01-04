import React from "react";

import { Fragment, ReactNode } from "react";
import * as rdd from "react-device-detect";
import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  SidebarProps,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import SubItemIcon from "../icons/SubItemIcon";
import { NavItem } from "../types";

const themes: any = {
  light: {
    sidebar: {
      backgroundColor: "#f7f7f9",
      color: "#607489",
    },
    menu: {
      menuContent: "#f7f7f9",
      icon: "#0098e5",
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};
interface SidebarLayoutProps extends SidebarProps {
  expanded?: boolean;
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
  rtl?: boolean;
  theme?: "light" | "dark";
  open: boolean;
  navItems?: NavItem[];
  navList?: string[];
  setOpen?: (e: { key: string; value: boolean }) => any;
  setToggled?: (e: boolean) => any;
  setBroken?: (e: boolean) => any;
  setExpanded?: (e: boolean) => any;
  sidebarHeader?: React.JSX.Element;
  handleLogout?: () => any;
  FooterItems: NavItem[];
  path: string;
  params?: any;
  searchParams?: any;
  id?: string;
  handleRouteChange: (e: string) => any;
}

export default function SidebarLayout({
  expanded = false,
  collapsed = false,
  toggled = false,
  broken = false,
  rtl = false,
  theme = "light",
  open = true,
  navItems = [
    {
      name: `Item 1`, // Random name
      path: `/path1`, // Random path
      icon: (props) => <SubItemIcon {...props} />,
      subItems: [], // Empty array for subItems
      id: "fdsfdsg", // Random id
    },
    {
      name: `Item 2`, // Random name
      path: `/path2`, // Random path
      icon: (props) => <SubItemIcon {...props} />,
      subItems: [], // Empty array for subItems
      id: "tyuktmtk", // Random id
    },
    {
      name: `Item 3`, // Random name
      path: `/path3`, // Random path
      icon: (props) => <SubItemIcon {...props} />,
      subItems: [
        {
          name: "Test 1",
          path: "test/test1",
          icon: SubItemIcon,
        },
        {
          name: "Test 2",
          path: "test/test2",
          icon: SubItemIcon,
        },
        {
          name: "Test 3",
          path: "test/test3",
          icon: SubItemIcon,
        },
      ],
      id: "luiolui;", // Random id
    },
  ],
  navList = ["/path1", "/path2", "/path3"],
  setOpen,
  setToggled,
  setBroken,
  setExpanded,
  sidebarHeader = <div>This is the header</div>,
  handleLogout,
  FooterItems,
  path,
  params,
  searchParams,
  id,
  handleRouteChange,
  ...rest
}: SidebarLayoutProps) {
  const menuItemStyles: MenuItemStyles = {
    root: {
      backgroundColor: "var(--main-bg)", //behind the curve
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      display: collapsed && !expanded ? "none" : undefined,
      marginRight: "25px",
      marginBottom: "4px !important",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? "white" : "transparent",
    }),
    button: () => ({
      padding: "0px 0px",
      margin: "0px 0px",
      height: "35px",
      [`&.${menuClasses.disabled}`]: {
        color: "#9fb6cf",
      },
    }),
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  // Split the URL into parts
  const urlParts = path?.split("/");

  // Extract the first two items
  const firstTwoItems = urlParts?.slice(0, 2).join("/");

  return (
    <div
      className={`flex h-full overflow-auto relative z-[101] `}
      style={{ borderTopRightRadius: 40, borderBottomRightRadius: 40 }}
    >
      {collapsed && !broken && <div className="h-2 w-[83px]" />}
      <Sidebar
        collapsed={collapsed && !expanded}
        toggled={toggled}
        onBackdropClick={() => {
          if (setToggled) setToggled(false);
        }}
        onBreakPoint={(value) => {
          if (setBroken) setBroken(value);
        }}
        rtl={rtl}
        breakPoint="xl"
        backgroundColor={"#003F6D"}
        style={{ borderTopRightRadius: 40, borderBottomRightRadius: 40 }}
        rootStyles={{
          width: "15vw",
          color: themes[theme].sidebar.color,
          border: "none",
          position: collapsed && !broken ? "fixed" : undefined,
          top: collapsed && !broken ? 0 : undefined,
          bottom: collapsed && !broken ? 0 : undefined,
          minHeight: collapsed && !broken ? "100vh" : undefined,
          zIndex: 100,
          boxShadow:
            collapsed && !broken && expanded
              ? "0px 0px 10px #0000001a"
              : undefined,
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={() => {
          if (collapsed && !broken && !rdd.isMobile && setExpanded)
            setExpanded(true);
        }}
        onMouseLeave={() => {
          if (setExpanded) setExpanded(false);
        }}
        {...rest}
      >
        <div
          style={{
            display: "flex",

            backgroundColor: "#003F6D",
            color: "white",
            flexDirection: "column",
            height: "100%",
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            position: "relative",
          }}
          id="noScrollBar"
        >
          {sidebarHeader}
          <div
            style={{
              flex: 1,
              marginBottom: "10px",
              paddingLeft: `${collapsed && !expanded ? "1rem" : "2rem"}`,
              position: "relative",
              top: "-0.7rem",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Menu menuItemStyles={menuItemStyles}>
              {navItems?.map((item: any, index: number) => {
                if (item.subItems) {
                  if (path)
                    return (
                      <div key={index}>
                        <SubMenu
                          style={{
                            backgroundColor: "#003F6D",
                            paddingLeft: 10,
                            borderBottomRightRadius:
                              navList.indexOf(path) -
                                navList.indexOf(`${item.path}`) ==
                              1
                                ? 40
                                : 0,
                            borderTopRightRadius:
                              navList.indexOf(`${item.path}`) -
                                navList.indexOf(path) ==
                              1
                                ? 40
                                : 0,
                          }}
                          label={expanded || !collapsed ? item.name : ""}
                          onClick={() => {
                            if (setOpen)
                              setOpen({
                                key: `${item.path}`,
                                value:
                                  !open[`${item.path}` as keyof typeof open],
                              });
                          }}
                          className=""
                          icon={item.icon({
                            fill: path != `${item.path}` ? "white" : "#003F6D",
                            size: 25,
                          })}
                        >
                          {item.subItems.map((subItem: any, index: number) => {
                            return (
                              <div
                                key={index}
                                className={`${
                                  path == `${item.path}/${subItem.path}`
                                    ? "rounded-l-full overflow-hidden h-10 flex items-center "
                                    : ""
                                }pl-3 `}
                                style={{
                                  backgroundColor:
                                    path === `${item.path}/${subItem.path}` ||
                                    (`${item.path}/${subItem.path}` !== "/" &&
                                      `${item.path}/${subItem.path}` &&
                                      path.includes(
                                        `${item.path}/${subItem.path}`
                                      ))
                                      ? "var(--main-bg)"
                                      : "#003F6D",
                                  borderTopLeftRadius:
                                    path == `${item.path}/${subItem.path}`
                                      ? 9999999
                                      : 0,
                                  borderBottomLeftRadius:
                                    path == `${item.path}/${subItem.path}`
                                      ? 9999999
                                      : 0,
                                  overflow:
                                    path == `${item.path}/${subItem.path}`
                                      ? "hidden"
                                      : "visible",
                                  display:
                                    path == `${item.path}/${subItem.path}`
                                      ? "flex"
                                      : "inherit",
                                  placeItems:
                                    path == `${item.path}/${subItem.path}`
                                      ? "center"
                                      : "inherit",
                                }}
                              >
                                <MenuItem
                                  onClick={() => {
                                    if (subItem.path && item.path) {
                                      if (setToggled) setToggled(false);
                                      if (handleRouteChange)
                                        handleRouteChange(
                                          `${item.path}/${subItem.path}`
                                        );
                                    }
                                  }}
                                  icon={subItem.icon({
                                    size: 25,
                                    fill:
                                      path != `${item.path}/${subItem.path}`
                                        ? "white"
                                        : "#003F6D",
                                  })}
                                  style={{
                                    borderBottomRightRadius:
                                      navList.indexOf(path) -
                                        navList.indexOf(
                                          `${item.path}/${subItem.path}`
                                        ) ==
                                      1
                                        ? 40
                                        : 0,
                                    borderTopRightRadius:
                                      navList.indexOf(
                                        `${item.path}/${subItem.path}`
                                      ) -
                                        navList.indexOf(path) ==
                                      1
                                        ? 40
                                        : 0,
                                    backgroundColor:
                                      path === `${item.path}/${subItem.path}`
                                        ? "var(--main-bg)" //selected item
                                        : "#003F6D",
                                    color:
                                      path != `${item.path}/${subItem.path}`
                                        ? "white"
                                        : "#003F6D",
                                  }}
                                >
                                  {subItem.name}
                                </MenuItem>
                              </div>
                            );
                          })}
                        </SubMenu>
                      </div>
                    );
                } else {
                  if (path)
                    return (
                      <div
                        key={index}
                        className={`${
                          path == item.path ||
                          (firstTwoItems == item.path &&
                            firstTwoItems !== "/broadcast")
                            ? "rounded-l-full overflow-hidden h-10 flex items-center space-y-4 "
                            : ""
                        }pl-2  `}
                        style={{
                          backgroundColor:
                            path === item.path ||
                            (item.path !== "/" &&
                              item.path &&
                              path.includes(item.path))
                              ? "var(--main-bg)"
                              : "#003F6D",
                          borderTopLeftRadius:
                            path == item.path ||
                            (firstTwoItems == item.path &&
                              firstTwoItems !== "/broadcast")
                              ? 9999999
                              : 0,
                          borderBottomLeftRadius:
                            path == item.path ||
                            (firstTwoItems == item.path &&
                              firstTwoItems !== "/broadcast")
                              ? 9999999
                              : 0,
                          overflow:
                            path == item.path ||
                            (firstTwoItems == item.path &&
                              firstTwoItems !== "/broadcast")
                              ? "hidden"
                              : "visible",
                          display:
                            path == item.path ||
                            (firstTwoItems == item.path &&
                              firstTwoItems !== "/broadcast")
                              ? "flex"
                              : "inherit",
                          placeItems:
                            path == item.path ||
                            (firstTwoItems == item.path &&
                              firstTwoItems !== "/broadcast")
                              ? "center"
                              : "inherit",
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            if (item.path) {
                              if (setToggled) setToggled(false);
                              if (handleRouteChange)
                                handleRouteChange(item.path);
                            }
                          }}
                          icon={item.icon({
                            fill:
                              path != item.path &&
                              firstTwoItems &&
                              firstTwoItems != item.path
                                ? "white"
                                : "#003F6D",
                            size: 25,
                          })}
                          style={{
                            borderBottomRightRadius:
                              navList.indexOf(path) -
                                navList.indexOf(`${item.path}`) ==
                                1 ||
                              (firstTwoItems &&
                                firstTwoItems !== "/broadcast" &&
                                navList.indexOf(firstTwoItems) -
                                  navList.indexOf(`${item.path}`) ==
                                  1)
                                ? 40
                                : 0,
                            borderTopRightRadius:
                              navList.indexOf(`${item.path}`) === 0
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
                            backgroundColor:
                              path === item.path ||
                              (item.path !== "/" &&
                                item.path &&
                                path.includes(item.path))
                                ? "var(--main-bg)"
                                : "#003F6D",
                            color:
                              path === item.path ||
                              (item.path !== "/" &&
                                item.path &&
                                path.includes(item.path)) ||
                              (firstTwoItems === item.path &&
                                firstTwoItems !== "/broadcast")
                                ? "#003F6D"
                                : undefined,
                            width: item.name === "" ? "101%" : "",
                          }}
                        >
                          {expanded || !collapsed ? item.name : ""}
                        </MenuItem>
                      </div>
                    );
                }
              })}
            </Menu>
          </div>
          <Menu
            menuItemStyles={menuItemStyles}
            style={{
              marginBottom: "10px",
              paddingLeft: `${collapsed && !expanded ? "1rem" : "2rem"}`,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <div
              style={{
                height: "1.5px",
                backgroundColor: "#4C4E6444",
                margin: "15px auto",
                width:
                  collapsed && !expanded
                    ? "calc(100% - 30px)"
                    : "calc(100% - 40px)",
                transition: "all 0.3s ease-in-out",
              }}
            />
            {FooterItems.map((item: NavItem, index: number) => {
              if (item.subItems) {
                if (path)
                  return (
                    <Fragment key={index}>
                      <SubMenu
                        style={{
                          paddingLeft: 8,
                          backgroundColor: "#003F6D",
                        }}
                        label={expanded || !collapsed ? item.name : ""}
                        onClick={() => {
                          if (setOpen)
                            setOpen({
                              key: `${item.path}`,
                              value: !open[`${item.path}` as keyof typeof open],
                            });
                        }}
                        icon={item.icon({
                          size: 25,
                          fill: path != `${item.path}` ? "white" : "#003F6D",
                        })}
                      >
                        {item.subItems.map((subItem) => {
                          return (
                            <div
                              key={index}
                              className={`${
                                path == `${item.path}/${subItem.path}`
                                  ? "rounded-l-full overflow-hidden h-10 flex items-center "
                                  : ""
                              }pl-3 `}
                              style={{
                                backgroundColor:
                                  path === `${item.path}/${subItem.path}` ||
                                  (`${item.path}/${subItem.path}` !== "/" &&
                                    `${item.path}/${subItem.path}` &&
                                    path.includes(
                                      `${item.path}/${subItem.path}`
                                    ))
                                    ? "var(--main-bg)"
                                    : "#003F6D",
                                borderTopLeftRadius:
                                  path == `${item.path}/${subItem.path}`
                                    ? 9999999
                                    : 0,
                                borderBottomLeftRadius:
                                  path == `${item.path}/${subItem.path}`
                                    ? 9999999
                                    : 0,
                                overflow:
                                  path == `${item.path}/${subItem.path}`
                                    ? "hidden"
                                    : "visible",
                                display:
                                  path == `${item.path}/${subItem.path}`
                                    ? "flex"
                                    : "inherit",
                                placeItems:
                                  path == `${item.path}/${subItem.path}`
                                    ? "center"
                                    : "inherit",
                              }}
                            >
                              <MenuItem
                                key={index}
                                onClick={() => {
                                  if (subItem.path && item.path) {
                                    if (setToggled) setToggled(false);
                                    if (handleRouteChange)
                                      handleRouteChange(
                                        `${item.path}/${subItem.path}`
                                      );
                                  }
                                }}
                                icon={subItem.icon({
                                  size: 25,
                                  fill:
                                    path != `${item.path}/${subItem.path}`
                                      ? "white"
                                      : "#003F6D",
                                })}
                                style={{
                                  borderBottomRightRadius:
                                    navList.indexOf(path) -
                                      navList.indexOf(
                                        `${item.path}/${subItem.path}`
                                      ) ==
                                    1
                                      ? 40
                                      : 0,
                                  borderTopRightRadius:
                                    navList.indexOf(
                                      `${item.path}/${subItem.path}`
                                    ) -
                                      navList.indexOf(path) ==
                                    1
                                      ? 40
                                      : 0,
                                  backgroundColor:
                                    path === `${item.path}/${subItem.path}`
                                      ? "white"
                                      : "#003F6D",
                                  color:
                                    path === `${item.path}/${subItem.path}`
                                      ? "#003F6D"
                                      : undefined,
                                }}
                              >
                                {subItem.name}
                              </MenuItem>
                            </div>
                          );
                        })}
                      </SubMenu>
                    </Fragment>
                  );
              } else {
                if (path)
                  return (
                    <div
                      key={index}
                      className={`${
                        path == item.path
                          ? "rounded-l-full overflow-hidden h-10 flex items-center space-y-4 "
                          : ""
                      }pl-2  `}
                      style={{
                        backgroundColor:
                          path === item.path ||
                          (item.path !== "/" &&
                            item.path &&
                            path.includes(item.path))
                            ? "var(--main-bg)"
                            : "#003F6D",
                        borderTopLeftRadius:
                          path === item.path ||
                          (firstTwoItems == item.path &&
                            firstTwoItems !== "/broadcast")
                            ? 9999999
                            : 0,
                        borderBottomLeftRadius:
                          path === item.path ||
                          (firstTwoItems == item.path &&
                            firstTwoItems !== "/broadcast")
                            ? 9999999
                            : 0,
                        overflow:
                          path === item.path ||
                          (firstTwoItems == item.path &&
                            firstTwoItems !== "/broadcast")
                            ? "hidden"
                            : "visible",
                        display:
                          path === item.path ||
                          (firstTwoItems == item.path &&
                            firstTwoItems !== "/broadcast")
                            ? "flex"
                            : "inherit",
                        placeItems:
                          path === item.path ||
                          (firstTwoItems == item.path &&
                            firstTwoItems !== "/broadcast")
                            ? "center"
                            : "inherit",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          if (item.path) {
                            if (setToggled) setToggled(false);
                            if (handleRouteChange) handleRouteChange(item.path);
                          } else {
                            if (handleLogout) handleLogout();
                          }
                        }}
                        icon={item.icon({
                          fill:
                            path === item.path ||
                            (item.path && path.includes(item.path))
                              ? "#003F6D"
                              : "white",
                        })}
                        style={{
                          backgroundColor:
                            path === item.path ||
                            (item.path && path.includes(item.path))
                              ? "white"
                              : "#003F6D",
                          color:
                            path === item.path ||
                            (item.path && path.includes(item.path))
                              ? "#003F6D"
                              : "white",
                        }}
                      >
                        {expanded || !collapsed ? item.name : ""}
                      </MenuItem>
                    </div>
                  );
              }
            })}
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}
