/**
 * PASSWORD CHECKER LOGIC
 * This file handles all calculations and UI updates.
 */

// 1. Select all the elements we need from the HTML
const input = document.getElementById('passwordInput');
const barFill = document.getElementById('barFill');
const strengthLabel = document.getElementById('strengthLabel');
const scoreText = document.getElementById('scoreText');
const timeText = document.getElementById('timeText');
const toggleBtn = document.getElementById('toggleBtn');

// Map the checklist items to their IDs
const list = {
    len: document.getElementById('c-len'),
    up: document.getElementById('c-up'),
    low: document.getElementById('c-low'),
    num: document.getElementById('c-num'),
    spec: document.getElementById('c-spec')
};

/**
 * TOGGLE VISIBILITY
 * Switch between masked (dots) and readable text
 */
toggleBtn.addEventListener('click', () => {
    input.type = (input.type === 'password') ? 'text' : 'password';
});

/**
 * MAIN INPUT LISTENER
 * Updates every time the user types a character
 */
input.addEventListener('input', () => {
    const val = input.value;
    
    // Check which rules are currently met
    const has = {
        len: val.length >= 8,
        up: /[A-Z]/.test(val),
        low: /[a-z]/.test(val),
        num: /[0-9]/.test(val),
        spec: /[^A-Za-z0-9]/.test(val)
    };

    // Update the visual classes for the checklist
    Object.keys(has).forEach(key => {
        list[key].className = has[key] 
            ? 'check-item item-done text-[11px] flex items-center' 
            : 'check-item item-todo text-[11px] flex items-center';
    });

    // Calculate complexity pool size
    let pool = 0;
    if (has.low) pool += 26;
    if (has.up) pool += 26;
    if (has.num) pool += 10;
    if (has.spec) pool += 32;

    // Mathematical calculations for score and guessing time
    const totalCombos = Math.pow(pool || 1, val.length);
    const score = val.length > 0 ? Math.floor(Math.log2(totalCombos)) : 0;
    
    scoreText.innerText = "Score: " + score;

    // Assume an attacker does 100 billion guesses per second
    const seconds = totalCombos / 100000000000;
    updateTimeDisplay(seconds, val.length);
    updateStrengthBarUI(score);
});

/**
 * Converts raw seconds into readable time text
 */
function updateTimeDisplay(s, len) {
    if (len === 0 || s < 1) { timeText.innerText = "Instantly"; return; }
    
    if (s < 60) { timeText.innerText = Math.floor(s) + " Seconds"; }
    else if (s < 3600) { timeText.innerText = Math.floor(s/60) + " Minutes"; }
    else if (s < 86400) { timeText.innerText = Math.floor(s/3600) + " Hours"; }
    else if (s < 31536000) { timeText.innerText = Math.floor(s/86400) + " Days"; }
    else if (s < 31536000000) { timeText.innerText = Math.floor(s/31536000) + " Years"; }
    else { timeText.innerText = "Centuries!"; }
}

/**
 * Changes the bar color and label text based on the score
 */
function updateStrengthBarUI(score) {
    let color = '#475569', text = 'Strength: Waiting...', width = '0%';

    if (score > 0) {
        if (score < 30) { color = '#ef4444'; text = 'Strength: Weak'; width = '25%'; }
        else if (score < 55) { color = '#f59e0b'; text = 'Strength: Medium'; width = '50%'; }
        else if (score < 75) { color = '#10b981'; text = 'Strength: Strong'; width = '75%'; }
        else { color = '#3b82f6'; text = 'Strength: Very Secure'; width = '100%'; }
    }

    barFill.style.width = width;
    barFill.style.backgroundColor = color;
    strengthLabel.innerText = text;
    strengthLabel.style.color = color;
}