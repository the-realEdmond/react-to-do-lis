import{Route,Routes} from 'react-router-dom'
import Home from '../pages/home'
import Products from '../pages/products'
import SingleProducts from '../pages/singleproduct'
import NewProduct from '../pages/newproduct'
import Aboutus from '../pages/aboutus'
import ProductLayout from './productNavLayout'


function Router(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductLayout/>} >
            <Route index element={<Products/>}/>
            <Route path='singleproduct' element={<SingleProducts/>}/>
            <Route path='singleproduct' element={<SingleProducts/>}/>
            <Route path='newproduct' element={<NewProduct/>}/>
            </Route>
            <Route path='aboutus' element={<Aboutus/>} />
            <Route path='*' element={<h1>Page not Found</h1>} />
        </Routes>
        </>
    )
}

export default Router;