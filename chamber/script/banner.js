function myBanner() {
 let today = new Date();
 let day = today.getDay();
    if (day === 1 || day === 2) {
        document.querySelector('.banner').style.display = 'block';
    }
};

document.querySelector('.clodeBtn').addEventListener('click', function() {
    this.closest('.banner').style.display = 'none';
});

