import { createAsyncThunk } from '@reduxjs/toolkit';
import dumpData from 'dumpData/output.json';

const titles = Object.keys(dumpData);

export const fetchListCellBiology = createAsyncThunk(
  'fetchListCellBiology',
  async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            title: titles[0],
            list: dumpData[titles[0]],
          }),
        1000,
      );
    });
    return await promise;
  },
);

export const fetchListMachineLearning = createAsyncThunk(
  'fetchListMachineLearning',
  async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            title: titles[1],
            list: dumpData[titles[1]],
          }),
        2000,
      );
    });
    return await promise;
  },
);

export const fetchListManagerialEconomic = createAsyncThunk(
  'fetchListManagerialEconomic',
  async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            title: titles[2],
            list: dumpData[titles[2]],
          }),
        3000,
      );
    });
    return await promise;
  },
);
