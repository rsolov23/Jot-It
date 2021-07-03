async function editFormHandler(event) {
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

document.getElementById("edit-post").addEventListener("click", editFormHandler);
