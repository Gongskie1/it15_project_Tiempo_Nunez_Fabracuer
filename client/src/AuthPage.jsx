import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState();
    const [status,setStatus] = useState();
    const navigate = useNavigate();
    const handleRegister = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/create-account", {
          username: username,
          password: password
      }, { headers: { "Content-Type": "application/json" } })
      .then(response => {
          console.log("This is the respone authpage:",response.data);
          const container = {
            username:username,
            password:password
          }
          localStorage.setItem("USER", JSON.stringify(container));
          navigate("/chat-page");
      })
      .catch(error => {
          console.log(error.response.data.data.message);
          setErrorMessage(error.response.data.data.message);
          setStatus(error.response.data.isExist);
        //   console.log(error.response.data.isExist);
      });
  };

  status ? alert(errorMessage) : null;
    return (
        <div className=' h-screen flex justify-center items-center bg-[#643843]'>
            <div
            className='bg-[#B47B84] flex items-center flex-col gap-20 p-[20px_30px] rounded-md shadow-xl w-[30%]'
            >
                <h2 
                className='text-[30px] text-[#FDF0D1] drop-shadow-lg'
                >Register your account</h2>
                <form 
                onSubmit={handleRegister}
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
                    <div>Already have account? <Link to="/" className='text-[#FFE7E7]'>Login</Link></div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
