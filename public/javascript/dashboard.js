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
  '"Whatever the mind can think and perceive, it can achieve." – Napolean Hill',
  "“It doesn’t matter how slowly you go, as long as you don’t stop.” – Confucious",
  "“The past cannot be changed, the future is yet in your power,”",
  "“Wake up determined go to bed satisfied.” – Dwayne Johnson",
  "“Believe in yourself! Have faith in your abilities. Without a humble but reasonable confidence in your own powers, you cannot be successful or happy.” Norman Vincent Peale",
  "“If you cannot do great things, do small things in a great way.” – Napolean Hill",
  "“Believe in yourself. You are braver than you think, more talented that you know and capable of more than you can imagine.” – Roy. T. Bennet",
  "“Work hard in silence, let your success be your noise.”",
  "“You begin by always expecting good things to happen.” – Tom Hopkins",
  "“It always seems impossible until it’s done.” – Nelson Mandela",
  "“Don’t stop when you’re tired. Stop when you are done.”",
  "“Don’t limit your challenges, challenge your limits.”",
  "“The most common way for people to give up their power is by thinking they don’t have any.” – Alice Walker",
  "“The trouble is, if you don’t risk anything, you risk more.” – Erica Jong",
  "“Only I can change my life, no one can do it for me,” – Carol Burnett",
  "“People who are crazy enough to think they can change the world are the ones who do.” – Rob Siltanen",
  "“One’s finds limits by pushing them.” – Herbert Simon",
  "“Don’t watch the clock. Do what it does and keep going.” – Sam Levenson”Permanence, perseverance and persistence in spite of all obstacles, discouragements and impossibilities: It is this that in all things, distinguishes the strong soul from the weak.” – Thomas Carlyle",
  "“Life is 10% what happens to you and 90% how you react to it.” – Charles R. Swindol",
  "“Life begins at the end of your comfort zone.”",
  "“I’ve never chased money. It’s always been about what I can do to motivate and inspire.” – Tyler Perry",
  "“Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.” – Dwayne Johnson",
  "“I am not a product of my circumstances, I am a product of my decisions.” – Steven Covey",
  "“It’s not about perfect, it’s about effort every single day. That’s where transformation happens. That’s how change occurs.” – Jilian Michaels",
  "“Don’t carry your mistakes around with you. Instead place them under your feet and use them as stepping stones to rise above them.”",
  "“I didn’t get there by wishing for it or hoping for it, but by working for it.” – Estee Lauder",
  "“I believe you can speak things into existence.” – Jay Z",
  "“Challenges are gifts that force us to search for a new center or gravity. Don’t fight them. Just find a new way to stand.” – Oprah Winfrey",
  "“To be successful, you must accept all challenges that come your way. You can’t just accept the ones you like.” – Mike Gafka",
  "“Power to me is the ability to make change in a positive way/” – Victoria Justice",
  "“Formal education will make you a living. Self education will make you a fortune.” – Jim Rohn",
  "“Security is mostly a superstition. Life is either a daring adventure or nothing.” – Helen Keller",
  "“Work hard in silence, let success be your noise.” – Frank Ocean",
  "“Success isn’t about how much money you make, it’s about the difference you make in people’s lives.” Michelle Obama",
  "“Live as if you were to die tomorrow, learn as if you were to live forever.” – Mahatma Gandi",
  "“Life is hard, but so very beautiful.” – Abraham Lincoln",
  "“The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.” – Michealangelo",
  "“I am not judged by the number of times I fail, but by the number of times I succeed.” – Tom Hopkins",
  "“Why do we close our eyes when we pray, cry, kiss or dream? Because the most beautiful things in life are not seen but felt by the heart.” – Denzel Washington",
  "“Power is not given to you, you have to take it.” – Beyonce",
  "“Be humble, be hungry, and always be the hardest worker in the room.” – Dwayne Johnson",
  "“With a new day comes strength and new thoughts.” – Eleanor Roosevelt]",
  "“I am not a product of my circumstances, I am a product of my decisions.” – Steven Covey",
  "“It’s not about perfect, it’s about effort every single day. That’s where transformation happens. That’s how change occurs.” – Jilian Michaels",
  "“Don’t carry your mistakes around with you. Instead place them under your feet and use them as stepping stones to rise above them.”",
  "“I didn’t get there by wishing for it or hoping for it, but by working for it.” – Estee Lauder",
  "“I believe you can speak things into existence.” – Jay Z",
  "“Challenges are gifts that force us to search for a new center or gravity. Don’t fight them. Just find a new way to stand.” – Oprah Winfrey",
  "“To be successful, you must accept all challenges that come your way. You can’t just accept the ones you like.” – Mike Gafka",
  "“Power to me is the ability to make change in a positive way/” – Victoria Justice",
  "“Formal education will make you a living. Self education will make you a fortune.” – Jim Rohn",
  "“Security is mostly a superstition. Life is either a daring adventure or nothing.” – Helen Keller",
  "“Work hard in silence, let success be your noise.” – Frank Ocean",
  "“Success isn’t about how much money you make, it’s about the difference you make in people’s lives.” Michelle Obama",
  "“Live as if you were to die tomorrow, learn as if you were to live forever.” – Mahatma Gandi",
  "“Life is hard, but so very beautiful.” – Abraham Lincoln",
  "“The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.” – Michealangelo",
  "“I am not judged by the number of times I fail, but by the number of times I succeed.” – Tom Hopkins",
  "“Why do we close our eyes when we pray, cry, kiss or dream? Because the most beautiful things in life are not seen but felt by the heart.” – Denzel Washington",
  "“Power is not given to you, you have to take it.” – Beyonce",
  "“Be humble, be hungry, and always be the hardest worker in the room.” – Dwayne Johnson",
  "“With a new day comes strength and new thoughts.” – Eleanor Roosevelt",
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

async function deleteNote(event) {
  // event.preventDefault();

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

// async function editNote(event) {
//   // event.preventDefault();

//   const testId = document
//     .querySelector(".edit-post")
//     .getAttribute("data-post-id");
//   debugger;
//   const id = event.target.getAttribute("data-post-id");

//   const response = await fetch(`/api/posts/${id}`);
//   const postData = await response.json();
//   const title = postData.title;
//   const post_text = postData.post_text;
//   debugger;
//   if (response.ok) {
//     //Not sure if we should change location or stay on same page and just say note submitted

//     document.location.replace("/dashboard");
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector(".edit-post").addEventListener("click", editNote);
//
async function editNote(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value.trim();
  const post_text = document.getElementById("post-text").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    //Not sure if we should change location or stay on same page and just say note submitted

    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.getElementById(".edit-post").addEventListener("click", editNote);
