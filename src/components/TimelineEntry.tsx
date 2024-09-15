import { Link } from "gatsby";
import * as React from "react";

interface Props {
	date: string;
	title: string;
	slug: string;
	peek: string;
}

const TimelineEntry = ({ date, title, slug, peek }: Props) => {
	console.log(slug)
	return (
		<div className="border-t-2 border-black p-4">
			<a href={slug}>
				<span className="text-3xl text-amber-300">{date}</span>
				<span className="text-3xl text-amber-300"> --- </span>
				<span className="text-3xl text-amber-300">{title}</span>
				<p className="text-white">{peek}</p>
			</a>
		</div>
	);
};

export default TimelineEntry;
