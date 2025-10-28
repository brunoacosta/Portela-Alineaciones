# Video Modal - YouTube & Google Drive URL Reference

## How to Update the Course Video URL

The video URL is located in the `HomePage.jsx` file. Look for this line (around line 68):

```javascript
const courseVideoUrl = "https://drive.google.com/file/d/10n1uAKNxLG6uvaFZzuYkM115JjFP3Q0D/view?usp=sharing";
```

Simply replace the URL with your actual video URL (YouTube or Google Drive).

## Supported Video URL Formats

The VideoModal component supports both YouTube and Google Drive videos:

### Google Drive Videos

**Standard Google Drive URL:**
```
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```
**Example:** `https://drive.google.com/file/d/10n1uAKNxLG6uvaFZzuYkM115JjFP3Q0D/view?usp=sharing`

**Important:** Make sure your Google Drive video has sharing permissions set to "Anyone with the link can view"

### YouTube Videos

### 1. Standard YouTube Watch URL
```
https://www.youtube.com/watch?v=VIDEO_ID
```
**Example:** `https://www.youtube.com/watch?v=dQw4w9WgXcQ`

### 2. Shortened YouTube URL
```
https://youtu.be/VIDEO_ID
```
**Example:** `https://youtu.be/dQw4w9WgXcQ`

### 3. YouTube Embed URL
```
https://www.youtube.com/embed/VIDEO_ID
```
**Example:** `https://www.youtube.com/embed/dQw4w9WgXcQ`

### 4. Just the Video ID
```
VIDEO_ID
```
**Example:** `dQw4w9WgXcQ`

## How to Get Google Drive Video Link

1. Upload your video to Google Drive
2. Right-click on the video file
3. Click "Get link" or "Share"
4. Set permissions to "Anyone with the link can view"
5. Click "Copy link"
6. Paste this link into the `courseVideoUrl` variable

## How to Find Your YouTube Video ID

1. Go to your YouTube video
2. Look at the URL in your browser
3. The video ID is the part after `watch?v=` or `youtu.be/`
4. It's usually 11 characters long

**Example:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

## Features

- ✅ Responsive video player (16:9 aspect ratio)
- ✅ Full-screen support
- ✅ Clean modal design
- ✅ Easy to close (X button or click outside)
- ✅ Smooth animations
- ✅ Mobile-friendly

## Testing

To test if your video works:
1. Copy your YouTube video URL
2. Replace the `courseVideoUrl` value in `HomePage.jsx`
3. Click the "Ver Video del Curso" button on the website
4. The video should play in a popup modal

## Troubleshooting

If the video doesn't load:
- Make sure the video is set to "Public" or "Unlisted" on YouTube (not "Private")
- Check that you copied the complete URL
- Try using the standard format: `https://www.youtube.com/watch?v=VIDEO_ID`

