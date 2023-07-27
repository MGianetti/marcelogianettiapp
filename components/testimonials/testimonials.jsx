import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Eduardo Santos",
    role: "Corretor de Imóveis",
    content:
      "O Urban Ease foi um verdadeiro divisor de águas para o meu negócio imobiliário. Agora tenho acesso a informações detalhadas sobre os imóveis e posso oferecer um serviço ainda mais personalizado aos meus clientes. Minhas vendas e aluguel aumentaram significativamente desde que comecei a utilizar essa ferramenta. Recomendo a todos os colegas de profissão!",
    avatar: "./eduardo-santos.png",
  },
  {
    name: "Carolina Almeida",
    role: "Gestora de Imobiliária",
    content:
      "Nossa imobiliária tem se destacado no mercado graças ao geoprocessamento. Com essa ferramenta, podemos oferecer aos nossos clientes uma experiência personalizada, mostrando imóveis relevantes de acordo com a localização desejada. Além disso, o geoprocessamento nos ajuda a entender melhor o mercado imobiliário e a tomar decisões estratégicas. Estamos muito felizes com os resultados obtidos.",
    avatar: "./carolina-almeida.png",
  },
  {
    name: "Camila Oliveira",
    role: "Corretora de Imóveis",
    content:
      "Nossa imobiliária tem se destacado no mercado graças ao poder do geoprocessamento. Com essa poderosa ferramenta, podemos oferecer aos nossos clientes uma experiência personalizada e eficiente, mostrando imóveis relevantes de acordo com a localização desejada. Além disso, o geoprocessamento nos permite analisar o mercado imobiliário com precisão e tomar decisões estratégicas fundamentadas. Estamos orgulhosos dos resultados que temos alcançado, impulsionando as vendas e o aluguéis de imóveis.",
    avatar: "./camila-oliveira.png",
  },
  {
    name: "Rafael Castro",
    role: "Analista de Dados Imobiliários",
    content:
      "A diferença entre usar um 'mapinha qualquer' e o Urban Ease é simplesmente surpreendente para a indústria imobiliária. Antes, eu tinha uma visão limitada dos imóveis, sem detalhes relevantes. Com o geoprocessamento, consigo explorar os imóveis de forma interativa, visualizando informações como áreas verdes, ruas asfaltadas e pontos de interesse próximos. Isso não apenas facilita meu trabalho como corretor, mas também enriquece a experiência dos meus clientes em busca de imóveis de qualidade. Recomendo a todos que desejam ter uma abordagem mais profissional e abrangente no mercado imobiliário.",

    avatar: "./rafael-castro.png",
  },
];

function TestimonialCard(props) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"Vollkorn"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
          textAlign="justify"
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Vollkorn"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={"Vollkorn"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box margin={"auto"}>
        <Heading fontSize={"3xl"} fontFamily="Poppins">
          Experiências de sucesso na corretagem imobiliária
        </Heading>
        <chakra.h2
          margin={"auto"}
          fontFamily={"Vollkorn"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Clientes compartilham como o Urban Ease elevou sua corretagem
          imobiliária
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard
            key={`${cardInfo}-${index}-key`}
            {...cardInfo}
            index={index}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
