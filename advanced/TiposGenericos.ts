interface MyGenericInterface<T> {
    field: T;
}

class MyGenericClass<U> {
    private value: U;
    constructor(value: U) {
        this.value = value;
    }

    getValue(): U {
        return this.value;
    }
}

function myGenericFunction<V>(arg: V): V {
    return arg;
}

