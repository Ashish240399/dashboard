import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserContext } from "../../context/UserContext";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  const { findUser } = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <p
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {user !== undefined ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </div>
        ) : (
          "Dummy"
        )}
      </p>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/dashboard");
          }}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            findUser();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
