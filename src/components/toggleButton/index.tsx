import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface ToggleButtonProps {
  value: string;
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: string) => void;
}

const CustomToggleButton: React.FC<ToggleButtonProps> = ({ value, onChange }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
      color="primary"
      size="small"
    >
      <ToggleButton value="day">Today</ToggleButton>
      <ToggleButton value="week">This Week</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CustomToggleButton;