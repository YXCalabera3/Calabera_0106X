let handler = async (m, { conn, text}) => {
if (!text) throw '*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π°π»πΆππ½ ππππ°ππΈπΎ*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[βππππβ] πΈπ½πΆππ΄ππ° π΄π» @πππ π³π΄ π°π»πΆππ½ ππππ°ππΈπΎ*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[βππππβ] π΄π» ππππ°ππΈπΎ π΅ππ΄ π³π΄ππ±π°π½π΄π°π³πΎ π²πΎπ½ π΄ππΈππΎ*\n*ββ π΄π» ππππ°ππΈπΎ ππ° πΏππ΄π³π΄ πππ°π π΄π» π±πΎπ*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.botAdmin = true
handler.admin = true
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler