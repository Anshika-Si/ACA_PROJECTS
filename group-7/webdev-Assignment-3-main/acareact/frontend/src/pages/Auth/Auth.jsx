import React, {useState} from 'react'
import api from '../api'
 
const Auth = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const register = async()=>{
        try{
            await api.post('/auth/register',{username,password})
            
        }
        catch(e){
            alert (e.response.data)
        }
    }
    return{
        <div>
        <h2>Authentication</h2>
        <input type="text" name={username} value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" name={password} value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button on onClick={register}>register</button>
        <button on onClick={login}>login</button>

    }

}
export default Auth