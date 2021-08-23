const express = require("express")

const log = console.log;
const sendMail = require('./mail.js')
const app = express();
const path = require("path");


const PORT = 8000;

//Data parsing;
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/email', (req, res) => {

    const { subject, email, text } = req.body;

    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' })
            console.log(err)
        } else {
            res.json({ message: "Email sent." });
        }
    })
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", 'index.html'));
})

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, "assets", 'jquery.js'));
})

app.listen(PORT, () => log("Server is running on PORT, 8000 "))
