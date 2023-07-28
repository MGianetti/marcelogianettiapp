import CallToAction from "../components/call-to-action/call-to-action";
import CallToActionFooter from "../components/call-to-action-footer/call-to-action-footer";
import Features from "../components/features/features";
import FeaturesWithPics from "../components/features-with-pics/features-with-pics";

import HeroSection from "../components/hero-section/hero-section";

import Testimonials from "../components/testimonials/testimonials";
import ThreeTierPricing from "../components/three-tier-pricing/three-tier-pricing";

import LoggedOutLayout from "../layouts/logged-out-layout.component";
import Head from "next/head";
import { AnimationBox } from "../components/animation-box/animation-box";
import { Canvas } from "@react-three/fiber";
import CTAEmailCatcher from "../components/email-catcher/email-catcher";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        #__next {
          overflow-x: hidden;
        }
      `}</style>

      <Head>
        <title>Marcelo Gianetti de Jesus</title>
        {/* <meta
          name="description"
          content="Geoprocessamento para Corretores e Imobiliárias - Explore Oportunidades e Tome Decisões Estratégicas no Mercado de Imóveis com Foco em Vendas, Aluguéis e Corretagem."
        />
        <meta
          property="og:title"
          content="Aplicação para Estratégias no Mercado de Imóveis, Vendas, Aluguéis e Corretagem"
        />
        <meta
          property="og:description"
          content="Acelere suas Vendas e Aluguéis de Imóveis: Potencialize seu Negócio Imobiliário com Geoprocessamento. Crie estratégias Avançadas para Corretores, Corretoras e Imobiliárias. Encontre Oportunidades de Investimento com Filtros Personalizados por Bairro, Valores e Finalidade dos Imóveis. Impulsione suas Vendas e Alugueis com nossa Plataforma de Geoprocessamento."
        />
        <meta property="og:url" content="https://www.urbanease.com.br/" />
        <link rel="canonical" href="https://www.urbanease.com.br/" />
        <meta property="og:type" content="website" /> */}
      </Head>
      <LoggedOutLayout>
        <HeroSection />
        <CTAEmailCatcher />
      </LoggedOutLayout>
      {/* <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <AnimationBox />
        </Canvas>
      </div> */}
    </>
  );
}
