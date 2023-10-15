import './App.css'
import { useState } from "react";
import { ThemeContext } from "./ThemeContext"
import Navigation from './Components/NavigationTemplate/Navigation'
import Main from "./Main/Main"

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className='App'>
        <Navigation />
        <Main />
      </div>  
    </ThemeContext.Provider>
  )
}

export default App
