import { For } from 'solid-js';
import { render } from 'solid-js/web';
import { load } from './utils';
import AppLayout from './components/AppLayout';

const Article = ({ title, content = [], date }) => (
  <>
    <h1>{title}</h1>
    <p>{date}</p>

    <For each={content}>{(c) => <p>{c}</p>}</For>
  </>
);

const App = ({ item }) => (
  <AppLayout>
    <Article {...item} />
  </AppLayout>
);

const solidStart = (data = [], error = false) =>
  render(() => <App item={data} />, document.body);

load(solidStart, false);
