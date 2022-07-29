const path = require("path")
const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.port || 5001
const prisma = require("./services/db")
const argon2 = require("argon2")



app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json());

app.get('/users', async (req, res) => {
    console.log("tutu")
    res.send(await prisma.User.findMany())
})

app.get('/perks', async (req, res) => {
    res.send(await prisma.Perk.findMany())
})

app.get('/slots', async (req, res) => {
    res.send(await prisma.Slot.findMany())
})

app.get('/slots', async (req, res) => {
    res.send(await prisma.Slot.findMany({ include: { types: true } }))
})



app.post("/login", async (req, res) => {
    const user = await prisma.User.findUnique({
        where: { pseudo: req.body.pseudo }
    })

    if (!user) {
        return res.sendStatus(401);
    }

    if (await argon2.verify(user.password, req.body.password)) {
        delete user.password;
        return res.send(user);
    }

    res.sendStatus(401);
})


app.post("/users", async (req, res) => {
    const user = await prisma.User.findUnique({
        where: { pseudo: req.body.pseudo }
    })
    if (!user) {
        res.send(
            await prisma.User.create({
                data: { ...req.body, password: await argon2.hash(req.body.password) },
            })
        )
    } else {
        res.sendStatus(401);
    }
})

// Serve REACT APP
app.use(express.static(path.join(__dirname, "dist")));

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname,"dist", "index.html")
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})