/**
 * ScoreZone Theme Management (Light / Dark Mode)
 * Single source of truth: docs/design-system/dark-mode.md
 * Integrates theme toggling directly into Settings Popover (#settingPanel)
 */

(function () {
    'use strict';

    const THEME_STORAGE_KEY = 'scorezone_theme';

    /**
     * Get current theme from localStorage or document default
     */
    function getStoredTheme() {
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored === 'dark' || stored === 'light') {
                return stored;
            }
        } catch (e) {
            console.warn('LocalStorage access restricted:', e);
        }

        // Fallback: check body or html attributes/classes
        if (
            (document.body && (document.body.classList.contains('dark-theme') || document.body.getAttribute('data-theme') === 'dark')) ||
            (document.documentElement && document.documentElement.getAttribute('data-theme') === 'dark')
        ) {
            return 'dark';
        }

        return 'light';
    }

    /**
     * Apply theme classes and attributes to DOM
     */
    function applyThemeToDOM(theme) {
        const isDark = theme === 'dark';

        if (document.documentElement) {
            if (isDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        }

        if (document.body) {
            if (isDark) {
                document.body.classList.add('dark-theme');
                document.body.setAttribute('data-theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.removeAttribute('data-theme');
            }
        }

        updateSettingsUI(theme);
    }

    /**
     * Set theme, persist to storage, and apply to DOM
     */
    function setTheme(theme) {
        const targetTheme = theme === 'dark' ? 'dark' : 'light';
        try {
            localStorage.setItem(THEME_STORAGE_KEY, targetTheme);
        } catch (e) {
            console.warn('Failed to save theme to localStorage:', e);
        }
        applyThemeToDOM(targetTheme);
    }

    /**
     * Update active state of buttons inside Settings Popover
     */
    function updateSettingsUI(theme) {
        const isDark = theme === 'dark';

        // Update all light & dark buttons across any setting panels
        document.querySelectorAll('.sp-theme-light, [data-theme-val="light"]').forEach(btn => {
            btn.classList.toggle('active', !isDark);
            btn.removeAttribute('disabled');
            btn.classList.remove('disabled');
        });

        document.querySelectorAll('.sp-theme-dark, [data-theme-val="dark"]').forEach(btn => {
            btn.classList.toggle('active', isDark);
            btn.removeAttribute('disabled');
            btn.classList.remove('disabled');
        });
    }

    /**
     * Initialize theme listeners and popover settings controls
     */
    function initTheme() {
        const currentTheme = getStoredTheme();
        applyThemeToDOM(currentTheme);

        // Bind theme buttons in all setting panels
        document.querySelectorAll('.setting-panel-popover').forEach(panel => {
            const sections = panel.querySelectorAll('.sp-section');
            sections.forEach(section => {
                const title = section.querySelector('.sp-section-title');
                if (title && title.textContent.trim().toUpperCase() === 'GIAO DIỆN') {
                    const buttons = section.querySelectorAll('.sp-btn');
                    if (buttons.length >= 2) {
                        const lightBtn = buttons[0];
                        const darkBtn = buttons[1];

                        lightBtn.classList.add('sp-theme-light');
                        lightBtn.setAttribute('data-theme-val', 'light');
                        lightBtn.removeAttribute('disabled');
                        lightBtn.classList.remove('disabled');
                        lightBtn.removeAttribute('onclick');

                        darkBtn.classList.add('sp-theme-dark');
                        darkBtn.setAttribute('data-theme-val', 'dark');
                        darkBtn.removeAttribute('disabled');
                        darkBtn.classList.remove('disabled');
                        darkBtn.removeAttribute('onclick');

                        if (!lightBtn.dataset.themeBound) {
                            lightBtn.dataset.themeBound = 'true';
                            lightBtn.addEventListener('click', (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setTheme('light');
                            });
                        }

                        if (!darkBtn.dataset.themeBound) {
                            darkBtn.dataset.themeBound = 'true';
                            darkBtn.addEventListener('click', (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setTheme('dark');
                            });
                        }
                    }
                }
            });
        });

        // Hide floating theme switch pills
        document.querySelectorAll('.theme-switch-pill').forEach(pill => {
            pill.style.display = 'none';
        });

        updateSettingsUI(currentTheme);
    }

    // Expose global ScoreZoneTheme object
    window.ScoreZoneTheme = {
        getTheme: getStoredTheme,
        setTheme: setTheme,
        toggleTheme: function () {
            const next = getStoredTheme() === 'dark' ? 'light' : 'dark';
            setTheme(next);
            return next;
        },
        applyTheme: applyThemeToDOM,
        init: initTheme
    };

    // Cross-tab synchronization
    window.addEventListener('storage', (e) => {
        if (e.key === THEME_STORAGE_KEY) {
            applyThemeToDOM(e.newValue || 'light');
        }
    });

    // Immediate execution on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
