const Client = require('../models/client');


const addClient = async (req, res) => {
    try {
        const { clientemail, phone, description } = req.body;
        const exist = await Client.find({ clientemail, });
        if (exist.length >= 1) {
            res.json({
                success: true,
                data: "Your request is in progress. Kindly wait, we will contact you soon."
            })
            return
        }
        const result = await Client.create({ 
            clientemail,
            phone,
            description,
        });
        res.json({
            success: true,
            data: result
        });
        return

    } catch (error) {
        res.json({
            success:false,
            err:error?.message
        });
        return

    }


}







module.exports = { 
    addClient, 
};