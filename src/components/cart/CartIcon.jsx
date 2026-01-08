import React from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../slices/cartSlice";


const CartIcon = ({ onClick }) => {
const count = useSelector(selectCartCount);
return (
<button className="btn btn-outline-light position-relative" onClick={onClick}>
Cart
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{count}
</span>
</button>
);
};
export default CartIcon;
