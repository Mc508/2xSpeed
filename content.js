// Function to change video speed to 2x
function speedUpVideo(video) {
  video.playbackRate = 2.0
}

// Function to reset video speed to normal
function resetVideoSpeed(video) {
  video.playbackRate = 1.0
}

// Function to attach event listeners to a video element
function attachHoverEvents(video) {
  video.addEventListener("mouseenter", () => speedUpVideo(video))
  video.addEventListener("mouseleave", () => resetVideoSpeed(video))
}

// Find all existing video elements on the page
const videos = document.querySelectorAll("video")
videos.forEach(attachHoverEvents)

// Observe the DOM for dynamically added videos
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.tagName === "VIDEO") {
        attachHoverEvents(node)
      }
    })
  })
})

observer.observe(document.body, { childList: true, subtree: true })
