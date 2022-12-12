import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { fileExtensionConfig } from '../../utils/constants';

const Menu = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
`;

function Home() {

   return (
      <div>
         <h1>File Converter</h1>
         <h2>Choose your file category</h2>
         <Menu>
            {
               Object.keys(fileExtensionConfig).map(category =>
                  <Link to={category} key={`category: ${category}}`}>
                     <button>
                        {fileExtensionConfig[category].category}
                     </button>
                  </Link>
               )
            }
         </Menu>
      </div>
   )
}

export default Home;