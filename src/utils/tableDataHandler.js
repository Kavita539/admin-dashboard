
export const createHead = (withWidth) => {
    return {
        cells: [

            {
                key: "first",
                content: "First Name",
                isSortable: true,
                width: withWidth ? 15 : undefined,
            },
            {
                key: "last",
                content: "Last Name",
                isSortable: true,
                width: withWidth ? 15 : undefined,
            },
            {
                key: "company",
                content: "Company",
                width: withWidth ? 15 : undefined,
            },
            {
                key: "blood",
                content: "BloodGroup",
                width: withWidth ? 15 : undefined,
            },
            {
                key: "email",
                content: "Email",
                shouldTruncate: true,
                width: withWidth ? 15 : undefined,
            },
            {
                key: "phone",
                content: "Phone Number",
                width: withWidth ? 15 : undefined,
            },

        ],
    };
};

export const head = createHead(true);