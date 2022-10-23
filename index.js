const content=document.getElementById('content')

fetch('https://gdaask.azurewebsites.net/api/getAll')
.then(res=>{
    return res.json()
})
.then(data=>{
    data.reverse().forEach(element => {
        createData(element)
    });
})


function createData(element){
        const box=document.createElement('div')
        const btn=document.createElement('button')
        btn.textContent='Present'
        
        const question=document.createElement('h2')
        const name=document.createElement('p')
        question.textContent=element.question;
        name.textContent=element.name;
        btn.setAttribute('onclick',`saveToLocal('${element.name}','${element.question}')`)
        box.appendChild(question)
        box.appendChild(name)
        box.appendChild(btn)
        content.append(box)
}

function saveToLocal(name,question){
    localStorage.setItem('question',question)
    localStorage.setItem('name',name)
}