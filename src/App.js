
import './App.css';
// import AdminPage from './Component/AdminPage';
import Login from './Component/Login';
import Home from './Component/Home';
import Myorders from './Component/MyOrders';
import Orders from './Component/Orders';
import Products from './Component/Products';
import Product from './Component/Product';
import Signup from './Component/SignUp';
import Navbar from './Layout/Navbar';
import {Route,Routes} from 'react-router-dom'
import PrivateRoute from './Routing/PrivateRoute'
import {Toaster} from 'react-hot-toast'
import Footer from './Layout/Footer';
import Admin from './Component/Admin/Admin';
import {Helmet} from 'react-helmet'


const Title='Jesus Ty';
function App() {
  return (

    <div>
      <div><Toaster/></div>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/login' element={<PrivateRoute child={<Login/>}/>}/> */}
        <Route path='/login' element={<Login/>}/>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/shop' element={<Products/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/home' element={<Home/>}/>

        <Route path='/shop/:productId' element={<Product />} />


        
        </Routes>
        <Footer/>
{/* <h1>Hllo</h1> */}
     {/* <h1> <AdminPage/></h1>
<h1><Login/></h1>
<h1><Home/></h1>
<h1><Myorders/></h1>
<h1><Orders/></h1>
<h1><Products/></h1>
<h1><Product/></h1>

<h1><Signup/></h1> */}
    </div>
  );
}

export default App;
// function App (){
//   return(
//     <div>Praise the lord
//     {/* <Navbar/> */}
//     <Footer/>
//     </div>
//   )
// }
//  export default App;
