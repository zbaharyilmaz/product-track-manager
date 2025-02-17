import { useDispatch } from "react-redux";
import { fetchStart, fetchSuccess, fetchFail, logoutSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSuccess } from "../features/authSlice"; 




const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

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

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://16144.fullstack.clarusway.com/auth/logout",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const login = async (username, password) => {
    dispatch(fetchStart());  // Loading durumuna geçiş
    try {
      const { data } = await axios.post(
        "https://16144.fullstack.clarusway.com/auth/login",  // Giriş endpoint'i
        {
          username: username,  // Kullanıcı adı
          password: password,  // Şifre
        }
      );
      console.log("Login successful:", data);  // Giriş başarılı olduğunda veri
      dispatch(loginSuccess(data));  // Redux'a giriş bilgisini gönder
      navigate("/stock");  // Başarıyla giriş yaptıktan sonra yönlendir
    } catch (error) {
      
      dispatch(fetchFail());  // Hata durumunda redux'a fail gönder
    }
  };
  

  return { register, logout, login };
};

export default useAuthCall;
