import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { AppBar, Button, colors, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

import SettingsIcon from '@mui/icons-material/Settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
    text: {
      primary: colors.red.A400,
      secondary: colors.blue.A400
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: '#FFF'
        }
      }
    }
  }
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <React.StrictMode>
      <AppBar position="fixed" color="primary" sx={{ top: "0" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TestBed
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <App />
      <AppBar position="fixed" color="primary" sx={{ top:"auto", bottom: "0"}}>
        <Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
          <div/>
          <Button startIcon={<SettingsIcon/>} variant="contained">CSS</Button>
        </Toolbar>
      </AppBar>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
