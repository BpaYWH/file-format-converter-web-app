import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

import { theme } from "./utils/theme";
import PageContainer from "./components/PageContainer";
import Title from "./components/Title";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <PageContainer>
            <Title>File Converter</Title>
            <BrowserRouter>
               <AnimatedRoutes />
            </BrowserRouter>
         </PageContainer >
      </ThemeProvider>
   )
}

export default App
