```javascript
module.exports = function delay(req, res, next) {
    const delayTime = req.mockData.delay || 0;
    setTimeout(next, delayTime);
};
```