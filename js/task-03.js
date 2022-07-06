const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const items = images.map((image) => {
  return ("<li><img src=" + image.url + " alt=" + image.alt + "></li>");
});
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", items);
list.setAttribute("style", "list-style-type:none; display: flex");
const imgs = list.querySelectorAll("img");

imgs.forEach(function (img) {
  img.setAttribute("style", "height:200px; border:4px solid red; margin-right:10px");
})