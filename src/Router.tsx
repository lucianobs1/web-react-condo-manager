import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './pages/Home';
import { OpenCall } from './pages/OpenCall';
import { RegisterCondo } from './pages/RegisterCondo';
import { ViewCalls } from './pages/ViewCalls';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/open-call" element={<OpenCall />} />
        <Route path="/view-calls" element={<ViewCalls />} />
        <Route path="/register-condo" element={<RegisterCondo />} />
      </Route>
    </Routes>
  );
}
