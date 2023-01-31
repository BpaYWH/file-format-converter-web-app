import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import DropZone from '../../components/DropZone';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';
import SystemMotion from '../../components/SystemMotion';
import { Box, Typography } from '@mui/material';
import FlexLinkBox from '../../components/FlexLinkBox';

const SpaceBtwDiv = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
});

const BackButton = styled(PaddedButton)({
   gridRowEnd: 28,
   justifySelf: 'center',
   maxWidth: '80px',
   '&:hover': {
      backgroundColor: 'transparent'
   }
});

const ExtensionHint = styled(ActionHint)({
   gridRow: '5',
   margin: 0
});

const FilesList = styled(GridMenu)({

});

function FileExtension() {
   const { category, extension } = useParams();
   const [downloadable, setDownloadable] = useState<boolean>(false);

   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{ x: [-window.innerWidth / 2, 0,], opacity: [0, 0.33, 0.66, 1], transition: { duration: 0.5, ease: 'easeOut' } }}
         exit={{ x: -1000, opacity: 0, transition: { duration: 0.5 } }}
      >
         <SystemGrid>
            <GridMenu>
               <ExtensionHint>Upload file and configure your conversion settings</ExtensionHint>
               <SpaceBtwDiv>
                  <Typography variant='h5' >Uploaded files</Typography>
                  <Button variant='contained'>
                     Upload +
                     <input hidden accept="image/*" type="file" multiple />
                  </Button>
                  
               </SpaceBtwDiv>
               {/* List of uploaded files */}
               <div>
                  <DropZone />
               </div>

               <SpaceBtwDiv>
                  <Button variant='contained' disabled={!downloadable}>Download</Button>
                  <Button variant='contained'>Convert to {extension}</Button>
               </SpaceBtwDiv>
            </GridMenu>
         </SystemGrid>
         <BackButton disableRipple>
            <FlexLinkBox to={`../${category}`}>
               Back
            </FlexLinkBox>
         </BackButton>
      </SystemMotion>
   )
}

export default FileExtension;