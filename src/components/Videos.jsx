import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { ChannelCard, VideoCard } from './'
const Videos = ({ videos }) => {


  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" sx={{
      columnGap: { xs: "1rem", md: "2rem" },
      rowGap: { xs: "0.5rem", md: "1rem" }
    }}>
      {videos.map((item, index) => {
        return (<Box key={index}>
          {item.id.videoId && (<VideoCard video={item} />)}
          {item.id.channelId && (<ChannelCard
            channelDetail={item} />)}

        </Box>)

      })}
    </Stack>
  )
}

export default Videos