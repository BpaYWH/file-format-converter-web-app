import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/system';

import Home from "./pages/Home";
import Category from "./pages/Category";
import FileExtension from "./pages/FileExtension";

import { theme } from "./utils/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Routes>
               <Route path="" element={<Home />} />
               <Route path=":category" element={<Category />} />
               <Route path=":category/:extension" element={<FileExtension />} />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
