import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*"  element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
