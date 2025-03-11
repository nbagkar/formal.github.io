const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseDiv = document.getElementById('response');

// When clicking YES button
yesBtn.addEventListener('click', function() {
    responseDiv.classList.remove('hidden');
    
    // Disable both buttons after clicking YES
    yesBtn.disabled = true;
    noBtn.disabled = true;

    yesBtn.style.cursor = 'default';
    noBtn.style.cursor = 'default';

});

// When hovering or clicking NO button
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
    // Swap positions with YES button
    const yesRect = yesBtn.getBoundingClientRect();
    const noRect = noBtn.getBoundingClientRect();

    yesBtn.style.transform = `translate(${noRect.left - yesRect.left}px, ${noRect.top - yesRect.top}px)`;
    
    // Return YES button back after short delay
    setTimeout(() => {
        yesBtn.style.transform = 'none';
    }, 500);
}
