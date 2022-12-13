import styled from '@mui/system/styled';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

import { fileExtensionConfig } from '../../utils/constants';

const PageContainer = styled('div')({
   // padding: '0 5%'
});

const Menu = styled('div')({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '16px',
});

const CenteredText = styled('p')({
   textAlign: 'center'
});

function Home() {

   return (
      <PageContainer>
         <h1>File Converter</h1>
         <CenteredText>Choose your file category</CenteredText>
         <Menu>
            {
               Object.keys(fileExtensionConfig).map(category =>
                  <Link href={category} underline='none' key={`category: ${category}}`}>
                     <Card>
                        <CardContent>
                           {fileExtensionConfig[category].category}
                        </CardContent>
                     </Card>
                  </Link>
               )
            }
         </Menu>
      </PageContainer>
   )
}

export default Home;