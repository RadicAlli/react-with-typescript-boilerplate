import React from "react"
import IPerson from "../IPerson.interface"
import './PersonList.css'

interface IProps {
    person: IPerson,
    key: number
}

const PersonCard: React.FC<IProps> = ({ person, key }) => {
    return (
        <div className="person-list-person" key={key}>
            <div className="person-list-person-name">
                Name: {person.name}
            </div>
            <div className="person-list-person-username">
                Username: {person.username}
            </div>
            <div className="person-list-person-posts">
                Posts: {person.posts ? person.posts.length : 0}
                {person.posts ? <div className="person-list-person-posts-list">
                    {person.posts.map(post => <div>
                        <div className="post-paragraph">{post.paragraph}</div>
                        <div className="post-sentence"></div>
                        <div className="post-sentences"></div>
                        <div className="post-words"></div>
                    </div>)}
                </div> : <></>}
            </div>
        </div>
    )
}

export default PersonCard