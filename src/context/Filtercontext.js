import {
	createContext,
	useContext,
	useReducer,
} from "react";
import { filterReducer } from "../reducer/filterReducer";


const filterContext = createContext();

const useFilter = () => useContext(filterContext);

const FilterProvider = ({
	children
}) => {
	const [state, dispatch] = useReducer(filterReducer, {
		sortByName: "",
        sortByAge: "",
		bloodGroup: [],
		gender: [],
		university: []
	});



	return  <filterContext.Provider value = {{ state, dispatch}} > {children} </filterContext.Provider> ;
};

export {
	useFilter,
	FilterProvider
};