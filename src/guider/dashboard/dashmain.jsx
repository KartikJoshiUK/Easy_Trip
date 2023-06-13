import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Pagecontent } from "./pagecontent";
import { Header } from "./header";


const Dashmain = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar></Sidebar>
       <Pagecontent   />
      </div>

      <Footer />
    </div>
  );
};

export default Dashmain;
