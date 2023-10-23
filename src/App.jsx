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
import { UserContextProvider } from './contexts/UserContext';
import RegisterAndLoginForm from './components/authentications/RegisterAndLoginForm';

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/create-post' element={<CreatePost />} />
              <Route path='/login' element={<RegisterAndLoginForm />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </UserContextProvider>
  );
}