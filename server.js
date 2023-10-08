const express = require('express');
const app = express();
const port = 3000;

// Serve the landing page
app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    res.sendFile(__dirname + '/index.html');
  } else {
    res.sendFile(__dirname + '/not-desktop-compatible.html');
  }

});

// Serve styles.css with the correct MIME type
app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css', {
      headers: {
        'Content-Type': 'text/css',
      },
    });
  });
  
  // Serve script.js with the correct MIME type
  app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js', {
      headers: {
        'Content-Type': 'application/javascript',
      },
    });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
