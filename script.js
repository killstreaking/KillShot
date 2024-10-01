document.getElementById('key-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredKey = document.getElementById('key-input').value;
    const validKeys = ['YOUR_VALID_KEY_1', 'YOUR_VALID_KEY_2', 'YOUR_VALID_KEY_3']; // Replace with your valid keys

    if (validKeys.includes(enteredKey)) {
        document.getElementById('key-form').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        alert('Invalid key. Please try again.');
    }
});
