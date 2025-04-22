import "./App.css";
import LibrarySide from "./assets/components/LibrarySide";
import NavBar from "./assets/components/NavBar";

function App() {
  return (
    <>
      <body className="bg-zinc-950 text-zinc-50 max-h-screen overflow-hidden">
        <div className=" flex flex-col h-screen">
          <NavBar />
          <div className="flex flex-1 h-5/6">
            <aside className="flex flex-col w-md bg-zinc-900 rounded-lg gap-3 p-6 mx-2">
              <LibrarySide />
            </aside>
            <main className="flex flex-1 w-72 bg-zinc-800 rounded-lg p-6">
              main
            </main>
          </div>
          <footer className="p-6 h-1/6">footer</footer>
        </div>
      </body>
    </>
  );
}

export default App;
