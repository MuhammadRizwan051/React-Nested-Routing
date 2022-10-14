import React from "react";
import Admin from '../Images/Muhammad Rizwan.jpg'
import { Route, Routes, Link } from "react-router-dom";
import Feedback from "./Dashboard_screens/Feedback";
import Message from "./Dashboard_screens/Message";
import Notification from "./Dashboard_screens/Notification";
import '../App.css'
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

function Dashboard() {
  return (
    <>
      <div
        className="main"
        style={{height: '99vh', display: "flex" }}
      >
        <div
          className="left"
          style={{ width: "15%", backgroundColor:'#00587A', listStyle:'none', fontSize:'22px', fontFamily:'cursive' }}
        >
          <ul style={{listStyle:'none'}}>
            <li style={{marginTop:'15%'}}>
              <Link to="/" className="dashboard_links" style={{color:'white',textDecoration:'none'}}>Go Back Home</Link>
            </li>
            <li style={{ marginTop:'45%'}}>
              <Link to="feedback" className="dashboard_links" style={{color:'white', textDecoration:'none'}}>Feedback</Link>
            </li>
            <li>
              <Link to="message" className="dashboard_links" style={{color:'white', textDecoration:'none'}}>Message</Link>
            </li>
            <li>
              <Link to="notification" className="dashboard_links" style={{color:'white', textDecoration:'none'}}>Notification</Link>
            </li>
          </ul>
        </div>

        <div
          className="right"
          style={{ width: "85%",}}
        >
          <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Tooltip>
              <IconButton>
                <Avatar alt="Admin" src={Admin} sx={{width:50, height:50, marginRight:'15px'}} />
              </IconButton>
            </Tooltip>
          </Box>
          <Routes>
            <Route path="feedback" element={<Feedback />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
          </Routes>
        </div>
      {/* <Route path="/" element={<Home />} /> */}
      </div>
    </>
  );
}

export default Dashboard;
