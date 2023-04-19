const API_KEY = `defeb60311944f86b75cd4a0700a4957`;

const callApi = async (params) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params}`);
  return await data.json();
};

const newsApi = async(topic) => {
  const data = await fetch(`https://newsapi.org/v2/everything?q=${topic ? topic : 'bitcoin'}&apiKey=defeb60311944f86b75cd4a0700a4957`);
  const result = await data.json();
  const resultWithImageUrl = result.articles.filter(i => i.urlToImage).splice(0, 9);
  return resultWithImageUrl;
}

export {
  callApi,
  newsApi,
}