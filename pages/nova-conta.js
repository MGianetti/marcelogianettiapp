import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import initFirebase from "../config/firebase";
import { setUserCookie } from "../config/userCookie";
import { mapUserData } from "../config/useUser";
import LoggedOutLayout from "../layouts/logged-out-layout.component";

initFirebase();
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    },
  },
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/private";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LoggedOutLayout>
      <Flex
        minH={"full"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"} fontFamily="Poppins">
              Crie uma conta
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"} fontFamily="Vollkorn">
              E teste o nosso aplicativo
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} fontSize="2xl" fontFamily="Poppins">
              {/* <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Sobrenome</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack> */}
              <FormControl id="email" isRequired minW={200}>
                <FormLabel>Endereço de email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  rounded={"full"}
                  fontWeight="extrabold"
                  fontFamily={"Poppins"}
                  px={6}
                  colorScheme={"red"}
                  backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                  _hover={{
                    backgroundImage:
                      "linear-gradient(to right, primary.500, secondary.500);",
                  }}
                >
                  Cria conta
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Já tem conta?{" "}
                  <Link href={"/entrar"} color={"blue.400"}>
                    Entrar
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </LoggedOutLayout>
  );
};

export default FirebaseAuth;
