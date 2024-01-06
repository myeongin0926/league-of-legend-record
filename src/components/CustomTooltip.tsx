import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import { THEME_COLOR } from "../theme";

const CustomTooltip = styled(({ title, children, className }: TooltipProps) => (
  <Tooltip title={title} placement="top" arrow classes={{ popper: className }}>
    {children}
  </Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

interface Props {
  title?: string;
  body?: string;
}

export const TooltipComponent = ({ title, body }: Props) => {
  return (
    <Box sx={{ p: "7px 5px 5px 5px", fontWeight: "bold" }}>
      <Box
        sx={{
          color: THEME_COLOR.yellow500,
          fontSize: "13px",
          mb: "5px",
        }}
      >
        {title}
      </Box>
      <Box sx={{ lineHeight: 1.3 }}>{body}</Box>
    </Box>
  );
};

TooltipComponent.defaultProps = {
  title: undefined,
  body: undefined,
};

export default CustomTooltip;
