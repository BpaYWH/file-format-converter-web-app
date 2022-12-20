import Typography from '@mui/material/Typography';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import FlexLinkBox from '../../components/FlexLinkBox';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';

function Home() {
   return (

         <SystemGrid>
            <GridMenu>
               <ActionHint color='primary'>Choose your file category</ActionHint>
               {
                  Object.keys(fileExtensionConfig).map(category =>
                     <FlexLinkBox href={category} underline='none' key={`category: ${category}}`}>
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
   )
}

export default Home;