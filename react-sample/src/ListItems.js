import React, {useState} from "react";
const sampleData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 },
    { id: 4, name: 'Alice', age: 22 },
];

export default function ListItems(){

    const [people, setPeople] = useState(sampleData);
    const [deletedPeople, setDeletedPeople] = useState([]);
    const handleDelete = (id) => {
        const person = people.find((p) => p.id === id)
        setPeople(people.filter((p) => p.id !== id))
        setDeletedPeople([...deletedPeople, person])
    };

    const handleRestore = (id) => {
        const person = deletedPeople.find((p) => p.id === id);
        setDeletedPeople(deletedPeople.filter((p) => p.id !== id));
        setPeople([...people, person]);
    };

    return (
       <div>
            {people.length >0 && (
                <div>
                    People List
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person) => (
                                <tr  key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                    <td><button onClick={() => handleDelete(person.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {deletedPeople.length >0 && (
                <div>
                Deleted People List
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deletedPeople.map((person) => (
                                <tr  key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                    <td><button onClick={() => handleRestore(person.id)}>Restore</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
       </div>
    )
}