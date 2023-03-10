import { Skeleton } from "@mui/material"
import { Stack } from "@mui/system"

const Loading = () => {
    const arr = []
    for (let i = 0; i < 100; ++i) {
        arr.push(<><Skeleton variant='rectangle' sx={{
            bgcolor: "grey.900", width: {
                xs: "min(365px ,  calc(100vw - 20px))"
                , md: "320px"
            }
        }} height={200} />
            <Skeleton variant='rounded' sx={{
                bgcolor: "grey.900", width: {
                    xs: "min(300px ,  calc(100vw - 40px))"
                    , md: "320px"
                }, my: 2
            }} height={30} />
            <Skeleton variant='rounded' sx={{
                bgcolor: "grey.900", width: {
                    xs: "min(250px ,  calc(100vw - 60px))"
                    , md: "320px"
                }, mb: 2
            }} height={30} />
        </>)
    }
    // const alignItems=()

    return (<>
        {
            arr.map((item,index) => {
                return (<Stack key={index} direction="column" sx={{ my: 1}}>

                    {item}

                </Stack>)

            })
        }
    </>

    )
}

export default Loading