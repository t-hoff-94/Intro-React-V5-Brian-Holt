import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <header
      css={css`
        display: flex;
        background: ${isDark ? "#333" : colors.primary};
        padding: 15px;
        margin: 0 0 15px 0;
        color: ${isDark ? colors.primary : "#333"};
        width: 100%;
        a {
          text-decoration: none;
          color: ${isDark ? "white" : "#333"};
          &:hover
          text-decoration: underline;
        }
        button {
          background: black;
          &:hover {
            background: blue;
            cursor: pointer;
          }
        }
        }
      `}
    >
      <Link to="/">
        Adopt Me!
        <span aria-label="logo" role="img">
          🦄
        </span>
      </Link>
      <button onClick={() => setIsDark(!isDark)}>click</button>
    </header>
  );
};

export default NavBar;
