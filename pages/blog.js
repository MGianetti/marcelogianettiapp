import fs from "fs";
import path from "path";
import matter from "gray-matter";

import LoggedOutLayout from "../layouts/logged-out-layout.component";
import { sortByDate } from "../utils";

import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import CTAEmailCatcher from "../components/email-catcher/email-catcher";

const BlogTags = (props) => {
  return (
    <HStack fontFamily="Vollkorn" spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            borderRadius="none"
            variant="solid"
            colorScheme="primary"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="none"
        boxSize="40px"
        src={props.imgSrc}
        alt={`Avatar do ${props.name}`}
      />
      <Text fontWeight="medium" fontFamily="Poppins">
        {props.name}
      </Text>
      <Text>—</Text>
      <Text fontFamily="Vollkorn">{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

export default function Blog({ posts }) {
  return (
    <LoggedOutLayout>
      <Container maxW={"7xl"} p="12">
        {/*<Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
         <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box> 
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTags tags={["Engineering", "Product"]} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Blog article title
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </Box>*/}
        <Heading fontFamily="Poppins" as="h2" marginTop="5">
          Últimos posts
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          {posts.map((post) => {
            const { frontMatter, slug } = post;
            const { title, date, tags, summary, author, authorImg, thumbImg } =
              frontMatter;
            return (
              <WrapItem
                width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
                key={slug}
              >
                <Box w="100%">
                  <Box borderRadius="none" overflow="hidden">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                      href={`/post/${slug}`}
                    >
                      <Image
                        transform="scale(1.0)"
                        src={thumbImg}
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </Link>
                  </Box>
                  <BlogTags tags={tags} marginTop="3" />
                  <Heading fontSize="xl" marginTop="2" fontFamily="Poppins">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                      href={`/post/${slug}`}
                    >
                      {title}
                    </Link>
                  </Heading>
                  <Text
                    as="p"
                    fontSize="md"
                    marginTop="2"
                    fontFamily="Vollkorn"
                  >
                    {summary}
                  </Text>
                  <BlogAuthor
                    name={author}
                    date={new Date(date)}
                    imgSrc={authorImg}
                  />
                </Box>
              </WrapItem>
            );
          })}
        </Wrap>
        <CTAEmailCatcher />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start" pt={16}>
          <Heading as="h2" fontFamily="Poppins">
            Sobre o que escrevemos
          </Heading>
          <Text as="p" fontSize="lg" fontFamily="Vollkorn">
            Em nossos posts, abordamos aquilo que nosso curso almeja mostrar.
          </Text>
        </VStack>
      </Container>
    </LoggedOutLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return { slug, frontMatter };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
