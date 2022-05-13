import { Button } from "@mui/material";

interface Props {
  //Defining types
  link: string;
  variant?: boolean;
  label: string;
  icon?: React.ReactNode;
  Discord?: boolean;
}

const SocialButton = (props: Props) => {
  //Telling TS that my passed props are expected to be 2 strings, maybe a react node, and maybe a boolean
  return (
    <Button
      variant={props.variant ? "text" : "contained"}
      sx={{ width: "80%", mt: 1 }}
      href={props.link}
      startIcon={props.icon}
      target="_blank"
    >
      {props.label}
    </Button>
  );
};

export default SocialButton;
