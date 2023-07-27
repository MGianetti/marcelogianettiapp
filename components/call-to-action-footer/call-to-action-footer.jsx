import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

export default function CallToActionFooter({ openPopOver }) {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        justify="center"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        w="full"
      >
        <Box
          w={{
            base: "full",
          }}
          px={4}
          py={20}
          textAlign={{
            base: "center",
          }}
        >
          <Box
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: "gray.100",
            }}
            mb={6}
          >
            <Text fontFamily="Poppins" display="block" mb={"64px"}>
              Não adie seu sucesso
            </Text>
            <Text
              as="p"
              display="block"
              fontFamily="Vollkorn"
              fontSize="xl"
              fontWeight="light"
            >
              Confie em nossa expertise para impulsionar seus resultados e te
              destacar em um mercado altamente competitivo.
            </Text>
          </Box>
          <Flex
            justifyContent={{ base: "center" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Button
              as={"a"}
              onClick={openPopOver}
              cursor="pointer"
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
              Assinar agora
            </Button>
            <Button
              as={"a"}
              onClick={openPopOver}
              rounded={"full"}
              fontWeight="extrabold"
              fontFamily={"Poppins"}
              px={6}
              mr={{ base: 0, sm: 6 }}
              mt={{ base: 6, sm: 0 }}
            >
              Converse com um especialista
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
