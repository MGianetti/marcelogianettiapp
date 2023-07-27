import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { URBAN, EASE } from "../nav-bar/nav-bar.constants";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Logo = (props) => {
  return (
    <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"Poppins"}
        color={useColorModeValue("primary.500", "white")}
        fontSize="2xl"
      >
        {URBAN}&nbsp;
      </Text>

      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"Poppins"}
        color={useColorModeValue("secondary.500", "white")}
        fontSize="2xl"
      >
        {EASE}
      </Text>
    </Flex>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="none"
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontSize={"lg"} mb={2} fontFamily="Poppins" fontWeight="extrabold">
      {children}
    </Text>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post("/api/sendEmail", {
      from: "mateusgianetti1996@gmail.com",
      to: "MarceloGianetti1@gmail.com",
      subject: "From footer form",
      html: `
      <div>
        <h3>email: ${email}</h3>
      </div>
      `,
    });

    if (response.status === 200) {
      toast("Seu email foi cadastrado!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      setEmail("");
    } else {
      toast("Erro! Por favor, tente novamente.", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  };
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"} fontFamily="Vollkorn">
              © 2023 Mateus Gianetti de Jesus <br />
              Todos os direitos reservados
            </Text>
            {/* <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Empresa</ListHeader>
            {/* <Link href={"#"} fontFamily="Vollkorn">
              Sobre Nós
            </Link>
            <Link href={"#"} fontFamily="Vollkorn">
              Blog
            </Link> */}
            <Link href={"/contato"} fontFamily="Vollkorn">
              Contato
            </Link>
            {/* <Link href={"#"} fontFamily="Vollkorn">
              Preços
            </Link>
            <Link href={"#"} fontFamily="Vollkorn">
              Depoimentos
            </Link> */}
          </Stack>
          {/* <Stack align={"flex-start"}>
            <ListHeader>Suporte</ListHeader>
            <Link href={"#"} fontFamily="Vollkorn">
              Central de Ajuda
            </Link>
            <Link href={"#"} fontFamily="Vollkorn">
              Termos de Serviço
            </Link>
            <Link href={"#"} fontFamily="Vollkorn">
              Jurídico
            </Link>
            <Link href={"#"} fontFamily="Vollkorn">
              Política de Privacidade
            </Link>
          </Stack> */}
          <Stack align={"flex-start"} minW={"280px"}>
            <ListHeader>Fique por dentro</ListHeader>
            <Stack direction={"row"}>
              <Input
                fontFamily="Poppins"
                placeholder={"Inscreva-se agora"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="email"
                rounded="none"
              />
              <IconButton
                color="white"
                backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                _hover={{
                  backgroundImage:
                    "linear-gradient(to right, primary.500, secondary.500);",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
                rounded="none"
                onClick={handleSubmit}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
