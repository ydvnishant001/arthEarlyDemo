import { configureStore } from '@reduxjs/toolkit'
import attendanceReducer from '../redux/slices/attendanceSlice'

export const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
  }
})