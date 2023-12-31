import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  IconButton,
  createIcon,
  keyframes,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  from { transform: translate(12rem, 0rem) rotate(248deg); }
  to { transform: translate(-7rem, 0) rotate(-90deg); }
`;

const animation = `${animationKeyframes} 7s ease-in-out infinite alternate`;

const animationKeyframesSmall = keyframes`
  from { transform: translate(-16rem, -6rem) rotate(248deg); }
  to { transform: translate(9rem, 5rem) rotate(-90deg); }
`;

const animationSmall = `${animationKeyframesSmall} 7s ease-in-out infinite alternate`;

const BlobAnimation = () => (
  <Box
    as={motion.div}
    position="absolute"
    w={{ sm: "10rem", md: "21rem" }}
    h={{ sm: "12rem", md: "24rem" }}
    background={"linear-gradient(181deg, #6a97b2, #325570 100%)"}
    borderRadius="full"
    mixBlendMode="hard-light"
    filter="blur(40px)"
    animation={{ sm: animationSmall, md: animation }}
    zIndex={-1}
  />
);

export default function HeroSection({ openPopOver }) {
  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text as={"span"} fontFamily={"Poppins"} position={"relative"}>
                Marcelo Gianetti
              </Text>
              <br />
              <Text as={"span"} color={"primary.600"} fontFamily={"Poppins"}>
                de Jesus
              </Text>
            </Heading>
            {/* <Text
              color={"gray.500"}
              fontFamily={"Cabin"}
              textAlign={{ base: "center", md: "left" }}
            >
              Impulsione suas vendas e aluguéis de imóveis: potencialize sua
              corretagem imobiliária com geoprocessamento de ponta.
              <br />
              Explore cidades e imóveis com precisão detalhada. Tecnologia
              inovadora para corretores, corretoras e imobiliárias. Alavanque
              seus negócios com geoprocessamento avançado.
            </Text> */}
            {/* <Flex
              justifyContent={{ base: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Button
                as={"a"}
                rounded={"full"}
                fontWeight="extrabold"
                fontFamily={"Poppins"}
                px={6}
                mr={{ base: 0, sm: 6 }}
                colorScheme={"red"}
                backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to right, primary.500, secondary.500);",
                }}
                onClick={openPopOver}
                cursor="pointer"
              >
                Domine o mercado
              </Button>
              <Button
                rounded={"full"}
                fontWeight="extrabold"
                fontFamily={"Poppins"}
                px={6}
                mr={{ base: 0, sm: 6 }}
                mt={{ base: 6, sm: 0 }}
                leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
                as={"a"}
                onClick={openPopOver}
                cursor="pointer"
              >
                Descubra os recursos
              </Button>
            </Flex> */}
          </Stack>

          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <BlobAnimation />
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              overflow={"hidden"}
            >
              {/* <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100076629357946%2Fvideos%2F651102909873135%2F&show_text=false&width=560&t=0"
                width="560"
                height="314"
                styles="border:none;overflow:hidden"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe> */}
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});
