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
    'O que importa se você tem olhos verdes... se o vermelho dos meus refletem o verde da natureza... - Bob Marley',
    'Reggae a vida com amor. - Ponto de Equilíbrio',
    'Não tenha medo, medo, medo, medo da escuridão. - Ponto de Equilíbrio',
    'Ama todos os seus irmãos, como o sol a nos iluminar. Sem nada pedir em troca, nem ao menos um olhar. - Ponto de Equilíbrio',
    'Todos nós temos uma infinidade de defeitos, mas também temos qualidades que não dá nem pra contar. - Ponto de Equilíbrio',
    'Saiba donde veio e saiba quem tu és e saiba quem tu fostes. - Ponto de Equilíbrio',
    'Jamais perca o seu equilíbrio, por mais forte que seja o vento da tempestade! - Ponto de Equilíbrio',
    'De vez em quando esqueço a importância de lutar. - Ponto de Equilíbrio',
    'Vamos nos aceitar, viver no bem estar. Vamos nos redimir, reconciliar. - Ponto de Equilíbrio',
    'A felicidade está em coisas simples, como em seus gestos de amor. - Ponto de Equilíbrio',
    'Acordo mais um dia ao seu lado, agradecendo sempre ao Senhor. - Ponto de Equilíbrio',
    'Só quero o que é meu, não quero o de mais ninguém. - Ponto de Equilíbrio',
    'O pobre quer ser rico, mas o rico não quer ser pobre, não. - Ponto de Equilíbrio',
    'A justiça de Jah chegará, ela tarda pra não falhar! - Ponto de Equilíbrio',
    'Ainda acredito que o bem pode se propagar, quando os homens deixarem o egoísmo de lado. - Ponto de Equilíbrio',
    'Eu conto os dias de voltar e poder te reencontrar. - Ponto de Equilíbrio',
    'Uma árvore sem raiz não fica de pé. - Ponto de Equilíbrio',
    'Burgueses capitalistas, são os filhos da Babilônia, filhos da escuridão. - Ponto de Equilíbrio',
    'Do que adianta saber sua história se não buscas a fé. - Ponto de Equilíbrio',
    'O amor que eu sinto por você, não há dinheiro no mundo que pague. - Ponto de Equilíbrio',
    'Com tanta discórdia pelo mundo afora, a beleza ainda reina. - Ponto de Equilíbrio',
    'Na palavra de Jah eu firmo o meu rochedo, o verdadeiro amor afasta todo medo. - Ponto de Equilíbrio',
    'Quando for ver o sol nascer, me chama! - Ponto de Equilíbrio',
    'Eu quero acordar com você, quero sorrir com você. - Ponto de Equilíbrio',
    'Só estou indo buscar o que Deus me deu, eu não quero roubar o que é seu. - Ponto de Equilíbrio',
    'Não vou gritar a felicidade, a inveja tem um sono leve, não quero para perto de mim. - Ponto de Equilíbrio',
    'Vamos rever nossos atos, nos curar com trabalho, pois a vida será melhor assim. - Ponto de Equilíbrio',
    'Respeite para ser respeitado, não viva essa ilusão. - Ponto de Equilíbrio',
    'Quem me dera saber todos os mistérios de uma mulher. - Ponto de Equilíbrio',
    'Eu tenho fé que meu caminho é no requinte do samba. Eu tenho a força e coragem de um guerreiro que ama. - Ponto de Equilíbrio',
    'E toda vez que eu parto, te levo sempre a meu lado. - Ponto de Equilíbrio'
];

module.exports = {
	async getReggaeRandomSentence() {
		const randomNumber = Math.floor(Math.random() * sentences.length)
		return sentences[randomNumber];
	},
};
