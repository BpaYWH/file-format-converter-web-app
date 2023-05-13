import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { convertImg } from '../../utils/imageConvert';
import { convertAudio } from '../../utils/audioConvert';
import { convertVideo } from '../../utils/videoConvert';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import DropZone from './DropZone';
import FileList from './FileList';
import FlexLinkBox from '../../components/FlexLinkBox';
import GridMenu from '../../layouts/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../layouts/SystemGrid';
import SystemMotion from '../../components/SystemMotion';

const SpaceBtwDiv = styled('div')({
   display: 'flex',
   justifyContent: 'space-between'
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
   borderTop: 'solid grey 1px',
   borderBottom: 'solid grey 1px',
   padding: '16px 0 16px 0'
});

const UploadHint = 'Upload file and configure your conversion settings';
const ConvertHint = 'Converted files will be download automatically';

// TODO: Test case for file extension & UI review
function FileExtension() {
   const { category, extension } = useParams();
   const navigate = useNavigate();
   const [hint, setHint] = useState<string>(UploadHint);
   //* Max. total file size is 2GB
   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

   const validate = (files: FileList) => {
      const newFileList = [...uploadedFiles];
      for (const file of files) {
         if (file.type.split('/')[0] !== category) {
            console.log(file.name, 'is not a', category, 'file');
         } else {
            newFileList.push(file);
         }
      }
      setUploadedFiles(newFileList);
   };

   const handleUpload = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.files && e.target.files[0]) {
         validate(e.target.files);
      }
   };

   const handleConvert = () => {
      if (!extension || !category) return;
      setHint(ConvertHint);

      switch (category) {
         case 'image': {
            convertImg(uploadedFiles, extension);
            break;
         }
         case 'audio': {
            convertAudio(uploadedFiles, extension);
            break;
         }
         case 'video': {
            convertVideo(uploadedFiles, extension);
            break;
         }

         default:
      }
   };

   useEffect(() => {
      if (
         !(
            category &&
            category in fileExtensionConfig &&
            extension &&
            fileExtensionConfig[category].extensions.indexOf(extension) > -1
         )
      ) {
         navigate('/not-found');
      }
   }, []);

   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{
            x: [-window.innerWidth / 2, 0],
            opacity: [0, 0.33, 0.66, 1],
            transition: { duration: 0.5, ease: 'easeOut' }
         }}
         exit={{ x: 1000, opacity: 0, transition: { duration: 0.5 } }}
      >
         <SystemGrid>
            <GridMenu>
               <ExtensionHint>{hint}</ExtensionHint>
               <SpaceBtwDiv id='upload-nav-div'>
                  <Typography variant='h5'>Uploaded files</Typography>
                  <Button variant='contained' component='label'>
                     Upload +
                     <input
                        hidden
                        accept={`${category}/*`}
                        type='file'
                        multiple
                        onChange={handleUpload}
                     />
                  </Button>
               </SpaceBtwDiv>

               <FileListDiv>
                  <FileList
                     fileList={uploadedFiles}
                     setFileList={setUploadedFiles}
                  />
                  <DropZone
                     category={category}
                     extension={extension}
                     validFileList={uploadedFiles}
                     setValidFileList={setUploadedFiles}
                     validateFile={validate}
                  />
               </FileListDiv>

               <SpaceBtwDiv id='convert-nav-div'>
                  <FlexLinkBox to={`../${category}`}>
                     <BackButton>Back</BackButton>
                  </FlexLinkBox>
                  <Button
                     variant='contained'
                     disabled={!uploadedFiles.length}
                     onClick={handleConvert}
                  >
                     Convert to {extension}
                  </Button>
               </SpaceBtwDiv>
            </GridMenu>
         </SystemGrid>
      </SystemMotion>
   );
}

export default FileExtension;
