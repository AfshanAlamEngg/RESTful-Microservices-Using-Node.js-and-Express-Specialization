var name = process.argv[2]
var age = parseInt(process.argv[3])
var basicSalary = parseFloat(process.argv[4])

if (age <= 0) {
    console.log('Invalid age, enter a valid age')
} 

else if (basicSalary <= 0) {
    console.log('Invalid basic salary, enter a valid salary')
}

else{
    
    const hra = (50*basicSalary)/100
    const specialAllowance = (30*basicSalary)/100
    const pf = (12*basicSalary)/100
    
    let grossSalary = (basicSalary + specialAllowance + hra) - pf
    
    let annualgrossSalary = 12 * grossSalary
    
    // console.log("The annual gross income of ",name," is ",annualgrossSalary)
    console.log(`The annual gross income of ${name} is ${annualgrossSalary}`)

}