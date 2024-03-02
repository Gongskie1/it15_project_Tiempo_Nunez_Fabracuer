import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:8080/login", 
            { username: username, password: password }, 
            { headers: { "Content-Type": "application/json" } }
        )
        .then(response => {
            // console.log("Result from login", response.data.data);
            const container = {
              username:username,
              password:password
            }
            localStorage.setItem("USER", JSON.stringify(container));
            alert("Welcome and chat with your friends")
            navigate("/chat-page");
        })
        .catch(error => {
            console.log("Error from login", error.response.data.isExist);
        });

        
    };

    return (
        <div className=' h-screen flex justify-center items-center bg-[#944E63]'>
            <div
            className='bg-[#B47B84] flex items-center flex-col gap-20 p-[20px_30px] rounded-md shadow-xl w-[30%]'
            >
                <h2 
                className='text-[40px] text-[#FFE7E7] drop-shadow-lg'
                >Login</h2>
                <form 
                onSubmit={handleLogin}
                className='flex flex-col gap-5 w-full'
                >
                    <input 
                    className='outline-none p-[5px_10px] bg-[#944E63] border-[1px] border-[#FFE7E7] rounded-lg'
                    type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input 
                    className='outline-none p-[5px_10px] bg-[#944E63] border-[1px] border-[#FFE7E7] rounded-lg'
                    type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button
                    className='p-[5px_10px] border-[1px] border-black rounded-md bg-[#3B82F6] text-white'
                    type="submit">Login</button>
                </form>

                <div className='px-2 w-full text-center flex flex-col gap-5'>
                    <div className='h-[1px] bg-gray-500 w-full'></div>
                    <div>You dont have account? <Link to="/register" className='text-[#FFE7E7]'>Register</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
