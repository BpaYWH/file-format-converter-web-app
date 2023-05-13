import { styled } from '@mui/material/styles';

const GridMenu = styled('div')({
   gridColumn: '3 / span 4',
   display: 'flex',
   flexDirection: 'column',
   gap: '40px',
   alignItems: 'stretch'
});

export default GridMenu;
