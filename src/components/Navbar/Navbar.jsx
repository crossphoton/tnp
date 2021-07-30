import React, { useState } from "react";
import BarItems from "../../Content/BarItems";
import { useHistory } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import FullScreenDialog from "../../Pages/FullScreenDialog";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Zoom in={trigger}>
            <div
                onClick={() => {
                    document
                        .getElementById("back-to-top")
                        .scrollIntoView({ behavior: "smooth" });
                }}
                role='presentation'
                className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const Navbar = React.forwardRef((props, ref) => {
    const history = useHistory();
    const [navState, setnavState] = useState(" ");
    const [navColor, setnav] = useState(" ");
    const [openBar, setopenBar] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [screenSize, setScreenSize] = useState(window.screen.width);
    window.addEventListener("resize", () => {
        setScreenSize(window.screen.width);
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const changeNavBack = () => {
        if (window.scrollY > 20) {
            setnavState("activeA");
        } else {
            setnavState(" ");
        }

        if (window.location.pathname === "/")
            if (window.scrollY >= 2700) {
                addActiveClass("4");
            } else if (window.scrollY >= 1900) {
                addActiveClass("3");
            } else if (window.scrollY >= 600) {
                addActiveClass("2");
            } else {
                addActiveClass("1");
            }
    };

    function clickDropDown(item) {
        if (item.id !== 1) {
            setnavState("activeA");
        } else {
            setnavState(" ");
        }

        if (item.id === 1) {
            document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
        } else if (item.id === 2) {
            document
                .getElementById("aboutUs")
                .scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (item.id === 3) {
            document
                .getElementById("rProcess")
                .scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (item.id === 4) {
            document
                .getElementById("recruit")
                .scrollIntoView({ behavior: "smooth" });
        } else if (item.id === 5 || item.id === 6) {
            if (screenSize < 960) {
                for (var i = 1; i <= item.drop.length; i++) {
                    document.getElementById(`${item.id}.${i}`).style.display ===
                    "block"
                        ? (document.getElementById(
                              `${item.id}.${i}`
                          ).style.display = "none")
                        : (document.getElementById(
                              `${item.id}.${i}`
                          ).style.display = "block");
                }
            }
        } else if (item.id === 7) {
            handleClickOpen();
        }

        if (openBar && item.id !== 5 && item.id !== 6) {
            setopenBar(!openBar);
        }
    }

    function getHam(state) {
        return (
            <button
                className={`hamburger hamburger--collapse ${state} ham`}
                onClick={() => {
                    setopenBar(!openBar);
                }}
                type='button'>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>
        );
    }

    function addActiveClass(tab) {
        for (var i = 1; i <= BarItems.length; i++) {
            if (i !== parseInt(tab)) {
                document.getElementById(i).classList.remove("activeTab");
            } else {
                document.getElementById(tab).classList.add("activeTab");
            }
        }
    }

    React.useImperativeHandle(ref, () => {
        return {
            setNavState: (state, tab) => {
                setnav(state);
                addActiveClass(tab);
            },

            setMenu: (menuState) => {
                setopenBar(menuState);
            },
        };
    });

    window.addEventListener("scroll", changeNavBack);

    return (
        <div className='navBase'>
            <Toolbar className={`navBar ${navState} ${navColor}`}>
                <img
                    src={Logo}
                    alt='Logo'
                    className='logo'
                    onClick={() => {
                        history.push("/");
                    }}
                />

                <div className='menu'>
                    {openBar ? getHam("is-active") : getHam(" ")}
                </div>

                <ul className={openBar ? "list active " : "list nonActive"}>
                    {BarItems.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className='dropdown'
                                onClick={() => {
                                    clickDropDown(item);
                                }}>
                                <div id={item.id} className='naviTab'>
                                    <div className='tabTitle'>
                                        {item.heading}
                                        {item.drop ? (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    paddingLeft: "6px",
                                                }}>
                                                <ExpandMoreIcon
                                                    style={{ color: "red" }}
                                                />
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <ul className='dropdownMenu'>
                                    {item.drop
                                        ? item.drop.map((droppedItem, id) => {
                                              return (
                                                  <li
                                                      key={id}
                                                      id={droppedItem.id}
                                                      className={`dropdownItem-${id} hid`}
                                                      onClick={
                                                          droppedItem.onClick
                                                      }>
                                                      {droppedItem.heading}
                                                  </li>
                                              );
                                          })
                                        : null}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </Toolbar>

            <Toolbar id='back-to-top-anchor' />

            <ScrollTop {...props}>
                <Fab
                    color='secondary'
                    size='small'
                    aria-label='scroll back to top'>
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

            <FullScreenDialog open={open} handleClose={handleClose} />
        </div>
    );
});

export default Navbar;
