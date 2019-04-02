const GetComment = require('./GetComment');
const setting = {
    baseUrl: "https://www.googleapis.com/youtube/v3/",
    key: "",
    videoId: "GMPjNA_fCj4"
}

const args = process.argv[0];
console.log(args)
const videoId = process.argv[2] || setting.videoId;

GetComment.fromId(videoId, 100)
    .then((comments) => {
        comments.items.forEach(({ snippet }) => {
            const comment = snippet.topLevelComment.snippet.textDisplay;
            if(comment.search('歌詞') !== -1 || comment.length >= 256) {
                console.log(comment);
            }
        })
    });