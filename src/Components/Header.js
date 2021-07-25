import React from "react"
import { Col, Row } from "reactstrap";
import ThemeToggler from "./ThemeToggler"

const Header=()=>{
    return(
        <Row>
            <Col>
            <header>
                 <h1><center>Dummy User</center></h1>
            </header>
            </Col>
            <Col><ThemeToggler/></Col>
            
        </Row>
        
    )
}

export default Header;