function getThumbnail() {
    const videoUrl = document.getElementById("videoUrl").value;
    const quality = document.getElementById("quality").value;
    const thumbnailContainer = document.getElementById("thumbnail-container");
    const thumbnailImage = document.getElementById("thumbnailImage");
    const downloadBtn = document.getElementById("downloadBtn");

    const videoId = extractVideoID(videoUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
        
        thumbnailImage.src = thumbnailUrl;
        downloadBtn.href = thumbnailUrl;
        downloadBtn.target = "_blank";
        downloadBtn.download = `youtube_thumbnail_${quality}.jpg`;

        thumbnailContainer.style.display = "block";
    } else {
        alert("Invalid YouTube URL! Please enter a valid link.");
    }
}

function extractVideoID(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([\w-]{11})/);
    return match ? match[1] : null;
}
