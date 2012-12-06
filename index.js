if (typeof JSON === 'object' && typeof JSON.stringify === 'function' && typeof JSON.parse === 'function') {
    module.exports = JSON;
} else {
    module.exports = require('./json.js');
}