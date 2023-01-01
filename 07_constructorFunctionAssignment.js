
console.log(`\n Q1.Create a constructor function with name->Bank and add the data member such as bankName, location, ifscCode, branchCode.-`);
function Bank(bankName, location, ifscCode, branchCode)
{
     this.bankName = bankName,
        this.location = location, 
        this.ifscCode = ifscCode, 
        this.branchCode = branchCode
     

}
   Bank.prototype.openTime="9AM IST";
   Bank.prototype.closeTime="6PM IST";
    


let b=new Bank("BBB","pune",001, 111);
console.log(`Funtion constructor for bank is created successfully.`);
console.log(b);


console.log("\nQ2.Create the objects Yes, Sbi, Mah, Axis bank.");
let yesBank=new Bank("Yes Bank", "Chinchwad","YBK0002230", "YBK035");
console.log(`Bank Name: ${yesBank.bankName}  Location:${yesBank.location} IFSC CODE:${yesBank.ifscCode} BRANCH CODE: ${yesBank.branchCode}`);
let sbiBank=new Bank("State Bank of India", "Chinchwad","SBI0002343", "SBI87035");
console.log(`Bank Name: ${sbiBank.bankName}  Location:${sbiBank.location} IFSC CODE:${sbiBank.ifscCode} BRANCH CODE: ${sbiBank.branchCode}`);
let mahBank=new Bank("Maharashtra Bank", "Akurdi","MAHB0002343", "MAHB870");
console.log(`Bank Name: ${mahBank.bankName}  Location:${mahBank.location} IFSC CODE:${mahBank.ifscCode} BRANCH CODE: ${mahBank.branchCode}`);
let axisBank=new Bank("Axis Bank", "Punawale","AXB000434", "AXB454");
console.log(`Bank Name: ${axisBank.bankName}  Location:${axisBank.location} IFSC CODE:${axisBank.ifscCode} BRANCH CODE: ${axisBank.branchCode}`);


console.log(`\n Q3. Add the data member Open time 9AM IST-------------`);
console.log(`Open Time: ${sbiBank.openTime}`);


console.log(`\  Q4. Add the data member Close time 6PM IST-------------`);
console.log(`Close Time: ${sbiBank.closeTime}`);

console.log(`\n Q5.SBI open and close time `);
console.log(`${sbiBank.bankName}  ..........[Open Time: ${sbiBank.openTime}     Close Time: ${sbiBank.closeTime}]`);

console.log(`\n Q6.Axis open and close time `);
console.log(`${axisBank.bankName}    ..........[Open Time: ${axisBank.openTime}     Close Time: ${axisBank.closeTime}]`);

console.log(`\n Q7.Yes open and close time `);
console.log(`${yesBank.bankName}  ..........[Open Time: ${yesBank.openTime}     Close Time: ${yesBank.closeTime}]`);
