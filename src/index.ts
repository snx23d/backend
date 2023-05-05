import express from 'express';

const app = express();

const defaultPortNumber = 3000;

const portNumber = (undefined === process.env.PORT_NUMBER) ? defaultPortNumber : parseInt(process.env.PORT_NUMBER);

const server = app.listen(portNumber, () =>
    console.log(`Server ready at: http://localhost:${portNumber}`)
);

server.setTimeout(30000);

const emperors = [
    "Augustus",
    "Tiberius",
    "Caligula",
    "Claudius",
    "Nero"
];

app.get('/emperors', async (req, res) => {
    console.log("got a request");

    res.json(emperors);
});

app.get("/checksanity", async (req, response) => {

    const { name } = req.query;

    if (emperors.indexOf(<string>name) === -1) {
        response
            .status(404)
            .json({ message: `invalid value: ${name}` });
        return;
    }

    const isInsane = ("Caligula" === name) ? true : false;

    response.json({ insane: isInsane });
});

app.get("/ispresent", async (req, response) => {

    const { name } = req.query;

    const isPresent = (emperors.indexOf(<string>name) > -1) ? true : false;

    response.json({ isPresent: isPresent });
});
