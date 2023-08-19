import {styled} from "@mui/system";
import {IconButton} from "@mui/material";

const MobileIconButton = styled(IconButton)`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
  color: black;
`;


export { MobileIconButton }