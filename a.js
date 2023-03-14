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
var unit = items[i].getElementsByTagName("td")[0].classList[0]; // 클래스 이름으로 출력 단위를 가져옴
          outputText += name + " - " + quantity + " " + unit + "<br>";
      }
  }
  document.getElementById("output-text").innerHTML = outputText;
}


// increment 함수에 추가
function increment(id) {
  var input = document.getElementById(id);
  input.value = parseInt(input.value) + 1;
  event.preventDefault(); // 버튼 클릭 시 기본 동작 막기
}

// decrement 함수에 추가
function decrement(id) {
  var input = document.getElementById(id);
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  event.preventDefault(); // 버튼 클릭 시 기본 동작 막기
}

