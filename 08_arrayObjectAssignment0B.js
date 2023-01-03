console.log(`==========array object assigment========`);

console.log(`\n Q1.A  ---------Create bank class and initialize values using constructor -----------------`);

class Bank{
    constructor(bankName, location, account_no, ifsc, interest_rate)
    {
       this.bankName= bankName;
        this.location= location;
         this.account_no= account_no;
          this.ifsc= ifsc;
         this.interest_rate= interest_rate
    }
}
console.log(`\n Q1.B --------- Create Objects-----------------`);
const axis_bank=new Bank("AXIS Bank","Hinjewadi",231223, "AXIS0001219", "5%");
console.log(`axis_bank object created successfully!`);
const sbi_bank=new Bank("SBI Bank","Chinchwad",12123, "SBI000121278", "5.5%");
console.log(`sbi_bank object created successfully!`);
const icici_bank=new Bank("ICICI Bank","Hinjewadi",78781223, "ICICI000121672", "6.5%");
console.log(`icici_bank object created successfully!`);
const kotak_bank=new Bank("KOTAK Bank","Akurdi",8981223, "KOTAK000126712", "2.5%");
console.log(`kotak_bank object created successfully!`);
const hdfc_bank=new Bank("HDFC Bank","Aundh",6767223, "HDFC000121782", "5.8%");
console.log(`hdfc_bank object created successfully!`);
const punjab_bank=new Bank("PUNJAB Bank","BAner",9881223, "SPNB0001892", "7.5%");
console.log(`punjab_bank object created successfully!`);


console.log(`\n Q1.C --------- Add all objects in the array and traverse it, print bank name and location ----------------`);
let arrObj=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank];

for (const iterator of arrObj) {
    console.log(`Bank Name:${iterator.bankName},       Location:${iterator.location}`);
}


console.log(`\n Q1.D. --------- Find the name Kotak bank ----------------`);
for (const iterator of arrObj) {
    if(iterator.bankName=="KOTAK Bank")
    {
        console.log(`${iterator.bankName}  Found!`);
    console.log(`Bank Name:${iterator.bankName},       Location:${iterator.location}`);
    }
}

console.log(`\n Q1.E. --------- Log the details on the screen ----------------`);
for (const iterator of arrObj) {
    
    console.log(`Bank Name:${iterator.bankName} | Location:${iterator.location} | Account No.:${iterator.account_no} | IFSC:${iterator.ifsc} | Interest Rate:${iterator.interest_rate}`);
  
}