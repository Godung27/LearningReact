import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => { },
  hideCart: () => { },
  showCheckout: () => { },
  hideCheckout: () => { },
});

export const UserProgressContextProvider = function ({ children }) {
  const [userProgress, setUserProgress] = useState("");

  const showCart = function () {
    setUserProgress("cart");
  }

  const hideCart = function () {
    setUserProgress("");
  }

  const showCheckout = function () {
    setUserProgress("checkout");
  }

  const hideCheckout = function () {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext value={userProgressCtx}>
      {children}
    </UserProgressContext>
  );
}

export default UserProgressContext;