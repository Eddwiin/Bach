import { Outlet } from "react-router-dom"

export default function Auth() {
    return (
        <div className="w-3/6">
            Auth works!
            <Outlet />
        </div>
    )
}