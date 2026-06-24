        // Category filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const newsCards = document.querySelectorAll('.news-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                // Filter news cards with animation
                newsCards.forEach((card, index) => {
                    const category = card.dataset.category;
                    const shouldShow = filter === '全部' || category === filter;

                    if (shouldShow) {
                        card.style.display = '';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 80);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Pagination
        const pageBtns = document.querySelectorAll('.page-btn');
        const totalPages = 3;
        let currentPage = 1;

        pageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;

                if (page === 'next') {
                    if (currentPage < totalPages) {
                        currentPage++;
                    } else {
                        return;
                    }
                } else {
                    currentPage = parseInt(page);
                }

                // Update active page button
                pageBtns.forEach(b => b.classList.remove('active'));
                if (page === 'next') {
                    document.querySelector(`.page-btn[data-page="${currentPage}"]`).classList.add('active');
                } else {
                    btn.classList.add('active');
                }

                // Scroll to top of news list smoothly
                const newsSection = document.querySelector('.news-section');
                const headerHeight = 72;
                const targetPosition = newsSection.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });

                // Animate cards on page change
                newsCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            });
        });

        // ========== Auto News Feed (Google News RSS via rss2json) ==========
        const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';
        const FEED_TOPICS = {
            logistics: { query: '国际物流', label: '国际物流' },
            shipping: { query: '海运 货代', label: '海运货代' },
            aircargo: { query: '航空货运 物流', label: '航空货运' },
            supplychain: { query: '供应链管理', label: '供应链' }
        };
        let currentFeed = 'logistics';

        const feedGrid = document.getElementById('newsFeedGrid');
        const feedLoading = document.getElementById('feedLoading');
        const feedError = document.getElementById('feedError');
        const feedRefresh = document.getElementById('feedRefresh');
        const feedRetry = document.getElementById('feedRetry');
        const feedTabs = document.querySelectorAll('.feed-tab');

        function getRssUrl(topic) {
            const q = encodeURIComponent(FEED_TOPICS[topic].query);
            return `https://news.google.com/rss/search?q=${q}&hl=zh-CN&gl=CN&ceid=CN:zh-Hans`;
        }

        function formatDate(pubDate) {
            try {
                const d = new Date(pubDate);
                const now = new Date();
                const diff = now - d;
                const mins = Math.floor(diff / 60000);
                const hours = Math.floor(diff / 3600000);
                const days = Math.floor(diff / 86400000);
                if (mins < 60) return `${Math.max(1, mins)}分钟前`;
                if (hours < 24) return `${hours}小时前`;
                if (days < 7) return `${days}天前`;
                return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            } catch (e) {
                return '';
            }
        }

        function extractSource(title) {
            if (!title) return '新闻资讯';
            const match = title.match(/\s*[-–—|]\s*([^-\–—|]+)$/);
            return match ? match[1].trim() : '新闻资讯';
        }

        function cleanTitle(title) {
            if (!title) return '';
            return title.replace(/\s*[-–—|]\s*[^-\–—|]+$/, '').trim();
        }

        function renderFeedCards(items) {
            feedGrid.innerHTML = '';
            if (!items || items.length === 0) {
                feedGrid.innerHTML = '<div class="feed-error"><p>暂无相关新闻</p></div>';
                return;
            }
            items.slice(0, 9).forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'feed-card animate-on-scroll';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.onclick = () => window.open(item.link, '_blank', 'noopener,noreferrer');

                const source = extractSource(item.title);
                const title = cleanTitle(item.title);
                const date = formatDate(item.pubDate);

                card.innerHTML = `
                    <div class="feed-card-source">
                        <span class="feed-source-dot"></span>
                        <span class="feed-source-name">${source}</span>
                        <span class="feed-card-date">${date}</span>
                    </div>
                    <h4>${title}</h4>
                    <div class="feed-card-read">阅读原文 <span>&#8594;</span></div>
                `;

                feedGrid.appendChild(card);

                setTimeout(() => {
                    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 80);
            });
        }

        async function loadNewsFeed(topic) {
            feedLoading.style.display = '';
            feedError.style.display = 'none';
            feedGrid.innerHTML = '';
            feedGrid.appendChild(feedLoading);

            const rssUrl = getRssUrl(topic);

            try {
                const response = await fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(rssUrl)}`);
                if (!response.ok) throw new Error('Network error');

                const data = await response.json();

                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    renderFeedCards(data.items);
                } else {
                    feedGrid.innerHTML = '<div class="feed-error"><p>暂无相关新闻，请稍后再试</p></div>';
                }
            } catch (error) {
                console.error('Failed to load news feed:', error);
                feedGrid.innerHTML = '';
                feedError.style.display = '';
                feedGrid.appendChild(feedError);
            }
        }

        // Tab switching
        feedTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                feedTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentFeed = tab.dataset.feed;
                loadNewsFeed(currentFeed);
            });
        });

        // Refresh button
        feedRefresh.addEventListener('click', () => {
            feedRefresh.classList.add('spinning');
            loadNewsFeed(currentFeed).finally(() => {
                setTimeout(() => feedRefresh.classList.remove('spinning'), 1000);
            });
        });

        // Retry button
        feedRetry.addEventListener('click', () => {
            loadNewsFeed(currentFeed);
        });

        // Initial load
        loadNewsFeed(currentFeed);
