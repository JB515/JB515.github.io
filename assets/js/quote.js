/** Load a daily quote to show on the home page */
document.addEventListener('DOMContentLoaded', () => {
    let response = fetch('quotes.json')
    .then(res => res.text())
    .then(data => {
        let json = JSON.parse(data);
        let date = new Date(); 
        let doy = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        let idx = doy % json.length;
        let quote = json[idx];
        document.getElementById('quote').innerHTML = '<blockquote class="not-prose"><p style="font-size: 18px;">' + quote.text + '</p><p style="font-size: 18px;"><em>- ' + quote.author + '</em></p></blockquote>';
    })
    .catch(res => {
        console.error('Could not fetch quotes.json'); 
        console.error(res); 
    });
});