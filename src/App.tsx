import { Route, Switch } from 'wouter';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
