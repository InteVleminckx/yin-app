export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <main className="flex-1 flex flex-col pb-6">
        {children}
      </main>
    </div>
  );
}
