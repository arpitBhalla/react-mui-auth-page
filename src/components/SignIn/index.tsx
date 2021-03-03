import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PasswordField from "./../Fields/PasswordField";

const Social = {
  Github: {
    color: "#131418",
    icon: GitHubIcon,
  },
  Linkedin: {
    color: "#0077B5",
    icon: LinkedInIcon,
  },
  Twitter: {
    color: "#55acee",
    icon: TwitterIcon,
  },
  Facebook: {
    color: "#3b5999",
    icon: FacebookIcon,
  },
  Google: {
    color: "red",
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
        width={20}
        height={20}
      />
    ),
  },
};

export interface SignInProps {
  handleSignIn: (signInVars: { email: string; password: string }) => any;
  hideTabs?: boolean;
  handleSocial: {
    Google?: () => void;
    Github?: () => void;
    Linkedin?: () => void;
    Twitter?: () => void;
    Facebook?: () => void;
  };
  textFieldVariant?: "outlined" | "filled" | "standard";
}
interface NaviProps {
  goToForget: () => any;
  goToSignUp: () => any;
}

const INITIAL = { text: "", error: "" };

const SignIn: React.FC<SignInProps & NaviProps> = ({
  goToForget,
  handleSignIn,
  goToSignUp,
  handleSocial,
  hideTabs = false,
  textFieldVariant = "filled",
}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (email.text === "") {
      setEmail({ ...email, error: "This field is required" });
    }
    if (password.text === "") {
      setPassword({ ...password, error: "Email Required" });
    }
    if (email.error || password.error) return;
    setLoading(true);
    if (typeof handleSignIn !== "function") handleSignIn = () => {};
    await handleSignIn({ email: email.text, password: password.text });
    setLoading(false);
  };
  return (
    <Box p={2}>
      <FormControl margin="none" fullWidth error={Boolean(email.error)}>
        <TextField
          variant={textFieldVariant}
          label="Email"
          value={email.text}
          onChange={(e) => {
            setEmail({ text: e.target.value, error: "" });
          }}
          error={Boolean(email.error)}
        />
        <FormHelperText>{email.error || " "}</FormHelperText>
      </FormControl>
      <PasswordField {...{ password, setPassword, textFieldVariant }} />

      <Typography
        variant="body2"
        color="textSecondary"
        align="right"
        style={{ cursor: "pointer" }}
        onClick={goToForget}
      >
        Forget Password?
      </Typography>

      <FormControl margin="normal" fullWidth>
        <Button
          onClick={handleSubmit}
          style={{ textTransform: "none" }}
          size="large"
          disabled={loading}
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign In
        </Button>
      </FormControl>

      {Object.values(handleSocial).some((v) => typeof v === "function") && (
        <Typography variant="subtitle2" color="textSecondary" align="center">
          or continue with
        </Typography>
      )}
      <Box display="flex" justifyContent="center">
        {Object.entries(handleSocial).map(([key, handler]) => {
          if (
            typeof handler !== "function" ||
            !Social[key] ||
            !Social[key].icon
          )
            return null;
          return (
            <IconButton
              key={key}
              aria-label={`${key} login button`}
              onClick={handler}
            >
              {React.createElement(Social[key].icon, {
                htmlColor: Social[key].color,
              })}
            </IconButton>
          );
        })}
      </Box>
      {hideTabs && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: "pointer" }}
          onClick={goToSignUp}
        >
          No Account? Create Now
        </Typography>
      )}
    </Box>
  );
};
export default SignIn;
