
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'



interface Data{
    name:string,
    email:string,

}
export default function Posts() {
    const [APIData, setAPIData] = useState<Data[]>([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState <Data[]>([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])

    const searchItems = (e:React.FormEvent<HTMLInputElement>) => {
        const item=e.currentTarget.value;
        e.preventDefault();
        console.log (item);
        setSearchInput(item);
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }

    }
    return (
        <div style={{ padding: 20 }}>
        <input   onChange={(e: React.FormEvent<HTMLInputElement>) => searchItems( e)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
        <button className="btn btn-outline-success mt-3" type="submit">Search</button>


      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
}