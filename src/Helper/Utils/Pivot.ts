export const PivotStyle = {
    root: {
        borderBottom: "1px solid #19b9f5"
    },
    link: {
        height: "45px",             
        background: "#f4f8f8",
        border: "1px solid #cdd7dc",
        borderBottom: "0px",
        borderLeft: "0px",
        marginLeft: "0px",
        "&:hover": {
            backgroundColor: "#19b9f5 !important",
            borderColor: "#19b9f5"
        },
        "&:first-child": {
            borderRadius: "6px 0 0 0",
            borderLeft: "1px solid #cdd7dc"
        },
        "&:last-child": {
            borderRadius: "0 6px 0 0"
        }
    },
    linkIsSelected: {
        background: "#19b9f5",
        backgroundColor: "#19b9f5 !important"
    },
    itemContainer: {
        border: "1px solid #cdd7dc",
        borderTop: "0px",
        background: "#fff",
        padding: "15px",
        borderRadius: "0 0 6px 6px",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)"
    }
}