import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/stockSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const {axiosWithToken}=useAxios()

//   const getFirms = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axios(`${BASE_URL}firms/`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       });
//       console.log(data);
//       dispatch(firmSuccess(data));
//     } catch (error) {
//       dispatch(fetchFail());
//     }
//   };

const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken (firms)
      
      console.log(data);
      dispatch(firmSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };





  return { getFirms };
};

export default useStockCall;
