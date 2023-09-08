import '@styles/globals.css';
import Fixel from 'next/font/local';

const fixelFont = Fixel({ src: '../fonts/FixelDisplay-Medium.ttf' });

export const metadata = {
    title: 'SlidAgency',
    description: 'Currently is under development'
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body style={fixelFont.style}>
                <main className="">{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
