import { useState, useEffect,useRef } from 'react'
import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { Loading, Sidebar, Videos } from './'
import { fetchFromApi } from '../utils/Constants/fetchFROM'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)
const elm=useRef(null)
  useEffect(() => {
    setLoading(() => true)

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(data => {
      const { items } = data
      setVideos([...items])
      setLoading(() => false)

    }).catch(err => {
      console.log(err)
    })

    return () => {
    }
  }, [])

  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(data => {
      const { items } = data
      setVideos([...items])
      elm.current.scrollTo({ top: 0,behavior:"smooth" })
    }).catch(err => {
      console.log(err)
    })
  }, [selectedCategory])
  return (
    <Stack sx={{
      flexDirection: {
        sx: "column",
        md: "row"
      },
      background: "#000", height: "calc(100vh - 80px)"
    }}>
      {/* side bar for big screens */}
      <Box sx={{
        height: {
          sx: "auto",
          md: "calc(100vh - 80px)"
        },
        width: {
          sx: "auto", md: "fit-content"
        }
        , borderRight: "1px solid #3d3d3d",
        px: {
          sx: 0, md: 2
        },
        display: {
          md: "block"
        }
      }}>
        <Sidebar selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright"
          variant='body2'
          sx={{
            mt: 1, color: "#fff"
          }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} ref={elm}
        sx={{
          overflowY: "auto",
          // height: "100%",
          border: "2px solid orange", flex: "auto"
        }}>

        <Typography variant='h4' fontWeight="bold"
          mb={2} sx={{
            color: "#fff"

          }}>


          {selectedCategory}

          <span style={{
            color: "#f31503"
          }}>Videos</span>
        </Typography>

        {loading ? <Stack direction="row" flexWrap="wrap" gap={"1rem"}>

          <Loading />
        </Stack> :
          <Videos videos={videos} />

        }

      </Box>
      {/* side bar for big screens */}
    </Stack>
  )
}

export default Feed