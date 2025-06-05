import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Container, Flex, Text, VStack } from '@chakra-ui/react';

import Post from '../../types/post';
import { Chakra } from '../../lib/Chakra';
import { Reward } from '../../lib/rewards/Reward';
import { IsBatak } from '../../components/is-batak';
import { IsMelon } from '../../components/is-melon';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';

const defaults = {
  lifetime: 200,
  angle: 90,
  decay: 0.91,
  spread: 45,
  startVelocity: 35,
  elementCount: 40,
  elementSize: 8,
};

const minMaxStepDict: any = {
  lifetime: [0, 360, 1],
  angle: [0, 360, 1],
  decay: [0, 1, 0.01],
  spread: [0, 360, 1],
  startVelocity: [1, 100, 1],
  elementCount: [1, 256, 1],
  elementSize: [1, 50, 1],
};

type Props = {
  allPosts: Post[];
};

const Rewards = ({ allPosts }: Props) => {
  const [config, setConfig] = useState(defaults);
  const [type, setType] = useState<'confetti' | 'emoji'>('confetti');

  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <Container maxW="2xl" py="5" centerContent>
          {/* @ts-ignore */}
          <IsMelon />
          <Reward type={type} zIndex={9999} {...config}>
            {/* @ts-ignore */}
            {({ rewardMe }) => <IsBatak mt={20} onClick={() => rewardMe()} />}
          </Reward>

          {/* <Group my="5" value={type} onChange={(type) => setType(type as any)}>
            <Stack gap={5} direction="row">
              <Radio colorPalette="brand" value="confetti">
                confetti
              </Radio>
              <Radio colorPalette="brand" value="emoji">
                emoji
              </Radio>
            </Stack>
          </Group> */}

          <VStack justify="stretch" w="full">
            {Object.entries(config).map(([option, value]) => {
              const handler = (newValue: any) => setConfig((oldConfig) => ({ ...oldConfig, [option]: newValue }));
              const minMaxStep = minMaxStepDict[option];

              return (
                <Flex key={option} justify="center" w="full">
                  <Text fontSize="sm" mr={5} w="100px">
                    {option}
                  </Text>
                  {/* <Slider
                    flex="1"
                    minW="0"
                    defaultValue={value}
                    colorPalette="brand"
                    min={minMaxStep[0]}
                    max={minMaxStep[1]}
                    step={minMaxStep[2]}
                    onChange={handler}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <NumberInput
                    size="xs"
                    ml={5}
                    w="70px"
                    min={minMaxStep[0]}
                    max={minMaxStep[1]}
                    step={minMaxStep[2]}
                    value={value}
                    onChange={handler}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput> */}
                </Flex>
              );
            })}
          </VStack>
        </Container>
      </Layout>
    </Chakra>
  );
};

export default Rewards;
