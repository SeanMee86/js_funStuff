
axios.get('http://localhost:3000')
    .then(res => {
        document.getElementById('stuff').innerHTML = res.data;
    })

axios.get('http://localhost:8080/users')
    .then(res => {
        console.log(res.data);
    })

document.getElementById('allCourseBtn').addEventListener('click', () => {
    axios.get('http://localhost:3000/allCourses')
        .then(res => {
            res.data.forEach(data => {
                console.log(`Course ID: ${data['ns2:id']}`)
                console.log(`Course Name: ${data['ns2:name']}`)
                console.log(`Course Description: ${data['ns2:description']}`)
            })
        })
})

document.getElementById('courseBtn').addEventListener('click', () => {
    axios.get('http://localhost:3000/course/8')
        .then(res => {
            res.data.forEach(data => {
                console.log(`Course ID: ${data['ns2:id']}`)
                console.log(`Course Name: ${data['ns2:name']}`)
                console.log(`Course Description: ${data['ns2:description']}`)
            })
        })
})

document.getElementById('addCourseBtn').addEventListener('click', () => {
    const data = {
        id: 8,
        name: 'Some Course',
        description: 'this course is awesome'
    }
    axios.post('http://localhost:3000/course', data)
        .then(res => {
            if(res.data[0] === 'FAILURE')
                console.log('Course could not be added, id already exists.')
            else
                console.log('Course added successfully')
        })
})
