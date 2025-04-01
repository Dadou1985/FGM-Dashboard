import { Home } from "@/pages/Home";
import { UserDetails } from "@/pages/UserDetails"; // à créer
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </Layout>
  );
}