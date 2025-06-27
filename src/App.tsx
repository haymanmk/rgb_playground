import { useState } from 'react'
import '@/styles/App.css'
import { RGBSelector2D } from './components/rgb-selector-2d'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{ padding: 2 }}>
      <RGBSelector2D />
    </Box>
  )
}

export default App
