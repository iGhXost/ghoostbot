let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Magernulis By MFarelS:V
let handler  = async (m, { conn, text }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
await conn.sendFile(m.chat, global.API('xteam', '/magernulis6', { text, }, 'APIKEY'), 'nulis.jpg', 'Hari ini tugas Mu sudah siapp\nSubscribe: *Drawl Nag*', m)
}
handler.help = ['magern'].map(v => v + 'ulis6 <teks>')
handler.tags = ['nulis']
handler.command = /^magernulis6$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
