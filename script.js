
    const Buttons = document.querySelectorAll("button")

    const Input = document.getElementById("input-box")

    let arr = Array.from(Buttons)

    let string = ""

    arr.forEach((curElem) => {
        curElem.addEventListener("click" , (e) => {
            if(e.target.innerHTML == "="){
                string = eval(string)
               Input.value = string
                 
            }
            else if(e.target.innerHTML == "AC"){
                string = ""
                Input.value = string
            }
            else if(e.target.innerHTML== "DEL"){
                string = string.substring(0,string.length-1)
                Input.value = string
            }
            else{
                string += e.target.innerHTML
                Input.value = string
            }
        })
    })