function reverseString() {
    var s = document.getElementById('reverseString').value;
    var reversed = '';

    for (var i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }

    document.getElementById('reverseString').disabled = true;
    document.getElementById('reverseString').value = reversed;
}

function submit(ev) {
    ev.preventDefault();
    reverseString();
}
document.getElementById('form').addEventListener('submit', submit);
