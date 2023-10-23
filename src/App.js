import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import CreatePost from './pages/CreatePost';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}