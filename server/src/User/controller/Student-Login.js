const { default: axios } = require("axios");


module.exports ={
    login_account: async (req, res) => {
        const { username, password } = req.body;

        try {
            const result = await axios.get("https://api.chatengine.io/users/me/", {
                headers: {
                    "Project-ID": "3c5d70ef-b3e2-4f1b-befd-ca07fa2d2ebf",
                    "User-Name": username,
                    "User-Secret": password
                }
            });

            return res.status(result.status).json({
                isExist:true,
                data:result.data
            });
        } catch (error) {
            return res.status(error.response.status).json({
                isExist: false,
                message: error.response.data
            });
        }
    }
}