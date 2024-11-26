// store/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isSidebarVisible: false,
    isEmpSidebarVisible: false, // Adding state for EmpSidebar
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    hideSidebar: (state) => {
      state.isSidebarVisible = false;
    },
    toggleEmpSidebar: (state) => { // Reducer for EmpSidebar
      state.isEmpSidebarVisible = !state.isEmpSidebarVisible;
    },
    hideEmpSidebar: (state) => {
      state.isEmpSidebarVisible = false;
    },
  },
});

export const { toggleSidebar, hideSidebar, toggleEmpSidebar, hideEmpSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
