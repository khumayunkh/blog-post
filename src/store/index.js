import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import messageSlice from './message'

const reducer = {
  auth: authSlice,
  message: messageSlice,
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
