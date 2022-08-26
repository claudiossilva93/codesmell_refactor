const FIRST_FACTOR = 11; 
const SECOND_FACTOR = 12; 

export function validateCpf (cpf: string | null | undefined )  {
    if(!cpf) return false;
    cpf=cleanCPf(cpf);  
    if(!isValidLength(cpf)) return false;
    if(repeatCharacter(cpf)) return false;    
    const calculatedFactor1 = calculateDigitCpf(cpf, FIRST_FACTOR)
    const calculatedFactor2 = calculateDigitCpf(cpf, SECOND_FACTOR)
    const checkDigit = getCheckDigit(cpf); 
    const checkDigitCalculated = `${calculatedFactor1}${calculatedFactor2}`;  
    return checkDigit == checkDigitCalculated;
}

function cleanCPf(cpf: string): string{
    return cpf.replace(/\D/g, "")
}

function isValidLength(cpf: string): boolean{
    return cpf.length === 11;
}

function repeatCharacter(cpf: string): boolean{
    const firsDigit = cpf[0];
    return [...cpf].every(c => c === firsDigit)
}

function getCheckDigit(cpf: string): string{
    return cpf.slice(-2)
}

function calculateDigitCpf(cpf: string, factor: number): number{
    let total = 0;
    [...cpf].forEach((digit)=>{
        factor--;
        if(factor === 1) return false;
        total += factor * parseInt(digit);
    })
    const rest = (total % 11);        
    return (rest < 2) ? 0 : 11 - rest; 
}