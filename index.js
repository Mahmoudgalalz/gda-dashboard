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

function dateFormat(date){
    const d=new Date(date);
    let h=d.getHours();

    if(h>12){
        h-=12
    }
    const m=d.getMinutes();
    return `${h}:${m}`
}

function createData(element){
        const box=document.createElement('div')
        const btn=document.createElement('button')
        box.className='object'
        btn.textContent='Present'
        const date=document.createElement('p')
        const question=document.createElement('h2')
        const name=document.createElement('p')
        question.textContent=element.question;
        name.textContent=element.name;
        date.textContent=dateFormat(element.date);
        btn.setAttribute('onclick',`saveToLocal('${element.name}','${element.question}')`)
        box.appendChild(question)
        box.appendChild(name)
        box.appendChild(btn)
        box.appendChild(date)
        content.append(box)
        btn.addEventListener('click',()=>{
            btn.textContent='Done'
        })
}

function saveToLocal(name,question){
    localStorage.setItem('question',question)
    localStorage.setItem('name',name)
}