var order = prompt("what do you prefer to show first, Samsung or Iphone");

while (order !== "Samsung" && order !== "Iphone" ) {
    order = prompt("what do you prefer to show first, Samsung or Iphone");
}


var itemOrder = '';

if (order === 'Samsung') {
  itemOrder = '<img width="400" height="400" src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155031-homepage-news-new-samsung-galaxy-s21-leaks-reveal-first-press-image-ultra-specs-and-memory-variants-image1-jdakbggovq.jpg"/>';
} else if (order === 'Iphone') {
  itemOrder = '<img width="400" height="400" src="https://www.mobilerepairfactory.com.au/wp-content/uploads/2018/12/iphone-se-silver.jpg"/>';
}

var nophones = prompt('how many phone do you want?');

var result = '';

for (var i = 0; i < nophones; i++) {
  result = result + itemOrder;
}

document.write(result);


