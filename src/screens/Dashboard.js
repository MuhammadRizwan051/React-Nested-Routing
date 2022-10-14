import React from "react";
import Admin from '../Images/Muhammad Rizwan.jpg'
import { Route, Routes, NavLink } from "react-router-dom";
import Feedback from "./Dashboard_screens/Feedback";
import Message from "./Dashboard_screens/Message";
import Notification from "./Dashboard_screens/Notification";
// import NotFound from "./NotFound";
import '../App.css'
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

function Dashboard() {
  return (
    <>
      <div
        className="main"
        style={{ height: '99vh', display: "flex" }}
      >
        <div
          className="left"
          style={{width:'15%', backgroundColor: '#00587A', listStyle: 'none', fontSize: '24px', fontFamily: 'cursive' }}
        >
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginTop: '15%' }}>
              <NavLink to="/" end className="dashboard_links" style={{ color: 'white', textDecoration: 'none' }}>Go Back Home</NavLink>
            </li>
            <li style={{ marginTop: '45%' }}>
              <NavLink to="feedback" className="dashboard_links" style={{ color: 'white', textDecoration: 'none' }}>Feedback</NavLink>
            </li>
            <li>
              <NavLink to="message" className="dashboard_links" style={{ color: 'white', textDecoration: 'none' }}>Message</NavLink>
            </li>
            <li>
              <NavLink to="notification" className="dashboard_links" style={{ color: 'white', textDecoration: 'none' }}>Notification</NavLink>
            </li>
          </ul>
        </div>

        <div className="right" style={{ width: "85%" }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip>
              <IconButton>
                <Avatar alt="Admin" src={Admin} sx={{ width: 50, height: 50, marginRight: '15px' }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Routes>
            <Route path="feedback" element={<Feedback />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
