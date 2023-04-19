import { useEffect, useState } from "react";
import { newsApi } from "../api/callApi";
import NewsCard from "../components/news-card.component";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../store/actions/news.action";

const NewsPage = () => {
  const dispatch = useDispatch();

  // local state
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  const newsRedux = useSelector(state => state.newsReducer.news);

  // hooks
  useEffect(() => {
    // const fetchData = async () => {
    //   setNews(await newsApi());
    // }
    // fetchData();
    dispatch(getNews());
  },[])

  // functions
  const handleSearch = async() => {
    dispatch(getNews(search));
  }
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'fantasy', marginTop: '1rem'}}>News Website</h1>
      <div class="container input-group mb-3">
        <input onChange={e => setSearch(e.target.value)} type="text" class="form-control" placeholder="search news" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button onClick={handleSearch} class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
      <NewsCard news={newsRedux}/>
    </div>
  );
}

export default NewsPage;