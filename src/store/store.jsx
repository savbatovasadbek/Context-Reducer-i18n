import { reducer } from "../reducer/reducer";
import PropTypes from "prop-types";

import { useReducer, createContext } from "react";

export const Context = createContext(null);

const initialState = {
  orderList: ["home", "order", "blog", "contact us"],
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ orderList: state.orderList, dispatch }}>
      {children}
    </Context.Provider>
  );
};

TodoContextProvider.propTypes = {
  children: PropTypes.element,
};
