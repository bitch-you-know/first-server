

const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        payload: {
            status_code: statusCode,
            datas: data,
            massage:message
        },
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
    })
}

export default response