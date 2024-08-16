import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    editPost: false,
    createPost: false,
}

const modalsSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalEditOpen: state => {
            state.editPost = !state.editPost;
        },
        setModalCreateOpen: state => {
            state.editPost = !state.editPost;
        }
    }
})

export const {
    setModalEditOpen,
    setModalCreateOpen,
} = modalsSlice.actions;

export default modalsSlice.reducer