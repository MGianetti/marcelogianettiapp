import Head from "next/head";
import LoggedOutLayout from "../layouts/logged-out-layout.component";
import ContactUs from "../components/contact-us/contact-us";

export default function Contact() {
  return (
    <>
      {/* <Head>
        <title>
          Corretores e Imobiliárias Impulsionam suas Vendas com Aplicação de
          ponta
        </title>
        <meta
          name="description"
          content="Ideal para Corretores e Imobiliárias - Explore Oportunidades e Tome Decisões Estratégicas usando Geoprocessamento"
        />
        <meta
          property="og:title"
          content="Aplicação para Corretores e Imobiliárias - Estratégias usando Geoprocessamento"
        />
        <meta
          property="og:description"
          content="Aproveite o poder do geoprocessamento para explorar cada detalhe dos imóveis e da infraestrutura ao redor. Tome decisões embasadas e estratégicas com filtros avançados por tipo de bairro, valores e finalidade dos imóveis. Ideal para corretores e imobiliárias que buscam otimizar sua estratégia de vendas e encontrar oportunidades de investimento. Potencialize suas vendas com o app de geoprocessamento para imobiliárias e corretores."
        />
        <meta property="og:url" content="https://www.urbanease.com.br/" />
        <link rel="canonical" href="https://www.urbanease.com.br/" />
        <meta property="og:type" content="website" /> 
      </Head>*/}
      <LoggedOutLayout>
        <ContactUs />
      </LoggedOutLayout>
    </>
  );
}
