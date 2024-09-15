import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const BlogBody = ({ children }: Props) => {
  return (
    <div className="grow px-4 [&_p]:my-8 [&_hr]:border-1 [&_hr]:border-black [&_li]:list-disc [&_li]:mx-8 [&_h1]:text-2xl [&_h1]:font-bold">
      {children}
    </div>
  );
};

export default BlogBody;
