import "@styles/globals.css";

export const metadata = {
  title: "SlidAgency",
  description: "Currently is under development",
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
