import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';


const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            SBD
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Products</Navbar.Link>
          <Navbar.Link href="#">Collections</Navbar.Link>
          <Navbar.Link href="#">Gift Cards</Navbar.Link>
          <Navbar.Link href="#">Retailers</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Account</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Shopping Cart
            </Button> 
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>The Education Platform</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Of The Future</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Join For Free</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
     
        </Grid>
        <Grid xs={12} sm={4}>
    
        </Grid>
        <Grid xs={12} sm={4}>
      
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home