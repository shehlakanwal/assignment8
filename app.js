function getnum(num){
  
    result = document.getElementById("input")
    
    result.value  +=num
    
    }
    
    function clearnum(){
        result = document.getElementById("input")
    result.value=""
    }
    
    function calcnum(){
        result = document.getElementById("input")
    result.value=eval(result.value)
    }
    
    