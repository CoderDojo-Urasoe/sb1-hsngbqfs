import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import MemberList from './pages/MemberList';
import MemberDetail from './pages/MemberDetail';
import MemberForm from './pages/MemberForm';
import ClubInfo from './pages/ClubInfo';
import UserList from './pages/UserList';
import NotificationNew from './pages/NotificationNew';
import NotificationDetail from './pages/NotificationDetail';
import NotificationEdit from './pages/NotificationEdit';
import SurveyList from './pages/SurveyList';
import SurveyResponses from './pages/SurveyResponses';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<MemberList />} />
              <Route path="/members/new" element={<MemberForm />} />
              <Route path="/members/:id" element={<MemberDetail />} />
              <Route path="/members/:id/edit" element={<MemberForm />} />
              <Route path="/club-info" element={<ClubInfo />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/notifications/new" element={<NotificationNew />} />
              <Route path="/notifications/:id" element={<NotificationDetail />} />
              <Route path="/notifications/:id/edit" element={<NotificationEdit />} />
              <Route path="/surveys" element={<SurveyList />} />
              <Route path="/surveys/:id/responses" element={<SurveyResponses />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;