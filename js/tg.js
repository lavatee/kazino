
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Введите имя ученика");
  } else {
    document.getElementById("myUL1").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
}
async function saveli() {
  const liElements = document.querySelectorAll('li');
  const textValues = [];
  liElements.forEach(element => {
    textValues.push(element.textContent.replace('×', ''));
  });
  console.log(textValues);
  const data = { name: textValues, class: document.getElementById('input').value, teacher: document.getElementById('teacher').value};
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch('https://65e9d389c9bf92ae3d3a5a5a.mockapi.io/api/v1/students', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));
}

async function foundclass() {
  await fetch('https://65e9d389c9bf92ae3d3a5a5a.mockapi.io/api/v1/students')
  .then(response => response.json())
  .then(data => {
    const johns = data.filter(person => person.class === document.getElementById('class').value);
    johns.forEach(person => {
      for ( persons of person.name  ) {
        console.log(persons);
        var li1 = document.createElement("li");
        var inputValue1 = persons;
        var t1 = document.createTextNode(inputValue1);
        li1.appendChild(t1);
        document.getElementById("myUL1").appendChild(li1);
        var span1 = document.createElement("SPAN");
        var txt1 = document.createTextNode("\u00D7");
        span1.className = "close";
        span1.appendChild(txt1);
        li1.appendChild(span1);

        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.remove();
          }
      }
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });
}

async function saveli1() {
  const attributeName = 'class';
  const attributeValue = document.getElementById('class').value;
  await fetch('https://65e9d389c9bf92ae3d3a5a5a.mockapi.io/api/v1/students', {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    const elementsToDelete = data.filter(element => element[attributeName] === attributeValue);
    elementsToDelete.forEach(element => {
      fetch(`https://65e9d389c9bf92ae3d3a5a5a.mockapi.io/api/v1/students/${element.id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          console.log(`Элемент с ID ${element.id} успешно удален`);
        } else {
          console.error(`Произошла ошибка при удалении элемента с ID ${element.id}`);
        }
      })
      .catch(error => {
        console.error('Произошла ошибка при отправке запроса:', error);
      });
    });
  })
  .catch(error => {
    console.error('Произошла ошибка при получении данных:', error);
  });
  const liElements = document.querySelectorAll('li');
  const textValues = [];
  liElements.forEach(element => {
    textValues.push(element.textContent.replace('×', ''));
  });
  console.log(textValues);
  const data = { name: textValues, class: document.getElementById('class').value, teacher: document.getElementById('teacher').value};
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch('https://65e9d389c9bf92ae3d3a5a5a.mockapi.io/api/v1/students', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));
}