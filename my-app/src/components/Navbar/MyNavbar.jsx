import React from 'react'
import styles from './MyNavbar.module.css'
import {Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MyNavbar extends React.Component {
    render(){
        return(
            <Navbar className={styles.myNavbar}>
                <Nav className={styles.myNav}>
                    <Link className={styles.myNavLniks} to='/Home'>
                        <Nav.Link href="/Home"><span className={styles.navLinkText}>Home</span></Nav.Link>
                    </Link>
                    <Link className={styles.myNavLniks} to='/CovidNews'>
                        <Nav.Link eventKey={2} href="CovidNews"><span className={styles.navLinkText}>Covid News</span></Nav.Link>
                    </Link>
                </Nav>
            </Navbar>
        )
    }
}

export default MyNavbar