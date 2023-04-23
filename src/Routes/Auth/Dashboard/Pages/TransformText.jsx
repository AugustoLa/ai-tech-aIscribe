import React from 'react'
import Sidebar from '../../../../components/dashboardComponents/Sidebar'
import TransformComp from '../../../../components/dashboardComponents/TransformComp'

function TransformText() {
    return (
        <div className='bg-white flex'>
            <TransformComp></TransformComp>
            <Sidebar></Sidebar>
        </div>
    )
}

export default TransformText