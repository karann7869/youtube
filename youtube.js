import { channel } from "./content.js";

let contentSummary = '';

channel.forEach((data) => {
  contentSummary += `
    <div class="video-card">
      <div class="thumbnail-container">
        <a href="${data.videoLink}">
          <img class="thumbnail" src="${data.thumbnail}">
        </a>
        <div class="video-time">
        <a class="time-link" href="${data.videoLink}">
          ${data.timeSpan}
          </a>
        </div>
      </div>
      <div class="video-info-grid">
        <div class="channel-profile-pic">
          <a href="${data.channelProfileLink}">
            <img src="${data.profilePic}">
          </a>
        </div>
        <div class="video-info">
          <p class="title">
            <a class="video-link" href="${data.videoLink}">${data.titleLine}</a>
          </p>
          <p class="channel-name">
            <a class="channel-link">
              ${data.channelName}
            </a>
          </p>
          <p class="video-stats">
            ${data.dateAndTime}
          </p>
        </div>
      </div>
      </div>
    `;
});

document.querySelector('.js-container')
  .innerHTML = contentSummary;