import { Card, Divider, Grid, Stack } from '@mui/material'
import { useState } from 'react';

const RGBEnum = {
    R: 0,
    G: 1,
    B: 2,
} as const satisfies Record<string, number>;

type RGB = (typeof RGBEnum)[keyof typeof RGBEnum];

function RGBColorListItem({ rgb: RGB, value: number }) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
        </Stack>
    );
}

export function RGBSelector2D() {
    // track the selected color in RGB format
  const [selectedColor, setSelectedColor] = useState({ r: 0, g: 0, b: 0 });

  return (
    <Card>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid size={4}>
            {/* values and information about the selected color */}
            <Stack direction="column" spacing={2}>
            </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid size={8}>{/* a 2-D color map widget */}</Grid>
      </Grid>
    </Card>
  );
}
