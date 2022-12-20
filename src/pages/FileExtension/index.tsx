import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';
import { Box, Typography } from '@mui/material';

const SpaceBtwDiv = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   // paddingBottom: '8px',
   // borderBottom: 'inset grey 1px',
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
      <>
         <ExtensionHint>Upload file and configure your conversion settings</ExtensionHint>
         <SystemGrid>
            <GridMenu>
               <SpaceBtwDiv>
                  <Typography variant='h5' >Uploaded files</Typography>
                  <Button variant='contained'>Upload +</Button>
               </SpaceBtwDiv>
               <div>
                  {/* List of uploaded files */}
               </div>
               <hr />
               <SpaceBtwDiv>
                  <Button variant='contained' disabled={!downloadable}>Download</Button>
                  <Button variant='contained'>Convert to {extension}</Button>
               </SpaceBtwDiv>
            </GridMenu>
         </SystemGrid>
         <BackButton href='/' disableRipple>
            Back
         </BackButton>
      </>
   )
}

export default FileExtension;