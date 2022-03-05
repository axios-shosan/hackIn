import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../assets/Home.css'
import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {

    
    const rowFlex = {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    }

    return (
        <>
            <AppBar position="static" color="transparent" >
                <Container maxWidth="xl" className="HeaderContainer" >
                    <img className="logo" src={require('../assets/images/CSE.png')} ></img>
                    <Box className='sections' sx={{ flexGrow: 1, display: 'flex' }} >
                        <Button  sx={{ my: 2, color: 'black', display: 'block' }} >
                            Home
                        </Button>

                        <Button  sx={{ my: 2, color: 'black', display: 'block' }} >
                            About
                        </Button>
                        <Button sx={{ my: 2, color: 'black', display: 'block' }} >
                            Partners
                        </Button>
                        <Button  sx={{ my: 2, color: 'white', backgroundColor: '#005AA7', display: 'block' }} >
                            <Link style={{textDecoration:'none'}} to="/signup">SIGN UP</Link>
                        </Button>
                    </Box>
                </Container>
            </AppBar>
            <div className='introduction' >
                <img className="intro-img" src={require('../assets/images/sotrast.PNG')}></img>

                <p style={{fontFamily:'Dancing Script', fontSize : '20px'}}> socialize, travel and study! </p>
                <Button sx={{ my: 2, color: 'white', backgroundColor: '#005AA7', display: 'block' }} >
                    <Link style={{textDecoration:'none'}} to="/signup">SIGN UP</Link>
                </Button>
            </div>

            <div className="what" >
                <h1 style={{ color: "#005AAF" }} >What Is Sotrastu ?</h1>
                <div className='what-para-img'>
                    <p className='what-para'>
                        <b> Socialize, Travel and Study </b><br></br>
                        Sotrastu is a web application that helps students to organise trips in
                        order to chill, to study and even trips
                        for professional purposes.
                    </p>
                    <img className='what-img' src={require('../assets/images/Group 6.png')}></img>
                </div>
                <Button
                    sx={{ my: 1, color: 'white', backgroundColor: '#005AA7', display: 'block' }} >
                    Show more
                </Button>
            </div>

            <div className="cards">
                <div className="card">
                    <img className="card-img" src={require('../assets/images/MysocialTrip.png')}></img>
                    <h4 className='card-heading'>MySocialTrip</h4>
                    <p className="card-para">10/08/2020</p>
                </div>
                <div className="card">
                    <img className="card-img" src={require('../assets/images/startUp.png')}></img>
                    <h4 className='card-heading'>StartUp !</h4>
                    <p className="card-para">10/08/2020</p>
                </div>
                <div className="card">
                    <img className="card-img" src={require('../assets/images/ryoko.png')}></img>
                    <h4 className='card-heading'>Ryuko</h4>
                    <p className="card-para">10/08/2020</p>
                </div>
            </div>

            <div className="who-container">
                <h1 style={{ color: "#005AAF" }} >Who Are We?</h1>

                <div className='what-para'>
                    <img className='who-img' src={require('../assets/images/logoCse.png')}></img>
                    <div>
                        <p style={{ marginBottom:0 }}><b>Scientific Club of ESI</b></p>
                        <div style={{ marginTop:0 }}>
                            CSE club is one of the largest scientific clubs in Algeria. Working since 2008, our
                            main goal is to offer original and innovative content throughout our hackathons, workshops, training
                            and social media.
                        </div>
                    </div>
                </div>

                <Button
                    sx={{ my: 1, color: 'white', backgroundColor: '#005AA7', display: 'block' }} >
                    Our website
                </Button>
            </div>

            <div className='partners'>
                <h1 style={{ color: "#005AAF" }} >Our partners</h1>
                <p style={{fontFamily:'Dancing Script', fontSize : '20px'}}>thank you for your company</p>
                <div style={rowFlex}>
                    <img style={{width : '10%', height:'10%' }} src={require('../assets/images/Yassir.png')}></img>
                    <img style={{width : '15%', height:'15%' }} src={require('../assets/images/github.png')}></img>

                </div>
            </div>
            <footer className='Footer'>
                <h1>Contact Us</h1>
                <div style={rowFlex}>
                    <img style={{width : '5%', height:'5%', margin:'2px 2em' }} src={require('../assets/images/CSELOGOWHITE\ 1.png')}></img>
                    <img style={{width : '5%', height:'5%', margin:'2px 2em'}} src={require('../assets/images/gmail.png')}></img>
                    <img style={{width : '5%', height:'5%', margin:'2px 2em' }} src={require('../assets/images/insta.png')}></img>
                    <img style={{width : '5%', height:'5%', margin:'2px 2em' }} src={require('../assets/images/linkedin.png')}></img>
                </div>
                <p>Copyright © 2022. All right reserved</p>
            </footer>
        </>
    )
}

export default Home