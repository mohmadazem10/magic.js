class wizard{

    name;
    #health;
    #mana;
    #power;
    #powerCost;

    constructor(name,health,mana,power,powerCost){
        this.name=name;
        this.#health=health;
        this.#mana=mana;
        this.#power=power;
        this.#powerCost=powerCost;
    }

    getInfo(){
        return `Name:${this.name}, Health :${this.#health} ,Mana : ${this.#mana},Power:${this.#power},Power Cost:${this.#powerCost}`;
    }

    setHealth(health){
        this.#health=health;
    }

    getHealth(){
        return this.#health;
    }

    setMana(mana){
        this.#mana=mana;
    }

    getMana(){
        return this.#mana;
    }

    getPower(){
        return this.#power;
    }
    setPower(power){
        this.#power=power;
    }
    getPowerCost(){
        return this.#powerCost;
    }
    setPowerCost(powerCost){
        this.#powerCost=powerCost;
    }
// the spells and duels works the same for all wizards thats why it's not in the specific type class
    castSpell(wizard){
        if(this.#health==0){
            console.log(`${this.name} was defeated`);
            return false;
        } else if((this.#health>0) && (this.#mana>=this.#powerCost)){
            console.log(`${this.name} casted a spell that cost him ${this.#powerCost} mana`);
            if(this.#power>(wizard.getHealth())){
                wizard.setHealth(0);
                console.log(`${wizard.name} lost ${wizard.getHealth()} health`);
            }else{
            wizard.setHealth(wizard.getHealth()-this.#power);
            console.log(`${wizard.name} lost ${this.#power} health`);
            }
            this.#mana-=this.#powerCost;
        }else{
            console.log(`Spell failed,${this.name} does not have enough mana`);
        }
        return true;
    }
}


class airWizard extends wizard{
    #type;
    constructor(name,health,mana,power,powerCost,type){
        super(name,health,mana,power,powerCost);
        this.#type=type;
    }
    getInfo(){
        return `Name:${this.name}, Health :${this.getHealth()} ,Mana : ${this.getMana()},Power:${this.getPower()},Power Cost:${this.getPowerCost()},Type:${this.#type}`;
    }
//here we put the specifics of the spell moving forward , moves and such 
    castASpell(wizard){
        if(this.castSpell(wizard)){
        console.log(`the spell ${this.name} casted on ${wizard.name} is an ${this.#type} spell in which he took his ability to breathe for 5 seconds`);
        return true;
        }
        else{
            return false;
        }
    }
}
    class fireWizard extends wizard{
    #type;
    constructor(name,health,mana,power,powerCost,type){
        super(name,health,mana,power,powerCost);
        this.#type=type;
    }
    getInfo(){
        return `Name:${this.name}, Health :${this.getHealth()} ,Mana : ${this.getMana()},Power:${this.getPower()},Power Cost:${this.getPowerCost()},Type:${this.#type}`;
    }

    castASpell(wizard){
        if(this.castSpell(wizard)){
        console.log(`the spell ${this.name} casted on ${wizard.name} is a ${this.#type} spell in which he set him on fire for 5 seconds`);
        return true;
        }
        else{
            return false;
        }
    }
}

function duel(wizard1,wizard2){
    while(wizard1.castASpell(wizard2) && wizard2.castASpell(wizard1)){
        continue;
    }
}

let wizard1=new airWizard("Loki",100,70,5,3,"air");
let wizard2=new fireWizard("zues",100,65,7,5,"fire");
duel(wizard1,wizard2);
