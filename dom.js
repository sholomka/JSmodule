for (var i = 0; i < 100; i += 1) {
    document.getElementById('result').innerHTML += i + ', ';
}
// предпочтительнее – изменяет значение локальной переменной
var i, content = '';
for (i = 0; i < 100; i += 1) {
    content += i + ',';
}
document.getElementById('result').innerHTML += content;