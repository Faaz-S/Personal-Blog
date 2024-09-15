import * as React from "react";
import CustomButton from "./CusomButton";
import { Link } from "gatsby";

interface Props {
  backbutton?: boolean;
}

const IndexView = () => {
  const link_pairs = [
    ["https://www.linkedin.com/in/faaz-sherwani/", "LinkedIn"],
    ["https://github.com/Faaz-S", "GitHub"],

    ["https://www.instagram.com/ashkan.arabim/", "Instagram"],
  ];

  return (
    <div className=" text-white">
      <div className="p-4">
        <br />
        <br />
        My name is Faaz. I’m a Computer Science student and a cloud enthusiast.
        Feel free to explore anything you find interesting!
        <br />
        <br />
      </div>
      <p className="text-2xl border-t-2 border-black px-4 pt-4">follow me!</p>
      <ul className="pr-4 pl-4">
        {link_pairs.map(([url, name]) => (
          <li>
            --&gt;{" "}
            <a className="text-lime-600" href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogView = () => {
  return (
    <div className="p-8">
      <a href="/">
        <div className="text-center py-6">
          <CustomButton>&lt;-- Home Page</CustomButton>
        </div>
      </a>
    </div>
  );
};

const ContactsCol = ({ backbutton = false }: Props) => {
  return (
    <div className="border-r-2 border-black w-80 shrink-0 min-h-full">
      <div className="sticky top-0">
        {backbutton ? <BlogView /> : <IndexView />}
      </div>
    </div>
  );
};

export default ContactsCol;
