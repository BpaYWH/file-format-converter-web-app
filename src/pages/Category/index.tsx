import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import GridMenu from '../../layouts/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../layouts/SystemGrid';
import SystemMotion from '../../components/SystemMotion';

const CPageNum = styled(Pagination)({
   alignSelf: 'center'
});

const BackButton = styled(PaddedButton)({
   '&:hover': {
      backgroundColor: 'transparent'
   },
   padding: 0
});

function Category() {
   const navigate = useNavigate();
   const { category } = useParams();
   const [page, setPage] = useState<number>(1);
   const [pageCount, setPageCount] = useState<number>(1);
   const [pagedExtension, setPagedExtension] = useState<string[]>([]);
   const [extension, setExtension] = useState<string[]>([]);

   const handlePageChange = (e: React.ChangeEvent<unknown>, pageNum: number) =>
      setPage(pageNum);

   useEffect(() => {
      if (category && category in fileExtensionConfig) {
         setExtension(fileExtensionConfig[category]?.extensions);
         setPageCount(
            Math.ceil(fileExtensionConfig[category]?.extensions.length / 4)
         );
      } else {
         navigate('/not-found');
      }
   }, [category]);

   useEffect(() => {
      setPagedExtension(extension.slice((page - 1) * 4, page * 4));
   }, [page, extension]);

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
               <ActionHint data-testid='nav-hint'>
                  Choose your desired extension
               </ActionHint>
               {pagedExtension.map((ext) => (
                  <PaddedButton
                     data-testid='extension-btn'
                     variant='contained'
                     color='primary'
                     disableRipple
                     onClick={() => navigate(ext)}
                     key={`file-extension: ${ext}}`}
                  >
                     {ext}
                  </PaddedButton>
               ))}
               {pageCount > 1 && (
                  <CPageNum
                     count={pageCount}
                     onChange={handlePageChange}
                     page={page}
                  />
               )}
               <BackButton disableRipple onClick={() => navigate('/')}>
                  Back
               </BackButton>
            </GridMenu>
         </SystemGrid>
      </SystemMotion>
   );
}

export default Category;
