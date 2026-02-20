import random
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    videos = []
    if request.method == "POST":
        action = request.form.get("action", "submit")

        if action == "reset":
            # Reset all binary vectors to zeros
            binary_vector = [0 for _ in range(30)]
        else:  # submit action
            question = request.form["question"]
            print(f"Received question: {question}")
            # Generate random binary vectors
            binary_vector = None  # Will be generated per video

        # Generate video list
        for _ in range(6):
            # For submit action, generate new random vector for each video
            # For reset action, use the zero vector for all videos
            if binary_vector is None:
                video_vector = [random.choice([0, 1]) for _ in range(30)]
            else:
                video_vector = binary_vector

            videos.append(
                {
                    "src": "/static/data/BigBuckBunny.mp4",
                    "poster": "/static/data/BigBuckBunny.jpg",
                    "chunks": video_vector,
                }
            )
    else:  # GET request
        # Initialize with zero vectors
        binary_vector = [0 for _ in range(30)]
        videos.extend(
            {
                "src": "/static/data/BigBuckBunny.mp4",
                "poster": "/static/data/BigBuckBunny.jpg",
                "chunks": binary_vector,
            }
            for _ in range(8)
        )

    return render_template("index.html", videos=videos)


if __name__ == "__main__":
    app.run(debug=True)
