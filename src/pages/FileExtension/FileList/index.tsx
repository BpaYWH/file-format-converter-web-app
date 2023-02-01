import { styled } from '@mui/system';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type TFileListProps = {
    fileList?: File[]
};
type TFilePanelProps = {
    name: string
};

const SpaceBtwDiv = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
});

const PanelDiv = styled('div')({
    border: "solid grey 1px",
    borderRadius: "4px",
    padding: "12px 16px 0 16px",
});

function FilePanel(props: TFilePanelProps) {
    const handleDeleteClick = () => {

    }

    return (
        <SpaceBtwDiv>
            <PanelDiv>{props.name}</PanelDiv>

            <Button disableRipple variant='text' onClick={handleDeleteClick}><Typography variant='h5'>-</Typography></Button>
        </SpaceBtwDiv>
    );
};

function FileList(props: TFileListProps) {
  return (
    <div>
        {
            props.fileList &&
            props.fileList.map(file => <FilePanel name={file.name} key={file.name} />)
        }
    </div>
  );
}

export default FileList;