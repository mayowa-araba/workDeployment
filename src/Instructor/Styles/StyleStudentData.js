export const StudentDataBox = (theme) => ({
    "& .studentGrid":{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        width:"100%",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "100px" 
    }
})