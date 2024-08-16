//This function generates a random clip rectangle with a random top and bottom value.
function generateRandomClipRect() {
    const top = Math.floor(Math.random() * 300);
    const bottom = Math.floor(Math.random() * 300) + top;
    return `rect(${top}px, 400px, ${bottom}px, 0)`;
}

//This function creates a string containing the @keyframes animation rules, 
//with each step from 0% to 100% having a randomly generated clip rectangle.
function generateKeyframes() {
    let keyframes = `@keyframes glitch-effect {`;
    for (let i = 0; i <= 100; i += 10) {
        keyframes += `
            ${i}% {
                clip: ${generateRandomClipRect()};
            }
        `;
    }
    keyframes += `}`;
    return keyframes;
}

//This function injects the generated keyframes into the document’s <head> as a <style> element.
function injectKeyframes() {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = generateKeyframes();
    document.head.appendChild(styleSheet);
}

 // Initial injection of keyframes
 injectKeyframes();

 // Change keyframes every 3 seconds
 setInterval(injectKeyframes, 3000);