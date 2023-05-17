import {
	createContext,
	useContext,
    useState,
} from "react";

const shortlistContext = createContext();

const useShortlist = () => useContext(shortlistContext);

const ShortlistProvider = ({
	children
}) => {
    const[shortlisted, setShortlisted] = useState([]);

	return  <shortlistContext.Provider value = {{ shortlisted, setShortlisted}} > {children} </shortlistContext.Provider> ;
};

export {
	useShortlist,
	ShortlistProvider
};