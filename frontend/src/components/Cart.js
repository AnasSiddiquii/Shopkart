import { useSelector } from "react-redux";
// import { DoubleArrow } from '@mui/icons-material';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next)=>prev+next)
    console.warn(amount)
    return (
    <div className="container-fluid bg-white">
         
        <div className='row mb-3'>
          <div className="col-lg-4"></div>
          <h2 className="col-lg-4 mt-3">Cart Page</h2>
          <div className="col-6 col-lg-2 mt-4">
                <div className="cardlabel text-info text-right  pt-1">Make Payment </div>
            </div>
            <div className="col-6 col-lg-2 mt-4">
                <a href="/card" className="cardicon text-info"><i class="fa-solid fa-credit-card"></i></a>
            </div>
        </div>
        
        <div className="row">
            <div className="col-lg-8 ">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Category</th>
                    </tr>
                    {
                        cartData.map((item) => <tr key={item.key}>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                        </tr>)
                    }
                </table>
            </div>
            
            <div className="col-lg-4 price">
                <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                <div className="adjust-price text-success"><span>Discount</span><span>{amount - (amount * 70) / 100}</span></div>
                <div className="adjust-price text-danger "><span>Tax(18%)</span><span>{amount - (amount * 82) / 100}</span></div>
                <div className="adjust-price"><span>~ Total ~</span><span>{amount - (amount - (amount * 70) / 100) + (amount - (amount * 82) / 100)}</span></div>
            </div>
        </div>
        
        
        
    </div>
    )
}

export default Cart;