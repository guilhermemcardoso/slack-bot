const sentences = [
    'Não ganhe o mundo e perca sua alma; sabedoria é melhor que prata e ouro. - Bob Marley',
    'Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida. - Bob Marley',
    'É preciso que as diferenças não diminuam a amizade e que a amizade não diminua as diferenças. - Bob Marley',
    'Me chamam de idiota porque fumo maconha mas chamam de gênio quem inventou a bomba atômica. - Bob Marley',
    'Difícil não é lutar por aquilo que se quer, e sim desistir daquilo que se mais ama. Eu desisti. Mas não pense que foi por não ter coragem de lutar, e sim por não ter mais condições de sofrer. - Bob Marley',
    'A vida é uma viagem que precisa ser feita, nao importa tao ruim sao as estradas e acomodações. - Bob Marley',
    'Todos caem mas apenas os fracos continuam no chão... - Bob Marley',
    'Meu lar é sempre onde estou. Meu lar está na minha mente. Meu lar são meus pensamentos. - Bob Marley',
    'Nós não podemos viver de maneira negativa, então vamos dar espaço para o dia positivo. - Bob Marley',
    'Eu olho para dentro de mim, e não me importo com o que as pessoas fazem ou dizem. Eu me preocupo só com as coisas certas. - Bob Marley',
    'Às vezes construímos sonhos em cima de grandes pessoas... O tempo passa e descobrimos que grandes mesmo eram os sonhos e as pessoas pequenas demais para torná-los reais! - Bob Marley',
    'Não ligo que me olham da cabeça aos pés... porque nunca farão minha cabeça e nunca chegarão aos meus pés. - Bob Marley',
    'Saudade é um sentimento que, quando não cabe no coração, escorre pelos olhos. - Bob Marley',
    'Ideal seria que todas as pessoas soubessem amar o tanto que sabem fingir. - Bob Marley',
    'Se Deus criou as pessoas para amar e as coisas para cuidar, por que amamos as coisas e usamos as pessoas? - Bob Marley',
    'A vida é para quem topa qualquer parada. Não para quem para em qualquer topada. - Bob Marley',
    'Talvez as pessoas não me decepcionem. Talvez o problema seja eu, que espero muito delas. - Bob Marley',
    'Deus me enviou à terra com uma missão. Só Ele pode me deter, os homens nunca poderão. - Bob Marley',
    'Seja humilde, pois até o sol com toda sua grandeza se põe e deixa a lua brilhar. - Bob Marley',
    'O que importa se você tem olhos verdes... se o vermelho dos meus refletem o verde da natureza... - Bob Marley'
];

module.exports = {
	async getBobMarleyRandomSentence() {
		const randomNumber = Math.floor(Math.random() * sentences.length)
		return sentences[randomNumber];
	},
};
