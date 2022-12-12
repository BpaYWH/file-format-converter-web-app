import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import FileExtension from "./pages/FileExtension";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="" element={<Home />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:extension" element={<FileExtension />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
