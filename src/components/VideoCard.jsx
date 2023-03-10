


import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Typography, Card, CardContent, CardMedia, Skeleton } from '@mui/material'
import { CheckCircle, Circle, Tune } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl } from '../utils/Constants/constants.js'
import { Stack } from '@mui/system';

// import { useState, useEffect } from 'react';
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(() => true)
        setTimeout(() => {
            setLoading(() => false)

        }, 5000);

    }, [])
    const handleLoading = e => {
        // const 

    }

    return (

        <><Card sx={{

                width: {

                    md: "320px", xs: "100%"
                }, boxShadow: "none", borderRadius: 0
            }}>
                <Link style={{ width: "100%", border: "2px solid orange red" }}
                    to={videoId ? `video/${videoId}` : demoVideoUrl}>
                    <CardMedia
                        onLoad={handleLoading}
                        alt={snippet?.title}
                        sx={{

                            width: "100%", height: 180
                        }}
                        loading="lazy"
                        image={snippet?.thumbnails?.high?.url}>


                    </CardMedia>
                    <CardContent sx={{
                        backgroundColor: "#1e1e1e",
                        // height: "106px"
                    }} >
                        <Link to={videoId ? `video/${videoId}`
                            : demoVideoUrl}>
                            <Typography variant="subtitle1"
                                style={{ "--ch": "2", lineHeight: "20px" }}
                                fontWeight="bold"
                                color="#fff" className='clamp-height'>
                                {snippet?.title || demoVideoTitle}
                            </Typography>
                        </Link>
                        <Link to={snippet?.channelId ? `channel
/${snippet?.channelId}`
                            : demoVideoUrl}>
                            <Typography variant="subtitle1"
                                style={{ "--ch": "1", lineHeight: "20px" }}
                                fontWeight="bold"
                                color="gray"
                                className='clamp-height'>
                                {snippet?.channelTitle
                                    || demoChannelTitle}
                                <CheckCircle sx={{
                                    fontSize: 12, color: 'gray',
                                    ml: "5px"
                                }}>

                                </CheckCircle>
                            </Typography>
                        </Link>

                    </CardContent>
                </Link>

            </Card>}

        </>
    )
}

export default VideoCard