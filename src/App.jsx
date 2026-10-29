function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border-t-4 border-blue-500">
        
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl shadow-inner">
          👩‍💻
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Khadija Malouhi</h1>
        <p className="text-blue-600 font-semibold mb-4">Software Engineering Student | Frontend</p>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Passionate about building interactive web applications. 
          Currently mastering React.js and UI/UX design.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">React</span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Python</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Tailwind</span>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/mlwhykhdyjt-lang" target="_blank" rel="noreferrer" className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition duration-300">
            GitHub
          </a>
          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300">
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;