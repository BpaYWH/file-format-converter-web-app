import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const BackLinkBox = styled(Link)({
   display: 'flex',
   textDecoration: 'none',
   color: 'black',
   maxWidth: '80px',
   margin: '0 auto'
});

export default BackLinkBox;
