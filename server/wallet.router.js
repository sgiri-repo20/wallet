const router = require('express').Router();
const Wallet = require("./wallet.model");
const {walletValidation} = require("./validation")


// Create
router.post('/create', async (req, res) => {
    // lets validate the DATA before make a wallet
    
    const {error} = walletValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    
    //save wallet data
    const wallet = new Wallet({
        description: req.body.description,
        income: req.body.income,
        expense: req.body.expense
    })

    try{
        const savedWallet = await wallet.save();
        res.send({wallet:savedWallet._id});
    }catch(err){
        res.status(400).send(err)
    }

})

// lists of wallet
router.get('/list', async (req, res) => {
    console.log('hiii')
    try{
        const listWallet = await Wallet.find()
        res.send(listWallet);
    }catch(err){
        res.status(400).send(err);
    }
});

// list of wallet by id
router.get('/list/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const listWalletById = await Wallet.findOne({_id:id});
        res.json(listWalletById);
    }catch(err){
        res.status(400).send(err);
    }
})

// update wallet
router.patch('/update/:walletId', async (req, res) => {
    try{
        const walletId = req.params.walletId;
        const updateWallet = await Wallet.updateOne({_id:walletId}, { $set: { description: req.body.description }});
        res.json(updateWallet);
    }catch(err){
        res.json({message:err});
    }
})

// delete wallet
router.delete('/delete/:walletId', async (req, res) => {
    try{
        const removedWallet = await Wallet.remove({_id: req.params.walletId});
        res.json(removedWallet);
    }catch(err){
        res.json({message:err})
    }
})

module.exports = router;
