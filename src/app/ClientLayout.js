import ClientWidgets from './ClientWidgets';

export default function ClientLayout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
        {children}
      </main>
      <ClientWidgets />
    </>
  );
}
