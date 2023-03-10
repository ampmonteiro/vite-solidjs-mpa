import { render } from 'solid-js/web';
import AppLayout from './components/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <h1>About</h1>
      <p>Goals of this website is to demonstrate:</p>
      <ul>
        <li>Building a simple MPA (Multi Page Application)</li>
        <li>Using Vites</li>
        <li>Using Solidjs</li>
      </ul>
    </AppLayout>
  );
};

render(() => <App />, document.body);
