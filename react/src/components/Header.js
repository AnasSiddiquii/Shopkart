import React from 'react';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);
    return (
        <div>
        {
            auth ?
                <div className="container-fluid bg-warning">
                    <div className="row">
                        
                        <div className="col-sm-2  mt-2">
                            <Link to="/main"><h1 className='head'>Shopkart</h1></Link>
                        </div>

                        <div className="col-sm-7"></div>
                        
                        <div className="col-sm-1 mt-4">
                            <Link onClick={logout} to="/" className='links linksize'>Logout</Link>
                        </div>
                
                        <div  className="col-sm-2 p-4" >
                            <Link to="/cart"><i class="fa-solid fa-cart-shopping carticon links"></i></Link>
                            <span className='span'>{result.length}</span>
                        </div>
                        
                    </div>
                </div>
                :
                <div className="container-fluid bg-warning">
                    <div className="row">
                        
                        <div className="col-sm-2 mt-2">
                            <h1 className='text-white'>Shopkart</h1>
                        </div>

                        <div className="col-sm-8"></div>

                        <div className="col-sm-2">
                            <div className='row'>
                                
                                <div className="col-6 p-4">
                                    <Link to="/signup" className='links linksize'>SignUp</Link>
                                </div>
                                <div  className="col-6 p-4">
                                    <Link to="/" className='links linksize'>Login</Link>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                </div>
        }
        </div>
    )
}

export default Header;