import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../../pages/Home";
import Category from "../../pages/Category";
import FileExtension from "../../pages/FileExtension";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";

function AnimatedRoutes() {
   const location = useLocation();

   return (
      <PageContainer>
         <Title>File Converter</Title>
         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
               <Route path="" element={<Home />} />
               <Route path=":category" element={<Category />} />
               <Route path=":category/:extension" element={<FileExtension />} />

               {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
         </AnimatePresence>
      </PageContainer >
   )
}

export default AnimatedRoutes