import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", 'rabbit', "reptile"];
const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimals] = useState('')
    return (
        <div className="search-params">
            <form>
                <label htmlFor="Location">
                    Location
                    <input onChange={ (e) => {
                        setLocation(e.target.value)
                    }} type="text" id="location" value={location}
                    placeholder='Location' />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select name="animal" id="animal"
                    value={animal} onChange={(e) => {
                        setAnimals(e.target.value)
                    }}>
                    {ANIMALS.map((animal) => <option key={animal}>{animal}</option> )}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;