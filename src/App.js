import React from 'react'
import Box from '@mui/material/Box';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Feed, VideoDetails, ChannelDetails, SearchItem , Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <Box  sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Feed/>}/>
    <Route path="/video/:id" element={<VideoDetails/>}/>
    <Route path="/channel/:id" element={<ChannelDetails/>}/>
    <Route path="/search/:searchItem" element={<SearchItem/>}/>

    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
