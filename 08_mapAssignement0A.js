console.log(`==========Map assigment========`);

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


console.log(`\n Q1.C --------- Create map and account no key and object as bank objects-----------------`);
const mapOfBank=new Map();
console.log(`Map mapOfBank created.`);

mapOfBank.set(axis_bank.account_no, axis_bank);
mapOfBank.set(sbi_bank.account_no, sbi_bank);
mapOfBank.set(icici_bank.account_no, icici_bank);
mapOfBank.set(kotak_bank.account_no, kotak_bank);
mapOfBank.set(hdfc_bank.account_no, hdfc_bank);
mapOfBank.set(punjab_bank.account_no, punjab_bank);

console.log(`\n Q1.D --------- Traverse the map-----------------`);
const keyOfMapBank = mapOfBank.keys();
console.log(keyOfMapBank);
for (const key of keyOfMapBank) {
    const bank=mapOfBank.get(key);
    console.log(bank.bankName,     bank.account_no,     bank.interest_rate);
    
}


