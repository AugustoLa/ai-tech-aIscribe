import React from 'react'
import Sidebar from '../../../../components/dashboardComponents/Sidebar'
import AiFriend from '../../../../components/dashboardComponents/AiFriendComp.jsx'


function DashBoard() {
    return (
        <div className='bg-white flex'>
            <AiFriend></AiFriend>
            <Sidebar></Sidebar>
        </div>
    )
}

export default DashBoard