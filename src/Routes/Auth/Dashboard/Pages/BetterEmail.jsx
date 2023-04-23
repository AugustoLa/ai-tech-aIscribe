import React from 'react'
import Sidebar from '../../../../components/dashboardComponents/Sidebar'
import BetterEmailComp from '../../../../components/dashboardComponents/BetterEmailComp'

function BetterEmail() {
  return (
    <div className='bg-white flex'>
      <BetterEmailComp></BetterEmailComp>
      <Sidebar></Sidebar>
    </div>
  )
}

export default BetterEmail