import { fileExtensionConfig } from '../../utils/constants';

import Typography from '@mui/material/Typography';

import ActionHint from '../../components/ActionHint';
import GridMenu from '../../layouts/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../layouts/SystemGrid';
import SystemMotion from '../../components/SystemMotion';

type TProps = {
   setRoute: (route: string) => void;
};

function Home({ setRoute }: TProps) {
   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{
            x: [-window.innerWidth / 2, 0],
            opacity: [0, 0.33, 0.66, 1],
            transition: { duration: 0.5, ease: 'easeOut' }
         }}
         exit={{
            x: -1000,
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
         }}
      >
         <SystemGrid>
            <GridMenu>
               <ActionHint data-testid='nav-hint' color='primary'>
                  Choose your file category
               </ActionHint>
               {Object.keys(fileExtensionConfig).map((category) => (
                  <PaddedButton
                     data-testid='category-btn'
                     key={`category: ${category}}`}
                     variant='contained'
                     color='primary'
                     disableRipple
                     onClick={() => setRoute(category)}
                  >
                     <Typography color='white'>
                        {fileExtensionConfig[category].category}
                     </Typography>
                  </PaddedButton>
               ))}
            </GridMenu>
         </SystemGrid>
      </SystemMotion>
   );
}

export default Home;
