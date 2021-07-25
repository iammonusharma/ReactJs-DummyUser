import React ,{useContext} from "react"
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"
import {FaToggleOff,FaToggleOn} from "react-icons/fa"
const ThemeToggler=()=>{
    const [themeMode,setThemeMode]=useContext(ThemeContext)
    const theme=useContext(ThemeContext)[0]
    const currentTheme=AppTheme[theme]
    return(
            
            <button className="mt-2"
            style={{
                backgroundColor:`${currentTheme.backgroundColor}`,
                padding:"10px 35px",
                fontSize:"20px",
                color:`${currentTheme.bulbColor}`,
                border:`${currentTheme.border}`
            }}
            onClick={()=>{
                setThemeMode(themeMode==="light" ? "dark":"light")}}
            >{themeMode==="light" ?
            <span>Switch to Dark <FaToggleOff size={35}/></span>
            :<span>Switch to Light <FaToggleOn size={35}/></span>}
            </button>
    )
}

export default ThemeToggler;