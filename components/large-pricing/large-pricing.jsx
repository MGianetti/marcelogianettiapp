import React from "react";
import {
  Box,
  chakra,
  Text,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";

export default function LargePricing() {
  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");

  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="primary.500"
            _dark={{
              color: "brand.300",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span
            mt={2}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
            fontFamily="Vollkorn"
          >
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };

  return (
    <>
      <Flex
        boxSize="full"
        bg="#gray.800"
        p={{
          base: "0",
          md: "10",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          textAlign="center"
          w="full"
          bg={bottomBg}
          maxW={{
            base: "full",
            md: "7xl",
          }}
        >
          <Box pt={20}>
            <Box w="full" px={[2, 10, 4]} mx="auto">
              <Text
                mb={2}
                fontSize="5xl"
                fontWeight="bold"
                lineHeight="tight"
                bgGradient="linear(to-r, primary.500, secondary.600)"
                bgClip="text"
                fontFamily="Poppins"
              >
                Simple transparent pricing
              </Text>
              <chakra.p
                mb={6}
                fontSize={["lg", , "xl"]}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontFamily="Vollkorn"
              >
                If you re not satisfied, contact us and we ll refund you within
                the first 20 days.
              </chakra.p>
            </Box>
            <Box>
              <Flex
                rounded="md"
                mx={[4, 10]}
                bg={bottomBg}
                shadow="xl"
                mb="100px"
                textAlign="left"
                direction={{
                  base: "column",
                  lg: "row",
                }}
              >
                <Stack spacing={8} p="45px" flex="0.7">
                  <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    lineHeight="tight"
                    fontFamily="Poppins"
                  >
                    Estrategista de Propriedades
                  </Text>
                  <chakra.p
                    fontSize={["sm", , "md"]}
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                    fontFamily="Vollkorn"
                  >
                    One plan for any organization—from startups to Fortune 500s.
                    We offer 50% off of for all students and universities.
                    Please get in touch with us and provide proof of your
                    status.
                  </chakra.p>
                  <Flex align="center">
                    <Text
                      whiteSpace="nowrap"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      color="brand.400"
                      fontFamily="Poppins"
                    >
                      What s included
                    </Text>
                    <Flex
                      ml="15px"
                      w="full"
                      borderTopWidth="1px"
                      h="3px"
                      borderTopColor={topBg}
                    />
                  </Flex>
                  <SimpleGrid
                    columns={[1, , 2, 1, 2]}
                    spacingY={4}
                    fontFamily="Vollkorn"
                  >
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                  </SimpleGrid>
                </Stack>
                <Stack
                  p="45px"
                  flex="0.3"
                  justify="center"
                  align="center"
                  bg="#F9FAFB"
                  _dark={{
                    bg: "gray.900",
                  }}
                  borderRightRadius="md"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    fontFamily="Poppins"
                  >
                    Pay once, use anytime
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontFamily="Poppins" fontWeight="600">
                      R$
                    </Text>
                    <Text fontSize="5xl" fontWeight="900" fontFamily="Vollkorn">
                      109
                    </Text>
                    <Text fontSize="3xl" fontFamily="Poppins" color="gray.500">
                      /mês*
                    </Text>
                  </HStack>
                  <Stack spacing={6}>
                    <Button
                      color={"white"}
                      w="300px"
                      py={6}
                      backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                      _hover={{
                        backgroundImage:
                          "linear-gradient(to right, primary.500, secondary.500);",
                      }}
                      fontFamily="Poppins"
                      fontSize="2xl"
                    >
                      Get access
                    </Button>
                    <Text
                      align="center"
                      fontWeight="semibold"
                      fontFamily="Vollkorn"
                    >
                      Get a free sample
                      <chakra.span
                        ml={2}
                        color="gray.500"
                        _dark={{
                          color: "gray.400",
                        }}
                        fontWeight="medium"
                      >
                        (50MB)
                      </chakra.span>
                    </Text>
                  </Stack>
                </Stack>
              </Flex>
            </Box>{" "}
            <Box>
              <Flex
                rounded="md"
                mx={[4, 10]}
                bg={bottomBg}
                shadow="xl"
                mb="100px"
                textAlign="left"
                direction={{
                  base: "column",
                  lg: "row",
                }}
              >
                <Stack spacing={8} p="45px" flex="0.7">
                  <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    lineHeight="tight"
                    fontFamily="Poppins"
                  >
                    Estrategista de Propriedades
                  </Text>
                  <chakra.p
                    fontSize={["sm", , "md"]}
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                    fontFamily="Vollkorn"
                  >
                    One plan for any organization—from startups to Fortune 500s.
                    We offer 50% off of for all students and universities.
                    Please get in touch with us and provide proof of your
                    status.
                  </chakra.p>
                  <Flex align="center">
                    <Text
                      whiteSpace="nowrap"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      color="brand.400"
                      fontFamily="Poppins"
                    >
                      What s included
                    </Text>
                    <Flex
                      ml="15px"
                      w="full"
                      borderTopWidth="1px"
                      h="3px"
                      borderTopColor={topBg}
                    />
                  </Flex>
                  <SimpleGrid
                    columns={[1, , 2, 1, 2]}
                    spacingY={4}
                    fontFamily="Vollkorn"
                  >
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                  </SimpleGrid>
                </Stack>
                <Stack
                  p="45px"
                  flex="0.3"
                  justify="center"
                  align="center"
                  bg="#F9FAFB"
                  _dark={{
                    bg: "gray.900",
                  }}
                  borderRightRadius="md"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    fontFamily="Poppins"
                  >
                    Pay once, use anytime
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontFamily="Poppins" fontWeight="600">
                      R$
                    </Text>
                    <Text fontSize="5xl" fontWeight="900" fontFamily="Vollkorn">
                      109
                    </Text>
                    <Text fontSize="3xl" fontFamily="Poppins" color="gray.500">
                      /mês*
                    </Text>
                  </HStack>
                  <Stack spacing={6}>
                    <Button
                      borderRadius="full"
                      color={"white"}
                      w="300px"
                      py={6}
                      backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                      _hover={{
                        backgroundImage:
                          "linear-gradient(to right, primary.500, secondary.500);",
                      }}
                      fontFamily="Poppins"
                      fontSize="2xl"
                    >
                      Get access
                    </Button>
                    <Text
                      align="center"
                      fontWeight="semibold"
                      fontFamily="Vollkorn"
                    >
                      Get a free sample
                      <chakra.span
                        ml={2}
                        color="gray.500"
                        _dark={{
                          color: "gray.400",
                        }}
                        fontWeight="medium"
                      >
                        (50MB)
                      </chakra.span>
                    </Text>
                  </Stack>
                </Stack>
              </Flex>
            </Box>{" "}
            <Box>
              <Flex
                rounded="md"
                mx={[4, 10]}
                bg={bottomBg}
                shadow="xl"
                mb="100px"
                textAlign="left"
                direction={{
                  base: "column",
                  lg: "row",
                }}
              >
                <Stack spacing={8} p="45px" flex="0.7">
                  <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    lineHeight="tight"
                    fontFamily="Poppins"
                  >
                    Estrategista de Propriedades
                  </Text>
                  <chakra.p
                    fontSize={["sm", , "md"]}
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                    fontFamily="Vollkorn"
                  >
                    One plan for any organization—from startups to Fortune 500s.
                    We offer 50% off of for all students and universities.
                    Please get in touch with us and provide proof of your
                    status.
                  </chakra.p>
                  <Flex align="center">
                    <Text
                      whiteSpace="nowrap"
                      fontWeight="semibold"
                      textTransform="uppercase"
                      color="brand.400"
                      fontFamily="Poppins"
                    >
                      What s included
                    </Text>
                    <Flex
                      ml="15px"
                      w="full"
                      borderTopWidth="1px"
                      h="3px"
                      borderTopColor={topBg}
                    />
                  </Flex>
                  <SimpleGrid
                    columns={[1, , 2, 1, 2]}
                    spacingY={4}
                    fontFamily="Vollkorn"
                  >
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                    <Feature>Unlimited Projects</Feature>
                    <Feature>Email Tracking and Analytics </Feature>
                    <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                    <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                  </SimpleGrid>
                </Stack>
                <Stack
                  p="45px"
                  flex="0.3"
                  justify="center"
                  align="center"
                  bg="#F9FAFB"
                  _dark={{
                    bg: "gray.900",
                  }}
                  borderRightRadius="md"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    fontFamily="Poppins"
                  >
                    Pay once, use anytime
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontFamily="Poppins" fontWeight="600">
                      R$
                    </Text>
                    <Text fontSize="5xl" fontWeight="900" fontFamily="Vollkorn">
                      109
                    </Text>
                    <Text fontSize="3xl" fontFamily="Poppins" color="gray.500">
                      /mês*
                    </Text>
                  </HStack>
                  <Stack spacing={6}>
                    <Button
                      color={"white"}
                      w="300px"
                      py={6}
                      backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                      _hover={{
                        backgroundImage:
                          "linear-gradient(to right, primary.500, secondary.500);",
                      }}
                      fontFamily="Poppins"
                      fontSize="2xl"
                    >
                      Get access
                    </Button>
                    <Text
                      align="center"
                      fontWeight="semibold"
                      fontFamily="Vollkorn"
                    >
                      Get a free sample
                      <chakra.span
                        ml={2}
                        color="gray.500"
                        _dark={{
                          color: "gray.400",
                        }}
                        fontWeight="medium"
                      >
                        (50MB)
                      </chakra.span>
                    </Text>
                  </Stack>
                </Stack>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
