const styles = {
    root: {
       backgroundColor: "white",
       border: "1px solid black",
       borderRadius: "15px",
       padding: "0.5rem",
       position: "relative",
       overflow: "hidden",
       cursor: "pointer",
       "&:hover svg": {
           opacity: 1
       }
    },
    colors: {
        backgroundColor: "#dae1e4",
        borderRadius: "15px",
        height: "200px",
        width: "100%",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    delete: {

    },
    deleteIcon: {
        color: 'white',
        backgroundColor: '#eb3d30',
        width: '25px',
        height: '25px',
        position: 'absolute',
        right: '0px',
        top: '0px',
        padding: '10px',
        zIndex: 10,
        opacity: 0,
    }
};

export default styles;