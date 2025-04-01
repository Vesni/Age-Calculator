document.getElementById('calculate').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday').value;
    const birthday = new Date(birthdayInput);
    const today = new Date();
    
    if (birthdayInput) {
        const age = today.getFullYear() - birthday.getFullYear();
        const monthDiff = today.getMonth() - birthday.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        const resultDiv = document.getElementById('result');
        const birthdayMessageDiv = document.getElementById('birthdayMessage');

        if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
            resultDiv.innerHTML = '';
            birthdayMessageDiv.classList.remove('hidden');
            document.getElementById('birthdayVideo').play();
        } else {
            resultDiv.innerHTML = `You are ${age} years old.`;
            birthdayMessageDiv
