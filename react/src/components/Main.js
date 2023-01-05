import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useEffect } from 'react';
import { productSearch } from '../redux/productAction'
import { Button, TextField } from "@mui/material";
// import { DeleteTwoTone, AddShoppingCartTwoTone, RemoveShoppingCartTwoTone } from '@mui/icons-material';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[dispatch])
  return (
    <div className='container-fluid bg-white'>
      <div className='row'>
        <div className='col-lg-5'></div>
        <h2 className='col-lg-2 mt-3'>Home Page</h2>
        <div className='col-lg-3 mt-3'>
          <TextField className='search' variant="outlined" type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
        </div>
        <div className='col-lg-2'><Button  className='mt-4' color="error" variant="contained" onClick={() => dispatch(emptyCart())}>Empty Cart</Button></div>
      </div>
      <div className='row mt-3'>
        {
          data.length>0?
          data.map((item)=><div className='col-lg-2 col-md-3 items'>
            <img className='image-fluid img' src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div><br />
              <Button  variant="contained" onClick={() => dispatch(addToCart(item))} >Add to Cart</Button><br /><br />
              <Button  variant="contained" onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</Button><br /><br />
              </div>
          </div>):
          <h3 className="col-lg-12 mainfoot">No Data Found</h3>
        }
      </div>
    </div>
  );
}

export default Main;
// json-server --watch db.json --port 3500