export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="mt-6 inline-block text-sm text-cyan-400 hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
}
