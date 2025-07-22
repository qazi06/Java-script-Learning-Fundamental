const users = [
  {
    "user_id": "583c3ac3f38e84297c002546",
    "email": "test@test.com",
    "name": "test@test.com",
    "given_name": "Hello",
    "family_name": "Test",
    "nickname": "test",
    "last_ip": "94.121.163.63",
    "logins_count": 15,
    "created_at": "2016-11-28T14:10:11.338Z",
    "updated_at": "2016-12-02T01:17:29.310Z",
    "last_login": "2016-12-02T01:17:29.310Z",
    "email_verified": true
  },
  {
    "user_id": "583c5484cb79a5fe593425a9",
    "email": "test1@test.com",
    "name": "test1@test.com",
    "given_name": "Hello1",
    "family_name": "Test1",
    "nickname": "test1",
    "last_ip": "94.121.168.53",
    "logins_count": 1,
    "created_at": "2016-11-28T16:00:04.209Z",
    "updated_at": "2016-11-28T16:00:47.203Z",
    "last_login": "2016-11-28T16:00:47.203Z",
    "email_verified": true
  },
  {
    "user_id": "583c57672c7686377d2f66c9",
    "email": "aaa@aaa.com",
    "name": "aaa@aaa.com",
    "given_name": "John",
    "family_name": "Dough",
    "nickname": "aaa",
    "last_ip": "94.121.168.53",
    "logins_count": 2,
    "created_at": "2016-11-28T16:12:23.777Z",
    "updated_at": "2016-11-28T16:12:52.353Z",
    "last_login": "2016-11-28T16:12:52.353Z",
    "email_verified": true
  },
  {
    "user_id": "5840b954da0529cd293d76fe",
    "email": "a@a.com",
    "name": "a@a.com",
    "given_name": "Jane",
    "family_name": "Dough",
    "nickname": "a",
    "last_ip": "94.121.163.63",
    "logins_count": 3,
    "created_at": "2016-12-01T23:59:16.473Z",
    "updated_at": "2016-12-01T23:59:53.474Z",
    "last_login": "2016-12-01T23:59:53.474Z",
    "email_verified": true
  },
  {
    "user_id": "584a9d13e808bcf75f05f580",
    "email": "test9999@test.com",
    "given_name": "Dummy",
    "family_name": "User",
    "created_at": "2016-12-09T12:01:23.787Z",
    "updated_at": "2016-12-09T12:01:23.787Z",
    "email_verified": false
  }
]

// ForEach..........................

const mail = users.forEach( (mail) =>{
  console.log(mail.email);

  });

//Filter..................................


  const fName = users.filter( (id) =>  id.family_name==='Dough');

  console.log(fName);

//Map.............................................

    const uName = users.map( (id) =>  id.name);

  console.log(uName);

//Find...................................................
 
   const uMail = users.find( (mail) =>  mail.email==='test9999@test.com');

  console.log(uMail);

// Reduce..........................................................

 const userLogin = users.reduce(( acc, curr) => {
  return acc + (curr.logins_count || 0);
 }, 0);

  console.log(userLogin);
//Slice......................................................................

const userSlic = users.slice(1, 3);
console.log(userSlic);
console.log(users);

//Splice..............................................................................

const userSplic = users.splice(1);
console.log(userSplic);
console.log(users);

//Join..........................................................................................

const elements = ["Fire", "Air", "Water"];

 console.log(elements.join());

console.log(elements.join(""));
console.log(elements.join("-"));

//Every....................................................................................................

const array = [1, 30, 39, 29, 10, 13];
const isEvery = array.every( (index)=> index <40);

console.log(isEvery);

//Some..................................................................................................................

const array1 = [1, 30, 39, 29, 10, 13];
const isSome = array.some( (index)=> index > 30);

console.log(isSome);