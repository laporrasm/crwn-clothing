import { createSelector } from 'reselect';

// Input selector ==> Returns a piece from the state
const selectCart = state => state.cart;

// Memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
)