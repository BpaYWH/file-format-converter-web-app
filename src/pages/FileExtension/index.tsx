import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { fileExtensionConfig } from '../../utils/constants';
import { loadImage } from '../../utils/imageConvert';

import ActionHint from '../../components/ActionHint';
import DropZone from './DropZone';
import FileList from './FileList';
import FlexLinkBox from '../../components/FlexLinkBox';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';
import SystemMotion from '../../components/SystemMotion';


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

const FileListDiv = styled('div')({
   borderTop: "solid grey 1px",
   borderBottom: "solid grey 1px",
   padding: "16px 0 16px 0"
});

const testFile1 = new File([], "long long long long long long long name");
const testFile2 = new File([], "short name");

const UploadHint = "Upload file and configure your conversion settings";
const ConvertHint = "Converted files will be download automatically";

function FileExtension() {
   const { category, extension } = useParams();
   const [hint, setHint] = useState<string>(UploadHint);
   const [uploadedFiles, setUploadedFiles] = useState<File[]>([testFile1, testFile2]);

   const handleConvert = () => {
      if (!extension) return;
      setHint(ConvertHint);
      // let url;
      uploadedFiles.forEach(file => {
         // url = window.URL.createObjectURL(file);
         loadImage(file, extension);
      });

   }

   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{ x: [-window.innerWidth / 2, 0,], opacity: [0, 0.33, 0.66, 1], transition: { duration: 0.5, ease: 'easeOut' } }}
         exit={{ x: -1000, opacity: 0, transition: { duration: 0.5 } }}
      >
         <SystemGrid>
            <GridMenu>
               <ExtensionHint>{hint}</ExtensionHint>
               <SpaceBtwDiv id="upload-nav-div">
                  <Typography variant='h5' >Uploaded files</Typography>
                  <Button variant='contained'>
                     Upload +
                     <input hidden accept={`${category}/*`} type="file" multiple />
                  </Button>
               </SpaceBtwDiv>

               <FileListDiv>
                  <FileList fileList={uploadedFiles} setFileList={setUploadedFiles} />
                  <DropZone category={category} extension={extension} validFileList={uploadedFiles} setValidFileList={setUploadedFiles} />
               </FileListDiv>

               <SpaceBtwDiv id="convert-nav-div">
                  {/* <Button variant='contained' disabled={!downloadable}>Download</Button> */}
                  <Button variant='contained' disabled={!uploadedFiles.length} onClick={handleConvert}>Convert to {extension}</Button>
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