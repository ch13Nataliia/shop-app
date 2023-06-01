import React, { useContext } from 'react';

import Header from '@/components/Header';
import { Container, Alert, Snackbar } from '@/components/mui';

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
      {
        <Snackbar
          open={open}
          autoHideDuration={hideDuration}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: '100%' }}
          >
            <Paragraph sx={{ margin: '0px' }}>{message}</Paragraph>
          </Alert>
        </Snackbar>
      }
    </>
  );
}

export default Layout;

// const {
//   isOpen: open,
//   severity,
//   onClose: handleClose,
//   message,
//   hideDuration,
// } = useContext(UIContext);

// const action = (props) => {
//   console.log(props);
//   return (
//     <React.Fragment>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );
// };
{
  /* <Snackbar
        open={open}
        autoHideDuration={hideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
          {action}
        </Alert>
      </Snackbar> */
}
