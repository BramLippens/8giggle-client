import { useState,useEffect,createContext } from "react";
import api from "../api/api";

export const UserContext = createContext();

export function UserContextProvider({children}){
    const [id,setId] = useState(null);
    const [username,setUsername] = useState(null);
    const [accessToken,setAccessToken] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        api.get("/profile")
        .then((res)=>{
            setId(res.data.id);
            setUsername(res.data.username);
            setAccessToken(res.data.accessToken);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[])

    return (
        <UserContext.Provider value={{id, setId, username, setUsername, accessToken, setAccessToken}}>
            {children}
        </UserContext.Provider>
    )
}