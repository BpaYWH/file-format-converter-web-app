import { useParams } from 'react-router-dom';
import { Breadcrumbs, Link } from '@mui/material';

import { fileExtensionConfig } from '../../utils/constants';

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
            <Link href={extension} underline='none' color='text.primary'>
               {extension}
            </Link>
         </Breadcrumbs>
         <h1>File Extension</h1>
      </div>
   )
}

export default FileExtension;