import React,{useState,useEffect} from "react"
import {Container,Row,Col} from "reactstrap"
import  "bootstrap/dist/css/bootstrap.min.css"
import ThemeContext from "./Context/ThemeContext"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import Axios from "axios"
const App=()=>{
  const themeHook=useState("light")
  const [details,setDetails]=useState({})
    const fetDetails= async ()=>{
    const {data}=await Axios.get('https://randomuser.me/api/');
    console.log("Response:",data);
    const details=data.results[0]
    setDetails(details);
  };
  useEffect(()=>{
    fetDetails();
  },[])
  
  return (
    <ThemeContext.Provider value={themeHook}>
       <Container fluid className="p-1 App">
        <Row>
          <Col md={4} className="offset-md-4">
          <Header/>
          <HeroSection  details={details} fetDetails={fetDetails}/>
          </Col>
        </Row>
      </Container>
    </ThemeContext.Provider>
  )
}

export default App;
