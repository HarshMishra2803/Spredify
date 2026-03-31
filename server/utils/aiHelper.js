const Groq = require('groq-sdk')

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

const repurposeContent = async (content, platforms) => {

  const prompt = `You are a content repurposing expert.
  Given this content: ${content}
  Generate for these platforms: ${platforms}
  Return ONLY a valid JSON object — no extra text, no markdown:
  {
    "twitter": "thread here",
    "linkedin": "post here",
    "email": "newsletter here",
    "videoScript": "script here",
    "blogSummary": "summary here"
  }`

  const result = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama-3.3-70b-versatile",
  })

  return result.choices[0].message.content
}

module.exports = { repurposeContent }