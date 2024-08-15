import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import productItems from "./data/ProductItems";
import ModelViewer from "./components/ModelViewer/ModelViewer";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList />
            }
          />
           {productItems.map(item => (
          <Route 
            key={item.id} 
            path={`/view/${item.id}`} 
            element={
              <ModelViewer 
                item={item} 
              />
            } 
          />
        ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
