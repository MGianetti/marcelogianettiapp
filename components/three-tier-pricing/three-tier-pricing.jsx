import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children, mt, openPopOver }) {
  return (
    <Box
      mb={4}
      borderWidth="1px"
      alignSelf={{ base: "center", xl: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
      maxW="400px"
      minW="400px"
      mt={mt}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing({ openPopOver }) {
  return (
    <Box>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" fontFamily={"Poppins"}>
          Encontre a opção ideal para impulsionar seu sucesso
        </Heading>
        <Text fontSize="lg" color={"gray.500"} fontFamily={"Vollkorn"}>
          Satisfação garantida em 15 dias ou seu dinheiro de volta!
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", xl: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper mt={{ base: 0, lg: 20 }}>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" fontFamily="Poppins">
              Explorador Urbano
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontFamily="Poppins" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900" fontFamily="Vollkorn">
                89
              </Text>
              <Text fontSize="3xl" fontFamily="Poppins" color="gray.500">
                /mês*
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Geoprocessamento completo de imóveis e infraestrutura;
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Filtros avançados por tipo de bairro, valores e finalidade
                (aluguel, comércio/indústria, temporada,
                terrenos/sítios/fazendas, venda);
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Visualização precisa de imóveis, ferrovias, arruamento, rodovias
                principais, parques e hidrografia;
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Limite municipal e municípios vizinhos para análise de área
                geográfica;
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Recursos avançados de busca e análise para tomada de decisões
                imobiliárias assertivas;
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                as={"a"}
                onClick={openPopOver}
                w="full"
                fontFamily="Poppins"
                colorScheme="red"
                variant="outline"
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
              >
                Descobrir e explorar
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: "translate(-50%)" }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue("secondary.500", "secondary.600")}
                px={3}
                py={1}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
                fontFamily="Poppins"
                color="white"
              >
                Profissional
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" fontFamily="Poppins">
                Estrategista de Propriedades
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontFamily="Poppins" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900" fontFamily="Vollkorn">
                  189
                </Text>
                <Text fontSize="3xl" fontFamily="Poppins" color="gray.500">
                  /mês*
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Anúncios particulares atualizados dos últimos 30 dias em tempo
                  real para análise de especulação imobiliária e identificação
                  de oportunidades de investimento e valorização;
                </ListItem>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Plataforma personalizada para inserção de dados e otimização
                  do fluxo de trabalho;
                </ListItem>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Geoprocessamento completo de imóveis e infraestrutura,
                  incluindo supermercados, farmácias, hospitais, escolas,
                  restaurantes, academias, estações de transporte e mais;
                </ListItem>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Filtros avançados por tipo de bairro, valores e finalidade
                  (aluguel, comércio/indústria, temporada,
                  terrenos/sítios/fazendas, venda);
                </ListItem>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Visualização precisa de imóveis, ferrovias, arruamento,
                  rodovias principais, parques, hidrografia e pontos de
                  interesse;
                </ListItem>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Limite municipal e municípios vizinhos para análise de área
                  geográfica ampliada;
                </ListItem>
                <ListItem fontFamily="Poppins">
                  <ListIcon as={FaCheckCircle} color="primary.500" />
                  Recursos avançados de busca e análise para tomada de decisões
                  imobiliárias estratégicas;
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  as={"a"}
                  onClick={openPopOver}
                  w="full"
                  rounded={"full"}
                  size={"lg"}
                  fontWeight="extrabold"
                  fontFamily="Poppins"
                  px={6}
                  colorScheme={"red"}
                  backgroundImage="linear-gradient(to right, primary.600, secondary.600);"
                  _hover={{
                    backgroundImage:
                      "linear-gradient(to right, primary.500, secondary.500);",
                  }}
                >
                  Potencializar negócios
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper mt={{ base: 0, lg: 20 }}>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl" fontFamily="Poppins">
              Planejador Imobiliário
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontFamily="Poppins" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900" fontFamily="Vollkorn">
                109
              </Text>
              <Text fontSize="3xl" fontFamily="Poppins" color="gray.500">
                /mês*
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Geoprocessamento completo de imóveis e infraestrutura, incluindo
                supermercados, farmácias, hospitais, escolas, restaurantes,
                academias, estações de transporte e mais.
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Filtros avançados por tipo de bairro, valores e finalidade
                (aluguel, comércio/indústria, temporada,
                terrenos/sítios/fazendas, venda).
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Visualização precisa de imóveis, ferrovias, arruamento, rodovias
                principais, parques, hidrografia e pontos de interesse.
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Limite municipal e municípios vizinhos para análise de área
                geográfica ampliada.
              </ListItem>
              <ListItem fontFamily="Poppins">
                <ListIcon as={FaCheckCircle} color="primary.500" />
                Recursos avançados de busca e análise para tomada de decisões
                imobiliárias estratégicas.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                as={"a"}
                onClick={openPopOver}
                w="full"
                fontFamily="Poppins"
                colorScheme="red"
                variant="outline"
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
              >
                Planejar com confiança
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
