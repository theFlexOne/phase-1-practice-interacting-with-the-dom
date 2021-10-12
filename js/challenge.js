const counter = document.querySelector('#counter');

//DOM buttons
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const submit = document.querySelector('#submit');

const likesList = document.querySelector('#likes');

let counting = setInterval(() => counter.innerText++, 1000);

plus.addEventListener('click', () => {
  counter.innerText++;
});

minus.addEventListener('click', () => {
  counter.innerText--;
});

heart.addEventListener('click', () => {
  const priorLikeMsgs = [...likesList.children];
  const counterNum = counter.innerText;
  const priorLikeMsgIndex = priorLikeMsgs.findIndex((item) => item.firstElementChild.textContent === counterNum);
  const timesPriorNumLiked = (priorLikeMsgIndex > -1) ? +priorLikeMsgs[priorLikeMsgIndex].lastElementChild.textContent + 1 : 1
  let likeMsg = `<span>${counterNum}</span> has been liked <span>${timesPriorNumLiked}</span> time`;
  if (timesPriorNumLiked === 1) {
    newLi = document.createElement('li');
    newLi.innerHTML = likeMsg
    likesList.appendChild(newLi);
  } else {
    likeMsg += 's';
    priorLikeMsgs[priorLikeMsgIndex].innerHTML = likeMsg;
  }
});

pause.addEventListener('click', () => {
  if (pause.textContent === ' pause ') {
    clearInterval(counting);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.textContent = ' resume ';
  } else {
    counting = setInterval(() => counter.innerText++, 1000);
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.textContent = ' pause ';
  }
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const commentList = document.querySelector('#commentList');
  const newComment = document.createElement('li');
  const commentInput = document.querySelector('#commentInput').value;
  newComment.textContent = commentInput;
  commentList.appendChild(newComment);
});