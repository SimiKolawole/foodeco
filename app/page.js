'use client'

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe 
        src="/foodeco-site.html" 
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="FoodEco Impact Africa"
      />
    </div>
  )
}