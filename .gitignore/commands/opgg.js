module.exports = class Opgg {

    static match(message) {
        return message.content.startsWith('/nekopgg')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.channel.sendMessage('🐈  http://euw.op.gg/summoner/userName=' + args.join('%20'))
    }
}