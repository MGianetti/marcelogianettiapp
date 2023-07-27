"use client";
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

const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Redirect to another page or do something else on successful sign up
  } catch (error) {
    setError(error.message);
  }
};

export default function SimpleCard() {
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
            <Heading fontSize={"4xl"} fontFamily="Poppins">
              Entre
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"} fontFamily="Vollkorn">
              Para testar nosso <Link color={"secondary.500"}>aplicativo</Link>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            fontFamily="Poppins"
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"primary.600"} href="/esqueci-minha-senha">
                    Esqueceu sua senha?
                  </Link>
                </Stack>
                <Button
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
                  disabled
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </LoggedOutLayout>
  );
}
