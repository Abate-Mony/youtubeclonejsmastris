
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/Constants/constants';

const ChannelCards = ({ channelDetail }) => {

  return (
    <Box sx={{
      boxShadow: "none", border: "2px solid orange",
      borderRadius: "20px", display: "grid", placeItems: "center"
      
      , margin: "auto", height: "326px",my:2
    }}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: "flex", flexDirection: "column",
          justifyContent: "center", textAlign: "center", color: "white"
        }}>

          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.
              high?.url
              || demoProfilePicture} alt={channelDetail?.snippet?.title}

            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "100%", mb: 2, border: "3px solid #e3e3e3"
            }}
          >   </CardMedia>
          <Typography variant='h6' sx={{
            color: "#fff"
          }} >

            {channelDetail?.snippet?.title}
            <CheckCircle sx={{
              fontSize: 14, color: 'gray',
              ml: "5px"
            }}>

            </CheckCircle>

          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography  >

              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}

            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCards