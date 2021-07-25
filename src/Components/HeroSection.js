import React,{useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"
import {Card,CardBody,CardTitle,CardText,Button} from "reactstrap"
import {FaEnvelope,FaMapMarkedAlt,FaBirthdayCake,FaPhoneSquareAlt} from "react-icons/fa"


const HeroSection=({details,fetDetails})=>{
    const theme=useContext(ThemeContext)[0]
    const currentTheme=AppTheme[theme]
    return(
        <>
        <div
        style={{
            // padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center",
        }}
        >
            
            <Card>
            <CardBody className={`${currentTheme.class}`}>
                <img height="150" width="150" alt="user pic"
                className={`${currentTheme.imgclass}`}
                src={details.picture?.large}
                />
                <CardTitle>
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="p-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>{" "}
                    {details.location?.city}
                </CardText>
                <CardText className="pr-2">
                   <h5>
                   <FaEnvelope/>{" "}
                    {details.email}   
                    </h5> 
                </CardText>
                <CardText className="p-2">
                   <h6>
                   <FaBirthdayCake/>{" "}
                    {details.dob?.age}   
                    </h6> 
                </CardText>
                <CardText className="p-1">
                   <h6>
                   <FaPhoneSquareAlt/>{" "}
                    {details.cell}   
                    </h6> 
                </CardText>
            </CardBody>
        </Card>
        </div>
        <span
        md={4} className="offset-md-4 mt-2">
       <center>
       <Button 
       rounded
       color={`${currentTheme.buttonColor}`} block
       onClick={()=>fetDetails()}
       >Reload
       </Button>
       </center>
       </span>
       </>
    )
}

export default HeroSection;