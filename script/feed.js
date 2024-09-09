const textarea = document.querySelectorAll('.auto-resize');
function autoResize(event){
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
textarea.forEach(textarea => textarea.addEventListener('input', autoResize));