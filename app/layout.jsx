import "@styles/globals.css";

export const metadata = {
  title: "SlidAgency",
  description: "Welcome to MacPaw Bootcamp 2023",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
