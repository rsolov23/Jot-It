async function editFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("note-title").value;
  const post_text = document.getElementById("note-text").value;

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

document.getElementById("edit-note").addEventListener("submit", editFormHandler);
