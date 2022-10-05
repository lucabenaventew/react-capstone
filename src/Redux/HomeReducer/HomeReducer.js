import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getHeros = createAsyncThunk(
  'heros/getHeros',
  async () => {
    const timeStamp = '1661492412';
    const publicApiKey = 'e0a86583bfecfc0e5640736439176bd0';
    const md5 = 'dc0d614d9c848f77f7955f9988d47498';
    const marvel = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5}`).then((data) => data.json());
    return marvel.data.results;
  },
);

export const getHerosSearch = createAsyncThunk(
  'heros/getHerosSearch',
  async (query) => {
    const timeStamp = '1661492412';
    const publicApiKey = 'e0a86583bfecfc0e5640736439176bd0';
    const md5 = 'dc0d614d9c848f77f7955f9988d47498';
    const marvelQuery = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5}`).then((data) => data.json());
    return marvelQuery.data.results;
  },
);

export const getComic = createAsyncThunk(
  'heros/getComic',
  async (url) => {
    const timeStamp = '1661492412';
    const publicApiKey = 'e0a86583bfecfc0e5640736439176bd0';
    const md5 = 'dc0d614d9c848f77f7955f9988d47498';
    const marvelComic = await fetch(`${url}?&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5}`).then((data) => data.json());
    return marvelComic.data.results;
  },
);

const initialState = [];

const herosSlice = createSlice({
  name: 'heros',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getHeros.fulfilled, (state, action) => action.payload)
      .addCase(getHerosSearch.fulfilled, (state, action) => action.payload)
      .addCase(getComic.fulfilled, (state, action) => action.payload);
  },
});

export const { herosReducer } = herosSlice.actions;

export default herosSlice.reducer;
