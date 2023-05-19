const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_NAME":
        case "SORT_BY_AGE":
            return {
                ...state, sort: action.payload
            };

        case "FILTER_BY_BLOOD_GROUP":
            if (action.payload === "all") return {
                ...state,
                bloodGroup: []
            };
            const doesBloodGroupExist = state.bloodGroup.includes(action.payload);
            return doesBloodGroupExist ? {
                ...state,
                bloodGroup: state.bloodGroup.filter(item => item !== action.payload),
            } : {
                ...state,
                bloodGroup: [...state.bloodGroup, action.payload]
            };

        case "FILTER_BY_GENDER":
            if (action.payload === "all") return {
                ...state,
                gender: []
            };
            const doesGenderExist = state.gender.includes(action.payload);
            return doesGenderExist ? {
                ...state,
                gender: state.gender.filter(item => item !== action.payload),
            } : {
                ...state,
                gender: [...state.gender, action.payload]
            };

        case "FILTER_BY_UNIVERSITY":
            if (action.payload === "all") return {
                ...state,
                university: []
            };
            const doesUniversityExist = state.university.includes(action.payload);
            return doesUniversityExist ? {
                ...state,
                university: state.university.filter(item => item !== action.payload),
            } : {
                ...state,
                university: [...state.university, action.payload]
            };

        case "APPLY_SEARCH_TERM":
            return {
                ...state,
                appliedSearchTerm: action.payload,
            };

        case "CLEAR":
            return {
                ...state,
                    sort: "",
                    bloodGroup: [],
                    gender: [],
                    university: []
            };

        default:
            return state;
    }
}

export {
    filterReducer
}