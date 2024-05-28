import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./sidebar.css";
const Sidemenu = () => {
  return (
    <>
      <div className="container">
        <div className="container-sub">
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
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
