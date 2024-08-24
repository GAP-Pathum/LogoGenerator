import React, { useState } from 'react';
import axios from 'axios';

function LogoGenerator() {
    const [keyword, setKeyword] = useState('');
    const [logos, setLogos] = useState([]);

    const generateLogo = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/logo/generate', {
                params: { keyword }
            });
            console.log('Frontend Response:', response.data);

            // Update to handle multiple logos
            setLogos(response.data);
        } catch (error) {
            console.error('Error generating logo', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter a keyword"
            />
            <button onClick={generateLogo}>Generate Logo</button>

            {logos.length > 0 && (
                <div>
                    <h3>Generated Logos are here:</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {logos.map((logo, index) => (
                            <img key={index} src={logo.url} alt={`Generated Logo ${index + 1}`} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LogoGenerator;
