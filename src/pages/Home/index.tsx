import Typography from '@mui/material/Typography';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import FlexLinkBox from '../../components/FlexLinkBox';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';
import SystemMotion from '../../components/SystemMotion';

function Home() {

   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{ x: [-window.innerWidth / 2, 0,], opacity: [0, 0.33, 0.66, 1], transition: { duration: 0.5, ease: 'easeOut' } }}
         exit={{ x: 1000, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      >
         <SystemGrid>
            <GridMenu>
               <ActionHint color='primary'>Choose your file category</ActionHint>
               {
                  Object.keys(fileExtensionConfig).map(category =>
                     <FlexLinkBox to={category} key={`category: ${category}}`}>
                        <PaddedButton variant='contained' color='primary' disableRipple>
                           <Typography color='white'>
                              {fileExtensionConfig[category].category}
                           </Typography>
                        </PaddedButton>
                     </FlexLinkBox>
                  )
               }
            </GridMenu>
         </SystemGrid>
      </SystemMotion>
   )
}

export default Home;