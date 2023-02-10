import { useNavigate } from 'react-router-dom';
import { fileExtensionConfig } from '../../utils/constants';

import Typography from '@mui/material/Typography';

import ActionHint from '../../components/ActionHint';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';
import SystemMotion from '../../components/SystemMotion';

function Home() {
   const navigate = useNavigate();

   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{ x: [-window.innerWidth / 2, 0,], opacity: [0, 0.33, 0.66, 1], transition: { duration: 0.5, ease: 'easeOut' } }}
         exit={{ x: 1000, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      >
         <SystemGrid>
            <GridMenu>
               <ActionHint data-testid='nav-hint' color='primary'>Choose your file category</ActionHint>
               {
                  Object.keys(fileExtensionConfig).map(category =>
                     <PaddedButton key={`category: ${category}}`} variant='contained' color='primary' disableRipple onClick={() => navigate(category)}>
                        <Typography color='white'>
                           {fileExtensionConfig[category].category}
                        </Typography>
                     </PaddedButton>
                  )
               }
            </GridMenu>
         </SystemGrid>
      </SystemMotion>
   )
}

export default Home;