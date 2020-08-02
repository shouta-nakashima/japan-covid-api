import React, { useEffect } from "react";
import { RiZoomInLine } from "react-icons/ri"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch } from "react-redux";
import { fetchAsyncGetHistory,fetchAsyncGetTotal } from "../covidSlice";
import { fetchAsyncGetPrefectures} from "../covidSlice";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import RadarPrefecture from "../Radar/RadarPrefecture";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '80%',
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    content: {
      marginTop: 85,
    },
    header: {
      backgroundColor: 'dimgrey',
    },
    buttons: {
      textAlign: 'center'
    },
    
  }),
);



const DashBoard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    dispatch(fetchAsyncGetHistory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncGetPrefectures());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncGetTotal());
  }, [dispatch]);
  
  
  const dd = new Date();
  //「年」を取得する
  const YYYY = dd.getFullYear();
  //「月」を取得する
  const MM = dd.getMonth()+1;
  //「日」を取得する
  const DD = dd.getDate();
  //段落タグ("date011")の中身を置き換える
  const dateToNow = YYYY + "年" + MM + "月" + DD + "日";


  return (
    <div>
      <AppBar position="absolute" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Japan Dashboard
          </Typography>
          <div>
            {dateToNow}現在
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.buttons}>
              <Button  color="primary" onClick={handleOpen}>
                <RiZoomInLine />
                zoom
              </Button>
            </div>
            <Chart />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.buttons}>
              <Button  color="primary" onClick={handleOpen2}>
                <RiZoomInLine />
                zoom
              </Button>
            </div>
            <RadarPrefecture />
          </Grid>
        </Grid>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Chart />
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
            <RadarPrefecture/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DashBoard;
