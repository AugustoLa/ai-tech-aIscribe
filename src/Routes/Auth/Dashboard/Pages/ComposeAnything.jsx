import React from 'react'
import Sidebar from '../../../../components/dashboardComponents/Sidebar'
import ComposeComp from '../../../../components/dashboardComponents/ComposeComp'

function ComposeAny() {
    return (
        <div className='bg-white flex'>
            <ComposeComp></ComposeComp>
            <Sidebar></Sidebar>
        </div>
    )
}

export default ComposeAny