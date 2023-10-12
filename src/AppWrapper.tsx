import Header from '@/components/header/view';
import { Outlet } from 'react-router-dom';

export default function AppWrapper() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
