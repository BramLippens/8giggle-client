import { useState,useEffect,createContext } from "react";
import api from "../api/api";
import md5 from 'md5';

export const UserContext = createContext();

export function UserContextProvider({children}){
    const [id,setId] = useState(null);
    const [username,setUsername] = useState(null);
    const [accessToken,setAccessToken] = useState(null);
    const [image,setImage] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        api.get("/profile")
        .then((res)=>{
            setId(res.data.id);
            setUsername(res.data.username);
            setImage(`https://www.gravatar.com/avatar/${md5(res.data.email)}`);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[])

    return (
        <UserContext.Provider value={{id, setId, username, setUsername, accessToken, setAccessToken, image, setImage}}>
            {children}
        </UserContext.Provider>
    )
}