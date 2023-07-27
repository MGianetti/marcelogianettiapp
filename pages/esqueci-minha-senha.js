import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LoggedOutLayout from "../layouts/logged-out-layout.component";

export default function ForgotPasswordForm() {
  return (
    <LoggedOutLayout>
      <Flex
        minH={"full"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily="Poppins"
          >
            Esqueceu sua senha?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
            fontFamily="Vollkorn"
          >
            Você vai receber um email com o link de redefinição
          </Text>
          <FormControl id="email">
            <Input
              placeholder="Insira o email"
              _placeholder={{ color: "gray.500" }}
              type="email"
              fontFamily="Poppins"
            />
          </FormControl>
          <Stack spacing={6}>
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
            >
              Solicitar redefinição
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </LoggedOutLayout>
  );
}
