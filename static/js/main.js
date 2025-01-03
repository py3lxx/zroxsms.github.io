particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#00ff88'
        },
        shape: {
            type: ['circle', 'triangle', 'edge'],
            stroke: {
                width: 1,
                color: '#00ff88'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff88',
            opacity: 0.6,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 250,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    retina_detect: true
});

// Modal işlevleri
function openImageModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

// Modal kapatma
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('imageModal').style.display = 'none';
}

// Modal dışına tıklandığında kapatma
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Cursor animasyonları
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, .btn, .feature-card, .screenshot-item img');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('link-grow');
        follower.classList.add('link-grow');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow');
        follower.classList.remove('link-grow');
    });
});

// Sayfa yüklendiğinde smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Scroll to Top Button
const scrollTop = document.createElement('div');
scrollTop.classList.add('scroll-top');
scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                       type === 'error' ? 'fa-exclamation-circle' : 
                       'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.querySelector('.notification-container').appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Search Functionality
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-container').classList.toggle('active');
        document.querySelector('.search-input').focus();
    }
    
    if (e.key === 'Escape') {
        document.querySelector('.search-container').classList.remove('active');
    }
});

// Keyboard Shortcuts Guide
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        document.querySelector('.shortcuts-guide').classList.toggle('active');
    }
}); 