import { Button, TextField } from '@mui/material'

const UploadForm = () => {
  return (
    <>
      <form>
        <TextField type='file'></TextField>
        <Button variant='contained' color='primary'>Upload</Button>
      </form>
    </>
     
  )
}

export default UploadForm