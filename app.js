// Progression 1: create a function and fetch the api using axios
const blog = document.getElementById('blog');
function getData() {
  axios
    .get(
      'https://gnews.io/api/v4/top-headlines?token=6b91093a8e51794e360d644a5906deb1&lang=en'
    )
    .then((res) => {
      const articleList = res.data.articles;
      articleList.forEach((article) => {
        const newArticle = document.createElement('div');
        newArticle.setAttribute('class', 'article');
        const title = document.createElement('h3');
        title.innerText = article.title;
        const img = document.createElement('img');
        img.setAttribute('src', article.image);
        const content = document.createElement('p');
        content.innerText = article.description;

        newArticle.append(title);
        newArticle.append(img);
        newArticle.append(content);

        blog.append(newArticle);
      });
    });
}
getData();
