
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Routes} from 'react-router-dom'
import SearchPage from "./pages/SearchPage/SearchPage";
import HomePage from "./pages/MainPage/HomePage";


function App() {
  return (
      <Layout>
          <Routes>
              <Route path={'/'} element={<HomePage/>}></Route>
              <Route path={'/search'} element={<SearchPage/>}></Route>

          </Routes>
      </Layout>
  );
}

export default App;
