import { ThemeContext } from "@/contexts/ThemeProvider";
import { css, Global } from "@emotion/react";
import { useContext } from "react";

export default function GlobalStyle() {
  const themeProvider = useContext(ThemeContext);
  return (
    <Global
      styles={css`
        html {
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          @media (min-width: ${themeProvider.breakpoints.tablet}px) {
            font-size: 16px;
          }
        }

        body {
          background-color: ${themeProvider.colors.background.main};
          line-height: 1;
        }
        button {
          /* Reset box-sizing */
          box-sizing: border-box;

          /* Remove margin */
          margin: 0;

          /* Remove padding */
          padding: 0;

          /* Remove background */
          background: none;

          /* Remove border */
          border: none;

          /* Reset font styles */
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;

          /* Reset text styles */
          color: inherit;
          text-align: inherit;
          text-decoration: none;
          text-transform: none;

          /* Reset cursor */
          cursor: pointer;

          /* Reset outline */
          outline: none;

          /* Reset appearance */
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        ,
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          vertical-align: baseline;
          font-weight: 400;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
        hr {
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        a:-webkit-any-link {
          text-decoration: none;
        }
      `}
    />
  );
}
