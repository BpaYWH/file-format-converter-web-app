import { useParams } from 'react-router-dom';
import { Breadcrumbs, Link, Box } from '@mui/material';
import { styled } from '@mui/system';

import { fileExtensionConfig } from '../../utils/constants';

const SpaceBtwDiv = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
});

function FileExtension() {
   const { category, extension } = useParams();

   return (
      <div>
         <Breadcrumbs>
            <Link href='/' underline='none' color='inherit'>
               File Converter
            </Link>
            <Link href={`/${category}`} underline='none' color='inherit'>
               {category && fileExtensionConfig[category]?.category}
            </Link>
            <Link href={extension} color='text.primary'>
               {extension}
            </Link>
         </Breadcrumbs>
         <h2>Upload file and configure your conversion settings</h2>
         <div>
            <SpaceBtwDiv>
               <h2>Uploaded files</h2>
               <button>upload +</button>
            </SpaceBtwDiv>
            <hr />
            <div>
               {/* List of uploaded files */}
            </div>
            <hr />
            <SpaceBtwDiv>
               <button>Download</button>
               <button>Convert to {extension}</button>
            </SpaceBtwDiv>
         </div>
      </div>
   )
}

export default FileExtension;