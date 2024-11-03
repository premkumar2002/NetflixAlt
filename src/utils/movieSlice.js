import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state,action) => {
            state.trailerVideos = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopratedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state,action) => {
            state.upComingMovies = action.payload;
        },
    }
})

export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopratedMovies, addUpComingMovies} = movieSlice.actions;

export default movieSlice.reducer;