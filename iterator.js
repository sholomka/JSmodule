let iterator = (function(){

    let index = 0,
        data = [1,2,3,4,5],
        length = data.length;

    return {
        next: function(){
            let element;

            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index += 2;
            return element;
        },
        hasNext: function(){
            return index < length;
        },
        rewind: function(){
            index = 0;
        },
        current: function(){
            return data[index];
        },
    }
}());



while (iterator.hasNext()) {
    console.log(iterator.next());
}


iterator.rewind();

console.log(iterator.current());
