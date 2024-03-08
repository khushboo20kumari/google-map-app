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
    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }} >
                    <TextField
                        style={{ width: "70%", margin: "30px" }}
                        placeholder="Search Here...."
                        InputProps={{
                            endAdornment: <Button variant='contained' style={{ height: "54px", position: "relative", left: "15px" }}>Search</Button>
                        }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={12} sx={12} md={12}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    );
}
