import React, { useState } from 'react'
import Styles from './Chart.module.css'
import { Line} from 'react-chartjs-2'
import { useSelector } from 'react-redux';
import { selectHistory, selectPrefecture} from '../covidSlice';
import Button  from '@material-ui/core/Button' 

const Chart: React.FC = () => {
  const history = useSelector(selectHistory)
  const prefecture = useSelector(selectPrefecture)
  const [showA, setShowA] = useState(true)
  const switching = () => {
    setShowA(!showA)
  }

  
  const prefectureChart = prefecture[0] && (
    
      <Line
        
        data={{
          labels: prefecture.map(({ name_ja }) => name_ja),
          datasets: [
            {
              data: prefecture.map((data) => data.cases),
              label: "感染者数",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: prefecture.map((data) => data.hospitalize),
              label: "入院者数",
              borderColor: "#3cb371",
              fill: true,
            },
            {
              data: prefecture.map((data) => data.discharge),
              label: "退院者数",
              borderColor: "#e66108",
              fill: true,
            },
            {
              data: prefecture.map((data) => data.severe),
              label: "重症者数",
              borderColor: "#faea0a",
              fill: true,
            },
            {
              data: prefecture.map((data) => data.deaths),
              label: "死者数",
              borderColor: "#ff3370",
              fill: true,
            },
          ],
        }}
      />
  );

  
  
  const totalChart = history[0] && (
    <Line
      
      data={{
        labels: history.map(({ date }) => date),
        datasets: [
          {
            data: history.map((data) => data.positive),
            label: "感染者数",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: history.map((data) => data.hospitalize),
            label: "入院者数",
            borderColor: "#3cb371",
            fill: true,
          },
          {
            data: history.map((data) => data.discharge),
            label: "退院者数",
            borderColor: "#e66108",
            fill: true,
          },
          {
            data: history.map((data) => data.severe),
            label: "重症者数",
            borderColor: "#faea0a",
            fill: true,
          },
          {
            data: history.map((data) => data.death),
            label: "死者数",
            borderColor: "#ff3370",
            fill: true,
          },
        ],
      }}
    />
  );
  return (
    <div className={Styles.container}>
      <Button variant="outlined" color="primary" onClick={switching}>
        {showA ? "都道府県別表示へ" : "全国推移表へ"}
      </Button>
      
      <h3>{showA ? "全国推移表" : "都道府県別表示"}</h3>
      {showA ? totalChart : prefectureChart}
      
    </div>
  )
}

export default Chart 
