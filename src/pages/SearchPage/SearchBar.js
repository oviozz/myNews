
import { IconSearch } from '@tabler/icons-react';
import { useRef } from 'react';


function SearchBar({ user_value, onSearch }) {
    const NewsSearchRef = useRef();

    function searchHandler(event) {
        event.preventDefault();

        const user_search = NewsSearchRef.current.value;

        onSearch(user_search);
    }

    return (
        <div>
            <form onSubmit={searchHandler}>
                <div className="searchbar--container">
                    <input
                        defaultValue={user_value}
                        className="searchbar"
                        name="name"
                        placeholder="Search for any news topic"
                        ref={NewsSearchRef}
                    />
                    <button className="searchbar--btn">
                        <IconSearch className={'ti'} size={30}/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
