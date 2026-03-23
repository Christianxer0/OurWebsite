// 1. DATA FOR 4 PEOPLE
const teamMembers = [
    { name: "Christin James", role: "Lead Developer", img: "CJ.jpg" },
    { name: "Sean Mutas", role: "Food page", img: "mutas.jpg" },
    { name: "Clark Colmo", role: "Places page", img: "colmo.jpg" },
    { name: "Pagulayan", role: "Hangout", img: "elvin.jpg" }
];

// 2. RENDER TEAM WITH REVEAL EFFECT
function initContact() {
    const grid = document.getElementById('teamGrid');
    
    grid.innerHTML = teamMembers.map((person, index) => `
        <div class="team-card" style="opacity:0; transform:translateY(20px); transition: 0.5s ease ${index * 0.15}s">
            <img src="${person.img}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>${person.role}</p>
        </div>
    `).join('');

    // Trigger animation
    setTimeout(() => {
        document.querySelectorAll('.team-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 100);
}

// 3. FORM VALIDATION & MOCK SUBMIT
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btnText = document.querySelector('.btn-text');
    
    btnText.innerText = "Processing...";
    
    setTimeout(() => {
        document.getElementById('formContainer').innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <h2 style="color: #ffcc00;">✓ Message Sent!</h2>
                <p>We'll get back to you soon, Pasigueño.</p>
                <button onclick="location.reload()" class="submit-btn" style="width:auto; padding: 10px 25px; margin-top:20px;">Back</button>
            </div>
        `;
    }, 1800);
});

window.onload = initContact;