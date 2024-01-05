// DEFINE DATA
const firstNames = ["Ananya", "Ishan", "Ishita", "Navya", "Shanaya", "Shrishti", "Taara", "Aarav", "Akash", "Anand", "Jay", "Rahul", "Vishal", "Rohit", "Vijay", "Mohit", "Anup", "Krishna", "Raj", "Ishank", "Bhuvan", "Shubham", "Shivam", "Naveen", "Praveen", "Arpit", "Ansh", "Lakshya", "Jay", "Jaydeep", "Harsh", "Hanshika", "Pratima", "Himesh", "Tamanna", "Trisha", "Kalyani", "Aarti", "Khushi", "Shashi", "Anjali"]
const lastNames = ["Mishra", "Dubey", "Pandey", "Singh", "Gupta", "Tiwari", "Agrahari", "Verma", "Yadav", "Kumar"];
const address = ["Kolkata,Bengal", "Mumbai", "Anand Vihar, Delhi", "Mandhana, Kanpur", "Lucknow", "Viaynagar, Hyedrabad", "Chandigarh"];
const mother = ["Reeta", "Geeta", "Neeta", "Suneeta", "Lakshmi", "Divya", "Roopa", "Sarojni", "Rekha", "Madhuri", "Lata","Tanya","Shanti","Shilpa","Nisha","Akshara","Anita","Dhriti","Disha","Janki","Kavya","Mahima","Mannat","Mamta"];
const father = ["Krishna", "Sanjay", "Dilip", "Pradeep", "Vijay", "Ajay", "Anurag", "Mukesh", "Raj", "Sunil", "Pawan", "Dinesh", "Krishna", "Raj", "Ishank", "Bhuvan", "Shubham", "Shivam", "Naveen", "Praveen", "Arpit", "Ansh", "Lakshya", "Jay", "Jaydeep"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const school = ["Saraswati Vidya Mandir Inter College", "Raj Montessari Inter College", "Kamla Nehru Inter College", "Pranveer Khurana Inter College", "Standard Higher Inter College", "Spectrum Inter College"];
const mail = ["hero", "swagboy", "dude", "workmail", "official", "pro", "nice"];


// FUNCTION TO GENERATE ID.
function generateID() {
    
    // GET ALL REQUIRED AREAS BY ID(s).
    let resultDiv = document.getElementById("resultDiv");
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName");
    let dob = document.getElementById("dob");
    let hTown = document.getElementById("homeTown");
    let aCNumber = document.getElementById("aCardNumber");
    let phoneNum = document.getElementById("phone");
    
    // MAKE RESULTDIV VISIBLE
    resultDiv.style.display = "flex";

    // SHOW ALL GENERATED RESULTS.
    fName.innerHTML = "Your First Name: " + "<b>" + firstNames[Math.floor(Math.random() * firstNames.length)]+ "</b>";
    lName.innerHTML = "Your Last Name: " + "<b>" + lastNames[Math.floor(Math.random() * lastNames.length)]+ "</b>";
    dob.innerHTML = "Your D.O.B: " + "<b>" + Math.floor(Math.random() * 31)  + " " + month[Math.floor(Math.random() * month.length)] + " " + Math.floor(Math.random() * 18 + 1985)+ "</b>";
    hTown.innerHTML = "Your Home Town: " + "<b>" + address[Math.floor(Math.random() * address.length)]+ "</b>";
    phoneNum.innerHTML = "Your Phone Number : " + "<b>" + "+91 " + "9" + Math.floor(Math.random() * 565260412); + "</b>";   
    aCNumber.innerHTML = "Aadhar Card Number: " + "<b>" + Math.floor(Math.random() * 9999) + " " + Math.floor(Math.random() * 9999) + " " + Math.floor(Math.random() * 9999) + "</b>";
}