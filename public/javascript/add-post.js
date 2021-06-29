async function newNoteHandler(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value.trim();
  const post_text = document.getElementById("post-text").value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
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

document.getElementById("create-post").addEventListener("click", newNoteHandler);
