import React, { useState } from 'react';
import nato from './nato.json';
import police from './police.json';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' }, // Blue color
        background: { default: '#e3f2fd' },
    },
});

function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ padding: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Read your name over the phone
        </Typography>
        <Typography variant="body1" gutterBottom>
          This app helps you to read your name in NATO and Police phonetic alphabets.
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Enter text"
          value={text}
          onChange={handleChange}
          sx={{ marginBottom: 3 }}
        />
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: theme.palette.primary.main, color: '#fff' }}>Letter</TableCell>
                <TableCell align="center" sx={{ backgroundColor: theme.palette.primary.main, color: '#fff' }}>Police</TableCell>
                <TableCell align="center" sx={{ backgroundColor: theme.palette.primary.main, color: '#fff' }}>NATO</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {text.split('').map((letter, index) => {
                const upper = letter.toUpperCase();
                const natoMapped = nato[upper] || '';
                const policeMapped = police[upper] || '';
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{upper}</TableCell>
                    <TableCell align="center">{policeMapped}</TableCell>
                    <TableCell align="center">{natoMapped}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
