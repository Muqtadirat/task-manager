import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/Homepage";


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
      </Routes>
    );
}


export default CustomRoutes
