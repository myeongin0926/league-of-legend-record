import {
  grey,
  brown,
  blueGrey,
  yellow,
  lightBlue,
  blue,
  green,
  purple,
  red,
  pink,
} from "@mui/material/colors";

const THEME_COLOR = {
  grey100: grey[100],
  grey200: grey[200],
  grey300: grey[200],
  grey400: grey[400],
  grey500: grey[500],
  grey600: grey[600],
  grey700: grey[700],
  TIER: {
    IRON: grey[600],
    BRONZE: brown[600],
    SILVER: blueGrey[500],
    GOLD: yellow[900],
    PLATINUM: lightBlue[600],
    EMERALD: green[500],
    DIAMOND: blue[600],
    MASTER: purple[600],
    GRANDMASTER: pink[600],
    CHALLENGER: red.A700,
  },
};

const THEME_GLOBAL_STYLES = {
  "*": {
    verticalAlign: "text-bottom",
  },
};

export { THEME_COLOR, THEME_GLOBAL_STYLES };