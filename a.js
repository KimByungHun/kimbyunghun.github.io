function increment(id) {
  var input = document.getElementById(id);
  input.value = parseInt(input.value) + 1;
}

function decrement(id) {
  var input = document.getElementById(id);
  if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
  }
}

function output() {
  var outputText = "";
  var items = document.getElementsByTagName("tr");
  for (var i = 1; i < items.length; i++) {
      var quantity = parseInt(items[i].getElementsByTagName("input")[0].value);
      if (quantity > 0) {
          var name = items[i].getElementsByTagName("td")[0].innerHTML;
          outputText += name + " - " + quantity + "<br>";
      }
  }
  document.getElementById("output-text").innerHTML = outputText;
}
