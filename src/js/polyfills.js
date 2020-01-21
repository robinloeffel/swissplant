import 'svgxuse';

if (!('forEach' in NodeList.prototype)) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
