let handler = async m => m.reply(`
╭─「 Donasi 」
│ •  [0882-9033-6559]
│ •  [saweria.co/nadel]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
