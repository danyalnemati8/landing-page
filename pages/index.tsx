import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as sbd from '../pages/sbd.png'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';


const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text>
            SBD
          </Text>
          <img src={sbd.toString()} width={30} height={30} />
         
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
    </Container>
  )
}

export default Home