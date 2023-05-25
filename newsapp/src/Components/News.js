import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
// document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News-Adda `
const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [TotalResult, setTotalResult] = useState(0)

  //componentDidMount() is a fn start after everything on app uploaded

  useEffect(() => {
    (async () => {
      setloading(true)
      props.progress(10)
      let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikeys}&page=${page}&pageSize=${props.pagesize}&category=${props.category}`)
      let data = await response.json()
      props.progress(70)
      setarticles(data.articles)
      setTotalResult(data.totalResults)
      setloading(false)
      setpage(page + 1)
      props.progress(100)
      document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News-Adda `
    })();
    // eslint-disable-next-line
  }, []);




  const fetchMoreData = async () => {
    props.progress(10)
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikeys}&page=${page}&pageSize=${props.pagesize}&category=${props.category}`)
    let data = await response.json()
    props.progress(70)
    setarticles(articles.concat(data.articles))
    setTotalResult(data.totalResults)
    setloading(false)
    setpage(page + 1)
    props.progress(100)
  }


  return (<>

    {!loading && <div className='container'>
      <h1 className='text-center' style={{ margin: "90px 0 30px 0" }}>News-Adda</h1>
      <div className="row">
        <InfiniteScroll
          className='row overflow-hidden'  /* see dom in developer tool to understand this */
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= TotalResult}
          loader={<Spinner /> && articles.length <= TotalResult}
        >
          {articles.map((element) => {             //article.map((element)  is also fine but articles.map((element) is used because we need to change all the things which only done through state
            return <div className='col-12 col-sm-4 col-md-12 col-lg-4' key={element.url}><NewsItems title={element.title} description={element.description} imageUrl={!element.urlToImage ? 'https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=' : element.urlToImage} NewsUrl={element.url} Author={element.author} time={element.publishedAt} source={element.source.name} /></div>
          })}
        </InfiniteScroll>
      </div>


    </div>}
    {loading && <Spinner />}
  </>
  )


}
News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
};
News.defaultProps = {
  pagesize: 10,
  country: 'in',
  category: 'general'
};


export default News