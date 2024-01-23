import {useState} from "react";
import SubMenu from "../components/SubMenu";
import TutoringPage from "../services/Tutoring";
import Ecommerce from "../services/Ecommerce";
import Debugging from "../services/Debugging"

const ServicesContainer = () => {
  const [currentPage, setCurrentPage] = useState("tutoring")
  const handlePageChange=(page)=>setCurrentPage(page)
  const insertService = () => {
    if(currentPage === "tutoring") {
      return <TutoringPage/>
    } else if (currentPage === "ecommerce") {
      return <Ecommerce />
    } else {
      return <Debugging/>
    }
  }
  return (
    <>
    <section>
      <SubMenu currentPage={currentPage} handlePageChange={handlePageChange}/>
    </section>
    <main>
      {insertService()}
    </main>
    </>
  )
}
export default ServicesContainer;