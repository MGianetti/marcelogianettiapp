import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";
import { marked } from "marked";

import LoggedOutLayout from "../../layouts/logged-out-layout.component";
import CTAEmailCatcher from "../../components/email-catcher/email-catcher";

export default function PostPage({
  frontmatter: { title, date, thumbImg, author },
  content,
}) {
  return (
    <LoggedOutLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box w={{ sm: "100%", xl: "65%" }} pb={16}>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <h1 className="blog-post-title">{title}</h1>
            <div
              style={{ position: "relative", width: "100%", height: "500px" }}
            >
              <Image
                transform="scale(1.0)"
                src={thumbImg}
                alt="some text"
                layout="fill"
                objectFit="cover"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </div>
            <h5 style={{ fontFamily: "Poppins" }}>
              {author}, {date}
            </h5>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(content, { mangle: false }),
              }}
              o
              className="blog-post-content"
            />
          </div>
          <CTAEmailCatcher />
          <Link href="/blog">
            <Button variant="link" fontFamily="Poppins">
              {"< Voltar"}
            </Button>
          </Link>
        </Box>
      </div>
    </LoggedOutLayout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { frontmatter, slug, content },
  };
}
