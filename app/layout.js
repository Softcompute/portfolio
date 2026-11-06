import "../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../public/assets/css/style.css";

export const metadata = {
  title: "Gael Ekofo | Développeur Full Stack",
  description: "Portfolio de Gael Ekofo, développeur Full Stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}