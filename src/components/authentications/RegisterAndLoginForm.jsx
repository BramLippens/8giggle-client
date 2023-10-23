import { useContext,useEffect,useState } from "react";
import api from "../../api/api";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';
import md5 from 'md5';

export default function RegisterAndLoginForm(){
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const {setUsername:setLoggedInUsername, setAccessToken, setId, accessToken, setImage} = useContext(UserContext);

    async function handleSubmit(ev){
        ev.preventDefault();
        setLoading(true);
        const url = isLoginOrRegister === 'register' ? '/signup' : '/login';
        try{
            const {data} = await api.post('auth' + url,{email,username,password});
            setId(data.id);
            setLoggedInUsername(data.username);
            setAccessToken(data.accessToken);
            setImage(`https://www.gravatar.com/avatar/${md5(data.email)}`);
            setLoading(false);
        }
        catch(err){
            console.log(err);
            setError(err.response.data.message);
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        if(accessToken){
            navigate('/',{replace:true});
        }
    },[accessToken,navigate])

    return (
        <div className="bg-blue-50 h-screen flex items-center">
          <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
            {isLoginOrRegister === 'register' ? <input value={email}
                   onChange={ev => setEmail(ev.target.value)}
                   type="email" placeholder="email"
                   className="block w-full rounded-sm p-2 mb-2 border" /> : ""}
            <input value={username}
                   onChange={ev => setUsername(ev.target.value)}
                   type="text" placeholder="username"
                   className="block w-full rounded-sm p-2 mb-2 border" />
            <input value={password}
                   onChange={ev => setPassword(ev.target.value)}
                   type="password"
                   placeholder="password"
                   className="block w-full rounded-sm p-2 mb-2 border" />
            <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
              {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
            </button>
            <div className="text-center mt-2">
              {isLoginOrRegister === 'register' && (
                <div>
                  Already a member?
                  <button className="ml-1" onClick={() => setIsLoginOrRegister('login')}>
                    Login here
                  </button>
                </div>
              )}
              {isLoginOrRegister === 'login' && (
                <div>
                  Dont have an account?
                  <button className="ml-1" onClick={() => setIsLoginOrRegister('register')}>
                    Register
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      );
}