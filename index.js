const express = require("express")
const cors = require("cors")
const app = express()
const request = require("request")

app.use(cors())
app.post("/score/:token", async (req, res) => {
    request.post("https://www.google.com/recaptcha/api/siteverify").form({
        secret: "6Le-SGcUAAAAAGYe1NXI_1qUbPCY7iZ0da-3oFCn",
        response: req.params.token
    }).pipe(res)
})
app.listen(3000)
