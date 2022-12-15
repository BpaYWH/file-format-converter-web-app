import styled from '@mui/system/styled';

const GridMenu = styled('div')({
   gridColumn: '2 / span 6',
   display: 'grid',
   gridTemplateColumns: '1fr',
   rowGap: '40px',
   justifyItems: 'stretch'
});

export default GridMenu;