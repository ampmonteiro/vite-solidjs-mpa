import { For } from 'solid-js';
import { render } from 'solid-js/web';
import { load } from './utils';
import AppLayout from './components/AppLayout';

// Since signals are not used here, it is ok,
// using destruturing props

const Item = ({ title, id, date }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p class="article-info">
        {date}
        <a href={'/article/?id=' + id}>read</a>
      </p>
    </article>
  );
};

const List = ({ items }) => {
  const rs = items.length > 0 && (
    <For each={items}>{(item) => <Item {...item} />}</For>
  );

  if (!rs) {
    return <p> no data </p>;
  }

  return rs;
};

const App = ({ data, error }) => {
  return (
    <AppLayout>
      <h1>Blog</h1>
      {!error && <List items={data} />}
      {error && <p>Something wrong happen</p>}
    </AppLayout>
  );
};

const solidStart = (data = [], error = false) =>
  render(() => <App data={data} error={error} />, document.body);

load(solidStart);
