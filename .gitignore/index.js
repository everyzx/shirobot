const Discord = require('discord.js');
const bot = new Discord.Client();
const Opgg = require('./commands/opgg')

var prefix = ("/neko ")
var euw = ("/nekopgg ")

bot.on('ready', function () {
    bot.user.setGame("/neko help");
    console.log("Connected");
});

bot.login("NDA2Mjg3MDU2MjI3MDA4NTEy.DU0dWw.mlbcijETGlDfZ5DmdUpFJwdsWeg");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```🐈  Liste des commandes :\n - /neko pseudo \n - /neko doublecast \n - /nekopgg [pseudo]```");
    }

    if (Opgg.match(message)) {
        Opgg.action(message)
    }

    if (message.content === prefix + "doublecast"){
        message.channel.sendMessage("```[Doublecast combo basique :]\nAppuyez sur E puis Z et A presque en même temps : E - ZA\n\nLe combo peut être très optimisé à vous de réfléchir à votre propre façon de faire\n\n[Ma façon de doublecast :]\nE - R - Tiamat + Flash - Double cast combo```")
    }

    if (message.content === prefix + "pseudo"){
        message.channel.sendMessage("```🐈\nShinobi : jsuis pas un ÞÐ\nGianni : EvO Chronos\nShiro : Redeemed Rìven```");
        console.log("Commande pseudo effectué");
    }
});
