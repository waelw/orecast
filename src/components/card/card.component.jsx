import React from 'react'
import { Avatar, Card, CardContent, CardHeader, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';


const CardItem = ({ weather }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const today = new Date(weather.date).toLocaleDateString('default', { weekday: "short" })
    return (
        <div>
            <Card variant='elevation' sx={{ textAlign: "center", pt: "10px", background: "inherit" }}>
                <CardHeader
                    titleTypographyProps={{ variant: 'overline' }}
                    title={`${today}`} />
                <CardContent>
                    <Typography variant="body2">
                        <img width="50px" height="50px" style={{ marginLeft: "-10px" }} src={`${weather ? weather.day.condition.icon : null}`} alt="Weather condition" />
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='body' >
                        {Math.floor(weather.day.mintemp_c)}°
                    </Typography>
                </CardContent>
            </Card>

        </div >
    )
}

export default CardItem
