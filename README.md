# Video Grid Timeline Viewer

A Flask web application that displays a grid of videos with interactive timelines. Each video has a timeline divided into 30 chunks, representing 10-second intervals. The application allows users to submit questions and visualize relevant video segments through binary vectors (highlighted timeline chunks).

## Features

- **Question Input**: Submit questions to analyze video segments
- **Video Grid**: Display up to 6 videos simultaneously
- **Interactive Timeline**: 
  - 30 chunks per video (10 seconds each)
  - Visual indicators for relevant segments (red markers)
  - Click on timeline chunks to jump to specific timestamps
- **Reset Functionality**: Reset all timelines to their initial state
- **Responsive Design**: Clean and modern UI with proper spacing and layout

## Project Structure

```
video_llm/
├── app.py              # Flask application
├── static/
│   ├── styles.css      # CSS styles
│   ├── scripts.js      # JavaScript functions
│   └── data/          # Video and poster files
│       ├── sample_5min.mp4
│       └── sample_5min.jpg
└── templates/
    └── index.html      # Main template
```

## Requirements

- Python 3.x
- Flask

Install dependencies:
```bash
pip install flask
```

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd video_llm
```

2. Place your video files in the `static/data/` directory:
   - `sample_5min.mp4`: Your video file
   - `sample_5min.jpg`: Video poster image (preview)

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

## Usage

1. **Submit a Question**:
   - Enter your question in the text input
   - Click "Submit" to analyze video segments
   - Timeline chunks will highlight in red where relevant content is found

2. **Navigate Videos**:
   - Click on any timeline chunk to jump to that timestamp
   - Video will seek to the selected 10-second interval
   - Preview frame will update automatically

3. **Reset View**:
   - Click "Reset" button to clear all highlighted segments
   - All timeline chunks will return to their default state

## Technical Details

- **Timeline Implementation**: Each video has a 30-chunk timeline representing 5 minutes (10 seconds per chunk)
- **Binary Vectors**: Generated on question submission to indicate relevant segments
- **Frame Capture**: JavaScript captures and displays preview frames when clicking timeline chunks
- **Responsive Design**: Flexbox-based layout for proper alignment and spacing

## Browser Compatibility

Tested and working on:
- Chrome/Chromium (recommended)
- Firefox
- Safari

Requires HTML5 video support and JavaScript enabled.

