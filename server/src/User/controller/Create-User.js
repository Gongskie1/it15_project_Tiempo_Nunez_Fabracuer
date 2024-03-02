const { default: axios } = require("axios");
const Student = require("../../common/model/User");

module.exports = {
    createUser: async (req, res) => {
        const { username, password } = req.body;
    
        try {
            const result = await axios.post("https://api.chatengine.io/users/", {
                username: username,
                secret: password,
                first_name: username
            }, {
                headers: { "private-key": "646fc535-4be0-424c-b38d-a0d11f80f15d" }
            });
    
            return res.status(result.status).json(result.data);
        } catch (error) {
            return res.status(error.response.status).json(
                {
                    isExist:true,
                    data:error.response.data
                }
            );
        }
    },
    getAllUser: async(req,res) =>{
        const {username} = req.body;
        try{

            const result = axios.get("https://api.chatengine.io/users/me/",
                {"User-Name": username},
                {"User-Secret": username},  
                {headers:{"Project-ID":"3c5d70ef-b3e2-4f1b-befd-ca07fa2d2ebf"}}
                );

            return res.status((await result).status).json((await result));

        }catch(error){
            return res.status(error.response.status).json(error.response.data);
        }
    }
}