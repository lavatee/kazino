let st = document.getElementById('st');
function theme() {
  let th = document.getElementById('theme');
  if (st.getAttribute("href") == "css/style.css") {
    st.href = "css/masterlight.css";
    th.textContent = "ТЕМНАЯ ТЕМА";
  }
  else {
    st.href = "css/style.css";
    th.textContent = "СВЕТЛАЯ ТЕМА";
  };
  localStorage.removeItem('theme');
  localStorage.setItem('theme', st.href);
}
st.href = localStorage.getItem('theme');