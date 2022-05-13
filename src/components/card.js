import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement('article');
  const headlineCont = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div');
  const authPhoto = document.createElement('img');
  const authName = document.createElement('span');

  
  cardDiv.appendChild(headlineCont);
  cardDiv.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(authPhoto);
  author.appendChild(authName);

  cardDiv.classList.add('card');
  headlineCont.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container');
  authPhoto.classList.add('authorPhoto');
  authName.classList.add('authorName');

  headlineCont.textContent = article.data;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardDiv;
}

const cardAppender = (selector) => {
  const apper = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
.then((resp) => {
apper.appendChild(Card())
  console.log(resp.data);
})
.catch(() => {
  console.log("error");
})
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}
const apper = document.querySelector('.cards-container');

export { Card, cardAppender }
