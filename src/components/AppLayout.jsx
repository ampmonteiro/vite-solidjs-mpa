export default function AppLayout({ children }) {
  return (
    <>
      <header>
        <h3>MPA Blog {'<='} Vite + Solidjs</h3>
        <nav>
          <a href="/">HOME</a>
          <a href="/about/">ABOUT</a>
        </nav>
      </header>
      <main>{children}</main>

      <footer>
        <p>&copy;2023 AMPM</p>
        <p>Powered by: Solidjs || Developed with: Vite</p>
      </footer>
    </>
  );
}
