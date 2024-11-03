import { Route, Routes } from 'react-router-dom';
import { ReactMonorepoMain } from '@react-monorepo/main';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ReactMonorepoMain />}></Route>
    </Routes>
  );
}

export default App;
