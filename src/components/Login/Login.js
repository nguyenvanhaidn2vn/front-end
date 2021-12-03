import React ,{useState,useEffect} from 'react'
import './Login.css';
import axios from 'axios';
import { API_URL,TOKEN,USER_LOGIN } from '../../action/types';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';
const Login =()=>{
    const [dataAccount,setDataAccount]=useState({userName:'',passWord:''})
    const [error,setError]=useState('')
    const user= useSelector(state =>state.user)

    const dispatch = useDispatch();
    const history = useHistory();
    const loginForm = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post(`${API_URL}/signin`,dataAccount);
            console.log(response)
            if(response.data.success)
            {
                localStorage.setItem(TOKEN,response.data.token);
                dispatch({type:USER_LOGIN,payload:response.data.user})
                history.push('/')
            }
            else
            {
                setError(response.data.message)
            }
        }catch(err){
            alert('Đổi địa chỉ IP đi')
        }
    }
    const onChangeAccount =(event)=>{
        setDataAccount({...dataAccount,[event.target.name]:event.target.value})
    }
    const loadUser = ()=>{
        if(user.isAuthentication)
            history.push('/')
    }
    useEffect(()=>{
        loadUser();
    },[])

    return (
        <div style={{width:'100%',height:700,alignItems:'center',justifyContent:'center',display:'flex'}} className="form-login">
            <div className="container-login" id="container-login">
                <div className="form-container sign-in-container">
                    <form onSubmit={(event)=>{event.preventDefault()}} >
                        <h1>Sign in</h1>
                        <input type="phone" name="userName" placeholder="Phone" onChange={onChangeAccount}/>
                        <input type="password" name="passWord" placeholder="Password" onChange={onChangeAccount} />
                        <label style={{color:'red',marginTop:10,marginBottom:10}}>{error}</label>
                        <button className="btn-login" onClick={loginForm}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Here you are</h1>
                            <p>Work hard, play hard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;