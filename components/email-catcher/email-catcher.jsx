import {
  chakra,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CTAEmailCatcher() {
  return (
    <Container maxW="5xl" p="6">
      <EmailCatcher />
    </Container>
  );
}

const EmailCatcher = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post("/api/sendEmail", {
      from: "mateusgianetti1996@gmail.com",
      to: "MarceloGianetti1@gmail.com",
      subject: "From popover form",
      html: `
      <div>
        <h3>email: ${email}</h3>
      </div>
      `,
    });

    if (response.status === 200) {
      toast("Você foi cadastrado em nossa newsletter", {
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
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      p={{ base: 8, md: 16 }}
    >
      <Box>
        <chakra.h2
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          bgGradient="linear(to-l, primary.500, secondary.500)"
          bgClip="text"
          fontFamily="Vollkorn"
          minW={200}
        >
          Cadastre-se na newsletter
        </chakra.h2>
      </Box>
      <Stack
        direction={{ base: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "100%" }}
      >
        <Input
          fontFamily="Poppins"
          placeholder={"Email"}
          bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
          border={0}
          _focus={{
            bg: "whiteAlpha.300",
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          autoComplete="email"
          rounded="none"
        />
        <Button
          as={"a"}
          rounded="none"
          fontWeight="extrabold"
          fontFamily={"Poppins"}
          px={6}
          mr={{ sm: 6 }}
          colorScheme={"red"}
          backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
          _hover={{
            backgroundImage:
              "linear-gradient(to right, primary.500, secondary.500);",
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleSubmit();
          }}
        >
          Inscrever
        </Button>
      </Stack>
    </Stack>
  );
};
