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
