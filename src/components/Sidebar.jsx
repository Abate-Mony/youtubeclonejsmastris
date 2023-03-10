import { Stack } from '@mui/material'
import { categories } from '../utils/Constants/constants'
import {useState} from 'react'
const Sidebar = ({setSelectedCategory,selectedCategory}) => {
// const [selected,setSelected]=useState(0)

    return (
        <Stack direction="row"
            sx={{
                overflowY: "auto",
                height: { 
                    sx: "auto",
                    md: "95%"
                },
                display: {
                    sx: "flex",
                    md: "block"

                },border:"2px solid blue"
            }}
        >
            {
                categories.map(({ name, icon }) => {
                        return (
                            <button key={name}
                            className={`category-btn ${selectedCategory===name
                            ?"active":""}`}
                            style={{
                                outline: "none",
    border:"none"
                            }}
                            onClick={()=>setSelectedCategory(()=>name)}
                            >
                            <span style={{fontSize:"0.4rem"}}
                            >{icon}</span>
                            <span>{name}</span>

                        </button>
                    )

                })

            }
        </Stack>
    )
}

export default Sidebar