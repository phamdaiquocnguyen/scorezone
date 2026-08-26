/**
 * ScoreZone Authentication Management (Mock Flow)
 * Default state: Logged-out
 */

(function () {
    // 1. Check current login state (Default is logged-out)
    function getLoginState() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    function setLoginState(isLoggedIn, userName = 'Nguyễn Văn A') {
        if (isLoggedIn) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', userName);
        } else {
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userName');
        }
        applyAuthState();
    }

    // 2. Apply auth state class to body and update header
    function applyAuthState() {
        const isAuth = getLoginState();
        if (document.body) {
            if (isAuth) {
                document.body.classList.remove('logged-out');
                document.body.classList.add('logged-in');
            } else {
                document.body.classList.remove('logged-in');
                document.body.classList.add('logged-out');
            }
        }

        // Update header right on all headers
        document.querySelectorAll('.header-right').forEach(headerRight => {
            let loginBtn = headerRight.querySelector('.btn-header-login');
            let userAvatar = headerRight.querySelector('.user-avatar');

            // If login button doesn't exist yet, inject it before user avatar
            if (!loginBtn) {
                loginBtn = document.createElement('a');
                loginBtn.href = './login.html';
                loginBtn.className = 'btn-header-login';
                loginBtn.textContent = 'Đăng nhập';
                if (userAvatar) {
                    userAvatar.parentNode.insertBefore(loginBtn, userAvatar);
                } else {
                    headerRight.appendChild(loginBtn);
                }
            }

            if (isAuth) {
                if (loginBtn) loginBtn.style.display = 'none';
                if (userAvatar) userAvatar.style.display = 'flex';
            } else {
                if (loginBtn) loginBtn.style.display = 'inline-flex';
                if (userAvatar) userAvatar.style.display = 'none';
            }
        });
    }

    // Expose Global Auth API
    window.ScoreZoneAuth = {
        isLoggedIn: getLoginState,
        login: function (email, password) {
            setLoginState(true, 'Nguyễn Văn A');
            return true;
        },
        register: function (name, email, password) {
            setLoginState(true, name || 'Nguyễn Văn A');
            return true;
        },
        logout: function () {
            setLoginState(false);
            return true;
        },
        applyState: applyAuthState
    };

    // Listen to storage changes across tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'isLoggedIn') {
            applyAuthState();
        }
    });

    // Run immediately and on DOM load
    applyAuthState();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyAuthState);
    }
})();
