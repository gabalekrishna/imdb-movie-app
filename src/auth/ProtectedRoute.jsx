import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
   // const {user} = useContext(AuthContext);
   const token = localStorage.getItem("token")

   
   if(!token){
    return <Navigate to="/" replace />;
   }
   return children;
 
}

export default ProtectedRoute;