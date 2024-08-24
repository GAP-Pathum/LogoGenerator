const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/generate', async (req, res) => {
    try {
        const { keyword } = req.query;
        const options = {
            method: 'GET',
            url: 'https://simple-logo-generator-api.p.rapidapi.com/generateLogo',
            params: { keyword, size: '250' },
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': process.env.RAPIDAPI_HOST
            }
        };

        const response = await axios.request(options);
        console.log('API Response:', response.data); // Log the API response
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
