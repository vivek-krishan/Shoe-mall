import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-custom-alert";
import { AnimatePresence } from "framer-motion";
import { HeroUIProvider } from "@heroui/react";
// import { store } from "./utility/Stores/AllProductsStore.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <HeroUIProvider>
      <ToastContainer floatingTime={3000} />
      <App />
    </HeroUIProvider>
  </Router>
);
