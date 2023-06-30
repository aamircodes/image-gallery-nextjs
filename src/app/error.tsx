'use client';

import { Button } from 'react-bootstrap';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <>
      <h1>Error </h1>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try again</Button>
    </>
  );
};

export default Error;
