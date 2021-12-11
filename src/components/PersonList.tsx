import React from "react"
import IPerson from "../IPerson.interface"
import PersonCard from "./PersonCard"
import './PersonCard.css'

interface IProps {
    people: IPerson[]
}

const PersonList: React.FC<IProps> = ({ people }) => {
    const renderPersonList = (): JSX.Element[] => {
        return people.map((person, i) => {
            return (<PersonCard key={i} person={person} />)
        })
    }
    return <>{renderPersonList()}</>
}

export default PersonList