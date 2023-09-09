import '@styles/globals.css';
import Fixel from 'next/font/local';

const fixelFont = Fixel({ src: '../fonts/FixelVariable.ttf' });

export const metadata = {
    title: 'Slid Agency',
    description: 'Currently is under development'
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" style={fixelFont.style} className="font-medium">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
