import { Link } from "react-router-dom"

function Success() {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column my-4">
            <h2 className="text-white">The order was successfully placed</h2>
            <Link to="/" className="btn btn-light mt-2">Back to Shop</Link>
        </div>
    )
}

export default Success