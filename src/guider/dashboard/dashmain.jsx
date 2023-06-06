
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Pagecontent } from "./pagecontent";
import { Header } from "./header";





const Dashmain = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw]">
        
        <Header/>
       
        <div className="flex flex-1"> 
         <Sidebar></Sidebar>
         <Pagecontent></Pagecontent>
          </div>
         
         <Footer />
         
    </div>
  )
}

export default Dashmain;