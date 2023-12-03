var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name:' +name + '<br/> email: ' + email + '<br/> subject: ' +subject + '<br/> message: '+ message;  

 if (email.trim() === ''){
    alert('Please input a Valid Email!');
    return;
 }
 if (email.toLowerCase().endsWith('@gmail.com')){
    
   
 } else {
    alert("Please include '@gmail.com'");
 }
 if (name.trim() === '' || subject.trim() === ''){
    alert('Plese fill the inputs!');
    return;
 }




    Email.send({
    SecureToken :  "8fae6023-3470-4437-9e72-05d715a2fd2c",
    To : 'mikeleano26@gmail.com',
    From : "legendsn3verdie@gmail.com",
    Subject : "Art Commission",
    Body : body
}).then(
  message => alert(message)
);



})
