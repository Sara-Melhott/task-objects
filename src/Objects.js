/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data['gender'] === 'female') {
        if (data['age']) {
            delete data.age;
        }
    } else {
        if (!data['income']) {
            data.income = 100000;
        }
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    var res = [];
    for (var key in { ...obj1, ...obj2, ...obj3 }) {
        res.push(key);
    }
    return res.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    function deepCopy(obj) {
        var cp_obj = {};
        Object.assign(cp_obj, obj);
        for (var key in cp_obj) {
            if (typeof cp_obj[key] === 'object' && cp_obj[key] !== null) {
                cp_obj[key] = deepCopy(cp_obj[key]);
            }
        }
        return cp_obj;
    }

    var result = [];

    for (var i = 0; i < count; i++) {
        result.push({ id: i, ...deepCopy(obj) });
    }

    return result;
}
