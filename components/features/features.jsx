import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Geoprocessamento Avançado",
    text: "Tenha acesso a recursos de geoprocessamento de última geração para análise precisa e detalhada de dados imobiliários",
  },
  {
    id: 2,
    title: "Mapeamento de Infraestrutura",
    text: " Identifique a localização de ruas asfaltadas, ruas de terra, áreas verdes, rios, avenidas, linhas de trem e ciclovias para uma visão abrangente do ambiente.",
  },
  {
    id: 5,
    title: "Anúncios Particulares",
    text: "Descubra oportunidades exclusivas ao visualizar anúncios particulares de imóveis disponíveis.",
  },
  {
    id: 6,
    title: "Análise de Potencial de Investimento",
    text: "Avalie o potencial de retorno de um imóvel com base em fatores como localização, tendências de mercado e dados demográficos.",
  },
  {
    id: 4,
    title: "Busca Inteligente",
    text: "Avalie o potencial de retorno de um imóvel com base em fatores como localização, tendências de mercado e dados demográficos.",
  },
  {
    id: 3,
    title: "Detalhes Exclusivos de Imóveis",
    text: "Explore informações completas sobre casas, apartamentos e terrenos, incluindo metragem e características.",
  },
  {
    id: 7,
    title: "Interface Intuitiva",
    text: "Navegue de forma fácil e intuitiva em nossa plataforma, com uma interface amigável que permite explorar e aproveitar todos os recursos do aplicativo sem complicações.",
  },
  {
    id: 8,
    title: "Relatórios Detalhados",
    text: " Crie relatórios personalizados com dados imobiliários completos para embasar suas decisões estratégicas.",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4} pt={24}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} fontFamily="Poppins">
          Elevando sua corretagem imobiliária ao próximo nível
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"} fontFamily="Vollkorn">
          Descubra as ferramentas essenciais do nosso aplicativo em uma lista de
          8 destaques
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"primary.500"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} fontFamily="Poppins">
                  {feature.title}
                </Text>
                <Text fontFamily="Vollkorn" color={"gray.600"}>
                  {feature.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
