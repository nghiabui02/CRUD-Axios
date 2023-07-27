let API = 'http://localhost:3000/students'
function loadStudent(){
    axios.get(API).then((res)=>{
        console.log(res)
        let str = '';
        let data = res.data;
        data.map(item =>{
            str += `<h1>${item.id}: ${item.name}; ${item.age}; ${item.score}; ${item.roomClass.name}</h1>
<button onclick="delete1(${item.id})">DELETE</button>

`
        })
        document.getElementById('display').innerHTML = str
    })
}

function delete1(id){
    axios.delete(API + `/${id}`).then(res =>{
        console.log(res)
        loadStudent()
    })
        .catch(e => {
            console.log(e)
        })
}
