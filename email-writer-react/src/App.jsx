import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { Typography, Container, Box, TextField, FormControl, FormControlLabel, InputLabel, Select, MenuItem, Button, CircularProgress, Switch } from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [darkMode, setDarkMode] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setGeneratedReply('');
    setShowReply(false);
    try {
      const response = await axios.post("http://email-writer-env.ap-south-1.elasticbeanstalk.com/api/email/generate", {
        emailContent,
        tone
      });
      const reply = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
      // Simulate typing animation
      let typed = '';
      let index = 0;
      const interval = setInterval(() => {
        if (index < reply.length) {
          typed += reply[index++];
          setGeneratedReply(typed);
        } else {
          clearInterval(interval);
          setShowReply(true);
        }
      }, 10);
    } catch (error) {
      setError('Failed to generate reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Container maxWidth="lg" className="app-wrapper">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h3" component="h1">
            Email Reply Generator
          </Typography>
          <FormControlLabel
            control={
              <Switch checked={darkMode} onChange={handleThemeToggle} color="primary" />
            }
            label="Dark Mode"
            sx={{ color: darkMode ? 'white' : 'black' }}
          />
        </Box>

        <Box>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ my: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box className="reply-box">
            <Typography variant="h6" gutterBottom>
              Generated Reply
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply || ''}
              InputProps={{
                readOnly: true,
              }}
            />
            {showReply && (
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default App
