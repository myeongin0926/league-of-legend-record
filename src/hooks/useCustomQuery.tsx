import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useCustomQuery = (): {
  deskTop: boolean;
  tablet: boolean;
  mobile: boolean;
} => {
  const theme = useTheme();
  const deskTop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("md"));
  const mobile = useMediaQuery(theme.breakpoints.down(670));
  return { deskTop, tablet, mobile };
};

export default useCustomQuery;
