chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: 'https://github.com/shashikant2003m' });
    }
});
console.log("Developed By GeeksforCampus , Follow me on instagram https://instagram.com/shashikantsharma_x1");

