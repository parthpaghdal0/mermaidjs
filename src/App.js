
import { useState, useEffect } from 'react';

import './App.css';

import { Button, Stack, TextField, Box } from '@mui/material';
import axios from 'axios';

function App() {
  const [imageSrc, setImageSrc] = useState('');
  const [data, setData] = useState('');

  const generate = () => {
    axios.post(" https://7be3-79-142-196-137.ngrok-free.app/generate-mermaid", {
      mmd: data,
      headers: {
        "ngrok-skip-browser-warning": "any",
      },
      responseType: "arraybuffer",
    })
      .then((res) => {
        setImageSrc(res.data);
      })
  }

  return (
    <Stack padding={1} spacing={1}>
      <TextField
        multiline
        fullWidth
        maxRows={4}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Button variant="contained" onClick={generate}>
        Generate
      </Button>
      <Box>
        {imageSrc && <img src={imageSrc} alt="PNG Image" />}
      </Box>
    </Stack>
  );
}

export default App;
