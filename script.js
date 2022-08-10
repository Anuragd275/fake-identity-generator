const firstNames = ["Ananya", "Ishan", "Ishita", "Navya", "Shanaya", "Shrishti", "Taara", "Aarav", "Akash", "Anand", "Jay", "Rahul", "Vishal", "Rohit", "Vijay", "Mohit", "Anup", "Krishna", "Raj","Ishank","Bhuvan","Shubham","Shivam","Naveen","Praveen","Arpit","Ansh","Lakshya","Jay","Jaydeep","Harsh","Hanshika","Pratima","Himesh","Tamanna","Trisha","Kalyani","Aarti","Khushi","Shashi","Anjali"]
const lastNames = ["Mishra", "Dubey", "Pandey", "Singh", "Gupta", "Tiwari", "Agrahari", "Verma", "Yadav", "Kumar"];
const address = ["Kolkata,Bengal", "Mumbai", "Anand Vihar, Delhi", "Mandhana, Kanpur", "Lucknow", "Viaynagar, Hyedrabad", "Chandigarh"];
const mother = ["Reeta", "Geeta", "Neeta", "Suneeta", "Lakshmi", "Divya", "Roopa", "Sarojni", "Rekha", "Madhuri", "Lata","Tanya","Shanti","Shilpa","Nisha","Akshara","Anita","Dhriti","Disha","Janki","Kavya","Mahima","Mannat","Mamta"];
const father = ["Krishna", "Sanjay", "Dilip", "Pradeep", "Vijay", "Ajay", "Anurag", "Mukesh", "Raj", "Sunil", "Pawan", "Dinesh", "Krishna", "Raj", "Ishank", "Bhuvan", "Shubham", "Shivam", "Naveen", "Praveen", "Arpit", "Ansh", "Lakshya", "Jay", "Jaydeep"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const school = ["Saraswati Vidya Mandir Inter College", "Raj Montessari Inter College", "Kamla Nehru Inter College", "Pranveer Khurana Inter College", "Standard Higher Inter College", "Spectrum Inter College"];
const mail = ["hero", "swagboy", "dude", "workmail", "official", "pro", "nice"];

document.getElementById("btn").onclick = function () {

    document.getElementById("firstName").innerHTML = "First Name : " +  firstNames[Math.floor(Math.random() * firstNames.length)];
    document.getElementById("lastName").innerHTML = "Last Name : " + lastNames[Math.floor(Math.random() * lastNames.length)];
    document.getElementById("address").innerHTML = "Address : " + address[Math.floor(Math.random() * address.length)];
    document.getElementById("mother").innerHTML = "Mother's Name : " +  mother[Math.floor(Math.random() * mother.length)];
    document.getElementById("father").innerHTML = "Father's Name : " + father[Math.floor(Math.random() * father.length)]; 
    document.getElementById("birthday").innerHTML = "Date of Birth : " + Math.floor(Math.random() * 31)  + " " + month[Math.floor(Math.random() * month.length)] + " " + Math.floor(Math.random() * 18 + 1985);  
    document.getElementById("college").innerHTML = "School you studied : " + school[Math.floor(Math.random() * school.length)];      
    document.getElementById("email").innerHTML = "Email Address : " + mail[Math.floor(Math.random() * mail.length)]  + Math.floor(Math.random() * 320) + "@gmail.com";
    document.getElementById("phone").innerHTML = "Your Phone Number : " + "+91 " + "9" + Math.floor(Math.random() * 565260412);
    document.getElementById('ssn').innerHTML = "Your Aadhar Number is : " + Math.floor(Math.random() * 4562) + " " + Math.floor(Math.random() * 4562)+ " " + Math.floor(Math.random() * 4562);
}
