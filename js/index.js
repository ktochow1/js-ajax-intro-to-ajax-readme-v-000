// your code here
function getRepositories(){
  const req = new XMLHttpRequest(); //new instance of XMLHttpRequest
  req.open('GET', 'https://api.github.com/users/ktochow1/repos'); //call open with HTTP verb and URI for request
  req.send();//request is ready, send...
}

function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo; //grab data-repo through dataset property
  const req = new XMLHttpRequest(); //set up XMLHttpRequest
  req.addEventListener('load', showCommits); // with an event listener
  req.open('GET', 'https://api.github.com/repos/ktochow1/' + name + '/commits');
  req.send();
}

function showCommits(){
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;
}
