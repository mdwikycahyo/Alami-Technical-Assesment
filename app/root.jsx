import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html className="scroll-smooth">
      <head>
        <title>Muhammad Dwiky Cahyo Wicaksono Personal Website</title>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <script src="https://cdn.tailwindcss.com" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen relative overflow-y-auto">
        {/* <div
          id="background-decoration"
          className="z-0 absolute top-0 left-0 h-full w-full"
        >
          <div
            id="straight line"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#3E4650] opacity-5"
          />
          <div
            id="white-circle"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-[540px] h-[540px]"
          />
        </div> */}
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
