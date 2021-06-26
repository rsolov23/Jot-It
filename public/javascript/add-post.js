async function newNoteHandler(event) {
  event.preventDefault();

  const title = document.getElementById("note-title").value;
  const post_text = document.getElementById("note-text").value;

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

document.getElementById("save-note").addEventListener("click", newNoteHandler);
