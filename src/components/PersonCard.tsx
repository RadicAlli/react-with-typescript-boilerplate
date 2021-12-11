import React from "react"
import IPerson from "../IPerson.interface"
import './PersonList.css'

interface IProps {
    person: IPerson,
    key: number
}

const PersonCard: React.FC<IProps> = ({ person, key }) => {
    return (
        <div className="person-card" key={key}>
            <div className="person-card-name">{person.name}</div>
            <div className="person-card-username">@{person.username}</div>
            <div className="person-card-posts">
                Posts: {person.posts ? person.posts.length : 0}
                {person.posts ? <>
                    {person.posts.map(post => <div>
                        <div className="post-paragraph">{post.paragraph}</div>
                        <div className="post-sentence"></div>
                        <div className="post-sentences"></div>
                        <div className="post-words"></div>
                    </div>)}
                </> : <></>}
            </div>
        </div>
    )
}

export default PersonCard