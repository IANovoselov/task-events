/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const my_button = document.createElement('button');

    my_button.textContent = 'Удали меня';

    my_button.onclick = function () {
        this.remove();
    };

    document.body.append(my_button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const my_ol = document.createElement('ul');

    for (let text of arr) {
        const my_li = document.createElement('li');
        my_li.textContent = text;
        my_ol.append(my_li);
    }
    my_ol.addEventListener('mouseover', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.title = event.target.textContent;
        }
    });

    document.body.append(my_ol);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const my_link = document.createElement('a');
    my_link.href = 'https://tensor.ru/';
    my_link.textContent = 'tensor';

    function clickHandlerOuter() {
        let count = 0;
        function clickHandlerInner(event) {
            if (count == 0) {
                event.preventDefault();
                event.currentTarget.textContent += ` ${event.currentTarget.getAttributeNode('href').value}`;
            }
            count++;
        }

        return clickHandlerInner;
    }

    my_link.onclick = clickHandlerOuter();

    document.body.append(my_link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.append(li);

    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';

    document.body.append(ul);
    document.body.append(btn);

    // Клик по li — добавляет восклицательный знак
    ul.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });

    // Клик по кнопке — добавляет новый li
    btn.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.append(newLi);
    });
}
