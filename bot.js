const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

let lastRan = 1600001;

client.on('message', msg => {
  if (msg .content === "?fortnite") {
    sendAlt(msg)

}
});

function sendAlt(fmsg) {
  const now = new Date();
  if (now - lastRan > 10 * 60 * 1000) {
      
    var accounts = [
    "Abdiboyrules@hotmail.com:qwaszx12",
    "WilliamJames51@outlook.com:7march1995",
    "franzmgarcia@gmail.com:mi19960311",
    "treyvordupree2126@gmail.com:tdup0120",
    "alex.12minecraft@hotmail.com:123alexwatson",
    "jesus.m1996@yahoo.com:Jm01123581321",
    "nat359@walla.com:259septe",
    "ketan.gokool@live.com:ketan122448",
    "joseciitho2009@hotmail.com:lalalala11",
    "monsieurbiscuit77@gmail.com:fl140796",
    "metalocalypse6@hotmail.com:slayer666",
    "jjwatts9941@gmail.com:alien429",
    "brianford@live.com:Josephbarna101",
    "stevenbramich@hotmail.com:Piranha1",
    "cody_erwin321@hotmail.com:cod3ster",
    "salazarr61@yahoo.com:alucard21",
    "jimmy@blancho-bedding.com:fanny262119",
    "swisher.jeffrey@yahoo.com:deathgod99",
    "wolves.101800@hotmail.com:fanboy00",
    "thebritishcitrusfruit@gmail.com:Citrus123",
    "joshbibby95@gmail.com:nutter21",
    "keonrandles4444@gmail.com:keonr4444",
    "gennyferone@gmail.com:solemare22",
    "okamotothomas@yahoo.com:123QWEasd",
    "michaeltomlinson93@gmail.com:Dragonclaw18",
    "hassinalhachami@gmail.com:pitbull8",
    "tylerjw2003@gmail.com:c2j4t6t7",
    "rebelman220@gmail.com:nwm7001",
    "alecover48@gmail.com:venner08",
    "austindarkstar777@ymail.com:shadow94",
    "pawelow765@interia.pl:pawelowvip1",
    "kalebmoller@hotmail.com:kirtlynn2",
    "michaelthorball@gmail.com:lightning9",
    "brandonleach180@gmail.com:Balboa123",
    "djokovic3600@gmail.com:dragonics31",
    "lilmoses98@gmail.com:catdog97",
    "taliooo324b21@gmail.com:d13032000d",
    "azoooooz888@gmail.com:azooz888",
    "21samdup@student.cfschools.org:suki3825",
    "corvelthomas@live.co.uk:18932238mrmcmct",
    "chad709@hotmail.com:motoko999",
    "lordnick1322@gmail.com:nonono123",
    "ieddie316@gmail.com:saiyan316",
    "stephenwilliamson013@gmail.com:Williamson13",
    "saifali.rahmatullah@gmail.com:Cps44258730",
    "modigamer99@gmail.com:modi4500",
    "bvajeale@gmail.com:Judy5839",
    "nodisispatrick@gmail.com:wr3ck54uc3",
    "joshua-gallagher@hotmail.com:sbbsbb123",
    "toddbraman13@gmail.com:brownie1",
    "Bwoc25@gmail.com:Greentea68",
    "kunschtlerjannik@gmail.com:meinmanga4me",
    "allquip67@gmail.com:tony6235",
    "therealtdp@gmail.com:Incorrect99",
    "brandonalvarado7061@gmail.com:hudson7061",
    "meowsterfilmsguy@gmail.com:Copper117",
    "mlowrie99@yahoo.com:wookie22",
    "lorenzofalchi@libero.it:lorenzo1978",
    "headlandhawk@gmail.com:Steph321",
    "demond.eiland@gmail.com:Tr3asur31",
    "garramwolf@gmail.com:gar900468",
    "sc62080@gmail.com:r3setpwd",
    "axpwow@gmail.com:washere1214",
    "rmharvizu@gmail.com:Chicharito14",
    "PurpleGengar10@gmail.com:PG10isawesome",
    "vince.h.hua@gmail.com:july10sioux",
    "dean_latta@hotmail.com:07apr2010",
    "fullmetaladrianv@gmail.com:akd6twdk",
    "walt.mitchell01@gmail.com:wertle33",
    "fazzifilippo0@gmail.com:Filippo05",
    "hamodsajed@hotmail.com:Amanbaby2001",
    "Chrisjordan411@yahoo.com:Chevelle95",
    "nsl97@live.nl:Steffie65",
    "thdotm@gmail.com:Oldmill13",
    "khargraves33@yahoo.com:jalen123",
    "thomaswebb3390@gmail.com:Penguins33",
    "nateyrose@outlook.com:tractorbob01",
    "jsv125@gmail.com:Dob10181993",
    "hendrikk7@live.nl:Lichtbal231",
    "gideon2128@gmail.com:help123",
    "taisou9902@gmail.com:taiki1999",
    "Snapple501@gmail.com:devren99",
    "elishajohns365@yahoo.com:123456e",
    "kiritowak6@live.com:ericdude6767",
    "originalfinzy@gmail.com:Ipodtouch135",
    "shamdattu@hotmail.co.uk:shamsatr1",
    "donpadilha@outlook.com:drdre2pac",
    "jacktaylor71@outlook.com:soccer4life",
    "dethsentence1020@gmail.com:chaosrainA1",
    "owenavery11@gmail.com:owensam1",
    "otham999@hotmail.com:nok223344",
    "mathewchristie_96@yahoo.com:awesome01",
    "weslley_leiva@hotmail.com:Leiva1910",
    "rasnyder24@gmail.com:epicface12",
    "jjucar13@yahoo.com:Joseph101",
    "shahardiy@gmail.com:Ahsan237",
    "emoty@hotmail.co.uk:Duckrunner1",
    "fuchidhang@gmail.com:reaper3510K",
    "mh06821@georgiasouthern.edu:M0g02g01",
    "thelegendcontinues14@gmail.com:NyCi2013",
    "jakeanderson2141@yahoo.com:low214131",
    "liam_chivers@yahoo.com:undertaker123",
    "dipietrodaniele@hotmail.it:daniele98",
    "bloodtheft91@gmail.com:jwd4ayrk",
    "fernandorv2001@gmail.com:fer446623",
    "enderman101@icloud.com:Minecraft1",
    "molinapeter920@yahoo.com:Jocelyn1",
    "mikeeastman5@gmail.com:mike1996",
    "kempo533@gmail.com:chucumeque3",
    "aguskapo_theking@hotmail.com:asd123asd",
    "bailey.rshaw@gmail.com:nagyshaw19",
    "martynenkoeugen@gmx.de:f2r895a2",
    "hamidazmani@rocketmail.com:schweinC1",
    "naza_97_08@hotmail.com:twdhp97",
    "jonathanpeter.salas@yahoo.com:Tantan49",
    "fakexxl@hotmail.de:hitachi124",
    "joep.dejong2003@gmail.com:jdej2003",
    "9thebigez9@gmail.com:luchoteamo99",
    "tom.ordiales001@yahoo.com:Odie1994",
    "kyub94140@gmail.com:digidix94",
    "jordanaskin@gmail.com:tracie987",
    "afsalarm777@gmail.com:jrbjrbjrb7",
    "jake@thehatches.ca:nopesorry3",
    "migueortebru@gmail.com:mike1992246",
    "fedechicco36@gmail.com:napoleone99",
    "ra.maman@hotmail.com:polaser1799",
    "colemcmahon21@hotmail.com:surfer21",
    "cdantas1996@gmail.com:202123cad",
    "conor.carey@outlook.com:19ronoc95",
    "jacob.bryan52@gmail.com:jacob123",
    "wotevatreva9581@gmail.com:jfeeney5923",
    "ibarrac_898@hotmail.com:irock898",
    "freddie.woodford270303@gmail.com:woodford03",
    "janderson287@gmail.com:apples01",
    "mathieunourry57@gmail.com:mathieu04945",
    "FabiousPvP@gmail.com:aaihg8t7",
    "psileo@ramapo.edu:Pastorpeter55",
    "ocakkoc@gmail.com:modem3535",
    "tanmanmonkey@gmail.com:lacrosse1337",
    "negussounds@gmail.com:splengs8",
    "ibrian809@hotmail.com:fuckyou5",
    "tylrock1295@gmail.com:t1l2rr3cks",
    "wmusgrave276@gmail.com:wyatt1997",
    "manijai96@gmail.com:pdskfsb58",
    "soltasar12@gmail.com:sacro2407",
    "nico.schenkel@chello.at:26tigger04",
    "alvin.reid1@gmail.com:Clitorisx1",
    "auon_100@outlook.com:zainab123456",
    "sauceoftheding@gmail.com:5wisemen",
    "jeryxem@gmail.com:qwe121993",
    "amroali13@yahoo.com:fball102",
    "alexanderbooth852001@gmail.com:alex852001",
    "sparta10101@gmail.com:Vodooo198",
    "deano9913@gmail.com:zebra9915",
    "Quarlesscj@yahoo.com:Naruto01",
    "edo.foc@libero.it:quantum13",
    "72susvit@libero.it:vittorio2002",
    "tysaunders8@gmail.com:Saunders8",
    "sjorlando13@gmail.com:odnalro13",
    "fenixchuck17j@aol.com:alamess1",
    "tozy615@gmail.com:iamdon123",
    "niko-loops@hotmail.com:188005n123",
    "fily1998@gmail.com:orchidea1998",
    "monkeyhead888@gmail.com:animalover23",
    "OtakuBoran@gmail.com:zambako12",
    "abid2701@gmail.com:abid271001",
    "carbajosa1505@gmail.com:gta5gta5gta5",
    "gabrielcole@outlook.com:Dr4gonball",
    "sergio9785@yahoo.com:Musical11",
    "thecamilleroberts@gmail.com:sally747",
    "DevilDuck95@gmail.com:bluedevilduck94",
    "g4rr4tt@hotmail.co.uk:Redditch15",
    "sergiodeamaya2@gmail.com:s3rgioloko22",
    "ifrog19@gmail.com:mollyrules101",
    "Penguinpigflu@gmail.com:Potatoluvr1",
    "arturo_2244@hotmail.com:182Blink",
    "colinsharks@ymail.com:raider60",
    "binhvdang@hotmail.co.uk:longbin11",
    "derrinkiernan@hotmail.com:rocky18",
    "jeremio1993@gmail.com:classic1",
    "loadsoftnt555@gmail.com:thankgod13",
    "filip.cikovic@gmail.com:fil0143",
    "corndawgmp@gmail.com:ventress22",
    "andreaboy756@gmail.com:andrea883",
    "jorgecztv@gmail.com:kokex143",
    "alexfig9331@gmail.com:alex19935261",
    "jgoduco.bun@gmail.com:jules1222",
    "tkierran@gmail.com:dadisdad1",
    "hoellriegel@gmx.net:sad1sad2",
    "wariz.1999@gmail.com:AZERTYuiop9",
    "sethdornak@gmail.com:rock0526",
    "necrolegend401@gmail.com:Dueling123",
    "xdjamesmen@gmail.com:Jameslol6",
    "batchew15@yahoo.com:Hatashi17",
    "j.mcdonald.10.ccfc@gmail.com:JosephM10",
    "nick.westerlund1124@gmail.com:westerlund1000",
    "elijahdominguez629@gmail.com:Harrishawks29",
    "maxkarrman@hotmail.se:emallol1",
    "joebshep@gmail.com:gohan824",
    "onekoolkorean@yahoo.com:022699tk",
    "moggi99@yahoo.co.uk:mpars001",
    "rayiswithrock@gmail.com:gokura12",
    "suzuko@hotmail.co.uk:gpl958hf",
    "slicklemons47@gmail.com:bradman47",
    "miguelrock2799@gmail.com:27199rock",
    "tacoboygaming@gmail.com:ty778895",
    "loganstatham@hotmail.com:forte123",
    "gus12394perez@gmail.com:beast12394",
    "anthonypablo9@gmail.com:cars1234",
    "ktoneh@gmail.com:tony3kim6",
    "deg.usmc@gmail.com:Josephine429",
    "calvarado94@live.com:305ballin",
    "fitzulab@gmail.com:Febau130",
    "smonzerr@hotmail.com:miro210198",
    "numo_94@hotmail.co.uk:b001311975",
    "zacman_78@hotmail.com:zacman44",
    "petitjean.th58@gmail.com:awee58240",
    "ali.dawood.akbary@gmail.com:Exodia69",
    "sebastianbetancurfranco@hotmail.com:SebaS1234",
    "amdolan8@yahoo.com:link12732",
    "15acremeans@gmail.com:c3VeARN0",
    "krstndltr@gmail.com:anything123",
    "bluecory34@gmail.com:Gpride123",
    "treccani-matteo@libero.it:Nessie46",
    "florianheyn@gmx.de:3101mama1981",
    "smftruephoenix@gmail.com:phoenix1988",
    "bishopbartle04@gmail.com:Seahawks2",
    "fabian.schmid-parsberg@t-online.de:Ncc1701e",
    "bbwolfyy@gmail.com:99a009002A",
    "g.tryfwnas@gmail.com:haval112",
    "helmsmac3@gmail.com:macsam22",
    "eshammoudi@gmail.com:Farewell1",
    
    ]
      
    // It's been more than 10 mins
    var result = Math.floor((Math.random() * accounts.length) + 0);
    fmsg.author.send("Am generat un cont special pentru tine! \n \n Detaliile contului: \n " + accounts[result] + " \n \n Alt By juri#4507 \n \n Join juri#4507's Official Discord: https://discord.gg/2u5qEMf \n \n" );
    
    lastRan = now;
  } else {
    fmsg.channel.send('Trebuie sa astepti 10 minute inainte de a genera din nou!')
  }

}

client.login('NTg1NzMzNzIzMDI3NDA2ODQ4.XPt4iQ.RQxdHyPNSiamfMu5P3yH7evdINQ');