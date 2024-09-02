import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../types/user.type'

// Define a type for the slice state
interface UserState {
  user: IUser | null,
  searchTerm: string,
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  searchTerm: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export const { setUser, setSearchTerm } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.user
export const selectSearchTerm = (state: RootState) => state.user.searchTerm

export default userSlice.reducer