        function toggleMenu() {
            document.getElementById('mainNav').classList.toggle('active');
        }

        // JSON Data File
        const TRACKING_DATA_URL = 'tracking-data.json';
        let allShipments = null;

        // Load tracking data
        async function loadTrackingData() {
            if (allShipments) return allShipments;
            try {
                const response = await fetch(TRACKING_DATA_URL);
                const data = await response.json();
                allShipments = data.shipments;
                return allShipments;
            } catch (error) {
                console.error('加载数据失败:', error);
                return null;
            }
        }

        // Tracking Form Handler
        document.getElementById('trackingForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const trackingNumber = document.getElementById('trackingNumber').value.trim();
            if (!trackingNumber) return;

            // Show loading
            document.getElementById('loading').classList.add('show');
            document.getElementById('trackingResult').classList.remove('show');
            document.getElementById('notFound').classList.remove('show');
            document.getElementById('searchBtn').disabled = true;

            try {
                const shipments = await loadTrackingData();
                
                document.getElementById('loading').classList.remove('show');
                document.getElementById('searchBtn').disabled = false;

                if (!shipments) {
                    alert('数据加载失败，请稍后重试');
                    return;
                }

                // Search by tracking number
                const found = shipments.find(s => 
                    s.trackingNumber.toLowerCase() === trackingNumber.toLowerCase()
                );

                if (found) {
                    displayResult(found);
                } else {
                    document.getElementById('notFound').classList.add('show');
                }
            } catch (error) {
                console.error('查询失败:', error);
                document.getElementById('loading').classList.remove('show');
                document.getElementById('searchBtn').disabled = false;
                alert('查询失败，请稍后重试或联系客服');
            }
        });

        // Display Tracking Result
        function displayResult(data) {
            document.getElementById('resultTrackingNumber').textContent = data.trackingNumber;
            document.getElementById('cargoName').textContent = data.cargoName || '-';
            document.getElementById('origin').textContent = data.origin || '-';
            document.getElementById('destination').textContent = data.destination || '-';
            document.getElementById('transportMode').textContent = data.transportMode || '-';
            document.getElementById('currentLocation').textContent = data.currentLocation || '-';
            document.getElementById('eta').textContent = data.eta || '-';

            // Status Badge
            const statusBadge = document.getElementById('statusBadge');
            const statusMap = {
                'transit': { key: 'tracking_status_transit', class: 'status-transit' },
                'delivered': { key: 'tracking_status_delivered', class: 'status-delivered' },
                'pending': { key: 'tracking_status_pending', class: 'status-pending' },
                'exception': { key: 'tracking_status_exception', class: 'status-exception' }
            };
            const status = statusMap[data.status] || statusMap['transit'];
            statusBadge.textContent = window.EVI18n ? EVI18n.t(status.key) : status.key;
            statusBadge.className = 'status-badge ' + status.class;

            // Timeline
            const timeline = document.getElementById('timeline');
            timeline.innerHTML = '';
            
            if (data.timeline && data.timeline.length > 0) {
                data.timeline.forEach((item, index) => {
                    const timelineItem = document.createElement('div');
                    timelineItem.className = 'timeline-item' + (index === 0 ? ' completed' : '');
                    timelineItem.innerHTML = `
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <div class="timeline-time">${item.time}</div>
                            <div class="timeline-title">${item.title}</div>
                            <div class="timeline-desc">${item.description}</div>
                        </div>
                    `;
                    timeline.appendChild(timelineItem);
                });
            }

            document.getElementById('trackingResult').classList.add('show');
        }
