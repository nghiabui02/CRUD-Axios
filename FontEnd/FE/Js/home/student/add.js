
function showAdd(){
    document.getElementById('display').innerHTML = `<hr>
<h1>ADD</h1>
        <input type="text" id="name">
        <input type="text" id="age">
        <input type="text" id="score">
        <input type="text" id="class">
        <button onclick="saveStudent()">SAVE</button>`
}
function saveStudent(){
    let data = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        score: document.getElementById('score').value,
        roomClass: document.getElementById('class').value,
    }
    axios.post(API, data).then(res =>{
        console.log(res)
        axios.get(API).then((res)=>{
            loadStudent()
        })
    })
}