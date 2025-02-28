import './App.css'

const DYNAMIC_HEIGHT = 100

function App() {
  return (
    <div className={`h-[${DYNAMIC_HEIGHT}px]`}>
      Having the dynamic height here will throw an error if the style sheet uses `@font-face` at rule
    </div>
  )
}

export default App
