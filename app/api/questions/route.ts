import {NextResponse} from "next/server";

const geographyQuestions: Question[] = [
    {
        "id": 1,
        "title": "Quelle est la plus grande ville du Canada ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Montréal", "isCorrect": false},
            {"id": 2, "title": "Vancouver", "isCorrect": false},
            {"id": 3, "title": "Toronto", "isCorrect": true},
            {"id": 4, "title": "Québec", "isCorrect": false}
        ]
    },
    {
        "id": 2,
        "title": "Quel est le point culminant de l'Afrique ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Mont Kilimandjaro", "isCorrect": true},
            {"id": 2, "title": "Mont Everest", "isCorrect": false},
            {"id": 3, "title": "Mont Blanc", "isCorrect": false},
            {"id": 4, "title": "Mont Aconcagua", "isCorrect": false}
        ]
    },
    {
        "id": 3,
        "title": "Quelle est la capitale de l'Australie ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Sydney", "isCorrect": false},
            {"id": 2, "title": "Canberra", "isCorrect": true},
            {"id": 3, "title": "Melbourne", "isCorrect": false},
            {"id": 4, "title": "Perth", "isCorrect": false}
        ]
    },
    {
        "id": 4,
        "title": "Quelle est la plus grande île du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Île de Pâques", "isCorrect": false},
            {"id": 2, "title": "Île de Vancouver", "isCorrect": false},
            {"id": 3, "title": "Groenland", "isCorrect": true},
            {"id": 4, "title": "Île de Madagascar", "isCorrect": false}
        ]
    },
    {
        "id": 5,
        "title": "Quel est le plus grand pays du monde en terme de superficie ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "États-Unis", "isCorrect": false},
            {"id": 2, "title": "Canada", "isCorrect": false},
            {"id": 3, "title": "Chine", "isCorrect": false},
            {"id": 4, "title": "Russie", "isCorrect": true}
        ]
    },
    {
        "id": 6,
        "title": "Quelle est la plus grande chaîne de montagnes du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Montagnes Rocheuses", "isCorrect": false},
            {"id": 2, "title": "Himalaya", "isCorrect": true},
            {"id": 3, "title": "Andes", "isCorrect": false},
            {"id": 4, "title": "Alpes", "isCorrect": false}
        ]
    },
    {
        "id": 7,
        "title": "Quelle est la plus grande île de la Méditerranée ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Corse", "isCorrect": false},
            {"id": 2, "title": "Sicile", "isCorrect": true},
            {"id": 3, "title": "Sardaigne", "isCorrect": false},
            {"id": 4, "title": "Crète", "isCorrect": false}
        ]
    },
    {
        "id": 8,
        "title": "Quel est le plus grand lac d'Afrique ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Lac Victoria", "isCorrect": true},
            {"id": 2, "title": "Lac Tanganyika", "isCorrect": false},
            {"id": 3, "title": "Lac Malawi", "isCorrect": false},
            {"id": 4, "title": "Lac Turkana", "isCorrect": false}
        ]
    },
    {
        "id": 9,
        "title": "Quel est le plus grand désert du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Désert de Gobi", "isCorrect": false},
            {"id": 2, "title": "Désert du Sahara", "isCorrect": true},
            {"id": 3, "title": "Désert de Mojave", "isCorrect": false},
            {"id": 4, "title": "Désert d'Atacama", "isCorrect": false}
        ]
    },
    {
        "id": 10,
        "title": "Quelle est la plus haute cascade du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Chutes d'Iguazu", "isCorrect": false},
            {"id": 2, "title": "Chutes de Victoria", "isCorrect": false},
            {"id": 3, "title": "Chutes du Niagara", "isCorrect": false},
            {"id": 4, "title": "Chutes d'Angel", "isCorrect": true}
        ]
    },
    {
        "id": 11,
        "title": "Quelle est la capitale du Brésil ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Rio de Janeiro", "isCorrect": false},
            {"id": 2, "title": "Brasília", "isCorrect": true},
            {"id": 3, "title": "São Paulo", "isCorrect": false},
            {"id": 4, "title": "Salvador", "isCorrect": false}
        ]
    },
    {
        "id": 12,
        "title": "Quel est le plus grand pays du monde en termes de superficie ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "États-Unis", "isCorrect": false},
            {"id": 2, "title": "Canada", "isCorrect": false},
            {"id": 3, "title": "Russie", "isCorrect": true},
            {"id": 4, "title": "Chine", "isCorrect": false}
        ]
    },
    {
        "id": 13,
        "title": "Quelle est la plus grande ville d'Australie ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Melbourne", "isCorrect": false},
            {"id": 2, "title": "Brisbane", "isCorrect": false},
            {"id": 3, "title": "Perth", "isCorrect": false},
            {"id": 4, "title": "Sydney", "isCorrect": true}
        ]
    },
    {
        "id": 14,
        "title": "Quel est le plus grand archipel du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Îles Canaries", "isCorrect": false},
            {"id": 2, "title": "Îles Fidji", "isCorrect": false},
            {"id": 3, "title": "Îles Hawaï", "isCorrect": false},
            {"id": 4, "title": "Indonésie", "isCorrect": true}
        ]
    },
    {
        "id": 15,
        "title": "Quel est le plus grand pays d'Amérique du Sud ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Brésil", "isCorrect": true},
            {"id": 2, "title": "Argentine", "isCorrect": false},
            {"id": 3, "title": "Pérou", "isCorrect": false},
            {"id": 4, "title": "Colombie", "isCorrect": false}
        ]
    },
    {
        "id": 16,
        "title": "Quelle est la plus grande ville du Canada ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Toronto", "isCorrect": true},
            {"id": 2, "title": "Vancouver", "isCorrect": false},
            {"id": 3, "title": "Montréal", "isCorrect": false},
            {"id": 4, "title": "Ottawa", "isCorrect": false}
        ]
    },
    {
        "id": 17,
        "title": "Quelle est la capitale de l'Inde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Mumbai", "isCorrect": false},
            {"id": 2, "title": "Delhi", "isCorrect": true},
            {"id": 3, "title": "Kolkata", "isCorrect": false},
            {"id": 4, "title": "Chennai", "isCorrect": false}
        ]
    },
    {
        "id": 18,
        "title": "Quel est le plus grand désert du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Désert du Sahara", "isCorrect": true},
            {"id": 2, "title": "Désert du Kalahari", "isCorrect": false},
            {"id": 3, "title": "Désert de Gobi", "isCorrect": false},
            {"id": 4, "title": "Désert d'Atacama", "isCorrect": false}
        ]
    },
    {
        "id": 19,
        "title": "Quel est le pays le plus peuplé du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Inde", "isCorrect": false},
            {"id": 2, "title": "États-Unis", "isCorrect": false},
            {"id": 3, "title": "Chine", "isCorrect": true},
            {"id": 4, "title": "Brésil", "isCorrect": false}
        ]
    },
    {
        "id": 20,
        "title": "Quelle est la plus haute montagne du monde ?",
        "multiple": false,
        "answers": [
            {"id": 1, "title": "Mont Everest", "isCorrect": true},
            {"id": 2, "title": "Mont Blanc", "isCorrect": false},
            {"id": 3, "title": "Mont Kilimandjaro", "isCorrect": false},
            {"id": 4, "title": "Mont McKinley", "isCorrect": false}
        ]
    }
]

export async function GET(request: Request) {
    return new NextResponse(JSON.stringify(getRandomQuestion()), {headers: {"Content-Type": "application/json"}})
}

export function getQuestions(): Question[] {
    return geographyQuestions;
}

export function getRandomQuestion() {
    return geographyQuestions[Math.floor(Math.random() * (geographyQuestions.length))]
}