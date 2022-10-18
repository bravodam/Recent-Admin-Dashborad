import './productslist.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Productdatatable from '../../components/productdatatable/Productdatatable'

function Productslist() {
  return (
    <div className='productsList'>
    <Sidebar/>
      <div className="productsListContainer">
        <Navbar/>
        <Productdatatable/>
        </div>
    </div>
  )
  }

export default Productslist;