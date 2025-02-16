import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import axios from "axios";      

const useAuthCall = () => {


const dispatch=useDispatch()
const register= async(userInfo)=>{

    dispatch(fetchStart())
    try {
        const{data}= await axios.post("https://16144.fullstack.clarusway.com/users/", userInfo)
        console.log(data);
    } catch (error) {
        dispatch(fetchFail())
    }
}



  return { register };
};

export default useAuthCall;