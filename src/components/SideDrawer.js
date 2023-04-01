import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { Collapse, createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { suggestionArray } from "../UI/Header/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export const SideDrawer = () => {
  const [openHome, setOpenHome] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [openAcct, setOpenAcct] = useState(false);
  const handleClickHome = () => {
    setOpenHome(!openHome);
  };
  const handleClickCat = () => {
    setOpenCat(!openCat);
  };
  const handleClickAcct = () => {
    setOpenAcct(!openAcct);
  };

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          paddingTop: "2rem",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClickHome}>
          <ListItemText primary="Home" />
          {openHome ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openHome} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Men" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Women" />
            </ListItemButton>{" "}
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Kids" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickCat}>
          <ListItemText primary="Categories" />
          {openCat ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCat} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            {suggestionArray.map((each) => (
              <ListItemButton sx={{ pl: 4 }} id={each.id}>
                <ListItemIcon>{each.img}</ListItemIcon>
                <ListItemText primary={each.type} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickAcct}>
          <ListItemText primary="User Account" />
          {openAcct ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAcct} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Login" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleDrawer("left", true)} className="menu">
        <MenuIcon style={{ color: "primary" }} />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </SwipeableDrawer>
    </ThemeProvider>
  );
};
