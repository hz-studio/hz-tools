import "./globals.css";

export const metadata = {
  title: "HZ toolsets",
  description: "Useful tool sets.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
