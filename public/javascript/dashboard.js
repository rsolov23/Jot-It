let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
  "“The secret of getting ahead is getting started.” – Mark Twain",
  "“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan",
  "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash",
  "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
  "“Only the paranoid survive.” – Andy Grove",
  "“It’s hard to beat a person who never gives up.” – Babe Ruth",
  "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque",
  "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
  "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington",
  "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon",
  "“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey",
  "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman",
  "“Everything you can imagine is real.”― Pablo Picasso",
  "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ― Helen Keller",
  "“Do one thing every day that scares you.”― Eleanor Roosevelt",
  "“It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll",
  "“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” – Socrates",
  "“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt",
  "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV",
  "“Whatever you are, be a good one.” ― Abraham Lincoln",
];

btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
});
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

window.addEventListener("load", function () {
  document.getElementById("post-text").setAttribute("contenteditable", "true");
  // document
  //   .getElementById("sampleeditor2")
  //   .setAttribute("contenteditable", "true");
});

function format(command, value) {
  document.execCommand(command, false, value);
}

function setUrl() {
  var url = document.getElementById("txtFormatUrl").value;
  var sText = document.getSelection();
  document.execCommand(
    "insertHTML",
    false,
    '<a href="' + url + '" target="_blank" + "">' + sText + "</a>"
  );
  document.getElementById("txtFormatUrl").value = "";
}

async function deleteNote(event) {
  event.preventDefault();

  const id = document
    .querySelector(".list-item-note-id")
    .getAttribute("data-note-id");

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".delete-post").addEventListener("click", deleteNote);

async function editNote(event) {
  // event.preventDefault();

  const testId = document
    .querySelector(".edit-post")
    .getAttribute("data-post-id");
  debugger;
  const id = event.target.getAttribute("data-post-id");

  const response = await fetch(`/api/posts/${id}`);
  const postData = await response.json();
  const title = postData.title;
  const post_text = postData.post_text;
  debugger;
  if (response.ok) {
    //Not sure if we should change location or stay on same page and just say note submitted

    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".edit-post").addEventListener("click", editNote);
