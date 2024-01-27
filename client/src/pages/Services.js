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
    <section>
    <div className="services-menu" style={{border: "1px solid black"}}>
      <SubMenu handlePageChange={handlePageChange} currentPage={currentPage}/>
    </div>
    <div style={{border: "1px solid red"}}>{insertService()}</div>
    </section>

  )
}
export default ServicesContainer;