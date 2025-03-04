import React from 'react'
import useStockCall from "../hook/useStockCall"
import { useEffect } from 'react'
import KpiCard from '../components/Cards/KpiCard'
import {Charts} from '../components/Table-Chart/Charts'


const Home = () => {
  const {getStockData}=useStockCall()
  useEffect(()=>{
    getStockData("sales")
    getStockData("purchases")
  },[])

  return (
    <div>
    <KpiCard/>
    <Charts/>
    </div>
  )
}

export default Home