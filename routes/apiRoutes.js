var tableData = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        console.log(tableData);
        res.json(tableData);
    });

    app.post("/api/notes", function (req, res) {
        req.body.id = tableData.length + 1;
        tableData.push(req.body)
        res.json(true);
    });
    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id);
        const newNotesList = tableData.filter(note => note.id !== parseInt(req.params.id));
        tableData = newNotesList
        res.json(tableData);
        console.log(tableData);
    });
}
console.log("apiRoutes");

