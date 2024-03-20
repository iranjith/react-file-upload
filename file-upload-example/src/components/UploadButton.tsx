import { CloudUploadOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';


const UploadButton =() => {
    return (
        <Button variant="contained" color="primary" startIcon={<CloudUploadOutlined />}>
            Upload
        </Button>
    );
};

export default UploadButton;