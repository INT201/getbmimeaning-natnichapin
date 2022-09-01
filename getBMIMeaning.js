const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let BMI = weight / Math.pow((height/100),2)
    return BMI
}
function getBMIMeaning(weight, height) {
    let BMI = calculateBMI(weight,height)
    if(BMI>25.0){
        return "Overweight"
    }
    else if (BMI>=18.5  && BMI<=24.9) {
        return "Normal weight"
    }
    else {
        return "Underweight"
    }

}
module.exports = getBMIMeaning
