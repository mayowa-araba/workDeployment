export const CourseDataBox = (theme) => ({
    "& .courseGrid":{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        width:"100%",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "100px",

            "& .data":{
                padding: "10px",
                textAlign: "center",
                borderRadius: "5px",
                
            "& .P-txt":{
                fontSize: "30px",
                textAlign:"center"
            }
        }
    }
});