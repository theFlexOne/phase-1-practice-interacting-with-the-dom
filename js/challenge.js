const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likesContainer = document.querySelector('#likes');
const likesList = likesContainer.children;


setInterval(() => {
  counter.innerText++
}, 1000);

plus.addEventListener('click', () => {
  counter.innerText++;
});

minus.addEventListener('click', () => {
  counter.innerText--;
});

heart.addEventListener('click', () => {
  
})

/*
heart.addEventListener('click', () => {
  const count = counter.innerText;
  const likeIndex = [...likesList].findIndex(li => li.innerText.startsWith(count));
  const oldLi = likesList[likeIndex];
  console.log(oldLi);
  
  
  const likeMsg = `${counter.innerText} has been liked`;
  const li = document.createElement('li');
  li.innerText = likeMsg;
  likesContainer.appendChild(li);
})
*/