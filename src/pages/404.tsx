import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import TitleBar from "../components/TitleBar";
import BlogBody from "../components/BlogBody";
import ContactsCol from "../components/ContactsCol";

const NotFoundPage: React.FC<PageProps> = () => {
	// skeleton manually matched with `index.tsx`
	return (
		<div className="flex flex-col items-center min-h-screen">
			<TitleBar date="404" title="not found..." />
			<div className="max-w-6xl w-full grow flex">
				<ContactsCol backbutton />
				<BlogBody>This page doesn't exist!!</BlogBody>
			</div>
		</div>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
