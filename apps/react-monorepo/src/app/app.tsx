import { Route, Routes } from 'react-router-dom';
import { Main } from '@react-monorepo/main';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
