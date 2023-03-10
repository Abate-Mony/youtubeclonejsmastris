import { Box, Stack,Grid } from '@mui/material'
// import Grid  from '@mui/joy/Grid'
import { useEffect, useState } from 'react'
import { ChannelCard, VideoCard } from './'
const Videos = ({ videos }) => {


  return (

    <Grid container    sx={{ flexGrow: 1 }}>
      {videos.map((item, index) => {
        return (<Grid  xs={12} sm={6} md={4} lg={3} key={index}>
          {item.id.videoId && (<VideoCard video={item} />)}
          {item.id.channelId && (<ChannelCard
            channelDetail={item} />)}
       </Grid>)})
      }
  </Grid>

    // <Stack direction="row" flexWrap="wrap" justifyContent="start" sx={{
    //   columnGap: { xs: "1rem", md: "2rem" },
    //   rowGap: { xs: "0.5rem", md: "1rem" }
    // }}>
    //  {videos.map((item, index) => {
    //     return (<Box key={index}>
    //       {item.id.videoId && (<VideoCard video={item} />)}
    //       {item.id.channelId && (<ChannelCard
    //         channelDetail={item} />)}

    //     </Box> )

    //   })}
    // </Stack>
  )
}

export default Videos