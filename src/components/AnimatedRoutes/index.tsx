import {
   Navigate,
   Route,
   Routes,
   useLocation,
   useNavigate
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

import Home from '../../pages/Home';
import Category from '../../pages/Category';
import FileExtension from '../../pages/FileExtension';
import PageContainer from '../../layouts/PageContainer';
import PageNotFound from '../../pages/PageNotFound';
import Title from '../../components/Title';

const HomeTitle = styled(Title)({
   cursor: 'pointer'
});

function AnimatedRoutes() {
   const location = useLocation();
   const navigate = useNavigate();

   const navigateTo = (route: string) => {
      navigate(route);
   };

   return (
      <PageContainer>
         // TODO: Add a landing animation
         <HomeTitle onClick={() => navigateTo('')}>File Converter</HomeTitle>
         <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
               <Route path='' element={<Home setRoute={navigateTo} />} />
               <Route path=':category' element={<Category />} />
               <Route path=':category/:extension' element={<FileExtension />} />
               <Route path='not-found' element={<PageNotFound />} />
               <Route path='*' element={<Navigate to='not-found' />} />'
            </Routes>
         </AnimatePresence>
      </PageContainer>
   );
}

export default AnimatedRoutes;
