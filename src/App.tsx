import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';

import { theme } from './utils/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <AnimatedRoutes />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
