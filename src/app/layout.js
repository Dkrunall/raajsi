import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BootstrapProvider from '../components/BootstrapProvider';

export const metadata = {
  title: 'Royal Website',
  description: 'Figma to Next.js with Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapProvider>
          <Navbar />
          {children}
          <Footer />
        </BootstrapProvider>
      </body>
    </html>
  );
}
