import styled from '@mui/system/styled';

const SystemGrid = styled('div')({
   gridRowStart: '8',
   display: 'grid',
   gridTemplateColumns: 'repeat(8, 1fr)',
});

export default SystemGrid;