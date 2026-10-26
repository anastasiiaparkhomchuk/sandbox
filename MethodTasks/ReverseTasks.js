//написати метод для обертання значення String.
//Метод має приймати текст від користувача через консоль, а повертати той самий, але розвернутий текст
 
  
let  reverse = reverseText("Anastasiia")
    function reverseText(str) {
        return str.split('').reverse().join('');
    }

    console.log(reverse)
