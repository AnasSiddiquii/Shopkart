import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from "@mui/material";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/main")
        }
        // eslint-disable-next-line
    },[])

    const handleLogin = async () => {
        if(!email || !password)
        {
            setError(true);
            return false
        }
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }           
        });
        result = await result.json();
        
        
        if (result.user) {
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/main")
        }
        else{
            alert("Invalid")
        }
    }

    return (
        <div className='container-fluid bg-white justify-content-center'>
            <h3 className="col-lg-12 headpad"> </h3>
            
            <div className='row'>
                <h1 className='col-lg-12 mt-3'>Login</h1>
            </div>

            <div className='col-lg-4'></div>
            <TextField className='col-lg-4 mt-3' variant="outlined" type="text" placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)} value={email} />
            <div className='col-lg-4'></div>
            {error && !email && <span className='col-lg-12 text-danger'>Enter valid email</span>}

            <div className='col-lg-4'></div>
            <TextField className='col-lg-4 mt-3' variant="outlined" type="password" placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)} value={password} />
            <div className='col-lg-4'></div>
            {error && !password && <span className='col-lg-12 text-danger'>Enter valid password</span>}

            <div className='row justify-content-center'>
                <div className='col-lg-5'></div>
                <Button className='col-1 mt-3 mb-3' variant="contained" onClick={handleLogin}>Login</Button>
                <div className='col-lg-5'></div>
            </div>

            <h3 className="col-lg-12 footpad"> </h3>
        </div>
    )
}

export default Login