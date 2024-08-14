import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import productItems from "./data/ProductItems";
import ModelViewer from "./components/ModelViewer/ModelViewer";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
              />
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
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
