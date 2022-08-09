import { Navigate } from "react-router-dom"
import { useUser } from "../../context/user-context"

export const WithAdminProtector = ({ children }) => {
    const { isAdmin } = useUser()
    if (isAdmin) {
        return children
    }
    return <Navigate to="/" replace />
}
