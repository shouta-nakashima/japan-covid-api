import React from 'react'
import Styles from './Cards.module.css'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import {GiHastyGrave} from 'react-icons/gi'
import { MdLocalHospital } from 'react-icons/md'
import { IoMdPulse } from "react-icons/io";
import { GrAlert } from "react-icons/gr";
// import { AiFillLike } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { selectTotal } from '../covidSlice';


const Cards: React.FC = () => {
  const data = useSelector(selectTotal)
  return (
    <div className={Styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={2} component={Card} className={Styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              PCR検査数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.pcr}
                
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={2} component={Card} className={Styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <IoMdPulse /> 感染者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.positive}
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
              重症者数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.severe}
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
                end={data.death}
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
