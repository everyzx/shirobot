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
        message.channel.sendMessage("```🐈  Liste des commandes :\n - /neko pseudo \n - /neko doublecast \n - /neko shycombo \n - /nekopgg [pseudo]\n - /neko akieno\n - /neko jariv```");
    }

    if (Opgg.match(message)) {
        Opgg.action(message)
    }
    if (message.content === prefix + "jariv"){
        message.channel.sendMessage("!search coro j'arrive j'arrive")
        message.channel.sendMessage("1")
    }

    if (message.content === prefix + "akieno"){
        message.channel.sendMessage("https://www.youtube.com/channel/UCMqzMn5JxQicuvfCj0Z6aGg")
    }
    if (message.content === prefix + "shycombo"){
        message.channel.sendMessage("```[The Shy Combo]\n\nPart 1 : E + R\nPart 2 : Flash + W\nPart 3 : AA + Hydra\nPart 4 : R + Q\n\nCe combo permet de one shot quelqu'un dans un temps très réduit. Assemblez toutes les parties rapidement pour un bon résultat!```")
    }

    if (message.content === prefix + "doublecast"){
        message.channel.sendMessage("```[Doublecast combo basique :]\nAppuyez sur E puis Z et A presque en même temps : E - ZA\n\nLe combo peut être très optimisé à vous de réfléchir à votre propre façon de faire\n\n[Ma façon de doublecast :]\nE - R - Tiamat + Flash - Double cast combo```")
    }

    if (message.content === prefix + "pseudo"){
        message.channel.sendMessage("```🐈\nShinobi : jsuis pas un ÞÐ\nGianni : EvO Chronos\nShiro : Redeemed Rìven```");
        console.log("Commande pseudo effectué");
    }
});