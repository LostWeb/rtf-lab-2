/**
* Создайте собственную реализацию функции bind
* @param {Function} func передаваемая функция
* @param {any} context контекст
* @param {Array<any>} args массив аргументов
* @return {Function} функция с нужным контекстом
*/
function customBind(func, context, ...args) {
    return function (...Args) {
        return func.apply(context, args.concat(Args));
    };
}
/* ============================================= */

/**
* Напишите функцию sum, вычисляющую суммы подобным образом:
* sum(1)(2)( ) // 3
* sum(1)(2)(3)( ) // 6
* sum :: Number -> sum
* sum :: void -> Number
*/
function sum(x) {
    if (x === undefined) return 0;

    let value = x;
    function Sum(x) {
        if (x !== undefined) {
            value += x;

            return Sum;
        }

        return value;
    }

    return Sum;

}

module.exports = {customBind,sum};
