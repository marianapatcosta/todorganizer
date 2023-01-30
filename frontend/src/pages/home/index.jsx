import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { StyledHome, StyledHomeText } from "./StyledHome";

const Home = () => {
  const history = useHistory();
  const { isLoggingOut, setIsLoggingOut } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/authentication");
      setIsLoggingOut(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [history, setIsLoggingOut]);

  return (
    <StyledHome>
      <StyledHomeText>
        {isLoggingOut ? "See you soon!" : "Welcome to ToDOrganizer!!!"}
      </StyledHomeText>
    </StyledHome>
  );
};

export default Home;
