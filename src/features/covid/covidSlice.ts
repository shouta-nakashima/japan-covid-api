import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store';
import apiTotal from './apiTotal.json'

const apiUrl = "https://covid19-japan-web-api.now.sh/api/v1"

type TOTAL = typeof apiTotal

type covidState = {
  total: TOTAL
}

const initialState: covidState = {
  total: apiTotal
}

export const fetchAsyncGetTotal = createAsyncThunk("covid/total", async () => {
  const { data } = await axios.get<TOTAL>(`${apiUrl}/total`)
  return data
})

const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetTotal.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload
      }
    })
  }
})

export const selectTotal = (state: RootState) => state.covid.total
export default covidSlice.reducer