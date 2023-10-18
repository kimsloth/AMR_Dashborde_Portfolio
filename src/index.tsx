import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { PageLayout } from "./PageLayout";

import "react-grid-layout/css/styles.css";
import "simplebar/dist/simplebar.min.css";

const ExamplePage = () => {
  return <PageLayout />;
};

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<ExamplePage />);
