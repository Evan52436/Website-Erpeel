        // Konfigurasi Tailwind
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#607AFB",
                        "background-light": "#f5f6f8",
                        "background-dark": "#0f1323"
                    },
                    fontFamily: {
                        display: "Manrope"
                    }
                }
            }
        };
        
        document.addEventListener("DOMContentLoaded", function () {
            const loadingScreen = document.getElementById('loading-screen');
            const main = document.getElementById('main-content-wrapper');

            function createParticles() {
                for (let i = 0; i < 30; i++) {
                    if (loadingScreen) { 
                        const particle = document.createElement('div');
                        particle.className = 'particle';
                        particle.style.left = Math.random() * 100 + 'vw';
                        particle.style.animationDelay = Math.random() * 4 + 's';
                        particle.style.setProperty('--float-x', (Math.random() - 0.5) * 100 + 'px');
                        loadingScreen.appendChild(particle);
                    }
                }
            }
            createParticles();

            // Total waktu loading screen
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                }
                
                if (main) {
                    main.style.display = 'flex'; 
                    setTimeout(() => {
                        main.style.opacity = '1'; 
                        
                        // INISIALISASI ANIMASI SCROLL DI SINI
                        initScrollAnimations();

                    }, 50); 
                }

                setTimeout(() => {
                    if (loadingScreen) {
                        loadingScreen.style.display = 'none';
                    }
                }, 500); 

            }, 3000); // Durasi loading (3 detik agar cocok dengan progress bar 2.5s)
        });


        // === BAGIAN BARU: FUNGSI UNTUK ANIMASI ON-SCROLL ===
        function initScrollAnimations() {
            const elementsToAnimate = document.querySelectorAll('.scroll-animate');
            
            if (!elementsToAnimate.length) return;

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1 // Triger saat 10% elemen terlihat
            });

            elementsToAnimate.forEach(el => {
                observer.observe(el);
            });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('active');
        }