import { createTheme, ThemeProvider } from '@mui/material/styles';

const fontWeightLight = "normal"; // Regular
const fontWeightRegular = 500; // Medium
const fontWeightMedium = 600; // Semi-bold
const fontWeightBold = "bold"; // Bold
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#1f3564", //blue remax
      },
    },
    components: {
    // Name of the component
    MuiTextField: {
      styleOverrides:{
        
      },
      defaultProps: {
        sx:{
          // height: "100px",
        },
        // The props to change the default for.
        },
      },
    },
    typography: {
      fontWeightLight: fontWeightLight, // Regular
      fontWeightRegular: fontWeightRegular, // Medium
      fontWeightMedium: fontWeightMedium, // Semi-bold
      fontWeightBold: fontWeightBold, // Bold

      // Title 42
      h1: {
        fontWeight: fontWeightBold,
        fontSize: "42px",
        lineHeight: "58px",
        fontFamily: "Keep Calm",
      },

      // Title 32
      h2: {
        fontWeight: fontWeightBold,
        fontSize: "32px",
        lineHeight: "40px",
        fontFamily: "Keep Calm",
      },

      // Title 24
      h3: {
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "36px",
        fontFamily: "Keep Calm",
      },

      // Subtitle 20
      subtitle1: {
        fontWeight: fontWeightBold,
        fontSize: "20px",
        lineHeight: "30px",
        fontFamily: "SF Compact Display",
      },

      // Subtitle 18
      subtitle2: {
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "28px",
        fontFamily: "SF Compact Display",
      },

      // Body 16
      body1: {
        fontWeight: fontWeightMedium,
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: "SF Compact Display",
      },

      // Body 14
      body2: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "22px",
        fontFamily: "SF Compact Display",
      },

      // caption 12
      caption: {
        fontWeight: fontWeightMedium,
        fontSize: "12px",
        lineHeight: "18px",
        fontFamily: "SF Compact Display",
      },

    },
  },
);

export default theme;
