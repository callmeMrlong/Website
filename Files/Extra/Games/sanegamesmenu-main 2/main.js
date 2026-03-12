// ============================================================
//  ADD OR REMOVE GAMES HERE
//  Format: { text: "Button Label", slug: "game-slug-here" }
//  The slug is the part of the CrazyGames URL after /game/
//  Example: crazygames.com/game/crazy-flips-3d → slug is "crazy-flips-3d"
// ============================================================
const GAMES = [
    { text: "Ships 3d", slug: "ships-3d" },
    { text: "Open Front", slug: "openfront-gsw" },
    { text: "8 Ball Pool", slug: "8-ball-pool-wyr" },
    { text: "Table Tennis World Tour", slug: "table-tennis-world-tour" },
    { text: "Cozy Golf", slug: "cozy-golf" },
    { text: "PolyTrack", slug: "polytrack" },
    { text: "Poxel.io", slug: "poxel-io"},
    { text: "Voxiom.io", slug: "voxiom-io"},
    { text: "Doodle Road", slug: "doodle-road"},
    { text: "Veck", slug: "veck-io"},
    { text: "World's Hardest Game", slug: "worlds-hardest-game"},
    // ← Add more lines here, same format
];

// Ad domains to block inside the game window
const AD_DOMAINS = [
    "doubleclick.net",
    "adservice.google.com",
    "googlesyndication.com",
    "ads.crazygames.com",
    "pagead2.googlesyndication.com",
    "securepubads.g.doubleclick.net",
    "cpx.to",
    "adnxs.com",
    "googletagmanager.com",
    "imasdk.googleapis.com",
];

// This script gets injected into the new game window to block ads there too
const AD_BLOCK_SCRIPT = `
(function() {
    const list = ${JSON.stringify(AD_DOMAINS)};
    const origFetch = window.fetch;
    window.fetch = async function(...args) {
        if (args[0] && typeof args[0] === 'string' && list.some(d => args[0].includes(d))) {
            return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
        return origFetch.apply(this, args);
    };
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url && typeof url === 'string' && list.some(d => url.includes(d))) {
            this.send = () => {};
            return;
        }
        return origOpen.apply(this, arguments);
    };
})();
`;

// Opens a game in a new about:blank window with an iframe
function openGame(slug) {
    const gameUrl = `https://games.crazygames.com/en_US/${slug}/index.html`;
    const win = window.open('about:blank', '_blank');

    if (!win) {
        alert("Couldn't open window — your browser may be blocking popups. Allow popups for this site and try again.");
        return;
    }

    win.document.write(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>SaneGames</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; background: #000; overflow: hidden; }
        iframe { width: 100%; height: 100%; border: none; display: block; }
    </style>
    <script>${AD_BLOCK_SCRIPT}<\/script>
</head>
<body>
    <iframe src="${gameUrl}" allowfullscreen allow="autoplay; fullscreen"></iframe>
</body>
</html>
    `);
    win.document.close();
}

// Opens a game from the manual slug input
function openGameFromInput() {
    const input = document.getElementById("slugInput");
    if (!input) return;
    const slug = input.value.trim();
    if (!slug) {
        alert("Please type a game slug first.");
        return;
    }
    openGame(slug);
}

// Show/hide the manual entry panel
function toggleManualPanel() {
    const panel = document.getElementById("manualPanel");
    if (!panel) return;
    const isOpen = panel.classList.contains("open");
    panel.classList.toggle("open", !isOpen);
    if (!isOpen) {
        document.getElementById("slugInput").focus();
    }
}

// Close panel when clicking outside
document.addEventListener("click", function(e) {
    const panel = document.getElementById("manualPanel");
    const btn   = document.getElementById("manualBtn");
    if (!panel || !btn) return;
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
        panel.classList.remove("open");
    }
});

// Enter key in slug input
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && document.activeElement.id === "slugInput") {
        openGameFromInput();
    }
});

// Build the game buttons from the GAMES list
function buildGameGrid() {
    const grid = document.getElementById("gameGrid");
    if (!grid) return;

    GAMES.forEach(function(game) {
        const btn = document.createElement("button");
        btn.className = "game-btn";
        btn.textContent = game.text;
        btn.onclick = function() { openGame(game.slug); };
        grid.appendChild(btn);
    });
}

buildGameGrid();
