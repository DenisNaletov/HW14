// task_1

const input_value = document.getElementById('palindrome_input');
const span_value = document.getElementById('palindrome_res');

function checkPalindrome(){
    isPalindrome();
}

function isPalindrome(){
    if(input_value.value === ''){
        span_value.textContent = 'Input something!';
        return;
    }
    const arr1 = input_value.value.split('');
    const arr2 = input_value.value.split('').reverse();
    span_value.textContent = (JSON.stringify(arr1).toUpperCase() === JSON.stringify(arr2).toUpperCase());

}

// task_2

const str_input = document.getElementById('reverse_input');
const reverse_input = document.getElementById('reverse_result');

function reverseString(){
    if(str_input.value === ''){
        reverse_input.textContent = 'Input something!';
        return;
    }
    reverse_input.textContent = str_input.value.split("").reverse().join("");
}
reverseString();

// task_3

const get_str = document.getElementById('string_value');
const get_char = document.getElementById('character_value');
const count = document.getElementById('res_calc');

function getCount(){
    // проверки
    countChar();
    // get value from input to str and c and then call countChar(str,c)
}

function countChar(){
    let res = 0;
    let arr_count = get_str.value.split('');
    for(let i =0; i<arr_count.length;i++){
        if(arr_count[i] === get_char.value){
            res++;
            count.textContent = res;
        }
    }
}
