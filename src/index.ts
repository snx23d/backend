import express from 'express'

const app = express();

const server = app.listen(3000, () =>
    console.log("Server ready at: http://localhost:3000  http://127.0.0.1:3000  ")
);

server.setTimeout(30000);

app.get('/users', async (req, res) => {
    console.log("got a request");

    res.json(["aaa"]);
});
