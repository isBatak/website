import { Container } from '@chakra-ui/react';

const PreviewAlert = () => {
  return (
    <div>
      <Container>
        <div>
          This is page is a preview. <a href="/api/exit-preview">Click here</a> to exit preview mode.
        </div>
      </Container>
    </div>
  );
};

export default PreviewAlert;
