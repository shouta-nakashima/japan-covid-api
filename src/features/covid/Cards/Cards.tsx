import React, { useEffect}from 'react'
import Styles from './Cards.module.css'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import {GiHastyGrave} from 'react-icons/gi'
import { MdLocalHospital } from 'react-icons/md'
import { IoMdPulse } from "react-icons/io";
import { GrAlert } from "react-icons/gr";
// import { AiFillLike } from 'react-icons/ai'
import { useSelector ,useDispatch} from 'react-redux';
import { selectHistory,fetchAsyncGetHistory } from '../covidSlice';


const Cards: React.FC = () => {
  const history = useSelector(selectHistory)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncGetHistory());
  }, [dispatch]);
  return (
    <div className={Styles.container}>
      <h2>全国の感染情報</h2>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={2} component={Card} className={Styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              感染者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={history[history.length - 1].positive}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={2} component={Card} className={Styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <IoMdPulse /> 退院者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={history[history.length - 1].discharge}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={2} component={Card} className={Styles.coution}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <GrAlert />
              入院者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={history[history.length - 1].hospitalize}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={2} component={Card} className={Styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <GiHastyGrave />
              死者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={history[history.length - 1].death}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
