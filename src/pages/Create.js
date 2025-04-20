import React, { useState } from "react";
import "./Create.css";

const Create = () => {
  const [prompt, setPrompt] = useState("");
  const [script, setScript] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("female-1");

  // Mock data for videos
  const mockVideos = [
    {
      id: 1,
      url: "/assets/videos/sample1.mp4",
      thumbnail: "/assets/images/thumbnail1.jpg",
      title: "Business Meeting",
    },
    {
      id: 2,
      url: "/assets/videos/sample2.mp4",
      thumbnail: "/assets/images/thumbnail2.jpg",
      title: "City Street",
    },
    {
      id: 3,
      url: "/assets/videos/sample3.mp4",
      thumbnail: "/assets/images/thumbnail3.jpg",
      title: "Nature Scene",
    },
    {
      id: 4,
      url: "/assets/videos/sample4.mp4",
      thumbnail: "/assets/images/thumbnail4.jpg",
      title: "Tech Workspace",
    },
    {
      id: 5,
      url: "/assets/videos/sample5.mp4",
      thumbnail: "/assets/images/thumbnail5.jpg",
      title: "Product Showcase",
    },
  ];

  const voiceOptions = [
    { id: "female-1", name: "Female Voice 1" },
    { id: "female-2", name: "Female Voice 2" },
    { id: "male-1", name: "Male Voice 1" },
    { id: "male-2", name: "Male Voice 2" },
    { id: "neutral-1", name: "Neutral Voice" },
  ];

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    // Mock API call to generate script from prompt
    setScript(
      "This is a generated script based on your prompt. It would describe the content and narration for your video."
    );
  };

  const handleScriptSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would trigger video fetching based on the script
    alert("Script submitted! Videos would be fetched based on this script.");
  };

  const handleGenerate = () => {
    // In a real app, this would combine videos and audio
    alert(
      "Generating your video! This would combine selected videos with your script and chosen voice."
    );
  };

  return (
    <div className="create-page">
      <div className="container">
        <h1 className="page-title">Create Your Video</h1>

        {/* Prompt Section */}
        <section className="section prompt-section">
          <h2 className="section-heading">Prompt</h2>
          <form onSubmit={handlePromptSubmit}>
            <textarea
              className="text-input"
              placeholder="Enter your prompt here (e.g., 'Create a video about sustainable energy solutions')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Generate Script
            </button>
          </form>
        </section>

        {/* Script Section */}
        <section className="section script-section">
          <h2 className="section-heading">Script</h2>
          <form onSubmit={handleScriptSubmit}>
            <textarea
              className="text-input"
              placeholder="Your script will appear here. You can edit it if needed."
              value={script}
              onChange={(e) => setScript(e.target.value)}
              rows={6}
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Find Videos
            </button>
          </form>
        </section>

        {/* Videos Section */}
        <section className="section videos-section">
          <h2 className="section-heading">Videos</h2>
          <div className="videos-container">
            {mockVideos.map((video) => (
              <div key={video.id} className="video-item">
                <div className="video-preview">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-title">{video.title}</div>
                </div>
                <div className="video-controls">
                  <div className="audio-player">
                    <audio controls>
                      <source
                        src="/assets/audios/sample.mp3"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="voice-selector">
                    <select
                      value={selectedVoice}
                      onChange={(e) => setSelectedVoice(e.target.value)}
                    >
                      {voiceOptions.map((voice) => (
                        <option key={voice.id} value={voice.id}>
                          {voice.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="generate-button-container">
            <button
              className="btn btn-primary btn-large"
              onClick={handleGenerate}
            >
              Generate Video
            </button>
          </div>
        </section>

        {/* Result Section */}
        <section className="section result-section">
          <h2 className="section-heading">Result</h2>
          <div className="result-video-container">
            <video controls className="result-video">
              <source src="/assets/videos/result.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Export Section */}
        <section className="section export-section">
          <h2 className="section-heading">Export</h2>
          <div className="export-options">
            <a
              href="/assets/videos/result.mp4"
              download
              className="btn btn-primary"
            >
              Download MP4
            </a>
            <button className="btn btn-secondary">Share to Social Media</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Create;
