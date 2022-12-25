import { useState } from "react";

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;