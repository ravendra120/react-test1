import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export let getAllUsers = createAsyncThunk("allusers", async () => {
  let response = await fetch("http://localhost:5000/users");
  if (response.ok) {
    let result = await response.json();
    return result;
  }
});

export let getAllPosts = createAsyncThunk("getAllPosts", async () => {
  let response = await fetch("http://localhost:5000/posts");
  if (response.ok) {
    let result = await response.json();
    return result;
  }
});

export let addNewPost = createAsyncThunk("addnewpost", async (post) => {
  let response = await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (response.ok) {
    let result = await response.json();
    return result;
  }
});

export let deletePost = createAsyncThunk("deletePost", async (id) => {
  let response = await fetch(`http://localhost:5000/posts/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    let result = await response.json();
    return result;
  }
});

let initialState = {
  users: [],
  posts: [],
  error: "",
  isloggedin: false,
};
let loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    isloggedin: (state, action) => {
      state.isloggedin = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      // console.log(action);
      state.posts = state.posts.filter((item) => item.id !== action.payload.id);
    });
  },
});

export default loginReducer.reducer;
export const { isloggedin } = loginReducer.actions;
