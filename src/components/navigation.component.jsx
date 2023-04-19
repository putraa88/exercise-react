import { Link } from "react-router-dom";

const NavigationBar = () => {
  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/' class="nav-link" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/user' class="nav-link" aria-current="page">User</Link>
            </li>
            <li class="nav-item">
              <Link to='/news' class="nav-link" aria-current="page">News</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;