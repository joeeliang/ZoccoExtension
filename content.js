function boldFirstLetters() {
  const regex = /\b(\w)(\w{0,2})\b/g;

  document.body.innerHTML = document.body.innerHTML.replace(
    regex,
    '<span class="bionic-reader-bold">$&</span>'
  );
}

boldFirstLetters();
