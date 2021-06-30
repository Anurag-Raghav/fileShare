const dropZone =  document.querySelector('.drop-zone');
const fileInput = document.querySelector('#fileInput')
const browseBtn = document.querySelector('.browseBtn')
const uploadURL = "http://localhost:8000/api/files";
const fileURLInput = document.querySelector('#fileURL')
const copyBtn = document.querySelector('#copyBtn')
const sharingContainer= document.querySelector('.sharing-container')

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault();

    if(!dropZone.classList.contains('dragged')){
        dropZone.classList.add('dragged');
    }
})

dropZone.addEventListener('dragleave', ()=>{
    dropZone.classList.remove('dragged')
})

dropZone.addEventListener('drop', (e)=>{
    e.preventDefault();
    dropZone.classList.remove('dragged');
    const files = e.dataTransfer.files;
    if(files.length){
    fileInput.files = files;
    uploadFile();
    }
    
})
fileInput.addEventListener('change', ()=>{
    uploadFile();
})

browseBtn.addEventListener('click', ()=>{
    fileInput.click();
})

copyBtn.addEventListener('click', ()=>{
    fileURLInput.select();
    document.execCommand('copy');
})

const uploadFile =  ()=>{
    const file = fileInput.files[0]
    const formData = new FormData()
    formData.append('myfile',file);

    // const xhr = new XMLHttpRequest(); 
    // xhr.onreadystatechange = ()=>{
    //    if()
        
    // };

    // xhr.open('POST', uploadURL);
    // xhr.send(formData);

    fetch(uploadURL,{
        method: 'POST',
        body:formData
    }).then(res=>{
        return res.json()
    })
    .then(data=>{
        const {file : url} = data;
        console.log(url);
        fileURLInput.value=url;
        sharingContainer.style.display= 'block';
    })
    .catch((err=>console.log('Error')))
   
    }


  
    
    

