import {configureStore} from '@reduxjs/toolkit';
import coursesReducer from './slice/courses';

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
    },
});