const express = require('express');
const {
    routeHelper,
} = require('./route');

const app = express();



app.use((req, res, next) => {
    if (req.ip === '182.15.25.48') {
        next(new Error('error!!!'));
    } else {
        next();
    }
});



app.get('/test', async (req, res) => {
    // const user = req.locals.user;
    const id = req.query.id;
    res.json({
        msg: `mandaste por query ${id}`,
    });
});

const PORT = process.env.PORT || 3000;
c
app.listen(PORT, () => console.log(`API ready port: ${PORT} ...`));
