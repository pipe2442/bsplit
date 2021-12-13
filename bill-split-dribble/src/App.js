import './assets/app.scss'
import Category from "./components/Category"
import Menu from "./components/Menu"
import Bill from "./components/Bill"

function App () {
  return (
    <>
      <div className="app">
        <div className="app__menu">
          <Category />
          <Menu />
        </div>
        <Bill className="app__bill" />
      </div>
    </>
  )
}

export default App
