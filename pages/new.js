import Head from "next/head";

export default function New() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <a href="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://www.getdids.com/static/media/getstart.3d65c1a3.svg"
                />
              </a>
            </div>

            <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-8 lg:px-8">
              <div className="sm:text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Create Your
                    <br />
                  </span>
                  <span className="block text-indigo-600 xl:inline">
                    Digital Identity
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-2xl md:mt-5 md:text-xl sm:mx-auto">
                  Let's set you up with a secure Digital Identity that we call a
                  Decentralized Identifier, or DID. A DID provides independent
                  proof of ownership of all your data, allowing you - and only
                  you - to truly own it.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://elastos.academy/did/"
          target="_blank rel="
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-8 px-8 ext-base font-medium text-indigo-600 bg-gray-50  hover:bg-gray-100 md:text-lg"
        >
          Learn more about DID at Elastos Academy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <footer className="w-full mb-8 mt-8 sm:mt-16 md:mt-24">
        <div className="text-center font-light">
          Powered by
          <a
            href="https://elastos.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 inline ml-2"
              src="https://www.getdapp.co/elastos.png"
              alt="Elastos"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
