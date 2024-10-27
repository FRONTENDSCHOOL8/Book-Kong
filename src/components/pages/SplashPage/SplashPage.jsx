function SplashPage() {
  return (
    <main className="flex flex-col items-center w-full h-screen z-9999 bg-primary-500">
      <h1 className="fixed bottom-1 left-[calc(50%-60px)]">
        <img src="/logo/logo-white.png" className="w-[120px]" alt="북콩 로고" />
      </h1>
      <div className="w-full">
        <img
          src="/splash/splash-1.png"
          className="w-full translate-y-[-272px] animate-splash-1 splash-delay animate-splash"
          alt="read"
        />
        <img
          src="/splash/splash-2.png"
          className="w-full translate-y-[-500px] animate-splash-2 splash-delay animate-splash"
          alt="and"
        />
        <img
          src="/splash/splash-3.png"
          className="w-full translate-y-[-740px] animate-splash-3 splash-delay animate-splash"
          alt="pile up"
        />
      </div>
    </main>
  );
}

export default SplashPage;
