"use strict";

class Student {
    id;
    first_name;
    last_name;
    programme;
    modules = [];

    constructor(id, first_name, last_name, programme) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.programme = programme;
    }
}

class Programme {
    code;
    name;
    modules = [];

    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
}

class Module {
    code;
    name;

    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
}