const Content = require('../models/Content')
const { repurposeContent } = require('../utils/aiHelper')

const repurpose = async (req, res) => {


    try {
        const platforms = req.body.platforms;
    const userId = req.user.id 
    const content = req.body.content 


   const aiResponse = await repurposeContent(content, platforms)

   const outputs = JSON.parse(aiResponse)

   const saved = await Content.create({
    userId,
    org_text: content,
    outputs,
    platforms
  })
  return res.status(201).json({
    message: "Content repurposed!",
    data: saved
  })


      } catch (error) {
        return res.status(500).json({ message: error.message })
      }
}



module.exports = { repurpose };