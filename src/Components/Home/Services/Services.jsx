import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DrawIcon from '@mui/icons-material/Draw';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Services() {
    return (
        <div className='flex flex-row justify-center'>
            <Card sx={{ maxWidth: 275, backgroundColor: '#2a2c39', color: 'white' }} raised>
                <CardContent>
                    <IntegrationInstructionsIcon sx={{ fontSize: 54 }} />
                    <Typography sx={{ fontSize: 34 }} gutterBottom>
                        Development
                    </Typography>
                    <DoubleArrowIcon />
                    <Typography sx={{ fontSize: 14 }}>
                        HTML/CSS
                    </Typography>
                    <DoubleArrowIcon />
                    <Typography sx={{ fontSize: 14 }}>
                        Javascript
                    </Typography>
                    <DoubleArrowIcon />
                    <Typography sx={{ fontSize: 14 }}>
                        Animation
                    </Typography>
                    <DoubleArrowIcon />
                    <Typography sx={{ fontSize: 14 }}>
                        React
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Services