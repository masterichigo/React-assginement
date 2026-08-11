import React from "react";
import { ToggleButton, ToggleButtonGroup, Typography, Box } from "@mui/material";

interface ToggleButtonProps {
  value: string;
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: string) => void;
}

const CustomToggleButton: React.FC<ToggleButtonProps> = ({ value, onChange }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography variant="subtitle1" fontWeight={500}>Trending:</Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={onChange}
        color="primary"
        size="small"
      >
        <ToggleButton value="day">Today</ToggleButton>
        <ToggleButton value="week">This Week</ToggleButton>
        <ToggleButton value="None">None</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default CustomToggleButton;