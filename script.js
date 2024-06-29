
function updateTime() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString();
    }
    
    setInterval(updateTime, 1000);
    updateTime();
    
    
    