import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  House,
  PanelBottomClose,
  Search,
  Users,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <body className="bg-zinc-950 text-zinc-50">
        <div className="h-screen flex flex-col">
          <header className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Ellipsis />
              <ChevronLeft />
              <ChevronRight />
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-zinc-800 p-3  rounded-full">
                <House />
              </div>

              <div className="flex items-center gap-2 bg-zinc-800 p-3 w-lg rounded-4xl ">
                <Search />
                <input
                  className="flex-1 border-r-1 border-zinc-700"
                  type="text"
                  placeholder="O que você quer ouvir?"
                />
                <PanelBottomClose />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Bell />
              <Users />

              <img
                className="border-8 border-zinc-800 rounded-full w-10 h-10"
                src="src/assets/icon.png"
              ></img>
            </div>
          </header>
          <div className="flex flex-1 ">
            <aside className="flex flex-col w-72 bg-zinc-800 rounded-lg p-6 mx-2">
              side
            </aside>
            <main className="flex flex-1 w-72 bg-zinc-800 rounded-lg p-6">
              main
            </main>
          </div>
          <footer className="p-6">footer</footer>
        </div>
      </body>
    </>
  );
}

export default App;
