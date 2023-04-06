import './globals.css';

export const metadata = {
  title: 'Next 13 test',
  description: 'Testing out new features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
