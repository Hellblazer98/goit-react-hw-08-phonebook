import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "redux/contacts/filterSlice";
import { selectFilter } from "redux/contacts/selectors"


export const Filter = () => {
    const filterQuery = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onFilterChange = e => dispatch(setFilter(e.currentTarget.value));
    
    return (
        <div>
            <label>
                <p>Find contacts by name</p>
                <input type="text" value={filterQuery} onChange={onFilterChange} />
            </label>
        </div>
    )
}

