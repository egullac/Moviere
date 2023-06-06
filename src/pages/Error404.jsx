import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const primary = grey[900]; // #f44336

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        Sayfa bulunamadı..
      </Typography>
    </Box>
  );
}