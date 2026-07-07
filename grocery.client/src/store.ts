// src/store.ts
import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    sidebarShow: boolean
    theme: string
}

const initialState: AppState = {
    sidebarShow: true,
    theme: 'light',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSidebarShow: (state, action: PayloadAction<boolean>) => {
            state.sidebarShow = action.payload
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        },
        set: (state, action: PayloadAction<Partial<AppState>>) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { setSidebarShow, setTheme, set } = appSlice.actions

export const store = configureStore({
    reducer: appSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
