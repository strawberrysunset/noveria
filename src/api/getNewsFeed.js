import {jsonFetch} from 'utilities'

export const getNewsFeed = async () => {
  const data = await jsonFetch(`https://api.cointelegraph.com/api/v1/ext-news`, {
    headers : {
      "content-type":"application/x-www-form-urlencoded"
    }
  })
  
  const news = data['news'].map(article => {
    return {
      title: article.title,
      author: article.author,
      thumbnail: article.thumb,
      date: article.published_at.date.split(' ')[0],
      text: getText(article.fulltext),
      url: article.url
    }
  })

  console.log({news})

  return news
   
  function getText(HTML) { 
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTML, 'text/html');
    const nodes = doc.querySelectorAll('p')
    const text = Object.values(nodes).reduce((string, node) => {
      return string + node.innerText
    }, '')
    return text.replace(/\.\S/, ' ') // Add missing full stops after spaces
  }
}