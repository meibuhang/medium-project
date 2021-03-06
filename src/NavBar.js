import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import green from "@material-ui/core/colors/green";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import ImageIcon from "@material-ui/icons/Image";
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontFamily: ["Gupter", "Oswald", "Merriweather"].join(","),
    fontWeight: 700,
    fontSize: 30
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  green: {
    color: "#fff",
    backgroundColor: green[900]
  }
}));

export default function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.green}>J</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jhon Lennon" />
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/newstory" style={{ color: "#bdbdbd", margin: "0 10px" }}>
            {" "}
            <ListItemText primary="New Story" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/story" style={{ color: "#bdbdbd", margin: "0 10px" }}>
            {" "}
            <ListItemText primary="Stories" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/stats" style={{ color: "#bdbdbd", margin: "0 10px" }}>
            {" "}
            <ListItemText primary="Status" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link to="/bookmark" style={{ color: "#bdbdbd", margin: "0 10px" }}>
            <ListItemText primary="BookMark" />
          </Link>
        </ListItem>{" "}
        <ListItem>
          <Link to="/profil" style={{ color: "#bdbdbd", margin: "0 10px" }}>
            {" "}
            <ListItemText primary="Profile" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Settings"
            style={{ color: "#bdbdbd", margin: "0 10px" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Help"
            style={{ color: "#bdbdbd", margin: "0 10px" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Sign Out"
            style={{ color: "#bdbdbd", margin: "0 10px" }}
          />
        </ListItem>
      </List>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {" "}
      <MenuItem>
        <IconButton aria-label="show 1 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <div className={classes.root}>
            <Avatar className={classes.green}>J</Avatar>
          </div>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ color: "#000000" }}>
              {" "}
              Medium
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary">
                <SearchIcon />
              </Badge>
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>

            <Button> Upgrade</Button>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <div className={classes.root}>
                <Avatar className={classes.green}>R</Avatar>
              </div>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
