import { Search } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/Constants/constants'
import {SearchBar} from './'
const Navbar = () => {
  return (
    <Stack direction="row"
      alignItems="center"
      height={"50px"}
      p={2}
      sx={{
        position: "sticky", background: "#000", top: 0,
        justifyContent: "space-between",
      }}
    >

      <Link to={"/"} style={{
        display: "flex"
        , placeItems: "center",
        height: "45px"
      }}>
        <img
        className="nav__logo"
        alt="logo image"
        src={logo} style={{
          height: "100%"
        }} />

      </Link>
      <SearchBar/>
      
    </Stack>
  )
}

export default Navbar