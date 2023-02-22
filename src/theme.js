import {createTheme, responsiveFontSizes} from "@mui/material";

let theme = createTheme({
  // palette: {
  //   action: {
  //     disabled: "#FFFFFF",
  //     disabledBackground: "#22232A"
  //   },
  //   text: {
  //     primary: "#737373",
  //     secondary: "#040404"
  //   },
  //   background: {
  //     default: "#22232A"
  //   },
  //   primary: {
  //     light: "#FAFAFA",
  //     main: "#E6E6E6",
  //     dark: "#22232A"
  //   }
  // }
});
theme = responsiveFontSizes(theme);

// theme.typography = {
//   fontFamily: "Cormorant Garamond",
//   h1: {
//     fontFamily: "Cormorant Garamond",
//     fontWeight: 300,
//     fontSize: 24,
//     [theme.breakpoints.up("sm")]: {
//       fontSize: 32
//     },
//     lineHeight: "2em",
//     fontStyle: "normal",
//     letterSpacing: "0em",
//     color: theme.palette.common.white
//   },
//   h2: {
//     fontFamily: "Cormorant Garamond",
//     fontWeight: 700,
//     fontSize: 26,
//     [theme.breakpoints.up("sm")]: {
//       fontSize: 36
//     },
//     lineHeight: "1.2em",
//     fontStyle: "normal",
//     letterSpacing: "0em",
//     color: theme.palette.text.secondary
//   },
//   h3: {
//     fontFamily: "Nunito",
//     fontWeight: 700,
//     fontStyle: "normal",
//     fontSize: 11,
//     letterSpacing: "0.2em",
//     lineHeight: "2em",
//     textTransform: "uppercase",
//     color: theme.palette.text.secondary
//   },
//   h4: {
//     fontFamily: "Cormorant Garamond",
//     fontWeight: 600,
//     fontStyle: "normal",
//     fontSize: 28,
//     [theme.breakpoints.up("sm")]: {
//       fontSize: 32
//     },
//     letterSpacing: "0em",
//     lineHeight: "1.1em",
//     color: theme.palette.text.secondary
//   },
//   h5: {
//     fontFamily: "Cormorant Garamond",
//     fontWeight: 500,
//     fontStyle: "italic",
//     fontSize: 24,
//     [theme.breakpoints.up("sm")]: {
//       fontSize: 26
//     },
//     letterSpacing: "0em",
//     lineHeight: "1.8em",
//     color: theme.palette.text.secondary
//   },
//   h6: {
//     fontFamily: "Nunito",
//     fontWeight: 700,
//     fontStyle: "normal",
//     fontSize: 11,
//     letterSpacing: "0.2em",
//     lineHeight: "2em",
//     textTransform: "uppercase",
//     color: theme.palette.text.secondary
//   },
//   body1: {
//     fontFamily: "Nunito",
//     fontWeight: 300,
//     fontSize: 14,
//     [theme.breakpoints.up("sm")]: {
//       fontSize: 15
//     },
//     letterSpacing: ".01em",
//     lineHeight: "1.8em",
//     fontStyle: "normal",
//     color: theme.palette.text.secondary
//   },
//   body2: {
//     fontFamily: "Nunito",
//     fontWeight: 300,
//     fontStyle: "normal",
//     fontSize: 13,
//     letterSpacing: "0.1em",
//     lineHeight: "1.8em",
//     color: theme.palette.text.primary
//   },
//   subtitle1: {
//     fontFamily: "Nunito",
//     fontWeight: 300,
//     fontStyle: "italic",
//     fontSize: 13,
//     letterSpacing: "0.1em",
//     lineHeight: "1.8em",
//     color: theme.palette.text.primary
//   },
//   subtitle2: {
//     fontFamily: "Nunito",
//     fontWeight: 300,
//     fontStyle: "normal",
//     fontSize: 10,
//     letterSpacing: "0.1em",
//     lineHeight: "1.8em",
//     color: theme.palette.text.primary
//   },
//   caption: {
//     fontFamily: "Cormorant Garamond",
//     fontWeight: 300,
//     fontStyle: "normal",
//     fontSize: 18,
//     lineHeight: "1.5em",
//     letterSpacing: "0.05em",
//     color: theme.palette.common.white,
//     textTransform: "lowercase"
//   }
// };

export default theme;