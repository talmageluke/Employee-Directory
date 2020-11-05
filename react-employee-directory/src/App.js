import React, { Component } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from "./components/Header"
import variables from "./Styles.scss"
import MainTable from "./components/MainTable"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
    },
    secondary: {
      main: variables.secondaryMain,
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: "Poppins, sans-serif"
  }
});

export default class App extends Component {
  render() {
    return (
      <div>

        <ThemeProvider
          theme={theme}>
          <Header />
          <MainTable />
        </ThemeProvider>
      </div >

    )
  }
}



