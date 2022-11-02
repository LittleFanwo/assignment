const fruits = ['Orange' , 'Grapes' , 'Mango' , 'Pears' , 'Melons'];
var result = [];

function slice(data) {
    var int = false;
    var str = false;
    var active = false;

    Number.isInteger(data) ? int = true : int = false;
    typeof data == 'string' ? str = true : str = false;

    if (int) {
        for ( data ; data < fruits.length; data++) {
            result[result.length] = fruits[data];
        }
    }
    else if (str) {
        for ( let index = 0 ; index < fruits.length; index++) { 
            if ( fruits[index].toLowerCase() == data.toLowerCase() || active == true) {
                if ( index <= fruits.length - 1) {
                    result[result.length] = fruits[index];
                    index == fruits.length ? active = false : active = true;
                }
            }
        }
    }
    return result.length > 0 ? result : fruits;
    // return result.length > 0 ? result : 'Your data not included in our array:';
}

console.log(slice(0.2));
