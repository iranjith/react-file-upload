import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';

const FileUploadPilot: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Perform upload logic here
            console.log('Uploading file:', selectedFile);
        }
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <input
                    accept="image/*"
                    id="file-upload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                    <Button variant="contained" color="primary" component="span">
                        Select File
                    </Button>
                </label>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    {selectedFile ? selectedFile.name : 'No file selected'}
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!selectedFile}
                    onClick={handleUpload}
                >
                    Upload
                </Button>
            </Grid>
        </Grid>
    );
};

export default FileUploadPilot;