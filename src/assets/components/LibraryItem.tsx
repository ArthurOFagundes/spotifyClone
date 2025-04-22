import React from "react";

export interface LibraryItemProps {
  img: string;
  title: string;
  category: string;
  author: string;
}

const LibraryItem: React.FC<LibraryItemProps> = ({
  img,
  title,
  category,
  author,
}) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-700 cursor-pointer transition-colors duration-200">
      <img src={img} alt={title} className="size-12 rounded-sm" />
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-zinc-500 text-sm font-medium">
          {category} • {author}
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
