async function newNoteHandler(event) {
  event.preventDefault();

  const notesTitle = document.getElementById("note-title").value;
  const notesText = document.getElementById("note-text").value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      notesTitle,
      notesText,
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

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newNoteHandler);
