function showEdit(){
    document.getElementById('display').innerHTML = `<h1>Nhap ID can sua</h1>
<input type="hidden" id="id1">
<button
<input type="hidden" id="id1">
<input type="text" id="name1">
<input type="text" id="age1">
<input type="text" id="score1">
<input type="text" id="class1">
        `
}

function edit(id){
    axios.get(API + '/' + id).then(res =>{
        let data = res.data[0];
        console.log(res.data)
        document.getElementById('id1').value = data.id
        document.getElementById('name1').value = data.name
        document.getElementById('age1').value = data.age
        document.getElementById('score1').value = data.score
        document.getElementById('class1').value = data.roomClass
    })
}
function update(){
    let data = {
        id: document.getElementById('id1').value,
        name: document.getElementById('name1').value,
        age: document.getElementById('age1').value,
        score: document.getElementById('score1').value,
        roomClass: document.getElementById('class1').value,
    }
    axios.put(API + '/' + data.id, data).then((res)=>{
        console.log(res)
        axios.get(API).then((res)=>{
            loadStudent()
        })
    })
}