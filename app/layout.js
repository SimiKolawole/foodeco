export const metadata = {
  title: 'FoodEco Impact Africa - Boosting Crop Yields Across Africa',
  description: 'Youth-led nonprofit working to boost crop yields in Africa, starting with Nigeria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}