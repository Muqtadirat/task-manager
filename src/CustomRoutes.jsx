import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import PendingTask from "./pages/PendingTask";
import CompletedTask from "./pages/CompletedTask";


const CustomRoutes = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/completed"
          element={
            <Layout>
              <CompletedTask />
            </Layout>
          }
        />
        <Route
          path="/pending"
          element={
            <Layout>
              <PendingTask />
            </Layout>
          }
        />
      </Routes>
    );
}


export default CustomRoutes
