import { Box, Container, Heading, Text, Image, Stack, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={20}>
        <Heading as="h1" size="2xl" mb={8} textAlign="center">
          인공지능으로 더 나은 미래를 만듭니다
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={12}>
          우리는 인공지능 기술을 활용하여 사회와 기업이 직면한 문제를 해결하고, 더 나은 미래를 만들어 갑니다.
        </Text>
        <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTA3NTI3MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="인공지능 기술" mb={12} mx="auto" />
        <Stack spacing={8}>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              우리의 미션
            </Heading>
            <Text fontSize="lg">우리의 미션은 인공지능 기술을 통해 사회와 기업이 직면한 문제를 해결하고, 더 나은 미래를 만드는 것입니다. 우리는 끊임없는 연구와 혁신을 통해 인공지능 기술을 발전시키고, 이를 통해 사회와 기업에 가치를 제공합니다.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              우리의 기술
            </Heading>
            <Text fontSize="lg">우리는 최첨단 인공지능 기술을 개발하고 있습니다. 머신러닝, 딥러닝, 자연어 처리, 컴퓨터 비전 등 다양한 분야에서 우수한 기술력을 보유하고 있습니다. 우리의 기술은 다양한 산업 분야에 적용되어 혁신을 이끌어내고 있습니다.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              우리의 가치
            </Heading>
            <Text fontSize="lg">우리는 인공지능 기술을 통해 사회에 긍정적인 영향을 미치는 것을 가장 중요한 가치로 여깁니다. 우리는 기술의 발전과 함께 윤리적 책임을 다하고, 사회적 가치 창출을 위해 노력합니다. 투명성, 책임감, 혁신성은 우리가 추구하는 핵심 가치입니다.</Text>
          </Box>
        </Stack>
      </Container>
      <Flex bg="gray.100" py={20} justifyContent="center">
        <Heading as="h2" size="xl" textAlign="center">
          인공지능으로 더 나은 세상을 만드는 우리와 함께 하세요
        </Heading>
      </Flex>
    </Box>
  );
};

export default Index;
