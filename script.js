function convertText() {
    const inputText = document.getElementById('inputText').value;
    const items = inputText.split(',');
    const outputList = document.getElementById('outputList');

    // Clear previous output
    outputList.innerHTML = '';

    // Create list items
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.trim();
        outputList.appendChild(listItem);
    });
	
	//Clear shit out
	document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputList').value = '';
	document.getElementById('outputText').value = '';
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied to clipboard');
});
}
