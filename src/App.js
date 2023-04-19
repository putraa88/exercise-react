import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigation.component";
import { routes } from "./constants/routes.constant";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            {
              routes.map(i =>
                <Route {...i}/>
              )
            }
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
