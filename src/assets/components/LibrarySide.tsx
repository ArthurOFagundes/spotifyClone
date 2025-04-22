import { ArrowRight, List, Plus, Search } from "lucide-react";
import LibraryItem, { LibraryItemProps } from "./LibraryItem";

const libraryList: Array<LibraryItemProps> = [
  {
    img: "src/assets/icon.png",
    title: "Exemplo 1",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 2",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 3",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 4",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 5",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 6",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 7",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 9",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 10",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 11",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 12",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 13",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 14",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 15",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 16",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 17",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 18",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 19",
    category: "example",
    author: "author",
  },
  {
    img: "src/assets/icon.png",
    title: "Exemplo 20",
    category: "example",
    author: "author",
  },
];

function LibrarySide() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-bold">Sua Biclioteca</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-4xl">
            <Plus className="text-zinc-500" />
            Criar
          </div>
          <ArrowRight />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center bg-zinc-800 px-2 py-1 rounded-4xl font-semibold">
          Playlists
        </button>
        <button className="flex items-center bg-zinc-800 px-2 py-1 rounded-4xl font-semibold">
          Álbuns
        </button>
        <button className="flex items-center bg-zinc-800 px-2 py-1 rounded-4xl font-semibold">
          Artistas
        </button>
      </div>
      <div className=" overflow-y-auto ">
        <div className="flex items-center justify-between text-zinc-500">
          <Search />
          <div className="flex items-center gap-2">
            Recentes
            <List />
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          {libraryList.map((item, index) => (
            <LibraryItem
              img={item.img}
              author={item.author}
              category={item.category}
              title={item.title}
              key={index}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

export default LibrarySide;
