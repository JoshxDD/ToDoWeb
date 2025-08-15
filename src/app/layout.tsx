export const metadata = { title: "Todos", description: "React + TS + localStorage" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
        <div className="mx-auto max-w-2xl p-6">{children}</div>
      </body>
    </html>
  );
}
