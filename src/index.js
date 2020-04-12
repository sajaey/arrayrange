import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function rangebetween(start, end) {
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
    start++;
  }
  return result;
}

console.log(rangebetween(5, 9));

var myNum = 7;

console.log(rangebetween(5, 9).indexOf(myNum));
