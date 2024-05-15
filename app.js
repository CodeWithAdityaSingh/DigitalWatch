
setInterval(() => {
    let data = new Date()
    let a = data.getHours()
    let b = data.getMinutes()
    let c = data.getSeconds()

    if (a > 12) {
        a = a - 12
    }

    a = a <  10 ? "0" +  a : a ;
    b = b < 10 ? "0" + b : b ;
    c = c < 10 ? "0" + c : c ;



    document.querySelector(".ampm").innerHTML = a > 12 ? "PM" : "AM"


    document.querySelector(".hours").innerHTML = a
    document.querySelector(".minutes").innerHTML = b
    document.querySelector(".seconds").innerHTML = c




}, 1000)








