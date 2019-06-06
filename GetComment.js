const setting = {
    baseUrl: "https://www.googleapis.com/youtube/v3/",
    key: "",
}
const fetch = require('node-fetch');

module.exports = class GetComment {
    static async fromId(videoId, count = 10) {
        const params = new URLSearchParams();

        params.set('key', setting.key);
        params.set('part', 'snippet');
        params.set('videoId', videoId);
        params.set('order', 'relevance');
        params.set('textFormat', 'plaintext');
        params.set('maxResults', count);

        const url = setting.baseUrl + 'commentThreads?' + params.toString();
        const commentData = await fetch(url).then(res => res.json());
        return commentData;
    }
}
