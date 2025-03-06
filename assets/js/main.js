// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü toggle butonu için değişkenler
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    // Mobil menü açma/kapama işlevi
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Alt menüler için mobil görünüm kontrolü
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    
    // Her alt menü öğesi için tıklama olayı
    hasSubmenu.forEach(item => {
        item.addEventListener('click', function(e) {
            // Sadece mobil görünümde çalışır
            if (window.innerWidth <= 992) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });

    // Login option buttons
    const loginOptionBtns = document.querySelectorAll('.login-option-btn');
    
    loginOptionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Aktif sınıfını kaldır
            loginOptionBtns.forEach(b => b.classList.remove('active'));
            // Tıklanan butona aktif sınıfını ekle
            this.classList.add('active');
        });
    });

    // Carousel ayarları
    const eventCarousel = new bootstrap.Carousel(document.querySelector('#eventCarousel'), {
        interval: 5000, // 5 saniye
        wrap: true,
        pause: 'hover'
    });
}); 