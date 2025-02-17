import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, fetchSuccess, logoutSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((state)=>state.auth)
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://16144.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log(data);
      dispatch(fetchSuccess(data));
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const logout =async()=>{
    dispatch(fetchStart())
    try{

        const {data}= await axios("https://16144.fullstack.clarusway.com/auth/logout", {
            headers:{
                Authorization: `Token ${token}`
            }
        })
        dispatch(logoutSuccess())
        navigate("/")
    }
catch(error){
      console.log(error);
    }
  }

  return { register , logout};
};

export default useAuthCall;
