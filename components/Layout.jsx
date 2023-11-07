import React, { useContext } from 'react';

import Header from '@/components/Header';
import FooterNavigation from './navigation/FooterNavigation';
import {
  Container,
  Alert,
  Snackbar,
  IconButton,
  CloseIcon,
  Typography,
} from '@/components/mui';

import { UIContext } from '@/components/contexts/UI.context';
import Paragraph from '@/components/Paragraph';


function Layout({ children }) {
  const {
    isOpen: open,
    severity,
    onClose: handleClose,
    message,
    hideDuration,
  } = useContext(UIContext);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>

        <Container maxWidth="xl">{children}</Container>
      </main>
      <footer>
        <FooterNavigation />
      </footer>
      <Snackbar
        open={open}
        autoHideDuration={hideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          <Paragraph sx={{ margin: '0px' }}>{message}</Paragraph>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
    </>
  );
}

export default Layout;
