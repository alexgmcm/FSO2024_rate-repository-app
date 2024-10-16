import { Platform } from "react-native";
const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      textLight: '#FFFFF0',
      bgWhite: '#FFFFFF',
      bgLight: '#D3D3D3',
      bgDark: '#1e1e1e',
      error: '#FF0000'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        ios:"Arial",
        android:"Roboto",
        default:'System'
      }) ,
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    }
    
  }

  
  export default theme;