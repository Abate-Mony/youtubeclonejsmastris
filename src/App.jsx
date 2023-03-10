import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
// a box is a simple div element in material ui
import { Navbar, ChannelDetail, SearchFeed, Feed, VideoDetails } from './components'
// the input was here becaus the of the index file found in the component folder
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box sx={{
          backgroundColor: "#000"
        }}>
          <Navbar/>
          <Routes>
            <Route path='/' exact
              element={<Feed />}>
            </Route>

            <Route path="/video/:id"
              element={<VideoDetails />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/search/:searchTerm"
              element={<SearchFeed />}></Route>
            <Route element={<div>routes not found</div>} path={"*"}></Route>
          </Routes>
        </Box>

      </BrowserRouter>

    </>
  )
}

export default App