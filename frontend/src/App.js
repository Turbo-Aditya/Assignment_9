import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import About from './components/About';
import CompanyShowcase from './components/CompanyShowcase';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Job Portal
            </Typography>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/job-listings">
              Job Listings
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/company">
              Company Showcase
            </Button>
            <Button color="inherit" component={Link} to="/">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <Routes>
          <Route path="/" element={<Login />} />  {/* Login page */}
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<CompanyShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;