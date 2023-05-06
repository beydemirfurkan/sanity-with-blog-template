
import '../globals.css';
export const metadata = {
  title: "Beydemir.dev",
  description: "Beydemir.dev - Kişisel Blog Sayfası",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
