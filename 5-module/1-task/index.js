function hideSelf() {
  document.querySelector('.hide-self-button').onclick = function() {
    this.toggleAttribute("hidden")
  }
}
