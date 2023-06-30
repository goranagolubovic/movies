import "./App.css";
import Movies from "./pages/Movies/Movies";
import Graphs from "./pages/Graphs/Graphs";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/Route/PrivateRoute";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <QueryClientProvider client={queryClient}>
              <Movies />
            </QueryClientProvider>
          }
        ></Route>

        <Route
          path="lucene"
          element={
            <QueryClientProvider client={queryClient}>
              <Movies />
            </QueryClientProvider>
          }
        ></Route>
        <Route
          path="graphs"
          element={
            <PrivateRoute>
              <Graphs />
            </PrivateRoute>
          }
        ></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
