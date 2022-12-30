const likebutton=document.getElementById("up");
const Dislikebutton=document.getElementById("down");
const likecount=document.getElementById("lc");
const Dislikecount=document.getElementById("dlc");
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
likebutton.addEventListener("click",()=>{
    lcount+=1
    const csrftoken = getCookie('csrftoken');
    fetch("http://127.0.0.1:8000/count/", {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
            'X-CSRFToken': csrftoken,
    },
        body: JSON.stringify({'post_data':lcount}) //JavaScript object of data to POST
    })
    .then(response => {
           
            return response.json() //Convert response to JSON
    })
    .then(data => {
    //Perform actioalertns with the response data from the view
    lccc=data.my_data
    console.log(data)
    likecount.innerHTML=`Like Count:${lccc}`;
    lcount=lccc
   
    })
    
})
Dislikebutton.addEventListener("click",()=>{
    dlcount+=1
    const csrftoken = getCookie('csrftoken');
    fetch("http://127.0.0.1:8000/dcount/", {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
            'X-CSRFToken': csrftoken,
    },
        body: JSON.stringify({'post_data':dlcount}) //JavaScript object of data to POST
    })
    .then(response => {
            return response.json()
             //Convert response to JSON
    })
    .then(data => {
    //Perform actioalertns with the response data from the view
    dlcount=data.my_data
    Dislikecount.innerHTML=`DisLike Count:${dlcount}`;
    })
})

function getlike(){
    fetch("http://127.0.0.1:8000/lgcount/", {
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
        },
    })
    .then(response => {
        return response.json() //Convert response to JSON
    })
    .then(data => {
        //Perform actions with the response data from the view
        console.log(data)
        lcount= +data.my_data
        likecount.innerHTML=`Like Count:${lcount}`;

    })
}

getlike()

function getdislike(){
    fetch("http://127.0.0.1:8000/dgcount/", {
        headers:{
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
        },
    })
    .then(response => {
        return response.json() //Convert response to JSON
    })
    .then(data => {
        //Perform actions with the response data from the view
        dlcount= +data.my_data
        Dislikecount.innerHTML=`DisLike Count:${dlcount}`;
    })
}

getdislike()



