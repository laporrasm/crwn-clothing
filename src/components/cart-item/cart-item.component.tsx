import { CartItem } from '../../store/cart/cart.types.js';

import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

type CartItemComponentProps = {
  cartItem: CartItem;
};

const CartItemComponent = ({ cartItem }: CartItemComponentProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItemComponent;
