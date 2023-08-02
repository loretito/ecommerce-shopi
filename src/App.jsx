import { Route, Routes } from "react-router-dom";
import { Home, MyAccount, MyOrder, MyOrderDetail, MyOrders, NotFound, SignIn } from "./pages";
import { CheckoutSideMenu, Navbar } from "./components";
import { Layout } from "./layouts/Layout";

function App() {
  const defaultLayout = Page => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={defaultLayout(Home)} />
        <Route path="/my-account" element={defaultLayout(MyAccount)} />
        <Route path="/my-orders" element={defaultLayout(MyOrders)} />
        <Route path="/my-orders/last" element={defaultLayout(MyOrder)} />
        <Route path="/my-order" element={defaultLayout(MyOrder)} />
        <Route path="/my-order/:id" element={defaultLayout(MyOrderDetail)} />
        <Route path="/sign-in" element={defaultLayout(SignIn)} />
        <Route path="/*" element={defaultLayout(NotFound)} />
      </Routes>

      <CheckoutSideMenu />
    </>
  );
}

export default App;
