import {
  navbar,
  footer,
  company,
  resourse,
  solutions,
  salesReadinesPlatform,
  main,
} from "./navbar.js";
// console.log(navbar);

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let arr = document.querySelectorAll(".arr");
main(arr);
