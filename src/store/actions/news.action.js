import { newsApi } from "../../api/callApi";

export const getNews = (topic) => async dispatch => {
  const data = await newsApi(topic);
  dispatch({
    type: 'GET_NEWS',
    payload: data,
  })
}