import "./globals.css";

export const metadata = {
  title: "Chigazo's Portfolio",
  description: "Portfolio of Chigazo Graham",
  icons: { icon: "/vite.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LXL26XY6NM"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LXL26XY6NM');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}