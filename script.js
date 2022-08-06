/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var link, count, storyline, item, total_pages;

// Describe this function...
function get_img_text_from_array() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", link[0]);
  let element_text = document.getElementById('text');
  element_text.innerText = storyline[0];
}


link = ['1', '2', '3', '4', '5', '6'];
storyline = ['a', 'b', 'c', 'd', 'e', 'f'];
count = 0;
link.forEach((item) => {
  total_pages = (typeof total_pages === 'number' ? total_pages : 0) + 1;
});
get_img_text_from_array();


document.getElementById('next').addEventListener('click', (event) => {
  count = (typeof count === 'number' ? count : 0) + 1;
  if (count < total_pages) {
    link.push(link.shift());
    storyline.push(storyline.shift());
    get_img_text_from_array();
  } else {
    count = (typeof count === 'number' ? count : 0) + -1;
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  count = (typeof count === 'number' ? count : 0) + -1;
  if (count >= 0) {
    link.unshift(link.pop());
    storyline.unshift(storyline.pop());
    get_img_text_from_array();
  } else {
    count = (typeof count === 'number' ? count : 0) + 1;
  }

});
