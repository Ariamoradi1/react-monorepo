import styles from './main.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@mui/icons-material';

export function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default Main;
