import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store';
import apiTotal from './apiTotal.json'
import apiHistory from './apiHistory.json'
import apiPrefectures from './apiPrefectures.json'
import apiStatistics from './apiStatistics.json'
const apiUrl = "https://covid19-japan-web-api.now.sh/api/v1"

type TOTAL = typeof apiTotal
type HISTORY = typeof apiHistory
type PREFECTURES = typeof apiPrefectures
type STATISTICS = typeof apiStatistics

type covidState = {
  total: TOTAL,
  history: HISTORY,
  prefectures: PREFECTURES,
  statistics: STATISTICS
  prefectureName: string
}

const initialState: covidState = {
  total: apiTotal,
  history: apiHistory,
  prefectures: apiPrefectures,
  statistics: apiStatistics,
  prefectureName: "東京都"
}

export const fetchAsyncGetTotal = createAsyncThunk("covid/total", async () => {
  const { data } = await axios.get<TOTAL>(`${apiUrl}/total`)
  return data
})

export const fetchAsyncGetHistory = createAsyncThunk(
  "covid/history",
  async () => {
  const { data } = await axios.get<HISTORY>(`${apiUrl}/total?history=true`)
  return data
  })

  export const fetchAsyncGetPrefectures = createAsyncThunk(
    "covid/prefectures",
    async () => {
    const { data } = await axios.get<PREFECTURES>(`${apiUrl}/prefectures`)
    return data
    })

    export const fetchAsyncGetStatistics = createAsyncThunk(
      "covid/getStatistics",
      async () => {
        const { data } = await axios.get<STATISTICS>(`${apiUrl}/statistics`);
        return data;
      }
    );

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
    builder.addCase(fetchAsyncGetHistory.fulfilled, (state, action) => {
      return {
        ...state,
        history: action.payload
      }
    })
    builder.addCase(fetchAsyncGetPrefectures.fulfilled, (state, action) => {
      return {
        ...state,
        prefectures: action.payload
      }
    })
    builder.addCase(fetchAsyncGetStatistics.fulfilled, (state, action) => {
      return {
        ...state,
        statistics: action.payload,
        
      };
    });
  }
})
export const selectPrefecture = (state: RootState) => state.covid.prefectures
export const selectHistory = (state: RootState) => state.covid.history
export const selectTotal = (state: RootState) => state.covid.total
export const selectStatistics = (state: RootState) => state.covid.statistics
export const selectprefectureName = (state: RootState) => state.covid.prefectureName
export default covidSlice.reducer