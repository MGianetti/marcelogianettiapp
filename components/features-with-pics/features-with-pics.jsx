import {
  Box,
  SimpleGrid,
  Flex,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function FeaturesWithPics({ openPopOver }) {
  return (
    <Flex w="full" justifyContent="center" alignItems="center">
      <Box bg="white" px={8} pt={20} mx="auto" maxW={"7xl"}>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            order={{
              base: "initial",
              md: 2,
            }}
          >
            <Heading
              as="h2"
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
              fontFamily={"Poppins"}
            >
              Alavanque suas vendas e aluguéis
            </Heading>
            <Heading
              as="p"
              mb={5}
              textAlign={{
                base: "justify",
                md: "justify",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
              fontFamily={"Vollkorn"}
              fontWeight="hairline"
              lineHeight={1.8}
            >
              Insights valiosos do mercado imobiliário para imobiliárias,
              corretores e corretoras. Identifique oportunidades, análise
              tendências e tome decisões embasadas em dados precisos.
              potencialize suas vendas e aluguel com uma abordagem estratégica e
              informada. Seja líder no setor imobiliário com informações
              relevantes e atualizadas.
            </Heading>
            <Flex justifyContent={{ base: "center", md: "left" }}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight="extrabold"
                fontFamily="Poppins"
                px={6}
                colorScheme={"red"}
                backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to right, primary.500, secondary.500);",
                }}
                as={"a"}
                onClick={openPopOver}
              >
                Obtenha resultados incríveis
              </Button>
            </Flex>
          </Box>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src="./urban-ease-demo.gif"
              />
            </Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box>
            <Heading
              as="h2"
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
              fontFamily={"Poppins"}
            >
              Eficiência na gestão de imóveis
            </Heading>
            <Heading
              as="p"
              mb={5}
              textAlign={{
                base: "justify",
                md: "justify",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
              fontFamily={"Vollkorn"}
              fontWeight="hairline"
              lineHeight={1.8}
            >
              Obtenha um nível de precisão e exatidão excepcionais. Explore os
              detalhes dos imóveis para descobrir oportunidades ocultas, avaliar
              potencial de investimento e otimizar seu processo de seleção de
              imóveis para alcançar um sucesso incomparável
            </Heading>
            <Flex justifyContent={{ base: "center", md: "left" }}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight="extrabold"
                fontFamily={"Poppins"}
                px={6}
                colorScheme={"red"}
                backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to right, primary.500, secondary.500);",
                }}
                as={"a"}
                onClick={openPopOver}
              >
                Comece agora
              </Button>
            </Flex>
          </Box>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src="./urban-ease-demo-2.gif"
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
