import { Route, Routes } from 'react-router-dom';
import { Home } from '@react-monorepo/home';

export function Main() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
    </Routes>
  );
}

export default Main;
