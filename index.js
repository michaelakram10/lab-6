document.getElementById('toggleButton').addEventListener('click', function() {
    const image = document.getElementById('image');
    const button = document.getElementById('toggleButton');
    
    if (image.src.includes('images/off.png')) {
        image.src = 'images/on.png';
        button.textContent = 'Turn off';
    } else {
        image.src = 'images/off.png';
        button.textContent = 'Turn on';
    }
});




function double(arr) {
    return arr.map(num => num * 2);
}

console.log(double([2, 5, 100])); 





function capital(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

console.log(capital(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


