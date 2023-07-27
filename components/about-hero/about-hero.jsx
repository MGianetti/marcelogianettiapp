import {
  chakra,
  Link,
  Stack,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

export default function AboutHero() {
  return (
    <Box pb={8}>
      <Stack
        pos="relative"
        bgGradient={`linear(to-l, secondary.600, primary.500)`}
        height="250px"
        w="100%"
        opacity={0.7}
      ></Stack>
      <Box
        maxW="7xl"
        p={4}
        isolation="isolate"
        zIndex={3}
        mt="-10rem"
        marginInline="auto"
      >
        <Box
          // boxShadow={useColorModeValue(
          //   "0 4px 6px rgba(160, 174, 192, 0.6)",
          //   "0 4px 6px rgba(9, 17, 28, 0.9)"
          // )}
          bg={useColorModeValue("white", "gray.800")}
          p={{ base: 4, sm: 8 }}
          overflow="hidden"
          rounded="2xl"
        >
          <Stack
            textAlign="center"
            pos="relative"
            zIndex={1}
            direction="column"
            spacing={5}
          >
            <chakra.h1
              fontSize="4xl"
              lineHeight={1.2}
              fontWeight="bold"
              fontFamily="Poppins"
            >
              Conheça a inovação no setor imobiliário
            </chakra.h1>
            <chakra.h1
              color="gray.400"
              fontSize="xl"
              lineHeight={1.2}
              fontFamily="Vollkorn"
              textAlign="center"
            >
              Somos uma empresa pioneira no desenvolvimento de soluções
              inovadoras para o mercado imobiliário. Com uma equipe de
              especialistas apaixonados pela indústria, estamos comprometidos em
              fornecer tecnologias avançadas que impulsionam a eficiência, a
              produtividade e o sucesso dos profissionais do setor. Nossa missão
              é capacitar corretores, imobiliárias e corretoras com ferramentas
              poderosas de geoprocessamento, permitindo que eles tomem decisões
              embasadas, obtenham insights valiosos e ofereçam uma experiência
              excepcional aos seus clientes. Junte-se a nós e descubra como
              podemos transformar a sua jornada imobiliária.
            </chakra.h1>

            {/* <Stack
              direction={{ base: "column", md: "row" }}
              spacing={3}
              justifyContent="center"
            >
              <chakra.button
                h={10}
                px={6}
                color="white"
                fontSize="md"
                variant="solid"
                rounded="full"
                lineHeight={1}
                backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to right, primary.500, secondary.500);",
                }}
              >
                View Components
              </chakra.button>
              <Button as={Link} href="#" rounded="full" colorScheme="gray">
                Call to action
              </Button>
            </Stack> */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
