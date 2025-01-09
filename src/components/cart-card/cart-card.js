import { AiFillDelete } from "react-icons/ai";
import { deleteArrayData } from "utils/firebaseFunctions";
function CartCard({ product }) {
  const { imageURL, name, description, price } = product;
  const removeProduct = async () => {
    await deleteArrayData(product);
  };
  return (
    <div className="cart-card">
      <img src={imageURL} alt={name} className="cart-card__image"></img>
      <span className="cart-card__title">{name}</span>
      <span className="cart-card__description">{description}</span>
      <span><b>$</b> {price}</span>
      <AiFillDelete className="cart-card__icon" onClick={handleDelete} />
    </div>
  );
}
export default CartCard;
