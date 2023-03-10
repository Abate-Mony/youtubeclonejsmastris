import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  return (
    <Paper elevation={24}

      component="form"
      onSubmit={() => null}
      sx={{
        borderRadius: 20, border: "1px solid #e3e3e3",
        pl: 2,
        mr: {
          sm: 5
        }, boxShadow: "none"
      }}

    >
      <input className='search-bar'
        placeholder='Search ...'
        value=""
        onChange={() => { }}

      />
      <IconButton type="button"
      sx={{
      p:"5px",color:'red'
      }}
      >
      <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar