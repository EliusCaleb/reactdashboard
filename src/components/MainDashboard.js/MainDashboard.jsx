import React from 'react';
import Card from '../Cards/Cards';
import './MainDashboard.css'
import Table from '../Table/Table'

const MainDashboard = () => {
  return (
    <div className='mainDash'>
      <h1>Dashboard</h1>
      <Card/>
      <Table/>
    </div>
  )
}

export default MainDashboard