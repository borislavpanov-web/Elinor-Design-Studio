import { styled } from "@mui/system";
import { IconButton, TextField } from "@mui/material";

const MobileIconButton = styled(IconButton)`
  display: none;
  @media (max-width: 1023px) {
    display: block;
  }
  color: black;
`;

const EmailField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
    },
    "&:hover fieldset": {
      borderColor: "#000000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },
});

export { MobileIconButton, EmailField };
