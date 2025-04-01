function calculateAge() {
    let birthYear = document.getElementById('birthYear').value;
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    
    if (birthYear && age >= 0) {
        document.getElementById('ageDisplay').innerText = `You are now ${age} years old!`;
        document.getElementById('calculator').classList.add('hidden');
        document.getElementById('birthdayMessage').classList.remove('hidden');
        document.body.style.background = "#ffcc00";
        
        // Add celebratory animation
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    } else {
        alert("Please enter a valid birth year.");
    }
}

// Function to reset the page
function resetPage() {
    document.getElementById('calculator').classList.remove('hidden');
    document.getElementById('birthdayMessage').classList.add('hidden');
    document.getElementById('birthYear').value = "";
    document.body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";
}

