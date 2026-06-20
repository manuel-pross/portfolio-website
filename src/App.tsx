import ProjectOverview from "@/components/layout/project-overview";
import "./App.css";
import Header from "./components/layout/header";
import Resume from "@/components/layout/resume";
import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden px-4 pt-4 md:pt-8 px-6 md:px-10 xl:px-28 my-0 mx-auto max-w-[2000px]">
        <Header />
        <Resume />
        <ProjectOverview />
      </div>
      <Footer />
    </>
  );
}

export default App;
