export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-gradient-to-b from-[#f5f3ff]/60 to-white flex items-center justify-center font-sans antialiased"
      >
        <div className="mx-auto w-[720px] px-4 py-16 text-center md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-1.5 text-xs font-medium text-[#6320ee] shadow-sm md:text-sm">
            <svg
              className="h-4 w-4 text-[#6320ee]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Trusted by thousands of users
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Shorten Your URL <br />
            <span className="text-[#6320ee]">in seconds</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Create short, memorable links that you can share anywhere. <br />
            Track every click with powerful analytics.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-[#6320ee]">
              <svg
                className="h-7 w-7 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
              Login to make your URL short
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Sign in or create a free account to start shortening links,
              generating QR codes, and tracking every click in real time.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6320ee] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-violet-600/20 transition-all hover:bg-[#6320ee]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Login to Make URL
              </a>

              <a
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#6320ee] transition-all hover:bg-violet-50/50"
              >
                Sign Up Free
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
