import { FC, Fragment } from 'react';

import {
  Container,
  Grid,
  GridItem,
  Heading,
  HTMLChakraProps,
  UnorderedList,
  Text,
  ListItem,
  VStack,
} from '@chakra-ui/react';

const Title: FC<HTMLChakraProps<'h2'>> = (props) => <Heading as="h2" size="sm" textAlign="end" {...props} />;

const TitleRow: FC<{ title: string }> = ({ title }) => (
  <Fragment>
    <GridItem>
      <Title>{title}</Title>
    </GridItem>
    <GridItem></GridItem>
  </Fragment>
);

const Label: FC<HTMLChakraProps<'p'>> = (props) => (
  <Text as="p" fontWeight="medium" color="gray.500" textAlign="end" {...props} />
);

const InfoRow: FC<{ label: string }> = ({ label, children }) => (
  <Fragment>
    <GridItem>
      <Label>{label}</Label>
    </GridItem>
    <GridItem>{children}</GridItem>
  </Fragment>
);

const Spacer: FC = () => (
  <Fragment>
    <GridItem h="5"></GridItem>
    <GridItem></GridItem>
  </Fragment>
);

export interface IAboutContentProps {}

export const AboutContent: FC<IAboutContentProps> = () => {
  return (
    <Container maxW="2xl">
      <Grid templateColumns="max-content 1fr" rowGap="5" columnGap="5">
        <TitleRow title="PERSONAL INFORMATION" />
        <InfoRow label="E-mail">ivicabatinic123@gmail.com</InfoRow>

        <Spacer />

        <TitleRow title="WORK EXPERIENCE" />
        <InfoRow label="Apr 2019 — present">
          <Text mb="2">Infinum, Lead React Engineer</Text>
          <UnorderedList color="gray.500">
            <ListItem>writing clean and maintainable code</ListItem>
            <ListItem>improving development processes</ListItem>
            <ListItem>educating and facilitating the improvement of team members&apos; skills</ListItem>
            <ListItem>refining new features and sprint planning</ListItem>
            <ListItem>active, two-way discussion with clients to find the best solutions for their products</ListItem>
            <ListItem>
              actively participating in all parts of the development process - from feature refinement to testing
            </ListItem>
            <ListItem>working with SCRUM methodology</ListItem>
          </UnorderedList>
        </InfoRow>

        <InfoRow label="Jun 2015  - Apr 2019">
          <Text mb="2">Infinum, JavaScript Engineer</Text>
        </InfoRow>

        <InfoRow label="Projects at Infinum">
          <Text fontWeight="semibold">Truck Parking Europe</Text>
          <Text mb="2" fontSize="sm" color="gray.500">
            Lead React Engineer
          </Text>
          Truck Parking Europe is the largest free European platform for truck parking facilities. The goal of the
          platform is to connect parking owners, fleet managers, and truck drivers. There, truck drivers and fleet
          managers can find and book a secure parking spot, while parking owners can manage spots and bookings.
          <Text mb="2" mt="3">
            Responsibilities:
          </Text>
          <UnorderedList color="gray.500">
            <ListItem>built advanced Google Maps integrations with React</ListItem>
            <ListItem>built custom markers and clustering logic for Google Maps</ListItem>
            <ListItem>implemented custom theming and component system to support white labeling</ListItem>
            <ListItem>advanced usage of React patterns (hooks, stale while revalidate)</ListItem>
          </UnorderedList>
          <br />
          <br />
          <Text fontWeight="semibold">Eva web - PoC</Text>
          <Text mb="2" fontSize="sm" color="gray.500">
            Lead React Engineer
          </Text>
          Lead engineer on a Proof of Concept project for Online Banking for Raiffeisenbank. RBA is one of the largest
          banks in the region and they wanted to completely reengineer and redesign their online banking experience. The
          PoC was successful and it’s being implemented at the moment.
          <Text mb="2" mt="3">
            Responsibilities:
          </Text>
          <UnorderedList color="gray.500">
            <ListItem>designed architecture for the web banking app in React</ListItem>
            <ListItem>
              built the integration with the existing banking API already used on the mobile native applications
            </ListItem>
            <ListItem>developed a design system architecture that can be used across many applications</ListItem>
            <ListItem>
              developed a global store with MobX library to optimally synchronize the application state with React
              components
            </ListItem>
            <ListItem>worked with transaction and money transfer API calls</ListItem>
          </UnorderedList>
        </InfoRow>
      </Grid>
    </Container>
  );
};
