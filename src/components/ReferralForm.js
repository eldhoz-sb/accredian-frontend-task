import axios from "axios";
import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ReferralForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error and success messages
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/referrals`,
        formData
      );
      setSuccess(true);
      setDisabled(true);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(
          "An error occurred while submitting the referral. Please try again."
        );
      }
    }
  };

  return (
    <>
      <IconButton onClick={onClose} sx={{ color: "red" }}>
        <CloseIcon />
      </IconButton>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom align="center">
          Refer and Earn
        </Typography>
        {error && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginBottom: 2 }}>
            Referral submitted successfully!
          </Alert>
        )}
        <Typography variant="h6" marginTop={2}>
          Your Details
        </Typography>
        <TextField
          label="Name"
          name="referrerName"
          value={formData.referrerName}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          disabled={disabled}
        />
        <TextField
          label="Email"
          name="referrerEmail"
          type="email"
          value={formData.referrerEmail}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          disabled={disabled}
        />
        <Typography variant="h6" marginTop={2}>
          Referee Details
        </Typography>
        <TextField
          label="Referee Name"
          name="refereeName"
          value={formData.refereeName}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          disabled={disabled}
        />
        <TextField
          label="Referee Email"
          name="refereeEmail"
          type="email"
          value={formData.refereeEmail}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          disabled={disabled}
        />
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={disabled}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ReferralForm;
