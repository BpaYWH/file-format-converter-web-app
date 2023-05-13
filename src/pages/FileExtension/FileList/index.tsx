import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type TFileListProps = {
   fileList: File[];
   setFileList: React.Dispatch<React.SetStateAction<File[]>>;
};
type TFilePanelProps = {
   name: string;
   id: number;
   handleDelete: (id: number) => void;
};

type TProgressDivProps = {
   width: string;
};

const VertFlexDiv = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '16px'
});

const SpaceBtwDiv = styled('div')({
   display: 'flex',
   justifyContent: 'space-between'
});

const PanelDiv = styled('div')({
   border: 'solid grey 1px',
   borderRadius: '4px'
});

const PanelContentContainer = styled('div')({
   position: 'relative',
   top: '-100%',
   padding: '12px 16px 12px 16px'
});

const ProgressDiv = styled('div')((props: TProgressDivProps) => ({
   backgroundColor: 'rgba(0, 200, 0, 0.3)',
   borderRadius: '4px',
   position: 'relative',
   width: props.width,
   height: '100%'
}));

// TODO: Test case for file panel && UI review
function FilePanel(props: TFilePanelProps) {
   return (
      <SpaceBtwDiv>
         <PanelDiv>
            <ProgressDiv width='0%' />
            <PanelContentContainer>{props.name}</PanelContentContainer>
         </PanelDiv>

         <Button
            disableRipple
            variant='text'
            onClick={() => props.handleDelete(props.id)}
         >
            <Typography variant='h5'>-</Typography>
         </Button>
      </SpaceBtwDiv>
   );
}

// TODO: Test case for file list && UI review
function FileList(props: TFileListProps) {
   const handleDelete = (id: number) => {
      const newFileList = [...props.fileList];
      newFileList.splice(id, 1);
      props.setFileList(newFileList);
   };

   return (
      <VertFlexDiv>
         {props.fileList &&
            props.fileList.map((file, fileId) => (
               <FilePanel
                  name={file.name}
                  id={fileId}
                  handleDelete={handleDelete}
                  key={file.name}
               />
            ))}
      </VertFlexDiv>
   );
}

export default FileList;
