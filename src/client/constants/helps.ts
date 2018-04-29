export default [{
  commands: ['help'],
  category: 'UTILITY',
  description: '',
  examples: [],
  notes: []
}, {
  commands: ['ping'],
  category: 'UTILITY',
  description: 'Check your ping connection and my ping connection to discord server',
  examples: [],
  notes: []
}, {
  commands: ['server'],
  category: 'UTILITY',
  description: 'Check server detail',
  examples: [],
  notes: []
},{
  commands: ['info'],
  category: 'UTILITY',
  description: 'Display info about the bot',
  examples: [],
  notes: []
}, {
  commands: ['avatar'],
  category: 'UTILITY',
  description: 'Display your avatar image or other members by mention them (works with multiple mention)',
  examples: ['avatar @Raiden Mei', 'avatar @Raiden Mei @Kiana Kaslana @AI Chan'],
  notes: ['If you not mention anyone bot will show your info instead']
}, {
  commands: ['userinfo'],
  category: 'UTILITY',
  description: 'Show detail info about your account or other members by mention them (works with multiple mention)',
  examples: ['avatar @Raiden Mei', 'avatar @Raiden Mei @Kiana Kaslana @AI Chan'],
  notes: ['If you not mention anyone bot will show your info instead']
}, {
  commands: ['google'],
  category: 'UTILITY',
  description: 'Show you the first result of google by an URL',
  examples: ['google Honkai Impact'],
  notes: ['Only works with simple result, complicated query will result not found']
}, {
  commands: ['weapon'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a game weapon from Honkai Impact 3rd',
  examples: ['weapon <weapon name>', 'weapon <valkyrie name>', 'weapon <category>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our weapon gallery`,
    `Tips:`, 
    `You can just write short name of the weapon like <${PREFIX}weapon Judah> will result <Oath of Judah>`,
    `You can write initial name of weapon for easy calling like <${PREFIX}weapon 2sr> will result <2nd Sacred Relic>`
  ]
}, {
  commands: ['stigma', 'stigmata'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a stigmata\'s effect from Hokai Impact 3rd',
  examples: ['stigmata <stigmata name>', 'stigmata <stigmata name> <T/M/B>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our stigmata gallery`,
    `Tips:`,
    `You don't need to write full name of stigma, for example <${PREFIX}stigmata tesla> will show you result of all stigma with your query`
  ]
}, {
  commands: ['valk', 'valkyrie'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s detail informations',
  examples: ['valkyrie <valkyrie name>', 'valkyrie <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${PREFIX}valkyrie SD> will result <Shadow Dash>`,
    `You can tap *⃣ emoji to jump to recommendation setup of valkyrie`
  ]
}, {
  commands: ['recom', 'recommendation'],
  category: 'HONKAI IMPACT',
  description: 'Show you recommendation about equipment setup for a specified valkyrie',
  examples: ['recommendation <valkyrie name>', 'recommendation <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${PREFIX}recommendation SD> will result <Shadow Dash>`,
    `You can tap #⃣ emoji to jump to detail info about valkyrie`
  ]
},{
  commands: ['faction'],
  category: 'HONKAI IMPACT',
  description: 'Select your faction on faction war event',
  examples: ['faction', 'faction list'],
  notes: [
    'for first setup need user with manage roles permission to do this command instalation',
    `use ${PREFIX}faction list to show the member faction list`,
    'You can\'t change faction after choosing, if you make a mistake you must contact your server administrator/moderators to remove your faction role',
    `Admin or someone with manage-roles permission need to do <${PREFIX}faction reset> to make all member be able to choose their faction again`
  ]
}, {
  commands: ['gacha'],
  category: 'FUN',
  description: 'Do gacha simulation like on Honkai Impact 3rd',
  examples: ['gacha', 'gacha <focused/standart>', 'gacha <number of pull>'],
  notes: [
    `Not giving any query will result to pull standart supply gacha`,
    `There is cooldown 1 minute after execute this command`,
    `Default number of pull is 10 but you can change it by type the number at the end query`,
    `For Example: <${PREFIX}gacha focused 8>, or <${PREFIX}gacha 5>`
  ]
}, {
  commands: ['PREFIX'],
  category: 'ADMIN TOOL',
  description: `Change PREFIX for server`,
  examples: ['PREFIX <new PREFIX>'],
  notes: [
    `This server's PREFIX is ${PREFIX}`,
    'Only ADMINISTARTOR can change the PREFIX',
    'space character won\'t work'
  ]
}, {
  commands: ['kiss'],
  category: 'IMAGE',
  description: 'Display gif about kissing',
  examples: ['kiss @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['lewd'],
  category: 'IMAGE',
  description: 'Display gif about lewd',
  examples: ['lewd @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['lick'],
  category: 'IMAGE',
  description: 'Display gif about lick',
  examples: ['lick @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['nyan'],
  category: 'IMAGE',
  description: 'Display gif about neko girl nyan~',
  examples: ['nyan @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['pat'],
  category: 'IMAGE',
  description: 'Display gif about pat',
  examples: ['pat @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['pout'],
  category: 'IMAGE',
  description: 'Display gif about pout',
  examples: ['pout @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['slap'],
  category: 'IMAGE',
  description: 'Display gif about slap',
  examples: ['slap @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['stare'],
  category: 'IMAGE',
  description: 'Display gif about stare',
  examples: ['stare @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['wasted'],
  category: 'IMAGE',
  description: 'Display gif about wasted',
  examples: ['wasted @someone'],
  notes: [
    'Works with multiple mention'
  ]
}, {
  commands: ['ban'],
  category: 'ADMIN TOOL',
  description: 'Ban user from server by mention it',
  examples: ['ban @someone reason'],
  notes: [
    'Only user with BAN_MEMBERS permission can use this command'
  ]
}, {
  commands: ['kick'],
  category: 'ADMIN TOOL',
  description: 'Kick user from server by mention it',
  examples: ['kick @someone reason'],
  notes: [
    'Only user with KICK_MEMBERS permission can use this command'
  ]
}, {
  commands: ['send'],
  category: 'ADMIN TOOL',
  description: 'Send message to another channel as AI Chan',
  examples: ['send #general message', 'send message', 'send @someone message'],
  notes: [
    `Mention someone will result bot to dm that mentioned user via dm`,
    `This command doesn't work on multiple mention so please only mention one user at one message`
  ]
}, {
  commands: ['clear'],
  category: 'ADMIN TOOL',
  description: 'Mass delete the message on channel',
  examples: ['clear 100', 'clear @someone'],
  notes: [
    `You can only delete message by certain user by mention it`,
    `!clear @someone will mass delete his message in one channel`,
    `Only can delete message that not older than 7 day`
  ]
}]