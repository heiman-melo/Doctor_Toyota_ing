'use client';

import { Box } from '@mui/material';
import Navigation from './Navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - 280px)` },
          mt: '64px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
