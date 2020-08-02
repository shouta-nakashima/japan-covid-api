import React,{useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2';
import { selectStatistics,fetchAsyncGetStatistics} from '../covidSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Styles from '../Chart/Chart.module.css'


const RadarPrefecture = () => {
  const statistics = useSelector(selectStatistics)
  const dispatch = useDispatch()
  const [showB, setShowB] = useState(true)
  useEffect(() => {
    dispatch(fetchAsyncGetStatistics());
  }, [dispatch]);

  const switcher = () => {
    setShowB(!showB)
  }

  const maleRadar = statistics[0] && (
    <Line
      data = {{
        labels: statistics.map((data)=> data.name_ja),
        datasets: [
          {
            label: "0~10代",
            data: statistics.map((data) => data.male.generations_count["10s"] +  data.male.generations_count["00s"] ),
            fill: false,
            borderColor: "#3333ff",
            pointBackGroundColor: "#3333ff",
            pointBorderColor: "#3333ff",
            
          },
          {
            label: "20代",
            data: statistics.map((data) => data.male.generations_count["20s"] ),
            fill: false,
            borderColor: "#008b8b",
            pointBackGroundColor: "#008b8b",
            pointBorderColor: "#008b8b",
            
          },
          {
            label: "30代",
            data: statistics.map((data) => data.male.generations_count["30s"] ),
            fill: false,
            borderColor: "#faea0a",
            pointBackGroundColor: "#faea0a",
            pointBorderColor: "#faea0a",
            
          },
          {
            label: "40代",
            data: statistics.map((data) => data.male.generations_count["40s"] ),
            fill: false,
            borderColor: "black",
            pointBackGroundColor: "black",
            pointBorderColor: "black",
            
          },
          {
            label: "５０代",
            data: statistics.map((data) => data.male.generations_count["50s"] ),
            fill: false,
            borderColor: "red",
            pointBackGroundColor: "red",
            pointBorderColor: "red",
            
          },
          {
            label: "６０代",
            data: statistics.map((data) => data.male.generations_count["60s"] ),
            fill: false,
            borderColor: "#e66108",
            pointBackGroundColor: "#e66108",
            pointBorderColor: "#e66108",
            
          },
          {
            label: "70代以上",
            data: statistics.map((data) => data.male.generations_count["70s"] +
              data.male.generations_count["80s"] +
              data.male.generations_count["90s"] +
              data.male.generations_count["100s"]),
              fill: false,
            borderColor: "gray",
            pointBackGroundColor: "gray",
            pointBorderColor: "gray",
            
          },
        ],
      }
      }
    />
  )
  const femaleRadar = statistics[0] && (
    <Line
      data = {{
        labels: statistics.map((data)=> data.name_ja),
        datasets: [
          {
            label: "0~10代",
            data: statistics.map((data) => data.female.generations_count["10s"] +  data.male.generations_count["00s"] ),
            fill: false,
            borderColor: "#3333ff",
            pointBackGroundColor: "#3333ff",
            pointBorderColor: "#3333ff",
            
          },
          {
            label: "20代",
            data: statistics.map((data) => data.female.generations_count["20s"] ),
            fill: false,
            borderColor: "#008b8b",
            pointBackGroundColor: "#008b8b",
            pointBorderColor: "#008b8b",
            
          },
          {
            label: "30代",
            data: statistics.map((data) => data.female.generations_count["30s"] ),
            fill: false,
            borderColor: "#faea0a",
            pointBackGroundColor: "#faea0a",
            pointBorderColor: "#faea0a",
            
          },
          {
            label: "40代",
            data: statistics.map((data) => data.female.generations_count["40s"] ),
            fill: false,
            borderColor: "black",
            pointBackGroundColor: "black",
            pointBorderColor: "black",
            
          },
          {
            label: "５０代",
            data: statistics.map((data) => data.female.generations_count["50s"] ),
            fill: false,
            borderColor: "red",
            pointBackGroundColor: "red",
            pointBorderColor: "red",
            
          },
          {
            label: "６０代",
            data: statistics.map((data) => data.female.generations_count["60s"] ),
            fill: false,
            borderColor: "#e66108",
            pointBackGroundColor: "#e66108",
            pointBorderColor: "#e66108",
            
          },
          {
            label: "70代以上",
            data: statistics.map((data) => data.female.generations_count["70s"] +
              data.male.generations_count["80s"] +
              data.male.generations_count["90s"] +
              data.male.generations_count["100s"]),
              fill: false,
            borderColor: "gray",
            pointBackGroundColor: "gray",
            pointBorderColor: "gray",
            
          },
        ],
      }
      }
    />
  )
  return (
    <div className={Styles.container}>
      <Button variant="outlined" color="primary" onClick={switcher}>
        {showB ? "年代別感染表(女性)へ" : "年代別感染表(男性)へ"}
      </Button>
      
      <h3>{showB ? "年代別感染表(男性)" : "年代別感染表(女性)"}</h3>
      {showB ?maleRadar : femaleRadar}
    </div>
  )
}

export default RadarPrefecture
