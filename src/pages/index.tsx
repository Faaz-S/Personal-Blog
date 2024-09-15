import * as React from "react";
import type { HeadFC } from "gatsby";
import TitleBar from "../components/TitleBar";
import ContactsCol from "../components/ContactsCol";
import Timeline from "../components/Timeline";
import { graphql } from "gatsby";

interface Data {
  allMarkdownRemark: {
    nodes: [
      {
        excerpt: string;
        frontmatter: {
          date: string;
          slug: string;
          title: string;
        };
      }
    ];
  };
}

export default function IndexPage({ data }: { data: Data }) {
  return (
    <div className="bg-black flex flex-col items-center min-h-screen">
      <TitleBar />
      <div className="max-w-6xl w-full grow flex">
        <ContactsCol />
        <Timeline data={data} />
      </div>
    </div>
  );
}

export const Head: HeadFC = () => <title>blog.faaz</title>;

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 300)
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          slug
          title
        }
      }
    }
  }
`;
