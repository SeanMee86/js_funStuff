const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const callSoap = require('./util/callSoap');
const {getAllCourses, insertCourse, getCourse} = require('./util/Envelopes');
const cors = require('cors');

app.use(
    bodyParser.json(),
    cors({origin: '*'})
)

app.get('/', (req, res) => {
    res.send(`
        <ul>
            <li>/allCourses - for all Courses</li>
            <li>/course/id - for Specific Course</li>
        </ul>
    `)
})

app.get('/allCourses', (req, res) => {
    callSoap(res, getAllCourses());
})

app.get('/course/:id', (req, res) => {
    callSoap(res, getCourse(req.params.id));
})

app.post('/course', (req, res) => {
    const {id, name, description} = req.body;
    callSoap(res, insertCourse(id, name, description))
})

app.listen(3000, console.log(`listening on port 3000`))
