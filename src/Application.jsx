import React, {useState, useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/globalStyles";
import {lightTheme, darkTheme} from "./components/Theme";
import {useDarkMode} from "./hooks/useDarkMode";

import Navbar from "./components/Navbar";
import ThemeToggleButton from "./components/ThemeToggleButton";

import "./styles/Application.scss";

export default function Application() {
  const {theme, themeToggler, mountedComponent} = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles/>
        <Navbar/>
        <div>
          
        </div>
        <ThemeToggleButton/>
      </>
    </ThemeProvider>
  );
}
