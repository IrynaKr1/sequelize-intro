import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PHONES_SLICE_NAME = 'phones';

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
};

const phonesSlice = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
});

const { reducer } = phonesSlice;

export default reducer;
