import * as React from "react";
import { Flex, Avatar, Box, Container } from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";

const ANIMATION_DURATION = 0.5;

const IntroSection = () => {
  const color = "primary.600";

  return (
    <Container maxW="5xl" p={{ base: 5, md: 12 }}>
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor={color}
              src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                mt={0}
                cursor="pointer"
                width="max-content"
                fontFamily="Poppins"
              >
                Olá e bem-vindo(a),
              </Header>
            </MotionBox>
          </Box>
          <Box
            as="h2"
            fontSize="2xl"
            fontWeight="400"
            textAlign="left"
            fontFamily="Poppins"
          >
            Meu nome é{" "}
            <Box as="strong" fontWeight="600" fontFamily="Vollkorn">
              Mateus,
            </Box>{" "}
            um desenvolvedor
            <Box as="span" whiteSpace="nowrap" fontFamily="Vollkorn">
              JavaScript Full Stack
            </Box>{" "}
            <Box as="span" whiteSpace="nowrap">
              com uma paixão particular pelo React.
            </Box>
          </Box>
          <Box
            as="h2"
            fontSize="2xl"
            fontWeight="400"
            mt={5}
            textAlign="left"
            fontFamily="Vollkorn"
          >
            Tive a grande oportunidade de trabalhar em uma variedade de
            projetos, desde a criação de aplicações web dinâmicas para startups
            emergentes até a construção de plataformas robustas para grandes
            corporações. Minha competência reside em decifrar desafios técnicos
            complexos e transformá-los em soluções eficientes e amigáveis ao
            usuário.
          </Box>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default IntroSection;
