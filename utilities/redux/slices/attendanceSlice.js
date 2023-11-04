import { createSlice } from '@reduxjs/toolkit'
import { StudentData } from '../../db'

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: StudentData,
  reducers: {
    attendanceUpdated(state, action) {
      state[action.payload.studentID] = {...state[action.payload.studentID], attendance : action.payload.attendance}
    },
  }
})

export const { attendanceUpdated } = attendanceSlice.actions
export default attendanceSlice.reducer