import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
    children: React.ReactNode; 
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = localStorage.getItem('loggedin');
    if (isAuthenticated!='true') {
        return <Navigate to="/login" />;
    }
    return <>{children}</>; 
}
export default ProtectedRoute;
