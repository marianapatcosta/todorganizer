import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header, Tabs } from "./components";
import { TodosOverview, TodosBoard } from "./pages/";
import { StyledApp, StyledAppSpacer, GlobalStyle } from "./StyledApp";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme");
    darkTheme && setDarkTheme(JSON.parse(darkTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkTheme", isDarkTheme);
  }, [isDarkTheme]);

  const tabsMetadata = [
    {
      label: "Overview",
      renderContent: () => <TodosOverview />,
    },
    {
      label: "Board",
      renderContent: () => <TodosBoard />,
    },
  ];

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledApp>
        <StyledAppSpacer />
        <Header
          title={"ToDOrganizer"}
          isDarkTheme={isDarkTheme}
          toggleThemeMode={event => setDarkTheme(event.target.checked)}
        />
        <Tabs tabsMetadata={tabsMetadata} tabsPurpose="separator" />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
