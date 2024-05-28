import { Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Layout = () => {
  return (
    <>
      <div>
        <header>
          <h1>My App</h1>
          <nav>
            <Sidebar>
              <Menu>
                <SubMenu label="Charts">
                  <MenuItem> Pie charts </MenuItem>
                  <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
              </Menu>
            </Sidebar>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
