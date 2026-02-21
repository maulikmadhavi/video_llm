// On page load, seek each video to its first frame to show a thumbnail.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('video').forEach(function (video) {
        video.addEventListener('loadedmetadata', function () {
            video.currentTime = 0.001;
        }, { once: true });
    });
});

/**
 * Jump to a specified chunk in the video and capture the preview frame.
 * @param {number} videoId - The ID number of the video panel.
 * @param {number} chunk - The chunk index (0-29).
 */
function jumpToChunk(videoId, chunk) {
    var video = document.getElementById("video" + videoId);
    if (video) {
        // Seek to the selected time and pause the video.
        video.currentTime = chunk * 10;
        video.pause();

        // Listen for the 'seeked' event to capture the frame.
        video.addEventListener('seeked', function captureFrame() {
            if (!video.videoWidth || !video.videoHeight) {
                return;
            }

            var canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);


            // (Poster was permanently lost after first click; this preserves it for the session)
        }, { once: true });
    }
}
