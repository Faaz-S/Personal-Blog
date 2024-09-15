import * as React from "react";
import { graphql } from "gatsby";
import TitleBar from "../components/TitleBar"
import BlogBody from "../components/BlogBody";
import ContactsCol from "../components/ContactsCol"

export default function BlogPostTemplate({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;

  return (
		<div className="flex flex-col items-center min-h-screen">
      <TitleBar date={frontmatter.date} title={frontmatter.title}/>
			<div className="max-w-6xl w-full grow flex">
        <ContactsCol backbutton />
				<BlogBody>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</BlogBody>
			</div>
    </div>
  )
}

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date(formatString: "YYYY-MM-DD")
				slug
				title
			}
		}
	}
`;
