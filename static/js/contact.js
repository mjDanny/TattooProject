// Скрипт передающий данные в php файл
$(function dataBase() {
    // откуда берем данные сформы
    $('.messageForm').submit(function (e) {
        //отменяем стандартное действие при отправке формы
        e.preventDefault();
        //берем из формы метод передачи данных
        var m_method = $(this).attr('method');
        //получаем адрес скрипта на сервере, куда нужно отправить форму
        var m_action = $(this).attr('action');
        //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
        //то есть в стандартном формате передачи данных формы
        var m_data = $(this).serialize();
        $.ajax({
            type: m_method,
            url: m_action,
            data: m_data,
            success: function (result) {
                // где показываем результат
               
                console.log("Сообщение доставлено")

            }
        });
    });
});
//Отключает кнопку, если не стоит галочка в checkbox
function checkParams() {
    var but = document.getElementById("but");
    document.getElementById("chck").onclick = function () {
        this.checked
            ? but.classList.remove("btn-disable")
            : but.classList.add("btn-disable");

    };
};


// Проверка заполненности нашей формы обратной связи
function checkInput() {
    // Объяляем переменные, которым присваиваются значения из Input (Поле для ввода текста)
    var name = document.getElementById("name");
    var tel = document.getElementById("tel");
    var text = document.getElementById("text");
    /* Проверяем кол-во символов в поле, если имя меньше 2 или больше 40, то мы выводим ошибку, 
       если поле пустое, то мы выводим ошибку, которая пишет, что поле не заполнено. 
       Если условие удовлетворено, то мы переходим ко второму условию, проделываем анологичную проверку
       если все 3 условия были удовлетворены, мы выводим сообщение о том, что наше сообщение доставлено*/
    if (name.value !== "" && (2 <= name.value.length && name.value.length < 40)) {
        if (tel.value !== "" && (5 <= tel.value.length && tel.value.length < 40)) {
            if (text.value !== "" && (5 <= text.value.length && text.value.length < 40)) {
                
                alert('Ваше сообщение доставлено');

            } else if (text.value.length == 0) {
                alert('Заполните все поля');
            } else {
                alert('Недопустимая длина текста. Текст должен быть от 5 символов до 500');
            }


        } else if (tel.value.length == 0) {
            alert('Заполните все поля');
        } else {
            alert('Недопустимая длина номера телефона. Введите номер длиной от 5 до 20 символов');
        }


    } else if (name.value.length == 0) {
        alert('Заполните все поля'); 
    } else {
        alert('Недопустимая длина имени. Введите имя от 2х до 40 символов');
    }
}