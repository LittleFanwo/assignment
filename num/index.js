var start_point = 1;
var end_point = 78;
var sp;
var own_number = [];
var limit = true;

let users = [
    {
        name : 'Falcon',
        phone_number : '092020202030',
        own : [2 , 4 , 3 ]
    },
    {
        name : 'bluga',
        phone_number : '0902020202002',
        own : [1 , 2 , 6 , 8 , 103]
    }, 
];

function showData() {
    sp = start_point;
    for (let index = start_point ; index <= end_point; index++) {
        checkData(index);
        start_point = index;
    }
}

function right(){
    if ( limit ) {
        document.getElementById('main').innerHTML = '';
        end_point = start_point + 77;
        showData();
    }
}

function left(){
    if ( sp != 1 ) {
        document.getElementById('main').innerHTML = '';
        end_point = sp; start_point = end_point - 77;
        showData();
    }
}

function checkData(data){
    var same_num = false;
    for (let i = 0; i < users.length; i++) {
        users[i].own.forEach( number => {
            if ( number == data ) {
                same_num = true;
            }
        });
    }

    if (! (data > 1000) ) {
        if ( same_num == true ) {
            createElement(data , true);
        }
        else {
            createElement(data , false);
        }   
    }
    else { limit = false; }
}

function createElement(data , unable){
    const span = document.createElement('span');
    span.textContent = data;
    span.dataset.num = data;

    span.addEventListener('click' , selectData);
    if ( unable ) { span.classList = 'unable'; }
    document.getElementById('main').appendChild(span);
}

function toggle(e){
    if ( e.target.classList[0] == undefined ) {
        e.target.classList = 'selected'; // Can use toggle function for better experiences
    }
    else {
        e.target.classList = '';
    }
}

function selectData(data){
    toggle(data);  
    own_number[own_number.length] = data.target.dataset.num;
}

function apply(){
    if ( own_number.length == 0 ) {
        alert('Please select numbers')
    }
    else {
        var name;
        var phoneNumber;

        user_name = prompt("Please enter your name");
        user_number = prompt('Please enter your PhoneNumber'); // I would have check again if this was Number or not but since i don't have time..
        users[users.length] = { name : user_name , phone_number : user_number , own : own_number};
        updateData(user_name);
    }
}

function updateData(data){
    users.forEach(( user ) => {
        if ( data == user.name ) {
            user.own.forEach( num => {
                let span = document.querySelector(`[data-num='${num}']`);
                span.classList = 'unable';
            })
        }
    })
}

showData();


