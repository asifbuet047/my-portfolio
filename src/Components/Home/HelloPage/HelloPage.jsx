import { Box } from '@mui/material'
import React from 'react'
import HelloMessage from './HelloMessage'
import MyImage from '../MyImage'

function HelloPage() {
    return (
        <div className='bg-[#858792]'>
            <HelloMessage className="w-1/2 border-4 border-red-800"></HelloMessage>
            <MyImage className="w-1/2 border-4 border-red-800"></MyImage>
        </div>
    )
}

export default HelloPage