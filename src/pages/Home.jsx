import React from 'react'
import KpiCard from '../components/KpiCard'
import useStockCall from "../hook/useStockCall"
import { useEffect } from 'react'


const Home = () => {
  const {getStockData}=useStockCall()
  useEffect(()=>{
    getStockData("sales")
    getStockData("purchases")
  },[])

  return (
    <div>
    <KpiCard/>
    </div>
  )
}

export default Home