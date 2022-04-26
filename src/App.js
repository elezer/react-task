import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormUser from './pages/FormUser';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/common/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact component={HomePage} />
        {/* Implement your route here */}
        <Route path='/user' exact component={FormUser} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default App;
