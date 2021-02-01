const styles = {
    root: {
       backgroundColor: "black",
       border: "1px solid black",
       borderRadius: "15px",
       padding: "0.7rem",
       position: "relative",
       overflow: "hidden",
       cursor: "pointer",
       "&:hover svg": {
           opacity: 1
       }
    },
    colors: {
        backgroundColor: "black",
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
        color: "white",
        paddingTop: "0.5rem",
        fontSize: "1.3rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "23%",
        width: "19.2%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-7px",
        border: "1px solid black"
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