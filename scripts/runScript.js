const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

    const filePath = path.join(__dirname, '../assets');
    pinFileToIPFS(filePath);

