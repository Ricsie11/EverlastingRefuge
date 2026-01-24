import { Navigate } from "react-router-dom"
import { useRole } from "../context/RoleContext"

function RoleRoute({ allow, children }) {
    const { role } = useRole()

    if (!allow.includes(role)){
        return <Navigate to="/dashboard" replace />
    }
  return children
}

export default RoleRoute