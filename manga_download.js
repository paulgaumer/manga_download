const form = document.querySelector("form");
const input_field = document.querySelector(".captcha_code");
let elements = [];
let code = "";

document
  .querySelector(".rightcol>table tbody")
  .childNodes[2].childNodes[1].childNodes[0].childNodes.forEach((el) => {
    elements.push({
      id: parseInt(el.style["padding-left"].slice(0, -2)),
      value: el.innerText
    });
  });

elements.sort(function(a, b) {
  return a.id - b.id;
});

elements.map((el) => {
  code += el.value;
});

input_field.value = code;

setTimeout(() => {
  form.submit();
}, 32000);
