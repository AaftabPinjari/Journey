
import { useEffect } from "react"
import authService from "./appwrite/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? (<div>Loading</div>)
    : (
      <div>
        <Header />
        <Footer />
      </div>
    )
}

export default App
