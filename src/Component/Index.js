import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { Button, Grid, TextField, } from '@mui/material';
// import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Index() {

    const [mapSrc, setMapSrc] = React.useState("")
    const [address, setAddress] = React.useState("")
    const googlemap = `https://maps.google.com/maps?q=${address}&t=&z=11&ie=UTF8&iwloc=B&output=embed`
    setMapSrc(googlemap)

    const HandleOnchange=(e)=>{
           setAddress(e.target.value)
    }
    

    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} >
                    <TextField
                        style={{ width: "70%", margin: "30px" }}
                        placeholder="Search Here...."
                        onChange={HandleOnchange}
                        InputProps={{
                            endAdornment: <Button variant='contained' style={{ height: "54px", position: "relative", left: "15px" }}>Search</Button>
                        }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12} sx={12} md={12}>
                            <Item>
                                <iframe
                                    width="100%"
                                    height="600"
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    src={mapSrc}
                                ></iframe>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    );
}
