import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoTable from './DemoTable'
import { Button, ThemeProvider, createTheme } from '@mui/material';
function App() {
  const [count, setCount] = useState(0)


  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
      <DemoTable />

    </ThemeProvider>

  )
}

export default App
