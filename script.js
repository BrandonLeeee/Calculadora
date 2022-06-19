function insert(num){
  const numero = document.querySelector(".result").innerHTML;
  const numeroNum = document.querySelector(".result").innerHTML = numero + num;
}

function clean(){
 const clean = document.querySelector(".result").innerHTML = ""
}

function backspace(){
  const result = document.querySelector(".result").innerHTML;
  const resultBack = document.querySelector(".result").innerHTML = result.substring(0, result.length -1);
}

function calculate(){
  const result = document.querySelector(".result").innerHTML;
  if(result){
    document.querySelector(".result").innerHTML = eval(result)
  } else {
    alert("Erro! Digite um valor.") 
  }
}