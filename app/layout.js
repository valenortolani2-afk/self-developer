import "./globals.css";

export const metadata = {
  title: "Valentino Ortolani Lopez | Diseñador y desarrollador web",
  description:
    "Diseño y desarrollo digital para marcas que quieren llegar más lejos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}