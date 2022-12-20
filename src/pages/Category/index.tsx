import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from '@mui/system/styled';
import { Pagination } from '@mui/material';

import { fileExtensionConfig } from '../../utils/constants';
import ActionHint from '../../components/ActionHint';
import FlexLinkBox from '../../components/FlexLinkBox';
import GridMenu from '../../components/GridMenu';
import PaddedButton from '../../components/PaddedButton';
import SystemGrid from '../../components/SystemGrid';

const CPageNum = styled(Pagination)({
   gridRowStart: 18,
   justifySelf: 'center'
});

const BackButton = styled(PaddedButton)({
   gridRowEnd: 28,
   justifySelf: 'center',
   maxWidth: '80px',
   '&:hover': {
      backgroundColor: 'transparent'
   }
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
      <>
         <SystemGrid>
            <GridMenu>
               <ActionHint>Choose your desired extension</ActionHint>
               {
                  pagedExtension.map(ext =>
                     <FlexLinkBox href={`${category}/${ext}`} key={`file-extension: ${ext}}`}>
                        <PaddedButton variant='contained' color='primary' disableRipple>
                           {ext}
                        </PaddedButton>
                     </FlexLinkBox>
                  )
               }
            </GridMenu>
         </SystemGrid>
         {(pageCount > 1) &&
            <CPageNum count={pageCount} onChange={handlePageChange} page={page} />
         }
         <BackButton href='/' disableRipple>
            Back
         </BackButton>
      </>
   )
}

export default Category;
