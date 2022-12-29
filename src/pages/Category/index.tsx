import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from '@mui/system/styled';
import { Pagination } from '@mui/material';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import BackLinkBox from '../../components/BackLinkBox';
import FlexLinkBox from '../../components/FlexLinkBox';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';
import SystemMotion from '../../components/SystemMotion';

const CPageNum = styled(Pagination)({
   gridRowStart: 18,
   justifySelf: 'center'
});

const BackButton = styled(PaddedButton)({
   '&:hover': {
      backgroundColor: 'transparent'
   },
   padding: 0
});

function Category() {
   const { category } = useParams();
   const [page, setPage] = useState<number>(1);
   const [pageCount, setPageCount] = useState<number>(1);
   const [pagedExtension, setPagedExtension] = useState<string[]>([]);
   const [extension, setExtension] = useState<string[]>([]);

   const handlePageChange = (e: any, pageNum: number) => setPage(pageNum);

   useEffect(() => {
      if (category) {
         setExtension(fileExtensionConfig[category]?.extensions);
         setPageCount(Math.ceil(fileExtensionConfig[category]?.extensions.length / 4));
      }
      else {
         setExtension([]);
         setPageCount(0);
      }
   }, [category]);
   useEffect(() => {
      setPagedExtension(extension.slice((page - 1) * 4, page * 4));
   }, [page, extension]);

   return (
      <SystemMotion
         initial={{ x: -window.innerWidth, opacity: 0 }}
         animate={{ x: [-window.innerWidth / 2, 0,], opacity: [0, 0.33, 0.66, 1], transition: { duration: 0.5, ease: 'easeOut' } }}
         exit={{ x: -1000, opacity: 0, transition: { duration: 0.5 } }}
      >
         <SystemGrid>
            <GridMenu>
               <ActionHint>Choose your desired extension</ActionHint>
               {
                  pagedExtension.map(ext =>
                     <FlexLinkBox to={`${ext}`} key={`file-extension: ${ext}}`}>
                        <PaddedButton variant='contained' color='primary' disableRipple>
                           {ext}
                        </PaddedButton>
                     </FlexLinkBox>
                  )
               }
               <BackLinkBox to='/'>
                  <BackButton disableRipple>
                     Back
                  </BackButton>
               </BackLinkBox>
            </GridMenu>
         </SystemGrid>
         {(pageCount > 1) &&
            <CPageNum count={pageCount} onChange={handlePageChange} page={page} />
         }


      </SystemMotion>
   )
}

export default Category;
