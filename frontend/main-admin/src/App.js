import { Box, Button } from '@mui/material';
import { Layout } from './components/Layout';
import { useDialog, useToast } from './hooks';

function App() {
  const showToast = useToast();
  const showDialog = useDialog();

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            showDialog();
          }}
        >
          Toggle toast
        </Button>
      </Box>
    </Layout>
  );
}

export default App;
