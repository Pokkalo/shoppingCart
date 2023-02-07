// import Css from "../style/oursidebar.module.css"
import {BsFillGrid3X3GapFill,BsFillBarChartFill,BsMoisture,BsNut,BsPersonCircle, BsFillMoonFill, BsFillSunFill, BsAlarm, BsTextIndentLeft, BsChatLeftDots, BsBarChart, BsCardText, BsPersonBoundingBox} from "react-icons/bs"
import {FaBars, FaBeer} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react"

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => setIsOpen(!isOpen)
    useEffect(()=>{
  
    }, [children])
  
    const menuItem = [
      {
        path:"/",
        name:"dashboard",
        icon: <BsFillBarChartFill/>,
      },
      {
        path:"/about",
        name:"about",
        icon:<FaBeer/>,
      },
      {
        path:"/comment",
        name:"comment",
        icon: <BsChatLeftDots/>,
      },
      {
        path:"/analytics",
        name:"analytics",
        icon:<BsBarChart/>,
      },
      {
        path:"/devices",
        name:"devices",
        icon:<BsPersonBoundingBox/>,
      },
      {
        path:"/deviceList",
        name:"deviceList",
        icon: <BsTextIndentLeft/>,
      },
      
    ]   
  
    return (
      <Sidebar.Provider value={children}>
      <div className='container pattern1'>
        <div style={{width: isOpen? "300px": "50px"}} className='sidebar'>
          <div className='top_section'>
            <h1 style={{display: isOpen? "block": "none"}} className="logo">Logo</h1>
            <div  className="bars">
              <FaBars onClick={()=>{setIsOpen(!isOpen)}}/>
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen? "block": "none"}} className="link_text" >{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        {/* <main className="sidepage">{children} </main> */}
      </div>
      </Sidebar.Provider>
    )
  
}

export default Sidebar