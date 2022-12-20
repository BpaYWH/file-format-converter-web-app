import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from '@mui/system/styled';

import Home from "../../pages/Home";
import Category from "../../pages/Category";
import FileExtension from "../../pages/FileExtension";

const SystemMotion = styled(motion.div)({
   gridRowStart: '8',
});

const Template = () => {
   return (

         <SystemMotion
            initial={{ x: -window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.5 } }}
         >
            <Outlet />
         </SystemMotion >
   );
}

function AnimatedRoutes() {
   const location = useLocation();

   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Template />} >
               <Route path="/" element={<Home />} />
               <Route path="/:category" element={<Category />} />
               <Route path="/:category/:extension" element={<FileExtension />} />
            </Route>
         </Routes>
      </AnimatePresence>
   )
}

export default AnimatedRoutes