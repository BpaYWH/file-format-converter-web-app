import styled from '@mui/system/styled';
import grey from '@mui/material/colors/grey';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { fileExtensionConfig } from '../../utils/constants';

const PageContainer = styled('div')({
   display: 'grid',
   gridTemplateRows: 'repeat(auto, 16px)',
   rowGap: '8px'
});

const Title = styled('p')({
   gridRow: '3 /span 2',
   fontSize: '48px',
   fontWeight: 700,
   color: '#2D3648'
});

const SystemGrid = styled('div')({
   gridRowStart: '8',
   display: 'grid',
   gridTemplateColumns: 'repeat(8, 1fr)',
});

const Menu = styled('div')({
   gridColumn: '2 / span 6',
   display: 'grid',
   gridTemplateColumns: '1fr',
   rowGap: '40px',
   justifyItems: 'stretch'
});

const ActionHint = styled('p')({
   textAlign: 'center',
   color: grey[500],
   fontWeight: 400,
   fontSize: '24px'
});

const LinkBox = styled(Link)({
   display: 'flex',
});

const PaddedButton = styled(Button)({
   flexGrow: '1',
   padding: '16px 24px',
   borderRadius: '6px',
   maxWidth: '800px'
});

function Home() {

   return (
      <PageContainer>
         <Title>File Converter</Title>
         <SystemGrid>
            <Menu>
               <ActionHint color='primary'>Choose your file category</ActionHint>
               {
                  Object.keys(fileExtensionConfig).map(category =>
                     <LinkBox href={category} underline='none' key={`category: ${category}}`}>
                        <PaddedButton variant='contained' color='primary' disableRipple>
                           <Typography color='white'>
                              {fileExtensionConfig[category].category}
                           </Typography>
                        </PaddedButton>
                     </LinkBox>
                  )
               }
            </Menu>
         </SystemGrid>
      </PageContainer>
   )
}

export default Home;