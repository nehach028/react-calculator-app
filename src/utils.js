export const operators = ['÷', 'x', '-', '+', '=']
export const specials = ['C', '+/-', '%']
export const allKeys = ['C', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
export const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
export const scientificKeys = ['(',')','mc','m+','m-','mr','2nd','X2','X3','Xy','ex','10x','1/x','2√x','∛x','y√x','In','log10','X!','sin','cos','tan','e','EE','Rad','sinh','cosh','tanh','π','Rand'] 


export const calculate = (operator, prevKey, currentKey) => {
  let total = 0
  switch (operator) {
    case '+': total = prevKey + currentKey;
      break;
    case '-': total = prevKey - currentKey;
      break;
    case 'x': total = prevKey * currentKey;
      break;
    case '÷': total = prevKey / currentKey;
      break;
    default:
  }
  return total
}