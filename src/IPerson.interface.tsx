interface ICompany {
    bs: string
    catchPhrase: string
    name: string
}

interface IPost {
    paragraph: string
    sentence: string
    sentences: string
    words: string
}

export default interface IPerson {
    name: string
    username: string
    posts: IPost[]
    company: ICompany
}
