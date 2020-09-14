import { createSelector } from 'reselect';

// Input selector: Gets the whole state and returns a slice of it, one layer beneath usually
const selectCart = state => state.cart;

// Memoized selector
export const selectCartItems = createSelector(
    // First parameter is an array of input selectors
    [selectCart],
    (cart) => cart.cartItems 
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity, 
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity * cartItem.price, 
            0
        )
)