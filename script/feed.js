const textarea = document.querySelectorAll('.auto-resize');
console.log(textarea);
function autoResize(event){
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
textarea.forEach(textarea => textarea.addEventListener('input', autoResize));