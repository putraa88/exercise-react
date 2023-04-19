export default function NewsCard (props) {
  return (
    <>
      <div className="container">
        <div className="row">
        {
          props.news.map(i =>
              <div className="col-4" style={{marginBottom: '1rem'}}>
                <div class="card" style={{width: "18rem"}}>
                  <img src={i.urlToImage} class="card-img-top" alt="..." style={style.imageSize} />
                  <div class="card-body">
                    <p class="card-text" style={style.cardDescription}>{i.title}</p>
                  </div>
                </div>
              </div>
          )
        }
        </div>

      </div>
    </>
  )
}

const style = {
  cardDescription: {
    'font-size':'14px',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'overflow': 'hidden',
  },
  imageSize: {
    'float': 'left',
    'object-fit': 'cover',
  }
}