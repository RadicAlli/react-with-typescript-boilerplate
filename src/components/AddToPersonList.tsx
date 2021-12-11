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

    return (<div>
        <h3>Add a New Person</h3>
        <div>
            <input type="text"
                placeholder="Name"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
        </div>
        <div>
            <input type="text"
                placeholder="Username"
                value={input.username}
                name="username"
                onChange={handleChange}
            />
        </div>
        <button onClick={handleClick}>Add Person</button>
    </div>)
}

export default AddToPersonList