import Footer from "@/components/footer";
import Header from "@/components/header";
import CenteredSearchForm from "@/components/search";

const PageHome = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <CenteredSearchForm></CenteredSearchForm>
      </main>
      <footer className="pt-9 flex flex-row justify-center-safe items-center-safe">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PageHome;
