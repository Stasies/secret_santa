import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Normalize from "./utils/Normalize";
import { ThemeProvider } from "styled-components";
import { themeColors } from "./utils/Theme";
import Registerpage from "./pages/register/Registerpage";
import Invitation from "./pages/invitation/Invitation";
import Group from "./pages/group/Group";
import Draw from "./pages/draw/Draw";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Edit from "./pages/edit/Edit";
import DrawnNames from "./pages/drawnnames/DrawnNames";
import Wishpage from "./pages/wishlist/Wishpage";
import { groupReducer, initialState } from "./utils/groupReducer";
import { initialUserState, userReducer } from "./utils/userReducer";
import Userpage from "./pages/userpage/Userpage";
import Startpage from "./pages/startpage/Startpage";

function App() {
  const [state] = useReducer(groupReducer, initialState);
  const [user] = useReducer(userReducer, initialUserState);
  let currentGroup = localStorage.getItem("group");

  const ProtectedRoute = ({ children }: any) => {
    if (!currentGroup) {
      return <Navigate to={`/`} />;
    }
    return children;
  };
  return (
    <ThemeProvider theme={themeColors}>
      <Normalize />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Startpage />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path=":groupId/step:n" element={<Invitation />} />
            <Route path=":groupId/:userId" element={<Group />} />
            <Route path="user" element={<Userpage />} />

            <Route
              path=":groupId/:userId/draw"
              element={
                <ProtectedRoute>
                  <Draw />
                </ProtectedRoute>
              }
            />
            <Route
              path=":groupId/edit/:cat"
              element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              }
            />
            <Route
              path=":groupId/drawn"
              element={
                <ProtectedRoute>
                  <DrawnNames />
                </ProtectedRoute>
              }
            />
            <Route
              path=":groupId/:userId/wishlist"
              element={
                <ProtectedRoute>
                  <Wishpage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
