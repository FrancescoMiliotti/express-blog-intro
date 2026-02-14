const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
res.send('Server del mio blog')
})

app.get('/Bacheca/', (req, res) => {
	const bacheca = [
		{
			title: "Orto",
			contents: "Scheda coltivazione degli ortaggi",
            image: "",
			tags: ["pomodoro", "zucchina", "melanzana"],
		}, 
        {
			title: "Frutti",
			contents: "Guida coltivazione alberi da Frutto",
            image: "",
			tags: ["albicocco", "pesco", "melo"],
		},
        {
			title: "Erbe",
			contents: "Guida alla scoperta delle erbe aromatiche",
            image: "",
			tags: ["basilico", "menta", "rosmarino"],
		},
        {
			title: "Difesa",
			contents: "Guida alla difesa dalle avversità",
            image: "",
			tags: ["malattie", "insetti", "animali"],
		},
        {
			title: "Guida",
			contents: "Consigli utili alla coltivazione",
            image: "",
			tags: ["suolo", "raccolta", "potatura"]
		}
        
	];

	res.json(bacheca);
})




app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})