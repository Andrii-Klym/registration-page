import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./shared/theme"
import Main from "./pages/Main"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Completed from "./pages/Completed"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/completed',
    element: <Completed />
  }
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
