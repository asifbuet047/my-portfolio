import { Box, Typography } from '@mui/material'
import { motion } from "framer-motion"

function HelloMessage() {
    const msg = "Hello! I'am";
    const name = "Md Asifuzzaman Asif"
    return (
        <Box>
            {
                msg.split('').map((letter, index) =>
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0.5, rotate: 0.0 }}
                        animate={{ opacity: 1.0, rotate: 10.0 }}
                        transition={{ duration: 1.0, repeat: Infinity, repeatType: 'reverse' }}
                        className='text-6xl inline-block text-white'
                    >{letter}</motion.h1>
                )
            }
            <div></div>
            {
                <h1 className='text-6xl inline-block text-white'>{name}</h1>
            }
        </Box>
    )
}

export default HelloMessage