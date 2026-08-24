// TODO før launch:
// - email: skift til firmamail, når den er klar
// - Web3Forms access key i OnboardingQuiz.astro (se ContactForm-mønster fra Frisør Sofie-projektet)

export const site = {
	business: {
		name: "Lethenborg & Co",
		legalName: "SL Consult",
		cvr: "46710150",
		tagline: "Hjemmesider bygget af én person, der selv står for hele arbejdet",
		phone: "81 72 62 62",
		email: "kontakt@lethenborg-co.dk",
		area: "Ry, Østjylland",
	},

	whatYouGet: [
		{
			title: "Skræddersyet, ikke en skabelon",
			description: "Hver hjemmeside bygges til din virksomhed specifikt — ikke en genbrugt template med nyt logo.",
		},
		{
			title: "Hurtig og teknisk solid",
			description: "Sider der loader hurtigt og er bygget med moderne værktøjer, ikke tunge plugin-tårne.",
		},
		{
			title: "Tilgængelig og SEO-klar",
			description: "Struktureret, så både brugere og søgemaskiner rent faktisk kan finde rundt.",
		},
		{
			title: "GDPR-korrekt fra start",
			description: "Cookie-samtykke og privatlivspolitik er en del af leverancen, ikke noget du selv skal opfinde bagefter.",
		},
	],

	process: [
		{
			step: "1",
			title: "Du svarer på nogle spørgsmål",
			description: "Et kort forløb om din virksomhed og hvad du har brug for — tager 2-3 minutter.",
		},
		{
			step: "2",
			title: "Du får et forslag og en pris",
			description: "Jeg vender tilbage personligt med et konkret bud, tilpasset det du har svaret.",
		},
		{
			step: "3",
			title: "Vi finpudser sammen",
			description: "Du får indflydelse undervejs, ikke bare et færdigt produkt smidt i hovedet på dig.",
		},
		{
			step: "4",
			title: "Sitet går i luften",
			description: "Hurtigt, testet, og uden bøvl for dig.",
		},
	],

	about: {
		heading: "Om Lethenborg & Co",
		paragraphs: [
			"Lethenborg & Co er et lille webbureau baseret i Ry, Østjylland. Ingen account managers, ingen mellemled — når du kontakter mig, taler du direkte med den, der rent faktisk bygger din hjemmeside.",
			"Jeg lægger vægt på det, der ofte bliver overset i webprojekter: hastighed, tilgængelighed og en teknisk fundament, der holder. Hver hjemmeside bygges med moderne værktøjer og testes grundigt, før den går i luften.",
			"Er du en lokal virksomhed, der vil have en hjemmeside, der rent faktisk virker — hurtig, professionel og lavet ordentligt fra bunden — så lad os tage en snak.",
		],
	},

	quiz: [
		{
			id: "company",
			question: "Hvad er navnet på din virksomhed?",
			type: "text",
			placeholder: "Din virksomhed A/S",
		},
		{
			id: "has_site",
			question: "Har du en hjemmeside i dag?",
			type: "radio",
			options: ["Ja, den skal opdateres", "Nej, det er første gang"],
		},
		{
			id: "goal",
			question: "Hvad er det primære formål med hjemmesiden?",
			type: "radio",
			options: ["Få flere kunder", "Bookinger/aftaler", "Fremstå professionel", "Sælge produkter online"],
		},
		{
			id: "size",
			question: "Hvor mange undersider forestiller du dig cirka?",
			type: "radio",
			options: ["Én side", "3-5 sider", "Flere end 5"],
		},
		{
			id: "content_ready",
			question: "Har du billeder og tekst klar, eller skal det udvikles?",
			type: "radio",
			options: ["Jeg har det klar", "Noget er klar, noget mangler", "Skal udvikles fra bunden"],
		},
		{
			id: "timeline",
			question: "Hvornår vil du gerne have sitet live?",
			type: "radio",
			options: ["Hurtigst muligt", "Inden for en måned", "Ingen hast"],
		},
	],
};
