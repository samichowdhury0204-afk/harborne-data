import Home from '@/Pages/Home'
import { ThemeProvider } from '@/src/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
