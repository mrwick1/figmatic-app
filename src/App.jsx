import { Route, Routes } from 'react-router-dom';
import './App.css';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Knowledge from './components/Knowledge/Knowledge';
import HomePage from './views/Home/HomePage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<ComingSoon />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="members" element={<ComingSoon />} />
          <Route path="teams" element={<ComingSoon />} />
          <Route path="vault" element={<ComingSoon />} />
          <Route path="chat" element={<ComingSoon />} />
          <Route path="settings" element={<ComingSoon />} />
          <Route path="company" element={<ComingSoon />} />
          <Route path="my-profile" element={<ComingSoon />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
