import * as React from "react";

interface Props {
  date?: string;
  title?: string;
}

const TitleBar = ({ date, title }: Props) => {
  return (
    <div className=" p-4 w-full text-3xl drop-shadow-2xl">
      <span className="text-white">{date !== undefined ? date : "blog"}</span>
      <span className="text-white">
        {title !== undefined ? " - " + title : ".faaz"}
      </span>
    </div>
  );
};

export default TitleBar;
