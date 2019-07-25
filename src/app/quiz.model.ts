export class Choice {
    constructor(public value: string, public correct?: boolean)
    {}
}

export class Question {
    constructor(public label: string, public choices: Choice[])
    {}
}

export class Quiz {
    constructor(public label: string, public name: string, public fileName: string, public questions: Question[]) {}
}

export class Answers {
    constructor(public values: Choice[] = []) {}
}
