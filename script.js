function dateValidate(x, y){
    if(x === 2 && (y === 29 || y === 30|| y === 31)){
        alert("Invalid date");
        return false;
    }
    if((x === 4 || x === 6 || x === 9 || x === 11) && y === 31) {
        alert("Invalid date");
        return false;
    }
}

function ifBirthday(m, d){
    var birthday = "";
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    if(m === day && d === month){
        birthday = "Happy Birthday! ";
    }
    return birthday;
}

function determineNumOfSign(x, y){
    if((x === 3 && y >= 21) || (x === 4 && y <= 19)){
        return 1; //Aries
    }
    if((x === 4 && y >= 20) || (x === 5 && y <= 20)){
        return 2; //Taurus
    }
    if((x === 5 && y >= 21) || (x === 6 && y <= 21)){
        return 3; //Gemini
    }
    if((x === 6 && y >= 22) || (x === 7 && y <= 22)){
        return 4; //cancer
    }
    if((x === 7 && y >= 23) || (x === 8 && y <= 22)){
        return 5; //leo
    }
    if((x === 8 && y >= 23) || (x === 9 && y <= 22)){
        return 6; //virgo
    }
    if((x === 9 && y >= 23) || (x === 10 && y <= 23)){
        return 7; //libra
    }
    if((x === 10 && y >= 24) || (x === 11 && y <= 21)){
        return 8; //scorpio
    }
    if((x === 11 && y >= 22) || (x === 12 && y <= 21)){
        return 9; //sagittarius
    }
    if((x === 12 && y >= 22) || (x === 1 && y <= 19)){
        return 10; //capricorn
    }
    if((x === 1 && y >= 20) || (x === 2 && y <= 18)){
        return 11; //aquarius
    }
    if((x === 2 && y >= 19) || (x === 3 && y <= 20)){
        return 12; //pisces
    }
}


function determineSign(x, y){
    var whichSign = determineNumOfSign(x, y);
    var sign = "";
    if(whichSign === 1){
        sign = "Aries";
    }
    if(whichSign === 2){
        sign = "Taurus";
    }
    if(whichSign === 3){
        sign = "Gemini";
    }
    if(whichSign === 4){
        sign = "Cancer";
    }
    if(whichSign === 5){
        sign = "Leo";
    }
    if(whichSign === 6){
        sign = "Virgo";
    }
    if(whichSign === 7){
        sign = "Libra";
    }
    if(whichSign === 8){
        sign = "Scorpio";
    }
    if(whichSign === 9){
        sign = "Sagittarius";
    }
    if(whichSign === 10){
        sign = "Capricorn";
    }
    if(whichSign === 11){
        sign = "Aquarius";
    }
    if(whichSign === 12){
        sign = "Pisces";
    }
    return sign;
}

function determineHoroscope(x, y){
    var astro = determineNumOfSign(x, y);
    if(astro === 1){
        var horoscope = "Being shameless isn't a bad thing. " +
            "Today, don't be scared to reveal that you're really " +
            "into your job or focused on a particular goal. " +
            "Your intense enthusiasm and willpower are assets " +
            "right now, and others will be inspired by your " +
            "conviction. Not feeling psyched about anything " +
            "in particular? Find a worthy enough goal to get " +
            "out of bed for every morning. We all have a " +
            "purpose in life, and every day offers an " +
            "opportunity to go after yours. No holding " +
            "back, Aries!"
    }
    if(astro === 2){
        horoscope = "What do you want for the long haul, " +
            "Taurus? Today, set your sights directly on that " +
            "vision. It will take more than a little " +
            "faith—both in yourself and the universe. " +
            "But if you start to visualize yourself already " +
            "IN the conditions and circumstances you desire, " +
            "you'll fire up the universal attraction engine. " +
            "Even better, get out and experience those " +
            "conditions to whatever degree you can. Always " +
            "dreamed of staying in a five-star hotel? Go " +
            "have a drink in the lounge. Want to meet a " +
            "certain author? Get tickets to a lecture or " +
            "fall asleep to their audiobooks."
    }
    if(astro === 3){
        horoscope = "Your psychic and intuitive powers are " +
            "especially sharp today, Gemini. Trust your " +
            "instincts when you feel guided in a certain " +
            "direction; and if you have a bad or \"off\" " +
            "feeling about something, investigate. It may " +
            "be your imagination, or much less significant " +
            "than you suspect; but likely, something is out " +
            "of energetic alignment here and you're sensing " +
            "that. Look deeper. Today is also great for " +
            "research or artistic work. Listening to music " +
            "stimulates your creativity."
    }
    if(astro === 4){
        horoscope = "Don't push your partner or a close " +
            "friend away when they try to peer into your " +
            "soul. This person knows you as well as (and " +
            "maybe even better than) you know yourself. " +
            "While you might feel a bit vulnerable or " +
            "exposed being seen so clearly, let down " +
            "your guard. Remember that this person is " +
            "coming from a place of love and genuine " +
            "friendship—and is championing your happiness " +
            "by pointing certain things out. You're on " +
            "the same team, Cancer!"
    }
    if(astro === 5){
        horoscope = "It's time to declutter, streamline " +
            "and systematize, Leo! That doesn't mean you " +
            "have to make your space boring, though. Au " +
            "contraire. Take a page from Leo Martha " +
            "Stewart's playbook and get a few \"good " +
            "things\" for organizing. Add your own flair " +
            "for color or a crafty touch to personalize. " +
            "With your passion for life, you'll always " +
            "have way too many irons in the fire. One " +
            "life-hacking trick you might like is to " +
            "have zones for your stuff—perhaps grouped " +
            "and color-coded by interest or topic."
    }
    if(astro === 6){
        horoscope = "Turn on your creative highbeams. " +
            "Your inner genius is ready to paint a " +
            "masterpiece! You can be so self-censoring, " +
            "Virgo, but today, you need to let all your " +
            "unpolished ideas pour out. It's not really " +
            "about YOU—it's about letting a divine " +
            "source be expressed through your body, mind " +
            "and soul. Adopt this humble position if it " +
            "helps you get over your blocks...and show " +
            "the world just how talented you are!"
    }
    if(astro === 7){
        horoscope = "How much do you know about your " +
            "ancestors? Today, the branches of your " +
            "family tree could be fruitful to your own " +
            "self-discovery. Dig up stories of an " +
            "inspiring predecessor in your lineage or " +
            "think about ordering a kit from ancestry.com " +
            "or 23andme.com to find out what's REALLY " +
            "encoded in your genes. Looking at pictures " +
            "of bygone elders can remind you of the " +
            "forces who shaped you into the Libra you " +
            "are today. Connecting to the people who " +
            "came before you will give you a strong " +
            "sense of rootedness in the world—and maybe " +
            "even inspire a few retro fashion ideas."
    }
    if(astro === 8){
        horoscope = "Relationships could take a turn for " +
            "the sentimental today, catching your " +
            "cool-headed sign off guard. Don’t rush out " +
            "of the room if you get a little teary-eyed " +
            "or choked up. Showing your feelings is not " +
            "a sign of weakness—well, not with with " +
            "anyone you want in YOUR life, at least. " +
            "Your vulnerability could set the stage " +
            "for more meaningful discussions and possibly " +
            "a creative breakthrough. Disclaimer: This " +
            "is not your call to vent any stormy emotions " +
            "on people. If you feel a volcanic eruption " +
            "brewing, then definitely step out for some air!"
    }
    if(astro === 9){
        horoscope = "Your success this week comes from a " +
            "combination of hard work, organization and a " +
            "willingness to let the universe guide you. " +
            "The trick: knowing when to \"lean in\" and " +
            "when to let go. Keep your productivity " +
            "flowing while you also allow a greater design " +
            "to unfold—and trust that things truly are " +
            "working out in your favor. As Einstein said, " +
            "\"Reality is merely an illusion, albeit a " +
            "persistent one.\" Don't take everything at " +
            "face value today. So much more is possible " +
            "than you may initially think!"
    }
    if(astro === 10){
        horoscope = "On most days, your industrious sign " +
            "would rather lead from behind the scenes than " +
            "have the spotlight on you. Today, however, your " +
            "star is shining, so go ahead and accept the " +
            "accolades when others sing your praises. If " +
            "you feel like you've been passed over, it's " +
            "likely because you've hidden the best parts of " +
            "yourself. Open up and let people see your " +
            "authentic personality. Talk about what you love, " +
            "what lights you up and even what makes you " +
            "outraged. Connect to others on a more personal " +
            "and passionate level."
    }
    if(astro === 11){
        horoscope = "Trust your intuition today, especially " +
            "when it comes to a family member or loved one. " +
            "Your supportiveness is needed, so give it " +
            "generously. Today's starmap puts your " +
            "\"maternal instincts\" (even ones you didn't " +
            "know you had) in high gear. If you sense that " +
            "someone needs a hug or a little boost, offer " +
            "one. A friend may pop into your mind, or perhaps " +
            "you hear news that they're going through a rough " +
            "patch. Reach out and offer support, even if it's " +
            "just a few affirming words."
    }
    if(astro === 12){
        horoscope = "Be a leader within a group today. You " +
            "don't have to be a loudmouth ego-tripper to " +
            "shine—that's so not your style, Pisces. Express " +
            "your power with quiet authority, and by " +
            "presenting a completely different way of looking " +
            "at things. Don't be intimidated by people whose " +
            "vision is so much smaller than yours. As fellow " +
            "Pisces Albert Einstein said, \"Great spirits " +
            "have always encountered violent opposition " +
            "from mediocre minds.\" Let your soul soar!"
    }
    return horoscope;
}


function determineImage(x, y){
    var image = determineSign(x, y);
    return "images/" + image + ".png";
}


function onSubmit(){
    var name = document.getElementById("name").value;
    var x = parseInt(document.getElementById("month").value);
    var y = parseInt(document.getElementById("day").value);
    dateValidate(x, y);
    document.getElementById("sign").innerHTML = "Hi " + name + ". " + ifBirthday(y, x) + "Your sign " +
        "is " + determineSign(x, y) + "!";
    document.getElementById("image").src = determineImage(x, y);
    document.getElementById("horoscope").innerHTML = determineHoroscope(x, y);
}
