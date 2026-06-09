import Footer from './Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center mt-20">Welcome to Serinix</h1>
        <p className="text-center mt-4 text-gray-600">Your page content here</p>
      </main>
      
      <Footer />
    </div>
  )
}

export default App