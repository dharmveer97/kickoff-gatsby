import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const mainBrandColor = '#e9bd16';
const lightShades = '#F5F5F5';
const darkAccent = '#000000';
const darkShades = '#333333';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#e9bd16',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#f0f4f7',
  backgroundInputColor: '#b5b5b5',
  backgroundInputColorDark: darkShades,
  fontSize: 17, // 'default text-size"'
  fontSizeSmall: 15,
  fontSizeMedium: 17, // 'Default font size'
  fontSizeLarge: 24, // 'Use className="is-size-3"'
  fontSizeExtraLarge: 40, // 'Use className="is-size-2"'
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#FFFFFF',
  textColorDark: '#585858',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Roboto Condensed', sans-serif",
  secondaryFontFamily: "'Roboto Condensed', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.7px !important;
    font-size: 17px;
    .columns {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
  }
  .button {
    font-family: ${theme.secondaryFontFamily};
  }
  h1 {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor} !important;
  }
  .subtitle {
    color: ${theme.textColor} !important;
    line-height: 1.5;
  }
  .button.is-secondary {
    box-shadow: none;
    border-radius: 0;
    background-color: ${theme.lightAccent};
    border-color: transparent;
    transition: all 0.5s ease-out;
  }


  .markdown-container {
    h1 {
      font-size: 40px;
      margin-top: 1.2rem;
      margin-bottom: 1.5rem;
      color: ${theme.darkAccent} !important;
      line-height: 48px;
    }
    strong {
      color: ${theme.darkAccent} !important;
      font-weight:600 !important;
    }
      h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: ${theme.darkAccent};
    }
    h2 {
      font-size: 24px;
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkAccent};
    }
    h3 {
      margin-top: 1.3rem;
      margin-bottom: 1.3rem;
      color: ${theme.darkAccent};
    }
    p {
      margin-block-start: 0em;
      margin-block-end: 0.7em;
    }
    ol, ul {
      list-style: disc !important;
    }
  }
`;

export default GlobalStyle;
