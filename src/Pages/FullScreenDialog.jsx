import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ContactUsCard from "../components/ContactUsCard";
import {
  WebTeam,
  PlacementCoordinators,
  PlacementHead,
  PlacementTeam,
} from "../Content/Contact.js";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();

  var { open, handleClose } = props;
  return (
      <div>
          <Dialog
              onClose={handleClose}
              fullScreen
              open={open}
              TransitionComponent={Transition}>
              <AppBar
                  style={{ background: "#27193E" }}
                  className={classes.appBar}>
                  <Toolbar>
                      <IconButton
                          edge='start'
                          color='inherit'
                          onClick={handleClose}
                          aria-label='close'>
                          <CloseIcon />
                      </IconButton>
                  </Toolbar>
              </AppBar>
              <h3 className='contactUsCardsHeading'> Faculty Head </h3>

              <div className='contactUsCardDialog'>
                  {PlacementHead.map((item, id) => {
                      return (
                          <ContactUsCard
                              key={id}
                              name={item.name}
                              email={item.email}
                              phone={item.phone}
                              image={item.image}
                          />
                      );
                  })}
              </div>

              <h3 className='contactUsCardsHeading'>
                  {" "}
                  Placement Team Coordinators{" "}
              </h3>
              <div className='contactUsCardDialog'>
                  {PlacementCoordinators.map((item, id) => {
                      return (
                          <ContactUsCard
                              key={id}
                              name={item.name}
                              email={item.email}
                              phone={item.phone}
                              image={item.image}
                          />
                      );
                  })}
              </div>

              <h3 className='contactUsCardsHeading'> Placement Team </h3>
              <div className='contactUsCardDialog'>
                  {PlacementTeam.map((item, id) => {
                      return (
                          <ContactUsCard
                              key={id}
                              name={item.name}
                              email={item.email}
                              phone={item.phone}
                              image={item.image}
                          />
                      );
                  })}
              </div>

              <h3 className='contactUsCardsHeading'> Web Team </h3>
              <div className='contactUsCardDialog'>
                  {WebTeam.map((item, id) => {
                      return (
                          <ContactUsCard
                              key={id}
                              name={item.name}
                              email={item.email}
                              phone={item.phone}
                              image={item.image}
                          />
                      );
                  })}
              </div>
          </Dialog>
      </div>
  );
}
