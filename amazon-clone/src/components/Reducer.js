//Redux is a pattern and library for managing and updating application state, using events called "actions".
//states action and reducer

//declaring the initial states we use
export const initialState = {
  cart: [],
  user: null,
};
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);
//reducer takes in current state and action and perform actions on the state thus returns the new state
const reducer = (state, action) => {
  switch (action.type) {
    //takes in action type to update state
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove (id:${action.id}) as its not in the cart`);
      }

      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
