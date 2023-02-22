import { createRoot } from 'react-dom/client'
import { Main } from './ui/components/main/main.component'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page')
  const root = createRoot(container)
  root.render(<Main />)
})
