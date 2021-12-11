import { fake } from "faker/locale/zh_TW"
import React, { useState } from "react"
import IPerson from "./../IPerson.interface"

const faker = require('faker')

interface IProps {
    people: IPerson[]
    setPeople: React.Dispatch<React.SetStateAction<IPerson[]>>
}

const AddToPersonList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState<IPerson>({
        name: "",
        username: "",
        posts: []
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name ||
            !input.username) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                username: input.username,
                posts: []
            }
        ])
    }

    return (<div className="flex-col" style={{ padding: "1rem", fontSize: "1.5rem" }}>
        <h3>Add a New Person</h3>
        <div className="new-person-form">
            <input type="text"
                placeholder="Name"
                value={input.name}
                className="new-person-form-input"
                onChange={handleChange}
                name="name"
            />
        </div>
        <div className="new-person-form">
            <input type="text"
                placeholder="Username"
                value={input.username}
                name="username"
                onChange={handleChange}
                className="new-person-form-input" />
        </div>
        <button onClick={handleClick}>Add Person</button>
    </div>)
}

export default AddToPersonList