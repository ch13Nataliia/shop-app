import { Suspense, use } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Paragraph from '@/components/Paragraph';
import { Alert, Button, CircularProgress } from '@/components/mui';


export const LoadingView = () => <CircularProgress />;

export const ErrorView = ({ error, resetErrorBoundary }) => {
  return (
    <Alert severity="error">
      <Paragraph>{error.message}</Paragraph>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Retry
      </Button>
    </Alert>
  );
};
export const QueryBoundaries = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={ErrorView}
      onError={(...args) => console.log(args)}
    >
      <Suspense fallback={<LoadingView />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default QueryBoundaries;