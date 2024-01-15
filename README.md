
# Digital-dojo-sidebar

This is the sidebar with curves for the digital dojo company

## Installation

Install digital-dojo-sidebar with npm

```bash
  npm install digital-dojo-sidebar 
```
Or using yarn

```bash
  yarn add digital-dojo-sidebar 
```
    
## API Reference

### The items to run
#### Consists of 3 parts : navItems and footer items and navLists and should be in the same order together
#### Nav items and Footer items props:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required** 
| `path` | `string` | **Optional** 
| `icon` | `string` | **Required** 
| `suffix` | `string` | **Optional** 
| `subItems` | `string` | **Optional** 
| `id` | `string` | **Optional** 
| `action` | `string` | **Optional** 

#### Nav List:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `paths`      | `Array of strings` | **Required**. Id of item to fetch |

#### example: ["/path1","/path2"]

#### Other Props:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `expanded`      | `boolean` | **Optional** Default false |
| `collapsed`      | `boolean` | **Optional** Default false |
| `toggled`      | `boolean` | **Optional** Default false |
| `broken`      | `boolean` | **Optional** Default false |
| `rtl`      | `boolean` | **Optional** Default false |
| `theme`      | `string` | **Optional** light or dark |
| `open`      | `boolean` | **Optional** Default true |
| `navItems`      | `NavItem[]` | **Required** |
| `navList`      | `string[]` | **Required** |
| `setOpen()`      | `(e:boolean)=>any` | **Optional** |
| `setToggled()`      | `(e:boolean)=>any` | **Optional** |
| `setBroken()`      | `(e:boolean)=>any` | **Optional** |
| `setExpanded()`      | `(e:boolean)=>any` | **Optional** |
| `sidebarHeader`      | `React.JSX.Element` | **Optional** |
| `handleLogout()`      | `()=>any` | **Optional** |
| `FooterItems`      | `NavItem[]` | **Required** |
| `path`      | `string` | **Required** "/path" |
| `params`      | `any` | **Optional** useParams() from nextJs |
| `searchParams`      | `any` | **Optional** useSearchParams |
| `id`      | `string` | **Required** id from the current route |
| `handleRouteChange()`      | `(e:string)=>any` | **Required** |
| `menuItemStyles`      | `MenuItemStyles` | **Required** |
| `themes`      | `any` | **Required** |




## Usage/Example

```javascript
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
  ]
```
```javascript
navList = ["/path1", "/path2", "/path3"]
```

```javascript
import { SidebarLayout } from "digital-dojo-sidebar/dist";

function App() {
    return (
    <div className="h-screen">
      <LogoutDialog />
      <SidebarLayout
        open={true}
        navItems={translatedNavItems}
        navList={navList}
        FooterItems={translatedFooterItems as any}
        path={path || "/"}
        params={param}
        id={(id as string) || ""}
        collapsed={collapsed}
        expanded={expanded}
        broken={broken}
        toggled={toggled}
        setBroken={(e: boolean) => {
          dispatch(setBroken(e));
        }}
        setExpanded={(e: boolean) => {
          dispatch(setExpanded(e));
        }}
        setOpen={(e: any) => {
          dispatch(setOpen(e));
        }}
        setToggled={(e: boolean) => {
          dispatch(setToggled(e));
        }}
        theme="light"
        rtl={rtl}
        handleLogout={() => {
          dispatch(setLogoutDialog(true));
        }}
        handleRouteChange={(path: string) => {
          router.push(path);
        }}
        sidebarHeader={<SidebarHeader />}
        menuItemStyles={menuItemStyles}
        themes={themes}
      />
    </div>
  );
}
```

