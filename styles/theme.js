import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lato';
import '@fontsource/poppins';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#FDBE15',
      200: '#393839',
      300: '#F4F4F4',
      400: '#636680'
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Lato', sans-serif"
  }
});

export default customTheme;
