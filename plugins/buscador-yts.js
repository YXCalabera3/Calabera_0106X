import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππ πππΏππ π πΎπΌππΌπ πΏπ ππππππ½π\n\nπππππ ππΌππ ππ πΌ ππππππ½π πππΏππ ππ πΎππΌππππ`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
βγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
βββ¨ *${v.title}* 
ββπ (${v.url})
βββ³ *DuraciΓ³n:* ${v.durationH}
ββπ *Fecha:* de subida: ${v.durationH}
ββπ *Vistas:* ${v.view} 
βββββΧβΧβΧβΧβββ`.trim()
      case 'channel': return `
βγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
βββ¨ *${v.channelName}* 
ββ(${v.url})
ββπ₯ *Subscriptores:* ${v.subscriberH} 
ββπ₯ *Videos:* ${v.videoCount}  
βββββΧβΧβΧβΧβββ
`.trim()
    }
  }).filter(v => v).join('\nγβββΧβΧβΧβΧβββγ\n')
 await m.reply(teks)
 let info = `πππ πΏπ΄π³πΈπ³πΎ π΅ππ΄ π΄π½ππΈπ°π³πΎ π²πΎπ½ ΓππΈππΎπ₯³ π³π΄ππ΄π°π πΏπ΄π³πΈπ π°π»πΆπΎ πΌΓππ©βπ»\n\nπππΎππ πΎππ³π΄π ππ°π ππ΄π½π πππ²π²π΄πππ΅ππ»π»π, π³πΎ ππΎπ ππ°π½ππ₯³ ππΎ πΎππ³π΄π ππΎπΌπ΄ππ·πΈπ½πΆ π΄π»ππ΄?π©βπ»
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, md, 'πΆπΈππ·ππ±', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 2
export default handler
