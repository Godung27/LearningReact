import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice.js"
import uiSlice from "./uiSlice.js"

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;