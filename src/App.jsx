import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, ListCharacters, SharedLayout } from "./pages";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<span className="loader"></span>}>
              <SharedLayout />
            </Suspense>
          }
        >
          <Route index element={<ListCharacters />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
