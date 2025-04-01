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
            var canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // Update the poster attribute with the captured frame.
            var dataURL = canvas.toDataURL();
            video.setAttribute('poster', dataURL);
            
            // Remove the event listener after capturing the frame.
            video.removeEventListener('seeked', captureFrame);
        });
    }
}
