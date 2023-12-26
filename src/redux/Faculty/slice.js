import { createSlice } from '@reduxjs/toolkit';
import {
  fetchListCellBiology,
  fetchListMachineLearning,
  fetchListManagerialEconomic,
} from './action';

const facultySlice = createSlice({
  name: 'faculty',
  initialState: {
    isLoading: false,
    isLoadingCellBiology: false,
    isLoadingMachineLearning: false,
    isLoadingManagerialEconomics: false,
    data: [],
    cellBiologyTitle: '',
    machineLearningTitle: '',
    managerialEconomicsTitle: '',
    cellBiology: [],
    machineLearning: [],
    managerialEconomics: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListCellBiology.pending, (state, action) => {
      state.isLoadingCellBiology = true;
    });
    builder.addCase(fetchListCellBiology.fulfilled, (state, action) => {
      state.isLoadingCellBiology = false;
      state.cellBiology = action.payload.list;
      state.cellBiologyTitle = action.payload.title;
    });
    builder.addCase(fetchListCellBiology.rejected, (state, action) => {
      state.isLoadingCellBiology = true;
    });

    builder.addCase(fetchListMachineLearning.pending, (state, action) => {
      state.isLoadingMachineLearning = true;
    });
    builder.addCase(fetchListMachineLearning.fulfilled, (state, action) => {
      state.isLoadingMachineLearning = false;
      state.machineLearning = action.payload.list;
      state.machineLearningTitle = action.payload.title;
    });
    builder.addCase(fetchListMachineLearning.rejected, (state, action) => {
      state.isLoadingMachineLearning = true;
    });

    builder.addCase(fetchListManagerialEconomic.pending, (state, action) => {
      state.isLoadingManagerialEconomics = true;
    });
    builder.addCase(fetchListManagerialEconomic.fulfilled, (state, action) => {
      state.isLoadingManagerialEconomics = false;
      state.managerialEconomics = action.payload.list;
      state.managerialEconomicsTitle = action.payload.title;
    });
    builder.addCase(fetchListManagerialEconomic.rejected, (state, action) => {
      state.isLoadingManagerialEconomics = true;
    });
  },
});

export const { setLoading } = facultySlice.actions;

export default facultySlice.reducer;
