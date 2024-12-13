const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); 
app.post('/update-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received location: Latitude: ${latitude}, Longitude: ${longitude}`);
    
    res.status(200).send('Location updated');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
