import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";

const contactOptions = [
  {
    label: "Endereço",
    value: "São José dos Campos, São Paulo",
    icon: GoLocation,
  },
  {
    label: "WhatsApp",
    value: "+55 12 98149-0353",
    icon: BsPhone,
  },
  {
    label: "Email",
    value: "MarceloGianetti1@gmail.com ",
    icon: HiOutlineMail,
  },
];

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const response = await axios.post("/api/sendEmail", {
      from: "mateusgianetti1996@gmail.com",
      to: "MarceloGianetti1@gmail.com",
      subject: "From contact form",
      html: `
      <div>
        <h3>name: ${name}</h3>
        <h3>email: ${email}</h3>
        <p>message: ${message}</p>
      </div>
      `,
    });

    if (response.status === 200) {
      toast("Sua mensagem foi enviada com sucesso!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast("Erro! Por favor, tente novamente.", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  };
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        {/* <Flex align="center" justify="center" direction="column" my={8}>
          <Heading fontSize="4xl" mb={2} fontFamily="Poppins" fontWeight={500}>
            Garanta Seu <b>Acesso Antecipado</b> no <b>Pré-Lançamento</b>
          </Heading>
          <Text fontSize="md" textAlign="center" fontFamily="Vollkorn">
            Digite seu e-mail abaixo para se inscrever agora e garantir o{" "}
            <b>acesso antecipado</b> com desconto exclusivo. Não perca a
            oportunidade de impulsionar seus negócios imobiliários com a mais
            avançada tecnologia de geoprocessamento.
          </Text>
        </Flex> */}
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
                px={3}
                minW="280px"
              >
                <Icon as={option.icon} w={10} h={10} color="primary.600" />
                <Text fontSize="lg" fontWeight="semibold" fontFamily="Poppins">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center" fontFamily="Poppins">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: "none", md: "flex" }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        {/* <Text
          fontSize="md"
          textAlign="center"
          fontFamily="Vollkorn"
          color="primary.600"
        >
          Prepare-se para explorar cidades e imóveis com uma precisão inédita.
          Esperamos você no futuro do mercado imobiliário!{" "}
        </Text> */}
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue("white", "gray.700")}
          rounded="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%" fontFamily="Poppins">
            <Stack
              w="100%"
              spacing={3}
              direction={{ base: "column", md: "row" }}
            >
              <FormControl id="name">
                <FormLabel fontSize="2xl">Seu nome</FormLabel>
                <Input
                  type="text"
                  placeholder="Digite seu nome aqui"
                  rounded="md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel fontSize="2xl">Seu email</FormLabel>
                <Input
                  type="email"
                  placeholder="Digite seu email aqui"
                  rounded="md"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Stack>
            <FormControl id="message">
              <FormLabel fontSize="2xl">Mensagem</FormLabel>
              <Textarea
                size="lg"
                placeholder="Digite sua mensagem aqui"
                rounded="md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              rounded={"none"}
              fontWeight="extrabold"
              fontFamily={"Poppins"}
              px={6}
              mr={{ base: 0, sm: 6 }}
              onClick={() => handleSubmit()}
              colorScheme={"red"}
              backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
              _hover={{
                backgroundImage:
                  "linear-gradient(to right, primary.500, secondary.500);",
              }}
            >
              Enviar
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
}
