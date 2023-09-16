export const shareForm = () => {
  let elems = document.querySelectorAll('.o-box--share');
  let elem = Array.prototype.slice.call(elems, 0);
  function selectAll(target) {
    target.select();
  }
  elem.forEach((target) => {
    target.addEventListener('click', () => {
      selectAll(target);
    });
    target.addEventListener('focus', () => {
      selectAll(target);
    });
  });
}
