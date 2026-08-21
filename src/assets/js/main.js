/**
 * SCOREZONE - Main Frontend Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA FOR LEAGUE FILTER VARIANTS
    const leagueData = {
        all: {
            hero: {
                bg: './assets/img/figma/f7da4cf5214d8a32b41ed5cba8160d0dc3688fb9.png',
                badge: 'BREAKING NEWS',
                title: 'Real Madrid chạm trán<br>Club Brugge<br>ở chung kết<br>Youth League'
            },
            featuredMatch: {
                league: 'UEFA CHAMPIONS LEAGUE',
                liveBadge: "TRỰC TIẾP 72'",
                homeTeam: {
                    name: 'Real Madrid',
                    logo: './assets/img/figma/7980c6f6418b4c40b743b231e9b654c4119d9914.png',
                    scorers: ["Rodrygo 12'", "Vinícius 33'"]
                },
                awayTeam: {
                    name: 'Man City',
                    logo: './assets/img/figma/bf821902b54d6d4721d8b4f14bc476bdda7cc3c1.png',
                    scorers: ["B. Silva 2'"]
                },
                score: { home: '2', away: '1' },
                goalPill: 'Bàn thắng của Vinícius Júnior',
                stats: {
                    possession: '54% - 46%',
                    shots: '12 (7) - 8 (3)'
                }
            },
            secondaryMatches: [
                {
                    league: 'PREMIER LEAGUE',
                    time: '20:00',
                    team1: { name: 'Man City', logo: './assets/img/figma/bf821902b54d6d4721d8b4f14bc476bdda7cc3c1.png', score: '-' },
                    team2: { name: 'Arsenal', logo: './assets/img/figma/175492c5540b3c1f4b38c0ff945e9c6006dc4414.png', score: '-' },
                    footer: null
                },
                {
                    league: 'LA LIGA',
                    time: 'FINAL',
                    team1: { name: 'Barcelona', logo: './assets/img/figma/723980eac1b6d9cae406621bbffa5fd25dc7b750.png', score: '4' },
                    team2: { name: 'Valencia', logo: './assets/img/figma/a4dd12b2ecaf8280cad16f6535a4d6f82f979e7a.png', score: '0' },
                    footer: { type: 'Highlights', time: '3:24' }
                },
                {
                    league: 'SERIE A',
                    time: '22:00',
                    team1: { name: 'Juventus', logo: './assets/img/figma/76d87bf0516a77df0e81fa614d3a361eac7c7e62.png', score: '-' },
                    team2: { name: 'Inter Milan', logo: './assets/img/figma/a207f8cea8d901c16239341efedd505873f1b478.png', score: '-' },
                    footer: null
                },
                {
                    league: 'UEFA',
                    time: 'FINAL',
                    team1: { name: 'Liverpool', logo: './assets/img/figma/c15bfa71a716ec31be1820bf3143e3d024c11528.png', score: '0' },
                    team2: { name: 'PSG', logo: './assets/img/figma/8115d0c654a2e7b401633362947bdaa28775c902.png', score: '2' },
                    footer: { type: 'Highlights', time: '00:25' }
                }
            ],
            videos: [
                {
                    thumb: './assets/img/figma/742ff47fd01e490ba7692a432e3c90ff9550fd53.png',
                    title: 'Champions League: Liverpool 0-2 Paris',
                    duration: '00:25'
                },
                {
                    thumb: './assets/img/figma/ace2ab687ea4792b0219a9f40611abc4a8c185b1.png',
                    title: 'Champions League: Bayern München 4-3 Real Madrid',
                    duration: '02:45'
                },
                {
                    thumb: './assets/img/figma/3ed99d794da92fd6a2e6fc53673cfadaad675b3c.png',
                    title: 'FC Metz - Paris FC - (1 - 3) - Highlights',
                    duration: '12:15'
                }
            ]
        },
        premier: {
            hero: {
                bg: './assets/img/figma/793e28b24137f55555dd4b4e96fc667cd2e05abb.png',
                badge: 'BREAKING NEWS',
                title: 'Ryan Kavuma-McQueen<br>giành giải Cầu thủ<br>xuất sắc nhất tháng 3<br>tại PL2'
            },
            featuredMatch: {
                league: 'UEFA CHAMPIONS LEAGUE',
                liveBadge: "TRỰC TIẾP 62'",
                homeTeam: {
                    name: 'Chelsea',
                    logo: './assets/img/figma/8765d12d92a1be3ec573b64c71cb66d2d50c4d80.png',
                    scorers: ["Rodrygo 12'", "Vinícius 33'"]
                },
                awayTeam: {
                    name: 'Arsenal',
                    logo: './assets/img/figma/175492c5540b3c1f4b38c0ff945e9c6006dc4414.png',
                    scorers: ["B. Silva 17'"]
                },
                score: { home: '2', away: '1' },
                goalPill: 'Bàn thắng của Rodrygo Silva',
                stats: {
                    possession: '54% - 36%',
                    shots: '12 (7) - 8 (3)'
                }
            },
            secondaryMatches: [
                {
                    league: 'PREMIER LEAGUE',
                    time: '20:00',
                    team1: { name: 'Aston Villa', logo: './assets/img/figma/466c90c3c0edeee61200c4c954e27648b6a14d1d.png', score: '-' },
                    team2: { name: 'Manchester United', logo: './assets/img/figma/af9b3abab83144007b696c8ad4be882090b42889.png', score: '-' },
                    footer: null
                },
                {
                    league: 'LA LIGA',
                    time: 'FINAL',
                    team1: { name: 'Tottenham', logo: './assets/img/figma/37a851bc88498b0760fb1dc8310574ebb94919b7.png', score: '1' },
                    team2: { name: 'Leeds United', logo: './assets/img/figma/67c6440bfe26eba4bb1517970b002ae07208a7e0.png', score: '1' },
                    footer: { type: 'Highlights', time: '00:25' }
                },
                {
                    league: 'SERIE A',
                    time: '22:00',
                    team1: { name: 'Tottenham', logo: './assets/img/figma/37a851bc88498b0760fb1dc8310574ebb94919b7.png', score: '-' },
                    team2: { name: 'Inter Milan', logo: './assets/img/figma/a207f8cea8d901c16239341efedd505873f1b478.png', score: '-' },
                    footer: null
                },
                {
                    league: 'SERIE A',
                    time: 'FINAL',
                    team1: { name: 'Metz', logo: './assets/img/figma/9d830d651a9d8d91305fed0835e5a0297909bf39.png', score: '1' },
                    team2: { name: 'AC Milan', logo: './assets/img/figma/8cf4ef4adee442d4cbf9e320e4afb5fe9751990c.png', score: '3' },
                    footer: { type: 'Highlights', time: '3:24' }
                }
            ],
            videos: [
                {
                    thumb: './assets/img/figma/c771242ff296011bea00749fb26cf2536c537e66.png',
                    title: 'Spurs 1-1 Leeds United | Premier League Highlights',
                    duration: '00:25'
                },
                {
                    thumb: './assets/img/figma/b6f1f56fd5885589576eb47a9c1265f8f0f52af2.png',
                    title: 'Burnley v Aston Villa | Premier League Highlights',
                    duration: '02:45'
                },
                {
                    thumb: './assets/img/figma/8a8807d73bad8606a5ecb2ca606e9b7f93328237.png',
                    title: 'Highlights: West Ham United 0-1 Arsenal',
                    duration: '12:15'
                }
            ]
        }
    };

    // 2. RENDER FUNCTION
    function renderVariant(variantKey) {
        const data = leagueData[variantKey] || leagueData.all;

        // Update Hero Banner
        const heroBg = document.querySelector('.hero-banner .hero-bg');
        const heroTitle = document.querySelector('.hero-banner h2');
        if (heroBg) { heroBg.src = data.hero.bg; heroBg.style.objectPosition = variantKey === 'premier' ? 'right center' : 'center'; }
        if (heroTitle) heroTitle.innerHTML = data.hero.title;

        // Update Featured Match
        const fm = data.featuredMatch;
        const fmLiveBadge = document.querySelector('.fm-live-badge span:last-child');
        if (fmLiveBadge) fmLiveBadge.textContent = fm.liveBadge;

        const homeLogo = document.querySelector('.fm-team:first-child .fm-team-logo img');
        const homeName = document.querySelector('.fm-team:first-child .fm-team-name');
        const homeScorers = document.querySelector('.fm-team:first-child .fm-scorers');
        if (homeLogo) { homeLogo.src = fm.homeTeam.logo; homeLogo.alt = fm.homeTeam.name; }
        if (homeName) homeName.textContent = fm.homeTeam.name;
        if (homeScorers) {
            homeScorers.innerHTML = fm.homeTeam.scorers.map(s => `<span>${s}</span>`).join('');
        }

        const scoreNums = document.querySelectorAll('.fm-score .score-num');
        if (scoreNums.length >= 2) {
            scoreNums[0].textContent = fm.score.home;
            scoreNums[1].textContent = fm.score.away;
        }

        const awayLogo = document.querySelector('.fm-team:last-child .fm-team-logo img');
        const awayName = document.querySelector('.fm-team:last-child .fm-team-name');
        const awayScorers = document.querySelector('.fm-team:last-child .fm-scorers');
        if (awayLogo) { awayLogo.src = fm.awayTeam.logo; awayLogo.alt = fm.awayTeam.name; }
        if (awayName) awayName.textContent = fm.awayTeam.name;
        if (awayScorers) {
            awayScorers.innerHTML = fm.awayTeam.scorers.map(s => `<span>${s}</span>`).join('');
        }

        const goalPill = document.querySelector('.fm-goal-pill span');
        if (goalPill) goalPill.textContent = fm.goalPill;

        const statPossession = document.querySelector('.fm-stat-item:nth-child(1) .stat-val');
        const statShots = document.querySelector('.fm-stat-item:nth-child(2) .stat-val');
        if (statPossession) statPossession.textContent = fm.stats.possession;
        if (statShots) statShots.textContent = fm.stats.shots;

        // Update Secondary Matches
        const subCards = document.querySelectorAll('.secondary-matches-grid .sub-match-card');
        data.secondaryMatches.forEach((match, idx) => {
            const card = subCards[idx];
            if (!card) return;

            const leagueEl = card.querySelector('.sm-league');
            const timeEl = card.querySelector('.sm-time');
            if (leagueEl) leagueEl.textContent = match.league;
            if (timeEl) timeEl.textContent = match.time;

            const teamRows = card.querySelectorAll('.sm-team-row');
            if (teamRows.length >= 2) {
                // Team 1
                const t1Img = teamRows[0].querySelector('img');
                const t1Name = teamRows[0].querySelector('span:first-of-type');
                const t1Score = teamRows[0].querySelector('.sm-score');
                if (t1Img) { t1Img.src = match.team1.logo; t1Img.alt = match.team1.name; }
                if (t1Name) t1Name.textContent = match.team1.name;
                if (t1Score) t1Score.textContent = match.team1.score;

                // Team 2
                const t2Img = teamRows[1].querySelector('img');
                const t2Name = teamRows[1].querySelector('span:first-of-type');
                const t2Score = teamRows[1].querySelector('.sm-score');
                if (t2Img) { t2Img.src = match.team2.logo; t2Img.alt = match.team2.name; }
                if (t2Name) t2Name.textContent = match.team2.name;
                if (t2Score) t2Score.textContent = match.team2.score;
            }

            // Highlights footer
            let footer = card.querySelector('.sm-card-footer');
            if (match.footer) {
                if (!footer) {
                    footer = document.createElement('div');
                    footer.className = 'sm-card-footer';
                    card.appendChild(footer);
                }
                footer.innerHTML = `
                    <a href="#" class="sm-highlight-link">
                        <img src="./assets/img/figma/cd1c816c745d91615e7c4514f87ad21550ad363e.svg" alt="Highlights">
                        <span><strong>Highlights</strong> • ${match.footer.time}</span>
                    </a>
                `;
            } else if (footer) {
                footer.remove();
            }
        });

        // Update Video Highlights
        const videoCards = document.querySelectorAll('.video-grid .video-card');
        data.videos.forEach((video, idx) => {
            const card = videoCards[idx];
            if (!card) return;

            const thumb = card.querySelector('.video-thumb');
            const duration = card.querySelector('.video-duration');
            const title = card.querySelector('h4');

            if (thumb) { thumb.src = video.thumb; thumb.alt = video.title; }
            if (duration) duration.textContent = video.duration;
            if (title) title.textContent = video.title;
        });
    }

    // 3. LEAGUE SELECTOR CHIP CLICKS
    const leagueChips = document.querySelectorAll('.league-selector .league-pill');
    leagueChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            leagueChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const text = chip.textContent.trim().toLowerCase();
            if (text.includes('premier')) {
                renderVariant('premier');
            } else {
                renderVariant('all');
            }
        });
    });

    // 4. REMOVE TEAM BUTTON IN SECTION 5 (MY TEAMS)
    const removeButtons = document.querySelectorAll('.btn-remove-team');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.mts-team-card');
            if (card) {
                card.style.transition = 'opacity 0.25s, transform 0.25s';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => card.remove(), 250);
            }
        });
    });

    // 5. MATCH CENTER TABS
    const mcTabs = document.querySelectorAll('.mc-tabs .mc-tab');
    mcTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mcTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const isToday = tab.dataset.tab === 'today';
            const todayGrid = document.getElementById('mcTodayGrid');
            const resultsGrid = document.getElementById('mcResultsGrid');
            if (isToday) {
                if (todayGrid) todayGrid.classList.add('active');
                if (resultsGrid) resultsGrid.classList.remove('active');
            } else {
                if (todayGrid) todayGrid.classList.remove('active');
                if (resultsGrid) resultsGrid.classList.add('active');
            }
        });
    });
});