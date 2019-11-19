const adder = document.querySelector('.adder')
const chooser = document.querySelector('.chooser')
const addButton = document.querySelector('.add')
const saveButton = document.querySelector('.save')
const cancelButton = document.querySelector('.cancel')
const removeButton = document.querySelector('.remove')
const editButton = document.querySelector('.edit')
const input = document.querySelector('input')
const select = document.querySelector('select')
let flag = 'add'


addButton.onclick = function () {
  adder.style.display = 'block'
  chooser.style.display = 'none'
}

saveButton.onclick = function () {
  adder.style.display = 'none'
  chooser.style.display = 'block'
  if (flag == 'add') {
    select.innerHTML += `<option>${input.value}</option>`
  } else {
    select.selectedOptions[0].text = input.value
  }
}

cancelButton.onclick = function () {
  adder.style.display = 'none'
  chooser.style.display = 'block'
}


removeButton.onclick = function () {
  select.selectedOptions[0].remove()
}

editButton.onclick = function () {
  flag = 'edit'
  adder.style.display = 'block'
  chooser.style.display = 'none'
  input.value = select.selectedOptions[0].text

}



let newSelect = document.body.appendChild(document.createElement('select'))
newSelect.innerHTML = `
    <option>cat</option>
    <option>dog</option>
    <option>cow</option>`

function makeAnimalSelector() {
  const select = document.createElement('select')
  select.innerHTML = `
  <option>cat</option>
  <option>dog</option>
  <option>cow</option>`
  return select
}


class AnimalSelector {
  constructor() {
    const letterSelect = document.createElement('select')
    const letters = ['all', ...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`]
    letterSelect.innerHTML = letters.reduce((html, letter) => html + `<option>${letter}</option>`, '')
    this.letters = letterSelect

    const select = document.createElement('select')
    const animals =
      `aardvark,albatross,alligator,alpaca,ant,anteater,antelope,ape,armadillo,
  baboon,badger,barracuda,bat,bear,beaver,bee,bison,boar,buffalo,butterfly,
  camel,capybara,caribou,cassowary,cat,caterpillar,cattle,chamois,cheetah,
  chicken,chimpanzee,chinchilla,chough,clam,cobra,cockroach,cod,cormorant,
  coyote,crab,crane,crocodile,crow,curlew,deer,dinosaur,dog,dogfish,dolphin,
  donkey,dotterel,dove,dragonfly,duck,dugong,dunlin,eagle,echidna,eel,eland,
  elephant,elk,emu,falcon,ferret,finch,fish,flamingo,fly,fox,frog,gaur,gazelle,
  gerbil,giraffe,gnat,gnu,goat,goldfinch,goldfish,goose,gorilla,goshawk,
  grasshopper,grouse,guanaco,gull,hamster,hare,hawk,hedgehog,heron,herring,
  hippopotamus,hornet,horse,human,hummingbird,hyena,ibex,ibis,jackal,jaguar,jay,
  jellyfish,kangaroo,kingfisher,koala,kookabura,kouprey,kudu,lapwing,lark,lemur,
  leopard,lion,llama,lobster,locust,loris,louse,lyrebird,magpie,mallard,manatee,
  mandrill,mantis,marten,meerkat,mink,mole,mongoose,monkey,moose,mosquito,mouse,
  mule,narwhal,newt,nightingale,octopus,okapi,opossum,oryx,ostrich,otter,owl,
  oyster,panther,parrot,partridge,peafowl,pelican,penguin,pheasant,pig,pigeon,
  pony,porcupine,porpoise,quail,quelea,quetzal,rabbit,raccoon,rail,ram,rat,
  raven,red deer,red panda,reindeer,rhinoceros,rook,salamander,salmon,
  sand dollar,sandpiper,sardine,scorpion,seahorse,seal,shark,sheep,shrew,skunk,
  snail,snake,sparrow,spider,spoonbill,squid,squirrel,starling,stingray,
  stinkbug,stork,swallow,swan,tapir,tarsier,termite,tiger,toad,trout,turkey,
  turtle,viper,vulture,wallaby,walrus,wasp,weasel,whale,wildcat,wolf,wolverine,
  wombat,woodcock,woodpecker,worm,wren,yak,zebra`.split(/,\s*/)
    select.innerHTML = animals.reduce((html, animal) => html + `<option>${animal}</option>`, '')

    this.select = select
    this.letters.onchange = () => this.filter(this.letters.value.toLowerCase())

  }

  appendTo(domElement) {
    domElement.append(this.letters, this.select)
  }

  filter(letter) {
    let first = true
    for (let option of this.select) {
      console.log(letter)

      if (letter !== 'all' && option.text[0] !== letter) {
        option.style.display = 'none'
      } else {
        option.style.display = null
        if (first) {
          first = false
          option.selected = true
        }
      }
    }
  }
}



var as = new AnimalSelector
as.appendTo(document.body)

