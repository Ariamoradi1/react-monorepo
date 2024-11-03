import { Route, Routes } from 'react-router-dom';
import { ReactMonorepoHome } from '@react-monorepo/home';

export function ReactMonorepoMain() {
  return (
    <Routes>
      <Route path="" element={<ReactMonorepoHome />}></Route>
    </Routes>
  );
}

export default ReactMonorepoMain;
