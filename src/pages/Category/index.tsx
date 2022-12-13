import { useParams } from 'react-router-dom';

import { Breadcrumbs, Link } from '@mui/material';

import { fileExtensionConfig } from '../../utils/constants';

function Category() {
   const { category } = useParams();

   return (
      <div>
         <Breadcrumbs>
            <Link href='/' underline='none' color='inherit'>
               File Converter
            </Link>
            <Link href={category} color='text.primary'>
               {category && fileExtensionConfig[category]?.category}
            </Link>
         </Breadcrumbs>

         <h2>Choose your desired extension</h2>

         {
            category &&
            fileExtensionConfig[category]?.extensions.map(ext => 
               <Link href={`${category}/${ext}`} key={`file-extension: ${ext}}`}>
                  <button>
                     {ext}
                  </button>
               </Link>
            )
         }
      </div>
   )
}

export default Category;
