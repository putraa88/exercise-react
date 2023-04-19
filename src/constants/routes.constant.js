import HomePage from "../pages/home.page";
import NewsPage from "../pages/news.page";
import User from "../pages/user.page";

export const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/news',
    element: <NewsPage />
  },
]