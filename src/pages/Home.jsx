import React from 'react'
import KpiCard from '../components/KpiCard'
import useStockCall from "../hook/useStockCall"
import { useEffect } from 'react'
import { Charts } from '../components/Charts'


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