import { useSelector } from "react-redux";

const HomePage = () => {
  const users = useSelector(state => state.userReducer.users);
  const newsRedux = useSelector(state => state.newsReducer.news);
  return (
    <>
      <h1>HOMEPAGE</h1>
      {
        users.map(i =>
          <>
            <h6>{i.id}</h6>
            <h6>{i.name}</h6>
          </>  
        )
      }
      {
        newsRedux.map(i =>
          <>
            <h6>{i.urlToImage}</h6>
            <h6>{i.title}</h6>
          </>  
        )
      }
    </>
  )
}

export default HomePage;