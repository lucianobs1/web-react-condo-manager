import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './pages/Home';
import { OpenNewCall } from './pages/OpenNewCall';
import { RegisterCondo } from './pages/RegisterCondo';
import { ViewCalls } from './pages/ViewCalls';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/open-new-call" element={<OpenNewCall />} />
        <Route path="/view-calls" element={<ViewCalls />} />
        <Route path="/register-condo" element={<RegisterCondo />} />
      </Route>
    </Routes>
  );
}
