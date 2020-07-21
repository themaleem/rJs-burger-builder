import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };

    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };
    // case actionTypes.FETCH_ORDERS_START:
    //   return fetchOrdersStart(state, action);
    // case actionTypes.FETCH_ORDERS_SUCCESS:
    //   return fetchOrdersSuccess(state, action);
    // case actionTypes.FETCH_ORDERS_FAIL:
    //   return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
