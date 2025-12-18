function updateClock() {
    const now = new Date();

    // Format UTC time manually to ensure control over milliseconds
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(now.getUTCMilliseconds()).padStart(3, '0');

    // Format Date: DD-MM-YYYY
    const day = String(now.getUTCDate()).padStart(2, '0');
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const year = now.getUTCFullYear();
    const dateString = `${day}-${month}-${year}`;

    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    document.getElementById('utc-date').textContent = dateString;
    document.getElementById('utc-clock').textContent = timeString;

    requestAnimationFrame(updateClock);
}

// Start the clock immediately
requestAnimationFrame(updateClock);

// Blockchain Logic
const BLOCK_API_URL = 'https://mempool.space/api/v1/blocks';
const MAX_BLOCKS = 3;

async function fetchBlocks() {
    try {
        const response = await fetch(BLOCK_API_URL);
        if (!response.ok) throw new Error('Network response was not ok');

        const blocks = await response.json();
        updateBlockList(blocks.slice(0, MAX_BLOCKS));
    } catch (error) {
        console.error('Error fetching blocks:', error);
    }
}

function updateBlockList(blocks) {
    const listElement = document.getElementById('block-list');

    // Clear current list to rebuild

    let html = '';
    blocks.forEach(block => {
        // Format timestamp
        const date = new Date(block.timestamp * 1000);
        const timeStr = date.toISOString().split('T')[1].substring(0, 5);

        html += `
            <div class="block-item">
                <div class="block-height">${block.height}</div>
                <div class="block-time">${timeStr}</div>
                <div class="block-hash">${block.id}</div>
            </div>
        `;
    });

    listElement.innerHTML = html;
}

// Initial fetch
fetchBlocks();

// Poll every 10 seconds
setInterval(fetchBlocks, 10000);
