function updateTime() {
      const timeEl = document.getElementById("user-time");
      timeEl.textContent = `Current time (ms): ${Date.now()}`;
    }

    updateTime();