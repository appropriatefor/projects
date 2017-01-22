const heading = document.getElementById('heading');
const content = document.getElementById('content');

heading.innerHTML = localStorage.title || 'Just Write'; // default text
content.innerHTML = localStorage.text || 'This text is automatically saved every second'; // default text

setInterval(() => { // function that is saving the innerHTML of the div
  localStorage.title = heading.innerHTML; // heading div
  localStorage.text = document.getElementById('content').innerHTML; // content div
  if (heading.innerHTML === '') {
    heading.style.border = 'solid rgba(0, 0, 0, .2)';
    heading.style.backgroundColor = 'rgba(240, 240, 240, 0.6)';
  } else {
    heading.style.border = '';
    heading.style.backgroundColor = '';
  }
  if (content.innerHTML === '') {
    content.style.border = 'solid rgba(0, 0, 0, .2)';
    content.style.backgroundColor = 'rgba(240, 240, 240, 0.6)';
  } else {
    content.style.border = '';
    content.style.backgroundColor = '';
  }
}, 100);

function clearFunction() {
  heading.innerHTML = 'Just Write';
  content.innerHTML = 'This text is automatically saved every second';
}

function download() {
  const a = document.body.appendChild(document.createElement('a'));
  a.download = `${document.getElementById('heading').innerHTML}.html`;
  a.href = 'data:text/html,' + '<body style="font-family:Helvetica,sans-serif;color:#333;font-weight:100;max-width:50em;margin:0 auto;">' + '<div style="font-size: 48px; padding-top: 30px;">' + document.getElementById('heading').innerHTML + '</div>'
	+ '<div style="padding-top: 10px;font-size: 24px;">' + document.getElementById('content').innerHTML + '</div>' + '</body>';
  a.click();
}

heading.addEventListener('click', () => {
  if (heading.innerHTML === 'Just Write') {
    heading.innerHTML = '';
  }
});

content.addEventListener('click', () => {
  if (content.innerHTML === 'This text is automatically saved every second') {
    content.innerHTML = '';
  }
});