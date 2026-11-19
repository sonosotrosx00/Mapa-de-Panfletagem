// Dados das regiões de panfletagem (gerado a partir da planilha e dos mapas)
window.SEMANAS = [
 {
  "n": 1,
  "dia": "Seg",
  "diaNome": "Segunda-feira",
  "data": "23/11",
  "regioes": [
   "01",
   "02",
   "03",
   "04",
   "05",
   "06",
   "07",
   "45",
   "51"
  ]
 },
 {
  "n": 2,
  "dia": "Ter",
  "diaNome": "Terça-feira",
  "data": "24/11",
  "regioes": [
   "08",
   "09",
   "10",
   "11",
   "12",
   "13",
   "46"
  ]
 },
 {
  "n": 3,
  "dia": "Qua",
  "diaNome": "Quarta-feira",
  "data": "25/11",
  "regioes": [
   "14",
   "15",
   "16",
   "17",
   "18",
   "19",
   "20",
   "31",
   "47",
   "52"
  ]
 },
 {
  "n": 4,
  "dia": "Qui",
  "diaNome": "Quinta-feira",
  "data": "26/11",
  "regioes": [
   "21",
   "22",
   "32",
   "33",
   "35",
   "36",
   "37",
   "40",
   "42",
   "44"
  ]
 },
 {
  "n": 5,
  "dia": "Sex",
  "diaNome": "Sexta-feira",
  "data": "27/11",
  "regioes": [
   "24",
   "25",
   "34",
   "38",
   "39",
   "41",
   "43",
   "48",
   "49",
   "50",
   "55"
  ]
 },
 {
  "n": 6,
  "dia": "Seg",
  "diaNome": "Segunda-feira",
  "data": "30/11",
  "regioes": [
   "26",
   "27",
   "28",
   "29",
   "30",
   "53",
   "54"
  ]
 }
];
// logradouros: gerados a partir do OpenStreetMap cruzado com o shapefile das zonas
window.REGIOES = [
 {
  "id": "01",
  "nome": "Região 01",
  "semana": 1,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4749,
  "panfletos": 2849,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Almirante Tamandaré",
    "perimetro": "Rua Doutor Assis e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Rua Avertano Rocha",
    "perimetro": "Avenida 16 de Novembro e Rua Ângelo Custódio"
   },
   {
    "logradouro": "Rua Cametá",
    "perimetro": "Travessa Major Joaquim Távora e Travessa Alenquer"
   },
   {
    "logradouro": "Rua Cesário Alvim",
    "perimetro": "Avenida Bernardo Sayão e Avenida Dezesseis de Novembro"
   },
   {
    "logradouro": "Rua Doutor Assis",
    "perimetro": "Rua Padre Champagnat e Avenida Almirante Tamandaré"
   },
   {
    "logradouro": "Rua Doutor Malcher",
    "perimetro": "Travessa de Breves e Rua Padre Champagnat"
   },
   {
    "logradouro": "Rua Doutor Rodrigues dos Santos",
    "perimetro": "Avenida Almirante Tamandaré e Rua João Diogo"
   },
   {
    "logradouro": "Rua Osvaldo de Caldas Brito",
    "perimetro": "Avenida Bernardo Sayão e Avenida Dezesseis de Novembro"
   },
   {
    "logradouro": "Rua Porto Palmeira",
    "perimetro": "Rua São Boaventura e fim da via"
   },
   {
    "logradouro": "Rua Siqueira Mendes",
    "perimetro": "Rua Padre Champagnat e Travessa Dom Bosco"
   },
   {
    "logradouro": "Rua São Boaventura",
    "perimetro": "Beco do Carmo e Rua Doutor Assis"
   },
   {
    "logradouro": "Rua Triunvirato",
    "perimetro": "Rua do Arsenal e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Rua Veiga Cabral",
    "perimetro": "Avenida Bernardo Sayão e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Rua de Óbidos",
    "perimetro": "Rua do Arsenal e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Rua Âgnelo Custódio",
    "perimetro": "Rua de Óbidos e Alameda Praça Amazonas"
   },
   {
    "logradouro": "Rua Ângelo Custódio",
    "perimetro": "Rua João Diogo e Rua Âgnelo Custódio"
   },
   {
    "logradouro": "Travessa Alenquer",
    "perimetro": "Rua São Boaventura e Rua Doutor Rodrigues dos Santos"
   },
   {
    "logradouro": "Travessa Bom Jardim",
    "perimetro": "Rua Osvaldo de Caldas Brito e Avenida Almirante Tamandaré"
   },
   {
    "logradouro": "Travessa Capitão Pedro Albuquerque",
    "perimetro": "Rua Doutor Assis e Rua Ângelo Custódio"
   },
   {
    "logradouro": "Travessa Carlos de Carvalho",
    "perimetro": "Avenida Almirante Tamandaré e Rua Osvaldo de Caldas Brito"
   },
   {
    "logradouro": "Travessa Dom Bosco",
    "perimetro": "Porto Beiradão e Rua Doutor Assis"
   },
   {
    "logradouro": "Travessa Félix Roque",
    "perimetro": "Rua Tomázia Perdigão e limite da região"
   },
   {
    "logradouro": "Travessa Gurupá",
    "perimetro": "Avenida Almirante Tamandaré e Rua São Boaventura"
   },
   {
    "logradouro": "Travessa Honório José dos Santos",
    "perimetro": "Rua Osvaldo de Caldas Brito"
   },
   {
    "logradouro": "Travessa Major Joaquim Távora",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Travessa Monte Alegre",
    "perimetro": "Rua Osvaldo de Caldas Brito e Avenida Almirante Tamandaré"
   },
   {
    "logradouro": "Travessa Praça Amazonas",
    "perimetro": "Rua Cesário Alvim e Rua Osvaldo de Caldas Brito"
   },
   {
    "logradouro": "Travessa de Breves",
    "perimetro": "Rua Osvaldo de Caldas Brito e Avenida Almirante Tamandaré"
   },
   {
    "logradouro": "Alameda Macedônia",
    "perimetro": "Avenida Almirante Tamandaré e Rua de Óbidos"
   },
   {
    "logradouro": "Alameda Maria Luiza",
    "perimetro": "Travessa Carlos de Carvalho e Rua Âgnelo Custódio"
   },
   {
    "logradouro": "Alameda Praça Amazonas",
    "perimetro": "Rua Âgnelo Custódio e Rua Cesário Alvim"
   },
   {
    "logradouro": "Alameda São José",
    "perimetro": "Travessa de Breves e fim da via"
   },
   {
    "logradouro": "Passagem Lopo de Castro",
    "perimetro": "Travessa de Breves e Travessa Monte Alegre"
   },
   {
    "logradouro": "Passagem Marcílio Dias",
    "perimetro": "Rua Cesário Alvim e fim da via"
   },
   {
    "logradouro": "Passagem Moura Carvalho",
    "perimetro": "Avenida Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Passagem Nélio Lobato",
    "perimetro": "Travessa Carlos de Carvalho e Travessa Bom Jardim"
   },
   {
    "logradouro": "Passagem Santa Fé",
    "perimetro": "Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem da Luz",
    "perimetro": "Travessa de Breves e Rua do Arsenal"
   },
   {
    "logradouro": "Vila Abelardo Conduru",
    "perimetro": "Travessa Carlos de Carvalho e fim da via"
   },
   {
    "logradouro": "Vila Almeida",
    "perimetro": "Travessa Praça Amazonas e fim da via"
   },
   {
    "logradouro": "Vila Dom Bôsco",
    "perimetro": "Rua de Óbidos e Passagem Lopo de Castro"
   },
   {
    "logradouro": "Vila Elza",
    "perimetro": "Travessa Capitão Pedro Albuquerque e Travessa Gurupá"
   },
   {
    "logradouro": "Vila Marinha",
    "perimetro": "Viela Quebec e Rua de Óbidos"
   },
   {
    "logradouro": "Vila Nossa Senhora da Conceição",
    "perimetro": "Rua Cesário Alvim e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Vila Porto do Sal",
    "perimetro": "Beco do Carmo e limite da região"
   },
   {
    "logradouro": "Vila Sabonete",
    "perimetro": "Passagem Marcílio Dias e fim da via"
   },
   {
    "logradouro": "Vila Vitória",
    "perimetro": "Vila Elza e Avenida Almirante Tamandaré"
   },
   {
    "logradouro": "Conjunto Antônia Jacob",
    "perimetro": "Rua de Óbidos e fim da via"
   },
   {
    "logradouro": "Beco do Carmo",
    "perimetro": "Travessa Dom Bosco e Rua São Boaventura"
   },
   {
    "logradouro": "Porto Beiradão",
    "perimetro": "Beco do Carmo e limite da região"
   },
   {
    "logradouro": "Praça Amazonas",
    "perimetro": "Travessa Praça Amazonas e Avenida Dezesseis de Novembro"
   },
   {
    "logradouro": "Praça Veiga Cabral",
    "perimetro": "Travessa de Breves e Rua Cesário Alvim"
   },
   {
    "logradouro": "Praça do Carmo",
    "perimetro": "Travessa Dom Bosco e Travessa Major Joaquim Távora"
   },
   {
    "logradouro": "Viela Cantal",
    "perimetro": "Travessa de Breves e fim da via"
   },
   {
    "logradouro": "Viela Helena",
    "perimetro": "Travessa Carlos de Carvalho e fim da via"
   },
   {
    "logradouro": "Viela Quebec",
    "perimetro": "Rua de Óbidos e Vila Marinha"
   }
  ]
 },
 {
  "id": "02",
  "nome": "Região 02",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3119,
  "panfletos": 1871,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Almirante Tamandaré",
    "perimetro": "Rua Doutor Assis e Rua do Arsenal"
   },
   {
    "logradouro": "Avenida Bernardo Sayão",
    "perimetro": "Rua do Arsenal e limite da região"
   },
   {
    "logradouro": "Rua Doutor Assis",
    "perimetro": "Avenida Almirante Tamandaré e Passagem Carneiro da Rocha"
   },
   {
    "logradouro": "Rua Osvaldo de Caldas Brito",
    "perimetro": "Avenida Bernardo Sayão e Portal da Amazônia"
   },
   {
    "logradouro": "Rua do Arsenal",
    "perimetro": "Avenida Almirante Tamandaré e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Rua dos Mundurucus",
    "perimetro": "Portal da Amazônia e Travessa de Breves"
   },
   {
    "logradouro": "Rua dos Tamoios",
    "perimetro": "Portal da Amazônia e Travessa de Breves"
   },
   {
    "logradouro": "Travessa de Breves",
    "perimetro": "Rua Osvaldo de Caldas Brito e Rua dos Mundurucus"
   },
   {
    "logradouro": "Alameda Mundurucus",
    "perimetro": "Rua dos Mundurucus e Passagem Moura Carvalho"
   },
   {
    "logradouro": "Passagem Carneiro da Rocha",
    "perimetro": "Rua do Arsenal e fim da via"
   },
   {
    "logradouro": "Passagem Moura Carvalho",
    "perimetro": "Vila Nova e fim da via"
   },
   {
    "logradouro": "Passagem Santa Luzia",
    "perimetro": "Rua dos Tamoios e Portal da Amazônia"
   },
   {
    "logradouro": "Vila Cabralzinho",
    "perimetro": "Rua do Arsenal e fim da via"
   },
   {
    "logradouro": "Vila Carneiro",
    "perimetro": "Passagem Santa Luzia e fim da via"
   },
   {
    "logradouro": "Vila Martins",
    "perimetro": "Avenida Bernardo Sayão e Portal da Amazônia"
   },
   {
    "logradouro": "Vila Nova",
    "perimetro": "Passagem Moura Carvalho e Rua dos Tamoios"
   },
   {
    "logradouro": "Vila Nádia",
    "perimetro": "Rua dos Tamoios e Passagem Santa Luzia"
   },
   {
    "logradouro": "Vila Rio",
    "perimetro": "Portal da Amazônia e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Vila São José",
    "perimetro": "Rua dos Tamoios e fim da via"
   },
   {
    "logradouro": "Portal da Amazônia",
    "perimetro": "Rua do Arsenal e Avenida Bernardo Sayão"
   }
  ]
 },
 {
  "id": "03",
  "nome": "Região 03",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2747,
  "panfletos": 1648,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Bernardo Sayão",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Rua dos Mundurucus"
   },
   {
    "logradouro": "Avenida Engenheiro Fernando Guilhon",
    "perimetro": "Avenida Bernardo Sayão e Passagem Almeida"
   },
   {
    "logradouro": "Rua Caripunas Beira Mar",
    "perimetro": "Avenida Bernardo Sayão e limite da região"
   },
   {
    "logradouro": "Rua São Benedito",
    "perimetro": "Passagem Beira Mar e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Rua Timbiras Beira Mar",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Rua dos Caripunas",
    "perimetro": "Avenida Bernardo Sayão e Travessa de Breves"
   },
   {
    "logradouro": "Rua dos Pariquis",
    "perimetro": "Passagem Beira Mar e Travessa de Breves"
   },
   {
    "logradouro": "Rua dos Timbiras",
    "perimetro": "Travessa de Breves e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Travessa de Breves",
    "perimetro": "Rua dos Mundurucus e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Passagem Beira Mar",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem Bom Jardim",
    "perimetro": "Vila Jardim e Rua dos Mundurucus"
   },
   {
    "logradouro": "Passagem Elite",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Rua dos Timbiras"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Fátima",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Rua dos Timbiras"
   },
   {
    "logradouro": "Vila Caripunas",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Vila Jardim",
    "perimetro": "Avenida Bernardo Sayão e Passagem Bom Jardim"
   },
   {
    "logradouro": "Vila Manteiga",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Vila Nossa Senhora Auxiliadora",
    "perimetro": "Vila Santa Lúcia e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Vila Santa Lúcia",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Rua dos Timbiras"
   },
   {
    "logradouro": "Porto Boa Viagem",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   }
  ]
 },
 {
  "id": "04",
  "nome": "Região 04",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 4580,
  "panfletos": 2748,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Bernardo Sayão",
    "perimetro": "Avenida Roberto Camelier e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Rua São Silvestre",
    "perimetro": "Travessa Bom Jardim e fim da via"
   },
   {
    "logradouro": "Rua do Condomínio",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Travessa Bom Jardim",
    "perimetro": "Travessa Quintino Bocaiuva e Passagem Paulo Roberto"
   },
   {
    "logradouro": "Travessa Monte Alegre",
    "perimetro": "Passagem Monte Alegre e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Travessa Quintino Bocaiuva",
    "perimetro": "Passagem Comunitária e Quadra A1"
   },
   {
    "logradouro": "Alameda Gurjão",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e fim da via"
   },
   {
    "logradouro": "Passagem Allan Kardec",
    "perimetro": "Passagem Cabo Leão e Passagem Nossa Senhora das Graças"
   },
   {
    "logradouro": "Passagem Almeida",
    "perimetro": "Passagem Jacó Ramo I e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Passagem Cabo Leão",
    "perimetro": "Passagem Santa Ana e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Cacau",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Passagem Camapu",
    "perimetro": "Passagem Jacob e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Esperança",
    "perimetro": "Travessa Bom Jardim e Passagem Monte Alegre"
   },
   {
    "logradouro": "Passagem Gaiapós",
    "perimetro": "Avenida Roberto Camelier e Passagem Guarani"
   },
   {
    "logradouro": "Passagem Guarani",
    "perimetro": "Passagem Comunitária e Passagem Gaiapós"
   },
   {
    "logradouro": "Passagem Helena Dias",
    "perimetro": "Passagem Jacó Ramo I e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Integração",
    "perimetro": "Passagem Comunitária e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Passagem Iracema",
    "perimetro": "Quadra G (Conjunto Radional II) e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Passagem Jacob",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Passagem Camapu"
   },
   {
    "logradouro": "Passagem Jacó Ramo I",
    "perimetro": "Passagem Jacob e Passagem Helena Dias"
   },
   {
    "logradouro": "Passagem Lauro Malcher",
    "perimetro": "Passagem Iracema e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Passagem Liberdade",
    "perimetro": "Passagem Monte Alegre e Travessa Bom Jardim"
   },
   {
    "logradouro": "Passagem Limoeiro",
    "perimetro": "Avenida Bernardo Sayão e Travessa Bom Jardim"
   },
   {
    "logradouro": "Passagem Marujo",
    "perimetro": "Passagem Lauro Malcher e fim da via"
   },
   {
    "logradouro": "Passagem Monte Alegre",
    "perimetro": "Travessa Monte Alegre e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Passagem Nossa Senhora das Graças",
    "perimetro": "Avenida Bernardo Sayão e Passagem Allan Kardec"
   },
   {
    "logradouro": "Passagem Radional",
    "perimetro": "Quadra B2 e Quadra G (Conjunto Radional II)"
   },
   {
    "logradouro": "Passagem Radional II",
    "perimetro": "Passagem Nossa Senhora das Graças e Passagem Radional"
   },
   {
    "logradouro": "Passagem Santo Onofre",
    "perimetro": "Passagem Limoeiro e Rua São Silvestre"
   },
   {
    "logradouro": "Passagem São Miguel",
    "perimetro": "Avenida Bernardo Sayão e Passagem Jacob"
   },
   {
    "logradouro": "Passagem São Silvestre",
    "perimetro": "Rua São Silvestre e Passagem Monte Alegre"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Passagem Monte Alegre e Passagem Vitória"
   },
   {
    "logradouro": "Passagem Vitória",
    "perimetro": "Avenida Roberto Camelier e Passagem Cabo Leão"
   },
   {
    "logradouro": "Passagem da Luta",
    "perimetro": "Travessa Bom Jardim e Passagem Monte Alegre"
   },
   {
    "logradouro": "Vila São Silvestre",
    "perimetro": "Passagem São Silvestre e Passagem Monte Alegre"
   },
   {
    "logradouro": "Vila Trindade",
    "perimetro": "Passagem São Miguel e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Vila da Paz",
    "perimetro": "Passagem Monte Alegre e Travessa Bom Jardim"
   },
   {
    "logradouro": "Quadra A1",
    "perimetro": "Quadra B2 e Quadra G (Conjunto Radional II)"
   },
   {
    "logradouro": "Quadra B2",
    "perimetro": "Passagem Radional e Quadra A1"
   },
   {
    "logradouro": "Quadra C2",
    "perimetro": "Passagem Nossa Senhora das Graças e Quadra B2"
   },
   {
    "logradouro": "Quadra E",
    "perimetro": "Quadra A1 e Passagem Radional"
   },
   {
    "logradouro": "Quadra G (Conjunto Radional II)",
    "perimetro": "Passagem Radional e Quadra A1"
   },
   {
    "logradouro": "Quadra e",
    "perimetro": "Passagem Iracema e Passagem Radional"
   }
  ]
 },
 {
  "id": "05",
  "nome": "Região 05",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 4156,
  "panfletos": 2494,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Engenheiro Fernando Guilhon",
    "perimetro": "Travessa de Breves e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Rua Honório José dos Santos",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Rua São Miguel",
    "perimetro": "Travessa Bom Jardim e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Rua São Silvestre",
    "perimetro": "Travessa Bom Jardim e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Travessa Bom Jardim",
    "perimetro": "Passagem da Luta e Rua dos Timbiras"
   },
   {
    "logradouro": "Travessa Carlos Carvalho",
    "perimetro": "Rua São Silvestre e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Travessa Carlos de Carvalho",
    "perimetro": "Rua dos Timbiras e Rua São Miguel"
   },
   {
    "logradouro": "Travessa Honório José dos Santos, jurunas",
    "perimetro": "Rua dos Timbiras e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Travessa Monte Alegre",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Rua dos Timbiras"
   },
   {
    "logradouro": "Travessa Quintino Bocaiuva",
    "perimetro": "Avenida Roberto Camelier e Passagem Comunitária"
   },
   {
    "logradouro": "Passagem Carlos Alberto",
    "perimetro": "Rua São Miguel e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Passagem Comunitária",
    "perimetro": "Travessa Quintino Bocaiuva e Travessa Bom Jardim"
   },
   {
    "logradouro": "Passagem Doutor Brito",
    "perimetro": "Passagem Comunitária e fim da via"
   },
   {
    "logradouro": "Passagem Doutor Gonçalves",
    "perimetro": "Travessa Carlos Carvalho e Travessa Bom Jardim"
   },
   {
    "logradouro": "Passagem Doutor Veiga",
    "perimetro": "Passagem Comunitária e Rua Honório José dos Santos"
   },
   {
    "logradouro": "Passagem Guajará",
    "perimetro": "Travessa Bom Jardim e fim da via"
   },
   {
    "logradouro": "Passagem Marabá",
    "perimetro": "Rua São Silvestre e Passagem São Vicente de Paula"
   },
   {
    "logradouro": "Passagem Paulo Roberto",
    "perimetro": "Travessa Carlos Carvalho e Travessa Bom Jardim"
   },
   {
    "logradouro": "Passagem Santo Antônio",
    "perimetro": "Rua Honório José dos Santos e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Passagem São Domingos",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem São Vicente de Paula",
    "perimetro": "Travessa Bom Jardim e Travessa Carlos Carvalho"
   },
   {
    "logradouro": "Passagem Tapatinga",
    "perimetro": "Rua São Silvestre e Passagem Doutor Veiga"
   },
   {
    "logradouro": "Passagem Tupã",
    "perimetro": "Travessa Bom Jardim e Rua São Silvestre"
   },
   {
    "logradouro": "Passagem Vila Nova",
    "perimetro": "Passagem Marabá e Passagem Tapatinga"
   },
   {
    "logradouro": "Vila Nazaré",
    "perimetro": "Passagem Tupã e Rua São Silvestre"
   },
   {
    "logradouro": "Vila Osvaldina",
    "perimetro": "Travessa Honório José dos Santos, jurunas e fim da via"
   }
  ]
 },
 {
  "id": "06",
  "nome": "Região 06",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2492,
  "panfletos": 1495,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Engenheiro Fernando Guilhon",
    "perimetro": "Avenida Roberto Camelier e Travessa Doutor Moraes"
   },
   {
    "logradouro": "Avenida Roberto Camelier",
    "perimetro": "Rua dos Timbiras e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Rua São Miguel",
    "perimetro": "Avenida Roberto Camelier e Travessa Doutor Moraes"
   },
   {
    "logradouro": "Rua São Silvestre",
    "perimetro": "Avenida Roberto Camelier e fim da via"
   },
   {
    "logradouro": "Travessa Padre Eutíquio",
    "perimetro": "Passagem Pinheiro e Rua dos Timbiras"
   },
   {
    "logradouro": "Travessa Quintino Bocaiuva",
    "perimetro": "Travessa Padre Eutíquio e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Travessa dos Apinagés",
    "perimetro": "Rua dos Timbiras e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Travessa dos Tupinambás",
    "perimetro": "Rua dos Timbiras e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Alameda Maranata",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e fim da via"
   },
   {
    "logradouro": "Alameda Rodrigues Pinajé",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e limite da região"
   },
   {
    "logradouro": "Passagem Dolores",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e fim da via"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Travessa dos Apinagés e Vila Rezende"
   },
   {
    "logradouro": "Vila Alzira",
    "perimetro": "Travessa Padre Eutíquio e fim da via"
   },
   {
    "logradouro": "Vila Gentil",
    "perimetro": "Travessa dos Tupinambás e fim da via"
   },
   {
    "logradouro": "Vila Mimosa Bechara",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Vila Rezende",
    "perimetro": "Passagem São João e Rua São Miguel"
   },
   {
    "logradouro": "Vila Rodrigues",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Conjunto Manoel Everdosa",
    "perimetro": "Rua São Miguel e fim da via"
   }
  ]
 },
 {
  "id": "07",
  "nome": "Região 07",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 4445,
  "panfletos": 2667,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Roberto Camelier",
    "perimetro": "Travessa Quintino Bocaiuva e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Rua Honório José dos Santos",
    "perimetro": "Travessa Quintino Bocaiuva e Rua Nova Primeira"
   },
   {
    "logradouro": "Rua Nova II",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Rua Nova Primeira",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Rua dos Tambés",
    "perimetro": "Passagem Cabo Leão e Travessa dos Apinagés"
   },
   {
    "logradouro": "Travessa Quintino Bocaiuva",
    "perimetro": "Passagem Comunitária e Travessa dos Apinagés"
   },
   {
    "logradouro": "Travessa dos Apinagés",
    "perimetro": "Travessa Quintino Bocaiuva e Passagem Gaiapós"
   },
   {
    "logradouro": "Travessa dos Tupinambás",
    "perimetro": "Travessa Quintino Bocaiuva e Passagem Gaiapós"
   },
   {
    "logradouro": "Passagem Allan Kardec",
    "perimetro": "Avenida Roberto Camelier e Passagem Cabo Leão"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Travessa dos Tupinambás e fim da via"
   },
   {
    "logradouro": "Passagem Felicidade",
    "perimetro": "Rua Nova Primeira e Rua dos Tambés"
   },
   {
    "logradouro": "Passagem Gaiapós",
    "perimetro": "Passagem São Judas Tadeu e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Passagem Júlio Paulino",
    "perimetro": "Avenida Roberto Camelier e Passagem Cabo Leão"
   },
   {
    "logradouro": "Passagem Lauro Malcher",
    "perimetro": "Travessa dos Apinagés e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Passagem Liberdade 1",
    "perimetro": "Avenida Roberto Camelier e fim da via"
   },
   {
    "logradouro": "Passagem Motorizada",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Passagem Nazaré",
    "perimetro": "Rua dos Tambés e Passagem Lauro Malcher"
   },
   {
    "logradouro": "Passagem Nova",
    "perimetro": "Travessa Quintino Bocaiuva e Rua Nova II"
   },
   {
    "logradouro": "Passagem Republicana",
    "perimetro": "Rua Nova II e Rua Nova Primeira"
   },
   {
    "logradouro": "Passagem Santa Ana",
    "perimetro": "Passagem Cabo Leão e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Passagem Santa Terezinha",
    "perimetro": "Travessa dos Tupinambás e limite da região"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Passagem Lauro Malcher e Passagem Gaiapós"
   },
   {
    "logradouro": "Passagem São Judas Tadeu",
    "perimetro": "Passagem Lauro Malcher e Passagem Gaiapós"
   },
   {
    "logradouro": "Passagem São Pedro",
    "perimetro": "Avenida Roberto Camelier e Passagem São Judas Tadeu"
   },
   {
    "logradouro": "Vila Jesus de Nazaré",
    "perimetro": "Passagem Lauro Malcher e fim da via"
   }
  ]
 },
 {
  "id": "45",
  "nome": "Região 45",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 5095,
  "panfletos": 3057,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Roberto Camelier",
    "perimetro": "Avenida Conselheiro Furtado e limite da região"
   },
   {
    "logradouro": "Rua dos Caripunas",
    "perimetro": "Travessa de Breves e Travessa dos Apinagés"
   },
   {
    "logradouro": "Rua dos Mundurucus",
    "perimetro": "Travessa de Breves e Travessa dos Apinagés"
   },
   {
    "logradouro": "Rua dos Pariquis",
    "perimetro": "Travessa dos Apinagés e Travessa de Breves"
   },
   {
    "logradouro": "Rua dos Tamoios",
    "perimetro": "Travessa de Breves e Travessa dos Apinagés"
   },
   {
    "logradouro": "Rua dos Timbiras",
    "perimetro": "Travessa de Breves e Travessa dos Apinagés"
   },
   {
    "logradouro": "Travessa Bom Jardim",
    "perimetro": "Rua dos Timbiras e Rua Osvaldo de Caldas Brito"
   },
   {
    "logradouro": "Travessa Carlos de Carvalho",
    "perimetro": "Rua Osvaldo de Caldas Brito e Rua dos Timbiras"
   },
   {
    "logradouro": "Travessa Honório José dos Santos",
    "perimetro": "Rua Osvaldo de Caldas Brito e Rua dos Pariquis"
   },
   {
    "logradouro": "Travessa Honório José dos Santos, jurunas",
    "perimetro": "Rua dos Pariquis e Rua dos Timbiras"
   },
   {
    "logradouro": "Travessa Monte Alegre",
    "perimetro": "Rua dos Timbiras e Rua Osvaldo de Caldas Brito"
   },
   {
    "logradouro": "Travessa dos Tupinambás",
    "perimetro": "Rua dos Timbiras e Avenida Conselheiro Furtado"
   },
   {
    "logradouro": "Alameda Solipa",
    "perimetro": "Rua dos Tamoios e Rua Osvaldo de Caldas Brito"
   },
   {
    "logradouro": "Passagem Dois Irmãos",
    "perimetro": "Travessa dos Tupinambás e Travessa dos Apinagés"
   },
   {
    "logradouro": "Passagem Gonçalo Duarte",
    "perimetro": "Passagem Santa Clara e Rua dos Pariquis"
   },
   {
    "logradouro": "Passagem Guadalajara",
    "perimetro": "Rua dos Mundurucus e fim da via"
   },
   {
    "logradouro": "Passagem Irmãos Pires",
    "perimetro": "Rua dos Mundurucus e Rua dos Tamoios"
   },
   {
    "logradouro": "Passagem Nazareno",
    "perimetro": "Rua dos Mundurucus e Rua dos Pariquis"
   },
   {
    "logradouro": "Passagem Sales Moreira",
    "perimetro": "Rua dos Pariquis e Viela Kennedy"
   },
   {
    "logradouro": "Passagem Santa Clara",
    "perimetro": "Travessa Carlos de Carvalho e Travessa Honório José dos Santos"
   },
   {
    "logradouro": "Passagem Tomaz Rego",
    "perimetro": "Rua dos Mundurucus e Rua dos Pariquis"
   },
   {
    "logradouro": "Passagem da Máquina",
    "perimetro": "Rua dos Mundurucus e Travessa Carlos de Carvalho"
   },
   {
    "logradouro": "Vila Amanajas",
    "perimetro": "Rua dos Tamoios e fim da via"
   },
   {
    "logradouro": "Vila Maria Antonieta",
    "perimetro": "Avenida Roberto Camelier e fim da via"
   },
   {
    "logradouro": "Vila Marina",
    "perimetro": "Travessa dos Tupinambás e fim da via"
   },
   {
    "logradouro": "Vila Mata",
    "perimetro": "Rua dos Pariquis e Avenida Roberto Camelier"
   },
   {
    "logradouro": "Vila Monção",
    "perimetro": "Avenida Conselheiro Furtado e fim da via"
   },
   {
    "logradouro": "Vila São Lourenço",
    "perimetro": "Rua dos Caripunas e fim da via"
   },
   {
    "logradouro": "Vila Tavares",
    "perimetro": "Rua dos Tamoios e fim da via"
   },
   {
    "logradouro": "Vila Timbiras",
    "perimetro": "Rua dos Timbiras e fim da via"
   },
   {
    "logradouro": "Viela Kennedy",
    "perimetro": "Travessa Monte Alegre e Passagem Sales Moreira"
   },
   {
    "logradouro": "Viela Monsenhor Lobato",
    "perimetro": "Rua dos Tamoios e fim da via"
   }
  ]
 },
 {
  "id": "51",
  "nome": "Região 51",
  "semana": 1,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 1749,
  "panfletos": 1049,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Serzedelo Corrêa",
    "perimetro": "Avenida Conselheiro Furtado e Rua dos Timbiras"
   },
   {
    "logradouro": "Rua Jardim Piratininga",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Rua dos Caripunas",
    "perimetro": "Travessa dos Apinagés e Travessa Doutor Moraes"
   },
   {
    "logradouro": "Rua dos Mundurucus",
    "perimetro": "Travessa dos Apinagés e Avenida Serzedelo Corrêa"
   },
   {
    "logradouro": "Rua dos Pariquis",
    "perimetro": "Travessa Doutor Moraes e Travessa dos Apinagés"
   },
   {
    "logradouro": "Rua dos Tamoios",
    "perimetro": "Travessa dos Apinagés e Avenida Serzedelo Corrêa"
   },
   {
    "logradouro": "Rua dos Timbiras",
    "perimetro": "Travessa Doutor Moraes e Travessa dos Apinagés"
   },
   {
    "logradouro": "Travessa Padre Eutíquio",
    "perimetro": "Rua dos Timbiras e Avenida Conselheiro Furtado"
   },
   {
    "logradouro": "Travessa Presidente Pernambuco",
    "perimetro": "Rua dos Tamoios e Avenida Conselheiro Furtado"
   },
   {
    "logradouro": "Travessa dos Apinagés",
    "perimetro": "Avenida Conselheiro Furtado e limite da região"
   },
   {
    "logradouro": "Alameda São João Batista",
    "perimetro": "Rua dos Timbiras e fim da via"
   },
   {
    "logradouro": "Passagem Bragança",
    "perimetro": "Travessa Padre Eutíquio e Avenida Serzedelo Corrêa"
   },
   {
    "logradouro": "Vila Augusta",
    "perimetro": "Avenida Serzedelo Corrêa e limite da região"
   },
   {
    "logradouro": "Vila Julia Nahon",
    "perimetro": "Rua dos Timbiras e fim da via"
   }
  ]
 },
 {
  "id": "08",
  "nome": "Região 08",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 6914,
  "panfletos": 4148,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Alcindo Cacela",
    "perimetro": "Rua São Miguel e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Avenida Engenheiro Fernando Guilhon",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Rua Nova Primeira",
    "perimetro": "Travessa dos Apinagés e fim da via"
   },
   {
    "logradouro": "Rua Paulo Cícero",
    "perimetro": "Travessa 9 de Janeiro e fim da via"
   },
   {
    "logradouro": "Rua São Miguel",
    "perimetro": "Travessa 3 de Maio e limite da região"
   },
   {
    "logradouro": "Rua dos Tambés",
    "perimetro": "Travessa dos Apinagés e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Travessa 14 de Março",
    "perimetro": "Rua São Miguel e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Travessa 3 de Maio",
    "perimetro": "Travessa 9 de Janeiro e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Travessa 9 de Janeiro",
    "perimetro": "Travessa 3 de Maio e Passagem Apertada Hora"
   },
   {
    "logradouro": "Travessa Doutor Moraes",
    "perimetro": "Rua São Miguel e Passagem São Silvestre"
   },
   {
    "logradouro": "Travessa Mucajás",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Travessa Padre Eutíquio",
    "perimetro": "Passagem Gaiapós e Travessa Quintino Bocaiuva"
   },
   {
    "logradouro": "Travessa Quintino Bocaiuva",
    "perimetro": "Travessa dos Apinagés e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Alameda Duque de Caxias",
    "perimetro": "Passagem São Silvestre e fim da via"
   },
   {
    "logradouro": "Passagem 21 de Abril",
    "perimetro": "Avenida Alcindo Cacela e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem Alegria",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem Almeida",
    "perimetro": "Avenida Alcindo Cacela e fim da via"
   },
   {
    "logradouro": "Passagem Alvino",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Passagem Ex Combatente e fim da via"
   },
   {
    "logradouro": "Passagem Bugarim",
    "perimetro": "Travessa 3 de Maio e Travessa 14 de Março"
   },
   {
    "logradouro": "Passagem Edi Maria",
    "perimetro": "Travessa 9 de Janeiro e fim da via"
   },
   {
    "logradouro": "Passagem Ex Combatente",
    "perimetro": "Passagem Orquídea e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Passagem Ex-Combatente",
    "perimetro": "Passagem Ex Combatente e fim da via"
   },
   {
    "logradouro": "Passagem Fernando Moraes",
    "perimetro": "Passagem Teixeira e fim da via"
   },
   {
    "logradouro": "Passagem Lauro Malcher",
    "perimetro": "Travessa Padre Eutíquio e Travessa dos Apinagés"
   },
   {
    "logradouro": "Passagem Maria",
    "perimetro": "Travessa Padre Eutíquio e Travessa 14 de Março"
   },
   {
    "logradouro": "Passagem Moura Carvalho",
    "perimetro": "Travessa Padre Eutíquio e Travessa 9 de Janeiro"
   },
   {
    "logradouro": "Passagem Mucajás",
    "perimetro": "Travessa 9 de Janeiro e fim da via"
   },
   {
    "logradouro": "Passagem Orquídea",
    "perimetro": "Travessa 14 de Março e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem Perpétuo Socorro",
    "perimetro": "Travessa Padre Eutíquio e fim da via"
   },
   {
    "logradouro": "Passagem Pinheiro",
    "perimetro": "Travessa Quintino Bocaiuva e Rua São Miguel"
   },
   {
    "logradouro": "Passagem Rodolfo Albino",
    "perimetro": "Passagem Pinheiro e Passagem Maria"
   },
   {
    "logradouro": "Passagem Santa Lúcia",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem Santo Antônio",
    "perimetro": "Travessa dos Apinagés e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Passagem São Benedito",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Passagem Rodolfo Albino e Rua São Miguel"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Travessa Padre Eutíquio e Passagem São Silvestre"
   },
   {
    "logradouro": "Passagem São Silvestre",
    "perimetro": "Travessa Padre Eutíquio e Travessa 9 de Janeiro"
   },
   {
    "logradouro": "Passagem Teixeira",
    "perimetro": "Travessa Padre Eutíquio e Avenida Engenheiro Fernando Guilhon"
   },
   {
    "logradouro": "Passagem Três Irmãos",
    "perimetro": "Passagem Lauro Malcher e Passagem Gaiapós"
   },
   {
    "logradouro": "Passagem Umariz",
    "perimetro": "Passagem Teixeira e Travessa 9 de Janeiro"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Avenida Engenheiro Fernando Guilhon e Rua São Miguel"
   },
   {
    "logradouro": "Passagem Vereador",
    "perimetro": "Travessa 9 de Janeiro e Travessa 3 de Maio"
   },
   {
    "logradouro": "Passagem Vicente",
    "perimetro": "Travessa 3 de Maio e fim da via"
   }
  ]
 },
 {
  "id": "09",
  "nome": "Região 09",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3421,
  "panfletos": 2053,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Alcindo Cacela",
    "perimetro": "Passagem Gaiapós e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Avenida Bernardo Sayão",
    "perimetro": "Avenida Roberto Camelier e Passagem São Lázaro"
   },
   {
    "logradouro": "Avenida José Bonifácio",
    "perimetro": "Passagem Alvino e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Travessa 3 de Maio",
    "perimetro": "Travessa 9 de Janeiro e Passagem 21 de Abril"
   },
   {
    "logradouro": "Travessa 9 de Janeiro",
    "perimetro": "Avenida Bernardo Sayão e Travessa 3 de Maio"
   },
   {
    "logradouro": "Travessa Padre Eutíquio",
    "perimetro": "Avenida Bernardo Sayão e Passagem Moura Carvalho"
   },
   {
    "logradouro": "Travessa dos Apinagés",
    "perimetro": "Passagem Gaiapós e Avenida Alcindo Cacela"
   },
   {
    "logradouro": "Alameda Hugo Richardson",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Passagem 21 de Abril",
    "perimetro": "Travessa 3 de Maio e Passagem 3 de Maio"
   },
   {
    "logradouro": "Passagem 3 de Maio",
    "perimetro": "Passagem 21 de Abril e fim da via"
   },
   {
    "logradouro": "Passagem 9 de Janeiro",
    "perimetro": "Avenida Bernardo Sayão e fim da via"
   },
   {
    "logradouro": "Passagem Alvino",
    "perimetro": "Passagem 3 de Maio e Avenida José Bonifácio"
   },
   {
    "logradouro": "Passagem Gaiapós",
    "perimetro": "Passagem São Judas Tadeu e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Passagem Guajará",
    "perimetro": "Travessa Padre Eutíquio e Travessa 9 de Janeiro"
   },
   {
    "logradouro": "Passagem Joana D’Arc",
    "perimetro": "Passagem São Cristóvão e fim da via"
   },
   {
    "logradouro": "Passagem Madacil",
    "perimetro": "Passagem Madacyl e Passagem São Raimundo"
   },
   {
    "logradouro": "Passagem Madacyl",
    "perimetro": "Passagem Madacil e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Marajoara",
    "perimetro": "Travessa Padre Eutíquio e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Monte Serrat",
    "perimetro": "Passagem Popular e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Parintins",
    "perimetro": "Passagem Gaiapós e Avenida Alcindo Cacela"
   },
   {
    "logradouro": "Passagem Popular",
    "perimetro": "Avenida José Bonifácio e Passagem São Lázaro"
   },
   {
    "logradouro": "Passagem Salvador",
    "perimetro": "Travessa Padre Eutíquio e Passagem Marajoara"
   },
   {
    "logradouro": "Passagem Santa Rosa",
    "perimetro": "Passagem Popular e fim da via"
   },
   {
    "logradouro": "Passagem São Cristóvão",
    "perimetro": "Passagem Alvino e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem São Judas Tadeu",
    "perimetro": "Passagem Gaiapós e Avenida Alcindo Cacela"
   },
   {
    "logradouro": "Passagem São Lázaro",
    "perimetro": "Avenida Bernardo Sayão e Passagem Popular"
   },
   {
    "logradouro": "Passagem São Raimundo",
    "perimetro": "Passagem Madacil e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Tabajara",
    "perimetro": "Avenida Alcindo Cacela e Travessa Padre Eutíquio"
   },
   {
    "logradouro": "Vila Guilherme",
    "perimetro": "Avenida José Bonifácio e fim da via"
   },
   {
    "logradouro": "Conjunto José Eduardo",
    "perimetro": "Avenida José Bonifácio e fim da via"
   }
  ]
 },
 {
  "id": "10",
  "nome": "Região 10",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 4016,
  "panfletos": 2410,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida José Bonifácio",
    "perimetro": "Rua Silva Castro e Passagem Alvino"
   },
   {
    "logradouro": "Rua Silva Castro",
    "perimetro": "Avenida José Bonifácio e Travessa 3 de Maio"
   },
   {
    "logradouro": "Rua São Miguel",
    "perimetro": "Travessa 3 de Maio e Passagem São Miguel"
   },
   {
    "logradouro": "Travessa 3 de Maio",
    "perimetro": "Passagem 21 de Abril e Rua São Miguel"
   },
   {
    "logradouro": "Travessa Caldeira Castelo Branco",
    "perimetro": "Travessa Mucajás e Passagem Alvino"
   },
   {
    "logradouro": "Travessa Caldeira Castelo Branco II",
    "perimetro": "Passagem São Cristóvão e Travessa Mucajás"
   },
   {
    "logradouro": "Travessa Mucajás",
    "perimetro": "Travessa 3 de Maio e Avenida José Bonifácio"
   },
   {
    "logradouro": "Travessa São Cristóvão",
    "perimetro": "Rua Silva Castro e fim da via"
   },
   {
    "logradouro": "Passagem 14 de Abril",
    "perimetro": "Passagem Bugarim II e Passagem Alvino"
   },
   {
    "logradouro": "Passagem 21 de Abril",
    "perimetro": "Passagem 3 de Maio e Passagem 14 de Abril"
   },
   {
    "logradouro": "Passagem 31 de Março",
    "perimetro": "Travessa Mucajás e fim da via"
   },
   {
    "logradouro": "Passagem Arco Íris",
    "perimetro": "Passagem Novo Lar e Avenida José Bonifácio"
   },
   {
    "logradouro": "Passagem Assunção",
    "perimetro": "Passagem Paulo Cícero e fim da via"
   },
   {
    "logradouro": "Passagem Bugarim II",
    "perimetro": "Travessa 3 de Maio e fim da via"
   },
   {
    "logradouro": "Passagem Gorete",
    "perimetro": "Travessa São Cristóvão e Travessa Caldeira Castelo Branco II"
   },
   {
    "logradouro": "Passagem Magalhães Barata",
    "perimetro": "Passagem Paulo Cícero e fim da via"
   },
   {
    "logradouro": "Passagem Miranda",
    "perimetro": "Passagem São Cristóvão e Passagem Paulo Cícero"
   },
   {
    "logradouro": "Passagem Novo Lar",
    "perimetro": "Travessa Caldeira Castelo Branco e Passagem Arco Íris"
   },
   {
    "logradouro": "Passagem Olinda",
    "perimetro": "Passagem Paulo Cícero e Passagem Alvino"
   },
   {
    "logradouro": "Passagem Paulo Cícero",
    "perimetro": "Travessa 3 de Maio e Avenida José Bonifácio"
   },
   {
    "logradouro": "Passagem Santa Helena",
    "perimetro": "Rua Silva Castro e Vila Esperança"
   },
   {
    "logradouro": "Passagem Santa Lúcia",
    "perimetro": "Travessa 3 de Maio e Passagem Miranda"
   },
   {
    "logradouro": "Passagem São Cristóvão",
    "perimetro": "Passagem Santa Helena e Rua Silva Castro"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Rua São Miguel e fim da via"
   },
   {
    "logradouro": "Passagem São José",
    "perimetro": "Passagem Miranda e Passagem Olinda"
   },
   {
    "logradouro": "Passagem São Miguel",
    "perimetro": "Rua São Miguel e fim da via"
   },
   {
    "logradouro": "Passagem Valdir da Costa",
    "perimetro": "Travessa Mucajás e fim da via"
   },
   {
    "logradouro": "Vila Esperança",
    "perimetro": "Avenida José Bonifácio e fim da via"
   }
  ]
 },
 {
  "id": "11",
  "nome": "Região 11",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 5388,
  "panfletos": 3233,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Rua 9 de Outubro",
    "perimetro": "Travessa Liberato de Castro e Travessa 20 de Fevereiro"
   },
   {
    "logradouro": "Rua Barão de Igarapé Miri",
    "perimetro": "Avenida José Bonifácio e Travessa Ezeriel"
   },
   {
    "logradouro": "Rua Epitácio Pessoa",
    "perimetro": "Travessa Liberato de Castro e Travessa 20 de Fevereiro"
   },
   {
    "logradouro": "Rua Silva Castro",
    "perimetro": "Travessa Liberato de Castro e Avenida José Bonifácio"
   },
   {
    "logradouro": "Travessa 20 de Fevereiro",
    "perimetro": "Rua 9 de Outubro e Rua Epitácio Pessoa"
   },
   {
    "logradouro": "Travessa Barão de Mamoré Ramo II",
    "perimetro": "Rua Silva Castro e Rua Barão de Igarapé Miri"
   },
   {
    "logradouro": "Travessa Ezeriel",
    "perimetro": "Passagem Sururina e Passagem Popular"
   },
   {
    "logradouro": "Travessa João de Deus",
    "perimetro": "Passagem Popular e Passagem Barão de Igarapé Miri"
   },
   {
    "logradouro": "Travessa Liberato de Castro",
    "perimetro": "Rua Silva Castro e Passagem Joana D’Arc"
   },
   {
    "logradouro": "Passagem Barão de Igarapé Miri",
    "perimetro": "Rua Barão de Igarapé Miri e Passagem Frei Daniel"
   },
   {
    "logradouro": "Passagem Frei Daniel",
    "perimetro": "Passagem São Lázaro e fim da via"
   },
   {
    "logradouro": "Passagem Fé em Deus",
    "perimetro": "Rua Barão de Igarapé Miri e fim da via"
   },
   {
    "logradouro": "Passagem Joana D’Arc",
    "perimetro": "Travessa Ezeriel e Passagem São Lázaro"
   },
   {
    "logradouro": "Passagem Monte Serrat",
    "perimetro": "Passagem Serrão de Castro e Passagem Popular"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Fátima",
    "perimetro": "Rua Silva Castro e Vila Ramos"
   },
   {
    "logradouro": "Passagem Onze Bandeirinhas",
    "perimetro": "Passagem São Miguel e Rua Barão de Igarapé Miri"
   },
   {
    "logradouro": "Passagem Onze Bandeirinhas I",
    "perimetro": "Rua Barão de Igarapé Miri e Passagem Paulo Cícero"
   },
   {
    "logradouro": "Passagem Paulo Cícero",
    "perimetro": "Avenida José Bonifácio e Travessa João de Deus"
   },
   {
    "logradouro": "Passagem Pedreirinha",
    "perimetro": "Avenida José Bonifácio e Travessa Barão de Mamoré Ramo II"
   },
   {
    "logradouro": "Passagem Rui Barbosa",
    "perimetro": "Passagem Paulo Cícero e Passagem Popular"
   },
   {
    "logradouro": "Passagem Santa Clara",
    "perimetro": "Passagem Rui Barbosa e Travessa João de Deus"
   },
   {
    "logradouro": "Passagem Santa Fé",
    "perimetro": "Avenida José Bonifácio e Passagem Rui Barbosa"
   },
   {
    "logradouro": "Passagem Santa Rosa",
    "perimetro": "Passagem Paulo Cícero e Passagem Popular"
   },
   {
    "logradouro": "Passagem Santo Amaro",
    "perimetro": "Rua Silva Castro e Rua Barão de Igarapé Miri"
   },
   {
    "logradouro": "Passagem Serrão de Castro",
    "perimetro": "Avenida José Bonifácio e Passagem Rui Barbosa"
   },
   {
    "logradouro": "Passagem Sururina",
    "perimetro": "Travessa Liberato de Castro e Travessa Ezeriel"
   },
   {
    "logradouro": "Passagem São Lázaro",
    "perimetro": "Passagem Popular e Passagem Frei Daniel"
   },
   {
    "logradouro": "Passagem São Miguel",
    "perimetro": "Passagem Barão de Igarapé Miri e Avenida José Bonifácio"
   },
   {
    "logradouro": "Vila 18 de Dezembro",
    "perimetro": "Passagem Santo Amaro e fim da via"
   },
   {
    "logradouro": "Vila Eliana",
    "perimetro": "Rua Silva Castro e Passagem Santo Amaro"
   },
   {
    "logradouro": "Vila Floriano Ferrari",
    "perimetro": "Rua Silva Castro e fim da via"
   },
   {
    "logradouro": "Vila Jambo",
    "perimetro": "Passagem Monte Serrat e Passagem São Lázaro"
   },
   {
    "logradouro": "Vila Primavera",
    "perimetro": "Passagem São Lázaro e fim da via"
   },
   {
    "logradouro": "Vila Ramos",
    "perimetro": "Passagem Nossa Senhora de Fátima e Passagem Paes e Souza"
   },
   {
    "logradouro": "Vila Santa Ana",
    "perimetro": "Travessa João de Deus e fim da via"
   },
   {
    "logradouro": "Vila São Cristovão",
    "perimetro": "Travessa Liberato de Castro e fim da via"
   },
   {
    "logradouro": "Vila São Pedro e São Paulo",
    "perimetro": "Rua Barão de Igarapé Miri e fim da via"
   }
  ]
 },
 {
  "id": "12",
  "nome": "Região 12",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 5624,
  "panfletos": 3374,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Bernardo Sayão",
    "perimetro": "Passagem São Lázaro"
   },
   {
    "logradouro": "Avenida Perimetral da Ciência",
    "perimetro": "Rua Augusto Corrêa e limite da região"
   },
   {
    "logradouro": "Rua 9 de Outubro",
    "perimetro": "Travessa 20 de Fevereiro e Rua Augusto Corrêa"
   },
   {
    "logradouro": "Rua Apocalipse",
    "perimetro": "Rua do Olaria e Passagem Tucunduba"
   },
   {
    "logradouro": "Rua Arrebatamento",
    "perimetro": "Passagem Tucunduba e Rua do Olaria"
   },
   {
    "logradouro": "Rua Augusto Corrêa",
    "perimetro": "Avenida Bernardo Sayão e Passagem Sururina"
   },
   {
    "logradouro": "Rua Barão de Igarapé Miri",
    "perimetro": "Travessa Ezeriel e limite da região"
   },
   {
    "logradouro": "Rua Canaã",
    "perimetro": "Rua do Olaria e Passagem Cristo Rei"
   },
   {
    "logradouro": "Rua Cristo Rei",
    "perimetro": "Rua Lírio dos Vales e Rua Nova Jerusalém"
   },
   {
    "logradouro": "Rua Epitácio Pessoa",
    "perimetro": "Travessa 20 de Fevereiro e Rua Augusto Corrêa"
   },
   {
    "logradouro": "Rua Esperança",
    "perimetro": "Passagem Tucunduba e Rua do Olaria"
   },
   {
    "logradouro": "Rua Fé em Deus",
    "perimetro": "Passagem Tucunduba e Rua do Olaria"
   },
   {
    "logradouro": "Rua Lírio dos Vales",
    "perimetro": "Rua do Olaria e Passagem Tucunduba"
   },
   {
    "logradouro": "Rua Monte das Oliveiras",
    "perimetro": "Rua do Olaria e Rua da Vitória"
   },
   {
    "logradouro": "Rua Nova Jerusalém",
    "perimetro": "Rua do Olaria e Rua Cristo Rei"
   },
   {
    "logradouro": "Rua Redenção",
    "perimetro": "Qd 18 e Passagem Tucunduba"
   },
   {
    "logradouro": "Rua da Paz",
    "perimetro": "Rua do Olaria e Passagem Tucunduba"
   },
   {
    "logradouro": "Rua da Salvação",
    "perimetro": "Rua do Olaria e Passagem Tucunduba"
   },
   {
    "logradouro": "Rua da Vitória",
    "perimetro": "Rua Monte das Oliveiras e Rua Esperança"
   },
   {
    "logradouro": "Rua do Olaria",
    "perimetro": "Avenida Perimetral da Ciência e Rua Barão de Igarapé Miri"
   },
   {
    "logradouro": "Rua do Profeta",
    "perimetro": "Passagem Tucunduba e Rua do Olaria"
   },
   {
    "logradouro": "Travessa 20 de Fevereiro",
    "perimetro": "Rua Barão de Igarapé Miri e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Travessa 25 de Junho",
    "perimetro": "Passagem Sururina e fim da via"
   },
   {
    "logradouro": "Travessa João de Deus",
    "perimetro": "Passagem Popular e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Alegre",
    "perimetro": "Rua Barão de Igarapé Miri e Passagem Sururina"
   },
   {
    "logradouro": "Passagem Cristo Rei",
    "perimetro": "Passagem Tucunduba e Rua Cristo Rei"
   },
   {
    "logradouro": "Passagem Mar da Galileia",
    "perimetro": "Rua do Olaria e Passagem Tucunduba"
   },
   {
    "logradouro": "Passagem Moises",
    "perimetro": "Rua do Olaria e Passagem São Lucas"
   },
   {
    "logradouro": "Passagem Moreira",
    "perimetro": "Travessa 25 de Junho e Rua Augusto Corrêa"
   },
   {
    "logradouro": "Passagem Omega",
    "perimetro": "Rua do Olaria e fim da via"
   },
   {
    "logradouro": "Passagem Pinheiro",
    "perimetro": "Travessa João de Deus e Travessa 20 de Fevereiro"
   },
   {
    "logradouro": "Passagem Popular",
    "perimetro": "Passagem São Lázaro e Travessa 25 de Junho"
   },
   {
    "logradouro": "Passagem Presidente Vargas",
    "perimetro": "Rua Epitácio Pessoa e Rua Augusto Corrêa"
   },
   {
    "logradouro": "Passagem Principe da Paz",
    "perimetro": "Rua do Olaria e Passagem Tucunduba"
   },
   {
    "logradouro": "Passagem Rui Barbosa",
    "perimetro": "Passagem Popular e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem Silva",
    "perimetro": "Avenida Bernardo Sayão e Travessa 20 de Fevereiro"
   },
   {
    "logradouro": "Passagem Sururina",
    "perimetro": "Travessa Ezeriel e Rua Augusto Corrêa"
   },
   {
    "logradouro": "Passagem São Domingos",
    "perimetro": "Passagem Popular e Avenida Bernardo Sayão"
   },
   {
    "logradouro": "Passagem São Lucas",
    "perimetro": "Rua do Olaria e Passagem Moises"
   },
   {
    "logradouro": "Passagem São Raimundo",
    "perimetro": "Travessa 20 de Fevereiro e fim da via"
   },
   {
    "logradouro": "Passagem Tucunduba",
    "perimetro": "Avenida Perimetral da Ciência e Avenida Tucunduba"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Avenida Perimetral da Ciência e fim da via"
   },
   {
    "logradouro": "Qd 18",
    "perimetro": "Rua Redenção e fim da via"
   }
  ]
 },
 {
  "id": "13",
  "nome": "Região 13",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 6442,
  "panfletos": 3865,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Perimetral da Ciência",
    "perimetro": "Passagem Tucunduba e Rua São Domingos"
   },
   {
    "logradouro": "Avenida Rio Tucunduba",
    "perimetro": "Avenida Tucunduba e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Avenida Tucunduba",
    "perimetro": "Passagem Vitória Régia e Passagem Tucunduba"
   },
   {
    "logradouro": "Rua 25 de Setembro",
    "perimetro": "Avenida Rio Tucunduba e Passagem Pau D'Arco"
   },
   {
    "logradouro": "Rua 6 de Setembro",
    "perimetro": "Passagem Pau D'Arco e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Rua São João",
    "perimetro": "Avenida Rio Tucunduba e Passagem Miranda"
   },
   {
    "logradouro": "Rua Universal",
    "perimetro": "Passagem Ligação e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Rua da Paz",
    "perimetro": "Avenida Perimetral da Ciência e Passagem Ligação"
   },
   {
    "logradouro": "Passagem 20 de Julho",
    "perimetro": "Passagem Gil Paraná e Passagem Tucunduba"
   },
   {
    "logradouro": "Passagem 27 de Setembro",
    "perimetro": "Passagem Park Amazonas e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Passagem 29 de Setembro",
    "perimetro": "Passagem Belo Horizonte e Rua da Paz"
   },
   {
    "logradouro": "Passagem Angelim",
    "perimetro": "Passagem Parque Amazônia e Rua 6 de Setembro"
   },
   {
    "logradouro": "Passagem Belo Horizonte",
    "perimetro": "Passagem do Arame e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Passagem Boa Esperança",
    "perimetro": "Passagem 27 de Setembro e Passagem Vitória Régia"
   },
   {
    "logradouro": "Passagem Castanheira",
    "perimetro": "Passagem Ligação e Rua Universal"
   },
   {
    "logradouro": "Passagem Ceará",
    "perimetro": "Rua Augusto Corrêa e Passagem Tucunduba"
   },
   {
    "logradouro": "Passagem Fortaleza",
    "perimetro": "Passagem Belo Horizonte e Rua da Paz"
   },
   {
    "logradouro": "Passagem Fé em Deus",
    "perimetro": "Passagem Ceará e Passagem Monte Sinai"
   },
   {
    "logradouro": "Passagem Gil Paraná",
    "perimetro": "Passagem Tucunduba"
   },
   {
    "logradouro": "Passagem José Priante",
    "perimetro": "Avenida Rio Tucunduba e fim da via"
   },
   {
    "logradouro": "Passagem Lauro",
    "perimetro": "Passagem Monte Sinai e Passagem Tucunduba"
   },
   {
    "logradouro": "Passagem Liberdade",
    "perimetro": "Avenida Perimetral da Ciência e limite da região"
   },
   {
    "logradouro": "Passagem Ligação",
    "perimetro": "Passagem Nova Liberdade e Rua da Paz"
   },
   {
    "logradouro": "Passagem Milagres",
    "perimetro": "Avenida Perimetral da Ciência e fim da via"
   },
   {
    "logradouro": "Passagem Miranda",
    "perimetro": "Passagem Bom Sossego e Rua 25 de Setembro"
   },
   {
    "logradouro": "Passagem Monte Sinai",
    "perimetro": "Rua Augusto Corrêa e Passagem Ceará"
   },
   {
    "logradouro": "Passagem Nazaré",
    "perimetro": "Rua 25 de Setembro e Passagem Nova Liderança"
   },
   {
    "logradouro": "Passagem Nova II",
    "perimetro": "Passagem Gil Paraná e Passagem Bom Sossego"
   },
   {
    "logradouro": "Passagem Nova Liberdade",
    "perimetro": "Avenida Tucunduba e Passagem Parque Amazônia"
   },
   {
    "logradouro": "Passagem Nova Liderança",
    "perimetro": "Passagem Miranda e Passagem Wilson Brito"
   },
   {
    "logradouro": "Passagem Park Amazonas",
    "perimetro": "Rua 6 de Setembro e Passagem 27 de Setembro"
   },
   {
    "logradouro": "Passagem Parque Amazônia",
    "perimetro": "Passagem Nova Liberdade e Passagem Samaumeira"
   },
   {
    "logradouro": "Passagem Pau D'Arco",
    "perimetro": "Passagem Nova Liberdade e fim da via"
   },
   {
    "logradouro": "Passagem Samaumeira",
    "perimetro": "Passagem Pau D'Arco e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Avenida Perimetral da Ciência e limite da região"
   },
   {
    "logradouro": "Passagem São Luis",
    "perimetro": "Alameda Esperanca e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Avenida Perimetral da Ciência e limite da região"
   },
   {
    "logradouro": "Passagem Tucunduba",
    "perimetro": "Rua Barão de Igarapé Miri e Rua São Domingos"
   },
   {
    "logradouro": "Passagem Tucunduba II",
    "perimetro": "Passagem Monte Sinai e Passagem 20 de Julho"
   },
   {
    "logradouro": "Passagem Vitória Régia",
    "perimetro": "Passagem Pau D'Arco e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Passagem Wilson Brito",
    "perimetro": "Passagem José Priante e Rua da Paz"
   },
   {
    "logradouro": "Via Principal da Ufra",
    "perimetro": "Avenida Perimetral da Ciência e limite da região"
   }
  ]
 },
 {
  "id": "46",
  "nome": "Região 46",
  "semana": 2,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3562,
  "panfletos": 2137,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Ceará",
    "perimetro": "Travessa Teófilo Conduru e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Avenida Cipriano Santos",
    "perimetro": "Avenida Almirante Barroso e Travessa Teófilo Conduru"
   },
   {
    "logradouro": "Avenida Conselheiro Furtado",
    "perimetro": "Travessa Teófilo Conduru e Travessa Barão de Mamoré"
   },
   {
    "logradouro": "Avenida Gentil Bittencourt",
    "perimetro": "Avenida José Bonifácio e Travessa Teófilo Conduru"
   },
   {
    "logradouro": "Rua Deodoro Mendoza",
    "perimetro": "Rua Rosso Danin e Rua Floriano Peixoto"
   },
   {
    "logradouro": "Rua Deodoro de Mendonça",
    "perimetro": "Rua Floriano Peixoto e Avenida Gentil Bittencourt"
   },
   {
    "logradouro": "Rua Doutor Américo Santa Rosa",
    "perimetro": "Rua Deodoro de Mendonça e Travessa Teófilo Conduru"
   },
   {
    "logradouro": "Rua Doutor Silva Rosado",
    "perimetro": "Rua Floriano Peixoto e Travessa Teófilo Conduru"
   },
   {
    "logradouro": "Rua Farias de Brito",
    "perimetro": "Avenida José Bonifácio e Rua Floriano Peixoto"
   },
   {
    "logradouro": "Rua Floriano Peixoto",
    "perimetro": "Avenida Cipriano Santos e Praça Brunco de Menezes"
   },
   {
    "logradouro": "Rua Roso Danin",
    "perimetro": "Travessa Nina Ribeiro e Travessa Guerra Passos"
   },
   {
    "logradouro": "Rua Rosso Danin",
    "perimetro": "Rua Deodoro de Mendonça e Passagem Santo Antônio"
   },
   {
    "logradouro": "Travessa Guerra Passos",
    "perimetro": "Avenida Ceará e Avenida Conselheiro Furtado"
   },
   {
    "logradouro": "Travessa Nina Ribeiro",
    "perimetro": "Avenida Ceará e Avenida Gentil Bittencourt"
   },
   {
    "logradouro": "Travessa Primeira de Queluz",
    "perimetro": "Avenida Cipriano Santos e fim da via"
   },
   {
    "logradouro": "Travessa Santa Lúcia",
    "perimetro": "Rua Deodoro de Mendonça e fim da via"
   },
   {
    "logradouro": "Travessa Teófilo Conduru",
    "perimetro": "Avenida Conselheiro Furtado e Avenida Ceará"
   },
   {
    "logradouro": "Passagem Barão de Mamoré",
    "perimetro": "Rua Doutor Américo Santa Rosa e Rua Doutor Silva Rosado"
   },
   {
    "logradouro": "Passagem Capitão Reis",
    "perimetro": "Travessa Nina Ribeiro e Vila Soares"
   },
   {
    "logradouro": "Passagem Conceição",
    "perimetro": "Rua Doutor Américo Santa Rosa e fim da via"
   },
   {
    "logradouro": "Passagem Ismael de Castro",
    "perimetro": "Rua Deodoro de Mendonça e Rua Floriano Peixoto"
   },
   {
    "logradouro": "Passagem Primeira de Queluz",
    "perimetro": "Passagem Santo Antônio e fim da via"
   },
   {
    "logradouro": "Passagem Santo Antônio",
    "perimetro": "Avenida Gentil Bittencourt e Rua Rosso Danin"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Passagem Santo Antônio e fim da via"
   },
   {
    "logradouro": "Vila Soares",
    "perimetro": "Passagem Capitão Reis e Rua Doutor Américo Santa Rosa"
   },
   {
    "logradouro": "Lado Complexo São Bras",
    "perimetro": "Limite da região e fim da via"
   },
   {
    "logradouro": "Praça Brunco de Menezes",
    "perimetro": "Rua Doutor Silva Rosado e Rua Doutor Américo Santa Rosa"
   },
   {
    "logradouro": "Primeira Travessa de Queluz",
    "perimetro": "Avenida Ceará e Avenida Cipriano Santos"
   },
   {
    "logradouro": "Vel Santa Rita",
    "perimetro": "Fim da via"
   }
  ]
 },
 {
  "id": "14",
  "nome": "Região 14",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3958,
  "panfletos": 2375,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Rua Bernal do Couto",
    "perimetro": "Travessa Dom Pedro I e Travessa Almirante Wandenkolk"
   },
   {
    "logradouro": "Rua Curuçá",
    "perimetro": "Travessa Djalma Dutra e Travessa Dom Pedro I"
   },
   {
    "logradouro": "Rua Cônego Jerônimo Pimentel",
    "perimetro": "Travessa Almirante Wandenkolk e Travessa Soares Carneiro"
   },
   {
    "logradouro": "Rua Municipalidade",
    "perimetro": "Travessa Almirante Wandenkolk e Travessa Soares Carneiro"
   },
   {
    "logradouro": "Rua do Una",
    "perimetro": "Travessa José Pio e Travessa Djalma Dutra"
   },
   {
    "logradouro": "Travessa Djalma Dutra",
    "perimetro": "Avenida Pedro Álvares Cabral e Canal Soares Carneiro"
   },
   {
    "logradouro": "Travessa Dom Pedro I",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Curuçá"
   },
   {
    "logradouro": "Travessa Dom Romualdo Coelho",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Bernal do Couto"
   },
   {
    "logradouro": "Travessa Dom Romualdo de Seixas",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Bernal do Couto"
   },
   {
    "logradouro": "Travessa José Pio",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Curuçá"
   },
   {
    "logradouro": "Travessa Manoel Evaristo",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Curuçá"
   },
   {
    "logradouro": "Travessa Municipalidade",
    "perimetro": "Travessa Soares Carneiro e Travessa Djalma Dutra"
   },
   {
    "logradouro": "Travessa Pombal",
    "perimetro": "Avenida Senador Lemos e Rua Curuçá"
   },
   {
    "logradouro": "Travessa Soares Carneiro",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Curuçá"
   },
   {
    "logradouro": "Alameda Francisco Ribeiro",
    "perimetro": "Avenida Pedro Álvares Cabral e Travessa Dom Pedro I"
   },
   {
    "logradouro": "Passagem Atlantica",
    "perimetro": "Travessa Municipalidade e fim da via"
   },
   {
    "logradouro": "Passagem Federico",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua do Una"
   },
   {
    "logradouro": "Passagem Felicidade",
    "perimetro": "Rua Municipalidade e Avenida Pedro Álvares Cabral"
   },
   {
    "logradouro": "Passagem Gouveia",
    "perimetro": "Travessa Almirante Wandenkolk e fim da via"
   },
   {
    "logradouro": "Passagem Guajara",
    "perimetro": "Travessa Municipalidade e fim da via"
   },
   {
    "logradouro": "Passagem Maria dos Santos",
    "perimetro": "Travessa Dom Romualdo Coelho e Travessa Almirante Wandenkolk"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Nazaré",
    "perimetro": "Travessa Municipalidade e fim da via"
   },
   {
    "logradouro": "Passagem São Raimundo",
    "perimetro": "Travessa Djalma Dutra e limite da região"
   },
   {
    "logradouro": "Vila Carlinhos",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Vila Danin",
    "perimetro": "Vila Souza e Rua Bernal do Couto"
   },
   {
    "logradouro": "Vila Eugênio Cruz",
    "perimetro": "Travessa Djalma Dutra e fim da via"
   },
   {
    "logradouro": "Vila Importadora",
    "perimetro": "Rua Curuçá e Rua Cônego Jerônimo Pimentel"
   },
   {
    "logradouro": "Vila Maria das Graças",
    "perimetro": "Rua Municipalidade e fim da via"
   },
   {
    "logradouro": "Vila Moraes",
    "perimetro": "Travessa Almirante Wandenkolk e Rua Bernal do Couto"
   },
   {
    "logradouro": "Vila Paulo",
    "perimetro": "Travessa Manoel Evaristo e fim da via"
   },
   {
    "logradouro": "Vila Souza",
    "perimetro": "Vila Danin e Rua Bernal do Couto"
   },
   {
    "logradouro": "Vila São João",
    "perimetro": "Avenida Senador Lemos e fim da via"
   }
  ]
 },
 {
  "id": "15",
  "nome": "Região 15",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4507,
  "panfletos": 2704,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Rodovia Artur Bernardes",
    "perimetro": "Avenida Pedro Álvares Cabral e Travessa Coronel Luíz Bentes"
   },
   {
    "logradouro": "Rua Curuçá",
    "perimetro": "Travessa Djalma Dutra e Passagem Colabal"
   },
   {
    "logradouro": "Rua Dom João",
    "perimetro": "Passagem São João e Avenida Senador Lemos"
   },
   {
    "logradouro": "Rua Frederico Scheneippe",
    "perimetro": "Travessa Rosa Moreira e Travessa Magno de Araújo"
   },
   {
    "logradouro": "Rua Gonçalves Ferreira",
    "perimetro": "Passagem Pinheiro Filho e Travessa Magno de Araújo"
   },
   {
    "logradouro": "Rua do Galo",
    "perimetro": "Passagem Stella Majora e Travessa Coronel Luíz Bentes"
   },
   {
    "logradouro": "Rua do Una",
    "perimetro": "Travessa Djalma Dutra e Travessa Rosa Moreira"
   },
   {
    "logradouro": "Travessa Coronel Luíz Bentes",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua do Galo"
   },
   {
    "logradouro": "Travessa Magno de Araújo",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Curuçá"
   },
   {
    "logradouro": "Travessa Rosa Moreira",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua Curuçá"
   },
   {
    "logradouro": "Alameda Maria da Luz",
    "perimetro": "Passagem Brasília e Passagem das Flores"
   },
   {
    "logradouro": "Passagem Americano",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua do Una"
   },
   {
    "logradouro": "Passagem Assunção",
    "perimetro": "Avenida Pedro Álvares Cabral e Passagem das Flores"
   },
   {
    "logradouro": "Passagem Branca Lobato",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua do Una"
   },
   {
    "logradouro": "Passagem Brasília",
    "perimetro": "Passagem Isabel e fim da via"
   },
   {
    "logradouro": "Passagem Brotinho",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Senador Lemos"
   },
   {
    "logradouro": "Passagem Colabal",
    "perimetro": "Passagem Lava Pés e Rua Curuçá"
   },
   {
    "logradouro": "Passagem Dias Silva",
    "perimetro": "Avenida Pedro Álvares Cabral e Passagem Rosa Lemos"
   },
   {
    "logradouro": "Passagem Independente",
    "perimetro": "Travessa Djalma Dutra e fim da via"
   },
   {
    "logradouro": "Passagem Ipiranga",
    "perimetro": "Travessa Coronel Luíz Bentes e Passagem Mena Barreto"
   },
   {
    "logradouro": "Passagem Isabel",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem João Coelho",
    "perimetro": "Rua do Una e Rua Frederico Scheneippe"
   },
   {
    "logradouro": "Passagem Lava Pés",
    "perimetro": "Rua do Galo e Passagem Colabal"
   },
   {
    "logradouro": "Passagem Lavapes",
    "perimetro": "Rua Curuçá e Rua do Galo"
   },
   {
    "logradouro": "Passagem Mena Barreto",
    "perimetro": "Travessa Djalma Dutra e Travessa Coronel Luíz Bentes"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Belém",
    "perimetro": "Travessa Rosa Moreira e Rua Dom João"
   },
   {
    "logradouro": "Passagem Padre Julião",
    "perimetro": "Avenida Pedro Álvares Cabral e fim da via"
   },
   {
    "logradouro": "Passagem Padre Marcos",
    "perimetro": "Rua do Galo e Passagem Brotinho"
   },
   {
    "logradouro": "Passagem Pessoa",
    "perimetro": "Passagem Isabel e Rua Curuçá"
   },
   {
    "logradouro": "Passagem Pinheiro Filho",
    "perimetro": "Avenida Pedro Álvares Cabral e Passagem Rosa Lemos"
   },
   {
    "logradouro": "Passagem Quarta",
    "perimetro": "Rua Dom João e Travessa Rosa Moreira"
   },
   {
    "logradouro": "Passagem Rosa Lemos",
    "perimetro": "Passagem São João e Passagem Dias Silva"
   },
   {
    "logradouro": "Passagem Rosa Moreira",
    "perimetro": "Rua Gonçalves Ferreira e Rua Frederico Scheneippe"
   },
   {
    "logradouro": "Passagem Salvador",
    "perimetro": "Passagem João Coelho e Travessa Rosa Moreira"
   },
   {
    "logradouro": "Passagem Stella Majora",
    "perimetro": "Avenida Pedro Álvares Cabral e Passagem São João"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Senador Lemos"
   },
   {
    "logradouro": "Passagem São Pedro",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Senador Lemos"
   },
   {
    "logradouro": "Passagem Uberabinha",
    "perimetro": "Avenida Pedro Álvares Cabral e Passagem Quarta"
   },
   {
    "logradouro": "Passagem das Flores",
    "perimetro": "Avenida Pedro Álvares Cabral e Rua do Galo"
   },
   {
    "logradouro": "Vila Ipiranga",
    "perimetro": "Rua Curuçá e Passagem Ipiranga"
   },
   {
    "logradouro": "Vila Lobatinho",
    "perimetro": "Travessa Magno de Araújo e fim da via"
   },
   {
    "logradouro": "Vila Mendes",
    "perimetro": "Travessa Magno de Araújo e fim da via"
   },
   {
    "logradouro": "Vila São José",
    "perimetro": "Rua Frederico Scheneippe e fim da via"
   },
   {
    "logradouro": "Vila dos Bancários",
    "perimetro": "Rua do Una e Rua Gonçalves Ferreira"
   }
  ]
 },
 {
  "id": "16",
  "nome": "Região 16",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 2342,
  "panfletos": 1405,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Canal do Una",
    "perimetro": "Travessa do Chaco e Travessa Visconde de Pirajá"
   },
   {
    "logradouro": "Rua do Acampamento",
    "perimetro": "Rua Nova e Avenida Canal do Una"
   },
   {
    "logradouro": "Travessa Humaitá",
    "perimetro": "Passagem Lava Pés e Rua Nova"
   },
   {
    "logradouro": "Travessa Timbó",
    "perimetro": "Rua Nova e Avenida Canal do Una"
   },
   {
    "logradouro": "Travessa Vileta",
    "perimetro": "Avenida Canal do Una e Rua Nova"
   },
   {
    "logradouro": "Travessa Visconde de Pirajá",
    "perimetro": "Travessa Mauriti e Avenida Mauriti"
   },
   {
    "logradouro": "Travessa da Estrella",
    "perimetro": "Avenida Canal do Una e Rua Nova"
   },
   {
    "logradouro": "Passagem Cecy",
    "perimetro": "Rua Nova e fim da via"
   },
   {
    "logradouro": "Passagem Lava Pés",
    "perimetro": "Avenida Canal do Una e Rua do Acampamento"
   },
   {
    "logradouro": "Passagem Miraci",
    "perimetro": "Avenida Canal do Una e Rua Nova"
   },
   {
    "logradouro": "Passagem Mirtes",
    "perimetro": "Avenida Canal do Una e Rua Nova"
   },
   {
    "logradouro": "Passagem Nena Barreto",
    "perimetro": "Avenida Canal do Una e Travessa Humaitá"
   }
  ]
 },
 {
  "id": "17",
  "nome": "Região 17",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4902,
  "panfletos": 2941,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Rua Antônio Everdosa",
    "perimetro": "Travessa Vileta e Travessa Lomas Valentinas"
   },
   {
    "logradouro": "Rua Nova",
    "perimetro": "Travessa Vileta e Travessa Lomas Valentinas"
   },
   {
    "logradouro": "Travessa Angustura",
    "perimetro": "Avenida Pedro Miranda e Rua Nova"
   },
   {
    "logradouro": "Travessa Barão do Triunfo",
    "perimetro": "Avenida Pedro Miranda e Rua Nova"
   },
   {
    "logradouro": "Travessa Lomas Valentinas",
    "perimetro": "Rua Nova e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa Mauriti",
    "perimetro": "Avenida Pedro Miranda e Rua Nova"
   },
   {
    "logradouro": "Travessa Timbó",
    "perimetro": "Avenida Pedro Miranda e Rua Nova"
   },
   {
    "logradouro": "Travessa Vileta",
    "perimetro": "Rua Nova e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa da Estrella",
    "perimetro": "Rua Nova e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Alameda Novo Horizonte",
    "perimetro": "Rua Antônio Everdosa e fim da via"
   },
   {
    "logradouro": "Passagem Almirante Saldanha Marinho",
    "perimetro": "Travessa Vileta e Travessa da Estrella"
   },
   {
    "logradouro": "Passagem Bom Jardim",
    "perimetro": "Rua Antônio Everdosa e Rua Nova"
   },
   {
    "logradouro": "Passagem Heraldo",
    "perimetro": "Rua Nova e Travessa Mauriti"
   },
   {
    "logradouro": "Passagem Serique",
    "perimetro": "Rua Nova e Travessa da Estrella"
   },
   {
    "logradouro": "Vila Cidade Jardim",
    "perimetro": "Travessa Angustura"
   },
   {
    "logradouro": "Vila Paraíso",
    "perimetro": "Travessa Vileta e fim da via"
   },
   {
    "logradouro": "Vila Paulo Cabral",
    "perimetro": "Rua Antônio Everdosa e fim da via"
   },
   {
    "logradouro": "Vila Rosa Cruz",
    "perimetro": "Travessa Lomas Valentinas e fim da via"
   },
   {
    "logradouro": "Vila Tropical",
    "perimetro": "Travessa Vileta e fim da via"
   },
   {
    "logradouro": "Conjunto Primavera",
    "perimetro": "Travessa Vileta e fim da via"
   },
   {
    "logradouro": "Via Esperança",
    "perimetro": "Travessa Mauriti e fim da via"
   },
   {
    "logradouro": "Via Nazaré",
    "perimetro": "Travessa Mauriti e fim da via"
   },
   {
    "logradouro": "Via Noleto",
    "perimetro": "Travessa Mauriti e fim da via"
   }
  ]
 },
 {
  "id": "18",
  "nome": "Região 18",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4279,
  "panfletos": 2567,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Rua Antônio Everdosa",
    "perimetro": "Travessa Lomas Valentinas e Passagem São Sebastião"
   },
   {
    "logradouro": "Rua Nova",
    "perimetro": "Travessa Lomas Valentinas e Passagem São Sebastião"
   },
   {
    "logradouro": "Travessa Alferes Costa",
    "perimetro": "Avenida Pedro Miranda e Avenida Senador Lemos"
   },
   {
    "logradouro": "Travessa Doutor Enéas Pinheiro",
    "perimetro": "Rua Nova e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa Perebebuí",
    "perimetro": "Rua Nova e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa Visconde de Pirajá",
    "perimetro": "Passagem Pirajá e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Passagem Bambu",
    "perimetro": "Passagem São Sebastião e Passagem Conceição"
   },
   {
    "logradouro": "Passagem Conceição",
    "perimetro": "Avenida Doutor Freitas e Passagem São Sebastião"
   },
   {
    "logradouro": "Passagem D",
    "perimetro": "Travessa Doutor Enéas Pinheiro e Passagem São Sebastião"
   },
   {
    "logradouro": "Passagem Dontem",
    "perimetro": "Passagem E e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Passagem Doutor Freitas",
    "perimetro": "Avenida Senador Lemos e Passagem Nossa Senhora das Graças"
   },
   {
    "logradouro": "Passagem E",
    "perimetro": "Travessa Doutor Enéas Pinheiro e Passagem São Sebastião"
   },
   {
    "logradouro": "Passagem Frederico Francês",
    "perimetro": "Rua Antônio Everdosa e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Passagem H",
    "perimetro": "Travessa Doutor Enéas Pinheiro e Travessa Perebebuí"
   },
   {
    "logradouro": "Passagem Magalhães",
    "perimetro": "Passagem Conceição e Passagem Quarubas"
   },
   {
    "logradouro": "Passagem Mana Flecha",
    "perimetro": "Travessa Visconde de Pirajá e fim da via"
   },
   {
    "logradouro": "Passagem Maria Cunha",
    "perimetro": "Passagem São Luís"
   },
   {
    "logradouro": "Passagem Mário Rocha",
    "perimetro": "Rua Nova e Travessa Lomas Valentinas"
   },
   {
    "logradouro": "Passagem Nossa Senhor Auxiliadora",
    "perimetro": "Avenida Doutor Freitas e Travessa Alferes Costa"
   },
   {
    "logradouro": "Passagem Nossa Senhora das Graças",
    "perimetro": "Avenida Doutor Freitas e Passagem São Luís"
   },
   {
    "logradouro": "Passagem Quarubas",
    "perimetro": "Passagem São Sebastião e Passagem São Luís"
   },
   {
    "logradouro": "Passagem Santa Luzia",
    "perimetro": "Travessa Doutor Enéas Pinheiro e Passagem São Sebastião"
   },
   {
    "logradouro": "Passagem São Luís",
    "perimetro": "Avenida Senador Lemos e Passagem Maria Cunha"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Avenida Senador Lemos e Passagem Nossa Senhor Auxiliadora"
   },
   {
    "logradouro": "Passagem Vista Alegre",
    "perimetro": "Travessa Doutor Enéas Pinheiro e Passagem Magalhães"
   },
   {
    "logradouro": "Vila Conceição",
    "perimetro": "Passagem Frederico Francês e Travessa Lomas Valentinas"
   },
   {
    "logradouro": "Vila Nossa Senhora de Fátima",
    "perimetro": "Travessa Visconde de Pirajá e fim da via"
   }
  ]
 },
 {
  "id": "19",
  "nome": "Região 19",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3100,
  "panfletos": 1860,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Almirante Barroso",
    "perimetro": "BRT"
   },
   {
    "logradouro": "Avenida Brigadeiro Protázio",
    "perimetro": "Avenida Doutor Freitas e Avenida Júlio César"
   },
   {
    "logradouro": "Avenida Júlio César",
    "perimetro": "BRT Almirante Barroso e limite da região"
   },
   {
    "logradouro": "Avenida Pedro Álvares Cabral",
    "perimetro": "Passagem Aliados e limite da região"
   },
   {
    "logradouro": "Avenida Senador Lemos",
    "perimetro": "Avenida Pedro Álvares Cabral e limite da região"
   },
   {
    "logradouro": "Avenida dos Soldados",
    "perimetro": "Rua dos Ten Coronéis e Avenida dos Subtenentes"
   },
   {
    "logradouro": "Avenida dos Subtenentes",
    "perimetro": "Avenida Brigadeiro Protázio e Travessa dos Cabos"
   },
   {
    "logradouro": "Rua A",
    "perimetro": "Rua da Comar e Rua E"
   },
   {
    "logradouro": "Rua Ariramba",
    "perimetro": "Avenida Almirante Barroso e fim da via"
   },
   {
    "logradouro": "Rua B",
    "perimetro": "Rua C e fim da via"
   },
   {
    "logradouro": "Rua Bandeirante",
    "perimetro": "Rua Xavante e fim da via"
   },
   {
    "logradouro": "Rua Boa Esperanca",
    "perimetro": "Passagem Getúlio Vargas e Alameda Santa Terezinha"
   },
   {
    "logradouro": "Rua Brasília",
    "perimetro": "Rua Tucano e fim da via"
   },
   {
    "logradouro": "Rua C",
    "perimetro": "Rua B e fim da via"
   },
   {
    "logradouro": "Rua D",
    "perimetro": "Rua A e Rua F"
   },
   {
    "logradouro": "Rua E",
    "perimetro": "Rua J e Rua A"
   },
   {
    "logradouro": "Rua F",
    "perimetro": "Alameda A e fim da via"
   },
   {
    "logradouro": "Rua G",
    "perimetro": "Alameda A e fim da via"
   },
   {
    "logradouro": "Rua H",
    "perimetro": "Alameda A e fim da via"
   },
   {
    "logradouro": "Rua I",
    "perimetro": "Alameda A e fim da via"
   },
   {
    "logradouro": "Rua J",
    "perimetro": "Alameda A e fim da via"
   },
   {
    "logradouro": "Rua Mosqueiro",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua Outeiro",
    "perimetro": "Rua Mosqueiro e fim da via"
   },
   {
    "logradouro": "Rua Tucano",
    "perimetro": "Avenida Doutor Freitas e Rua Brasília"
   },
   {
    "logradouro": "Rua Xavante",
    "perimetro": "Avenida Doutor Freitas e Rua Brasília"
   },
   {
    "logradouro": "Rua da Comar",
    "perimetro": "Avenida Júlio César"
   },
   {
    "logradouro": "Rua dos Majores",
    "perimetro": "Avenida Almirante Barroso e Avenida dos Soldados"
   },
   {
    "logradouro": "Rua dos Ten Coronéis",
    "perimetro": "Avenida Almirante Barroso e fim da via"
   },
   {
    "logradouro": "Travessa Atalaia",
    "perimetro": "Rua Ariramba e Rua Mosqueiro"
   },
   {
    "logradouro": "Travessa Marapanim",
    "perimetro": "Rua Ariramba e fim da via"
   },
   {
    "logradouro": "Travessa Murubira",
    "perimetro": "Rua Mosqueiro e Rua Ariramba"
   },
   {
    "logradouro": "Travessa dos Cabos",
    "perimetro": "Rua dos Ten Coronéis e Avenida dos Subtenentes"
   },
   {
    "logradouro": "Travessa dos Sargentos",
    "perimetro": "Rua dos Ten Coronéis e Rua dos Majores"
   },
   {
    "logradouro": "Alameda A",
    "perimetro": "Rua I e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Alameda B",
    "perimetro": "Alameda Tatiana e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Alameda Cinco",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Dez",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Dois",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Doze",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda G",
    "perimetro": "Alameda H e Alameda B"
   },
   {
    "logradouro": "Alameda H",
    "perimetro": "Alameda B e Alameda G"
   },
   {
    "logradouro": "Alameda I",
    "perimetro": "Alameda J e Alameda B"
   },
   {
    "logradouro": "Alameda J",
    "perimetro": "Alameda B e Alameda I"
   },
   {
    "logradouro": "Alameda K",
    "perimetro": "Alameda Tatiana e Alameda B"
   },
   {
    "logradouro": "Alameda Nove",
    "perimetro": "Passagem Getúlio Vargas e Rua Boa Esperanca"
   },
   {
    "logradouro": "Alameda Oito",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Onze",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Quatorze",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Quatro",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Quinze",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Santa Terezinha",
    "perimetro": "Rua Boa Esperanca e fim da via"
   },
   {
    "logradouro": "Alameda Seis",
    "perimetro": "Passagem Getúlio Vargas e Rua Boa Esperanca"
   },
   {
    "logradouro": "Alameda Sete",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Tatiana",
    "perimetro": "Avenida Almirante Barroso e fim da via"
   },
   {
    "logradouro": "Alameda Treze",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Alameda Três",
    "perimetro": "Rua Boa Esperanca e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "Passagem Aliados",
    "perimetro": "Avenida Pedro Álvares Cabral e Passagem Monteiro Lobato"
   },
   {
    "logradouro": "Passagem Getúlio Vargas",
    "perimetro": "Avenida Almirante Barroso e Passagem Santa Terezinha"
   },
   {
    "logradouro": "Passagem Pires Franco",
    "perimetro": "Avenida Almirante Barroso e Alameda A"
   },
   {
    "logradouro": "Passagem Santa Terezinha",
    "perimetro": "Alameda Santa Terezinha e Passagem Getúlio Vargas"
   },
   {
    "logradouro": "BRT",
    "perimetro": "Avenida Almirante Barroso"
   },
   {
    "logradouro": "BRT Almirante Barroso",
    "perimetro": "Avenida Doutor Freitas e BRT"
   },
   {
    "logradouro": "Elevado Carlos Mariguela",
    "perimetro": "Avenida Doutor Freitas e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Via de Carros e Pedestres",
    "perimetro": "Fim da via"
   }
  ]
 },
 {
  "id": "20",
  "nome": "Região 20",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 1334,
  "panfletos": 800,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Almirante Barroso",
    "perimetro": "BRT e limite da região"
   },
   {
    "logradouro": "Avenida Dalva",
    "perimetro": "Avenida Almirante Barroso e Avenida Pedro Álvares Cabral"
   },
   {
    "logradouro": "Avenida Engenheiro Henrique Rosa",
    "perimetro": "Avenida Almirante Barroso e Avenida Pedro Álvares Cabral"
   },
   {
    "logradouro": "Avenida Engenheiro Inocêncio Holanda de Lima",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Avenida Engenheiro Inácio Moura",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Avenida Engenheiro João Muniz",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Avenida Engenheiro Vitor da Silva",
    "perimetro": "Avenida Almirante Barroso e Avenida Pedro Álvares Cabral"
   },
   {
    "logradouro": "Avenida Pedro Álvares Cabral",
    "perimetro": "Rodovia Augusto Montenegro e Passagem Aliados"
   },
   {
    "logradouro": "Avenida Tavares Bastos",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Rodovia Augusto Montenegro",
    "perimetro": "Avenida Almirante Barroso e BRT Augusto Montenegro"
   },
   {
    "logradouro": "Rua Maruda",
    "perimetro": "Avenida Tavares Bastos e fim da via"
   },
   {
    "logradouro": "Travessa Ajuruteua",
    "perimetro": "Rua Ariramba e Rua Maruda"
   },
   {
    "logradouro": "Travessa Com A Frente da Escola",
    "perimetro": "Avenida Engenheiro Henrique Rosa e Avenida Engenheiro Inácio Moura"
   },
   {
    "logradouro": "Travessa Com Fundos da Escola",
    "perimetro": "Avenida Engenheiro João Muniz e Avenida Engenheiro Henrique Rosa"
   },
   {
    "logradouro": "Travessa G",
    "perimetro": "Avenida Engenheiro Henrique Rosa e Avenida Engenheiro João Muniz"
   },
   {
    "logradouro": "Travessa K",
    "perimetro": "Avenida Engenheiro João Muniz e Avenida Engenheiro Inocêncio Holanda de Lima"
   },
   {
    "logradouro": "Travessa L",
    "perimetro": "Avenida Engenheiro João Muniz e Avenida Engenheiro Henrique Rosa"
   },
   {
    "logradouro": "Travessa Marapanim",
    "perimetro": "Avenida Tavares Bastos e Rua Ariramba"
   },
   {
    "logradouro": "Alameda Lima",
    "perimetro": "Avenida Pedro Álvares Cabral e fim da via"
   },
   {
    "logradouro": "Alameda Ministro Costa Cavalcante",
    "perimetro": "Avenida Almirante Barroso e Avenida Pedro Álvares Cabral"
   },
   {
    "logradouro": "Passagem Monteiro Lobato",
    "perimetro": "Avenida Tavares Bastos e Passagem Aliados"
   },
   {
    "logradouro": "Passagem Pinto Marquês",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Almirante Barroso"
   },
   {
    "logradouro": "Passagem Santa Matilde",
    "perimetro": "Avenida Almirante Barroso e Avenida Pedro Álvares Cabral"
   },
   {
    "logradouro": "Passagem São Benedito",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Dalva"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Avenida Pedro Álvares Cabral e Avenida Almirante Barroso"
   },
   {
    "logradouro": "BRT",
    "perimetro": "Avenida Almirante Barroso"
   },
   {
    "logradouro": "BRT Almirante Barroso",
    "perimetro": "BRT e BRT Augusto Montenegro"
   },
   {
    "logradouro": "BRT Augusto Montenegro",
    "perimetro": "BRT Almirante Barroso e Rodovia Augusto Montenegro"
   }
  ]
 },
 {
  "id": "31",
  "nome": "Região 31",
  "semana": 3,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 5617,
  "panfletos": 3370,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Alcindo Cacela",
    "perimetro": "Vila Tupinambas e Rua Bernal do Couto"
   },
   {
    "logradouro": "Avenida Pedro Miranda",
    "perimetro": "Avenida Alcindo Cacela e Travessa Antônio Baena"
   },
   {
    "logradouro": "Estrada Acampamento",
    "perimetro": "Rua do Galo e Canal Soares Carneiro"
   },
   {
    "logradouro": "Rua Antônio Everdosa",
    "perimetro": "Travessa Antônio Baena e Travessa Vileta"
   },
   {
    "logradouro": "Rua Bernal do Couto",
    "perimetro": "Avenida Generalíssimo Deodoro"
   },
   {
    "logradouro": "Rua Ferreira Pena",
    "perimetro": "Avenida Pedro Miranda e Rua Curuçá"
   },
   {
    "logradouro": "Rua Nova",
    "perimetro": "Travessa do Chaco e Travessa Vileta"
   },
   {
    "logradouro": "Rua do Acampamento",
    "perimetro": "Travessa Antônio Baena e Rua Nova"
   },
   {
    "logradouro": "Rua do Galo",
    "perimetro": "Travessa Coronel Luíz Bentes e Estrada Acampamento"
   },
   {
    "logradouro": "Travessa 14 de Março",
    "perimetro": "Rua Bernal do Couto e Travessa do Chaco"
   },
   {
    "logradouro": "Travessa Antônio Baena",
    "perimetro": "Avenida Pedro Miranda e Travessa Djalma Dutra"
   },
   {
    "logradouro": "Travessa Coronel Luíz Bentes",
    "perimetro": "Passagem Mena Barreto e Travessa do Chaco"
   },
   {
    "logradouro": "Travessa Curuzu",
    "perimetro": "Rua Antônio Everdosa e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa Djalma Dutra",
    "perimetro": "Canal Soares Carneiro e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa Dom Pedro I",
    "perimetro": "Rua Curuçá e Avenida Generalíssimo Deodoro"
   },
   {
    "logradouro": "Travessa Humaitá",
    "perimetro": "Rua Nova e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Travessa José Pio",
    "perimetro": "Rua Curuçá e Travessa Antônio Baena"
   },
   {
    "logradouro": "Travessa Manoel Evaristo",
    "perimetro": "Rua Curuçá e Travessa 14 de Março"
   },
   {
    "logradouro": "Travessa Soares Carneiro",
    "perimetro": "Travessa 14 de Março e Rua Curuçá"
   },
   {
    "logradouro": "Travessa do Chaco",
    "perimetro": "Travessa Coronel Luíz Bentes e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Alameda Taubinha",
    "perimetro": "Travessa Soares Carneiro e fim da via"
   },
   {
    "logradouro": "Passagem 19 de Julho",
    "perimetro": "Travessa 14 de Março e fim da via"
   },
   {
    "logradouro": "Passagem Almirante Saldanha Marinho",
    "perimetro": "Rua do Acampamento e Travessa Vileta"
   },
   {
    "logradouro": "Passagem Belém",
    "perimetro": "Travessa Soares Carneiro e Vila Marília C"
   },
   {
    "logradouro": "Passagem Henrique",
    "perimetro": "Travessa Soares Carneiro e fim da via"
   },
   {
    "logradouro": "Passagem Independencia",
    "perimetro": "Travessa 14 de Março e Avenida Alcindo Cacela"
   },
   {
    "logradouro": "Passagem Júlio César",
    "perimetro": "Travessa 14 de Março e Travessa do Chaco"
   },
   {
    "logradouro": "Passagem Leitão",
    "perimetro": "Rua Curuçá e Travessa 14 de Março"
   },
   {
    "logradouro": "Passagem Leonor Fernandes",
    "perimetro": "Rua Ferreira Pena e fim da via"
   },
   {
    "logradouro": "Passagem Perpetuo Socorro",
    "perimetro": "Travessa Antônio Baena e Travessa Djalma Dutra"
   },
   {
    "logradouro": "Passagem Redenção",
    "perimetro": "Travessa do Chaco e Travessa Humaitá"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Travessa Antônio Baena"
   },
   {
    "logradouro": "Passagem do Carmo",
    "perimetro": "Passagem São Jorge e Passagem Perpetuo Socorro"
   },
   {
    "logradouro": "Vila 2 de Fevereiro",
    "perimetro": "Vila Bom Jesus e Rua do Acampamento"
   },
   {
    "logradouro": "Vila 25 de Julho",
    "perimetro": "Travessa Humaitá e fim da via"
   },
   {
    "logradouro": "Vila Boa Esperança",
    "perimetro": "Rua do Acampamento e Vila Bom Jesus"
   },
   {
    "logradouro": "Vila Bom Jesus",
    "perimetro": "Vila Boa Esperança e Vila 2 de Fevereiro"
   },
   {
    "logradouro": "Vila Canaã",
    "perimetro": "Rua Nova e fim da via"
   },
   {
    "logradouro": "Vila Canãa",
    "perimetro": "Travessa Soares Carneiro e fim da via"
   },
   {
    "logradouro": "Vila Dois Irmãos",
    "perimetro": "Passagem Leitão e Travessa José Pio"
   },
   {
    "logradouro": "Vila Maria de Fátima",
    "perimetro": "Passagem Perpetuo Socorro e Avenida Pedro Miranda"
   },
   {
    "logradouro": "Vila Marília A",
    "perimetro": "Passagem Belém e Travessa Soares Carneiro"
   },
   {
    "logradouro": "Vila Marília B",
    "perimetro": "Passagem Belém e fim da via"
   },
   {
    "logradouro": "Vila Marília C",
    "perimetro": "Passagem Belém e Vila Marília B"
   },
   {
    "logradouro": "Vila Mônica",
    "perimetro": "Passagem 19 de Julho e Travessa José Pio"
   },
   {
    "logradouro": "Vila Nazaré",
    "perimetro": "Rua Curuçá e fim da via"
   },
   {
    "logradouro": "Vila Santa Rita",
    "perimetro": "Travessa Soares Carneiro e Vila São Raimundo"
   },
   {
    "logradouro": "Vila São Raimundo",
    "perimetro": "Vila Santa Rita e Rua Ferreira Pena"
   },
   {
    "logradouro": "Vila Tupinambas",
    "perimetro": "Avenida Alcindo Cacela e fim da via"
   },
   {
    "logradouro": "Vila Vitória",
    "perimetro": "Travessa Dom Pedro I e fim da via"
   },
   {
    "logradouro": "Canal Soares Carneiro",
    "perimetro": "Travessa Soares Carneiro e Travessa Djalma Dutra"
   },
   {
    "logradouro": "Residencial Alberto Farias Coelho",
    "perimetro": "Rua Ferreira Pena e fim da via"
   }
  ]
 },
 {
  "id": "47",
  "nome": "Região 47",
  "semana": 3,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3963,
  "panfletos": 2378,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida João Paulo II",
    "perimetro": "Rua Euclides da Cunha e Estrada Pedreirinha"
   },
   {
    "logradouro": "Avenida Margalhães",
    "perimetro": "Avenida Primeiro de Dezembro e fim da via"
   },
   {
    "logradouro": "Avenida Primeiro de Dezembro",
    "perimetro": "Rua Joaquim Fonseca e Rua do Fio"
   },
   {
    "logradouro": "Avenida Tiradentes",
    "perimetro": "Rua Parabor e Rua do Fio"
   },
   {
    "logradouro": "Estrada Moça Bonita",
    "perimetro": "Avenida Primeiro de Dezembro e limite da região"
   },
   {
    "logradouro": "Estrada Pedreirinha",
    "perimetro": "Rua da Pedreirinha e Avenida João Paulo II"
   },
   {
    "logradouro": "Rua Doutor Henrique",
    "perimetro": "Rua São Jorge e Passagem Sol Nascente"
   },
   {
    "logradouro": "Rua Euclides da Cunha",
    "perimetro": "Avenida João Paulo II e limite da região"
   },
   {
    "logradouro": "Rua Jardim Anabiju",
    "perimetro": "Rua Juracy Silva e limite da região"
   },
   {
    "logradouro": "Rua Joaquim Fonseca",
    "perimetro": "Passagem Santa Inês e fim da via"
   },
   {
    "logradouro": "Rua José Hassegawa",
    "perimetro": "Passagem Alegre e fim da via"
   },
   {
    "logradouro": "Rua Juracy Silva",
    "perimetro": "Passagem Alegre e Rua Doutor Henrique"
   },
   {
    "logradouro": "Rua Liberdade",
    "perimetro": "Avenida João Paulo II e fim da via"
   },
   {
    "logradouro": "Rua Parabor",
    "perimetro": "Passagem Simões e Rua São Jorge"
   },
   {
    "logradouro": "Rua Paulo Fonteles",
    "perimetro": "Alameda Moça Bonita e Alameda João Calandrim"
   },
   {
    "logradouro": "Rua Primeiro Pedreirinha",
    "perimetro": "Passagem Natal e fim da via"
   },
   {
    "logradouro": "Rua São Jorge",
    "perimetro": "Passagem Alegre e Rua Parabor"
   },
   {
    "logradouro": "Rua Vitoria",
    "perimetro": "Alameda Moça Bonita e Rua Paulo Fonteles"
   },
   {
    "logradouro": "Rua da Pedreirinha",
    "perimetro": "Estrada Pedreirinha e fim da via"
   },
   {
    "logradouro": "Rua do Fio",
    "perimetro": "Avenida Tiradentes e fim da via"
   },
   {
    "logradouro": "Alameda Esperança",
    "perimetro": "Passagem José de Alencar e fim da via"
   },
   {
    "logradouro": "Alameda Guimarães",
    "perimetro": "Rua da Pedreirinha e fim da via"
   },
   {
    "logradouro": "Alameda Jardim das Oliveiras",
    "perimetro": "Passagem José de Alencar e Avenida João Paulo II"
   },
   {
    "logradouro": "Alameda João Calandrim",
    "perimetro": "Alameda Moça Bonita e Rua Paulo Fonteles"
   },
   {
    "logradouro": "Alameda Moça Bonita",
    "perimetro": "Avenida Primeiro de Dezembro e Passagem Virgem da Conceição"
   },
   {
    "logradouro": "Passagem 19 de Junho",
    "perimetro": "Passagem Alacid Nunes e Rua Euclides da Cunha"
   },
   {
    "logradouro": "Passagem 25 de Janeiro",
    "perimetro": "Passagem Alacid Nunes e Rua Euclides da Cunha"
   },
   {
    "logradouro": "Passagem Alacid Nunes",
    "perimetro": "Passagem 19 de Junho e limite da região"
   },
   {
    "logradouro": "Passagem Alegre",
    "perimetro": "Rua Euclides da Cunha e Passagem Sol Nascente"
   },
   {
    "logradouro": "Passagem Ana Deusa",
    "perimetro": "Alameda Jardim das Oliveiras e fim da via"
   },
   {
    "logradouro": "Passagem Deus Proverá",
    "perimetro": "Rua da Pedreirinha e fim da via"
   },
   {
    "logradouro": "Passagem Elias Barreto",
    "perimetro": "Rua da Pedreirinha e Rua Primeiro Pedreirinha"
   },
   {
    "logradouro": "Passagem Emilia Ribeiro",
    "perimetro": "Avenida Primeiro de Dezembro e Avenida João Paulo II"
   },
   {
    "logradouro": "Passagem Evelin",
    "perimetro": "Rua Primeiro Pedreirinha e Rua da Pedreirinha"
   },
   {
    "logradouro": "Passagem José de Alencar",
    "perimetro": "Avenida João Paulo II e fim da via"
   },
   {
    "logradouro": "Passagem Maria da Paz",
    "perimetro": "Rua da Pedreirinha e Rua Primeiro Pedreirinha"
   },
   {
    "logradouro": "Passagem Matriz",
    "perimetro": "Rua da Pedreirinha e fim da via"
   },
   {
    "logradouro": "Passagem Natal",
    "perimetro": "Rua Primeiro Pedreirinha e Rua da Pedreirinha"
   },
   {
    "logradouro": "Passagem Otil",
    "perimetro": "Passagem Alegre e Rua Doutor Henrique"
   },
   {
    "logradouro": "Passagem Quinze de Outubvro",
    "perimetro": "Rua Joaquim Fonseca e Rua Euclides da Cunha"
   },
   {
    "logradouro": "Passagem Simões",
    "perimetro": "Rua Parabor e Avenida João Paulo II"
   },
   {
    "logradouro": "Passagem Sol Nascente",
    "perimetro": "Quadra 2 e Passagem Alegre"
   },
   {
    "logradouro": "Passagem São Luís",
    "perimetro": "Rua do Fio e Rua Parabor"
   },
   {
    "logradouro": "Passagem Virgem da Conceição",
    "perimetro": "Passagem Sol Nascente e Alameda Moça Bonita"
   },
   {
    "logradouro": "Quadra 1",
    "perimetro": "Rua José Hassegawa e Rua Jardim Anabiju"
   },
   {
    "logradouro": "Quadra 2",
    "perimetro": "Passagem Sol Nascente e Rua José Hassegawa"
   }
  ]
 },
 {
  "id": "52",
  "nome": "Região 52",
  "semana": 3,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 485,
  "panfletos": 291,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Marechal Hérmes",
    "perimetro": "Avenida Visconde de Souza Franco e fim da via"
   },
   {
    "logradouro": "Travessa Dom Romualdo de Seixas",
    "perimetro": "Avenida Marechal Hérmes e Avenida Pedro Álvares Cabral"
   }
  ]
 },
 {
  "id": "21",
  "nome": "Região 21",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4055,
  "panfletos": 2433,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Contorno",
    "perimetro": "Avenida Santos Dumont e Avenida Norte"
   },
   {
    "logradouro": "Avenida Contorno das Bases",
    "perimetro": "Rodovia Artur Bernardes e Avenida Sul"
   },
   {
    "logradouro": "Avenida Júlio César",
    "perimetro": "Avenida Pará e Avenida Norte"
   },
   {
    "logradouro": "Avenida Leste",
    "perimetro": "Avenida Norte e Avenida Júlio César"
   },
   {
    "logradouro": "Avenida Norte",
    "perimetro": "Avenida Sul e Avenida Júlio César"
   },
   {
    "logradouro": "Avenida Oeste",
    "perimetro": "Avenida Santos Dumont e Rodovia Artur Bernardes"
   },
   {
    "logradouro": "Avenida Pará",
    "perimetro": "Rodovia Artur Bernardes e Avenida Júlio César"
   },
   {
    "logradouro": "Avenida Santos Dumont",
    "perimetro": "Avenida Galeão e Avenida Oeste"
   },
   {
    "logradouro": "Avenida Sul",
    "perimetro": "Avenida Norte e Avenida Contorno"
   },
   {
    "logradouro": "Rodovia Artur Bernardes",
    "perimetro": "Avenida Oeste e Avenida Pará"
   },
   {
    "logradouro": "Rua 1",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 10",
    "perimetro": "Avenida Santos Dumont e Avenida Norte"
   },
   {
    "logradouro": "Rua 11",
    "perimetro": "Avenida Leste e Avenida Santos Dumont"
   },
   {
    "logradouro": "Rua 12",
    "perimetro": "Avenida Leste e Avenida Oeste"
   },
   {
    "logradouro": "Rua 13",
    "perimetro": "Avenida Leste e Avenida Oeste"
   },
   {
    "logradouro": "Rua 14",
    "perimetro": "Avenida Leste e Avenida Oeste"
   },
   {
    "logradouro": "Rua 15",
    "perimetro": "Avenida Leste e Rua Rio Amazonas"
   },
   {
    "logradouro": "Rua 16",
    "perimetro": "Avenida Leste e Avenida Oeste"
   },
   {
    "logradouro": "Rua 17",
    "perimetro": "Rua Rio Amazonas e Avenida Leste"
   },
   {
    "logradouro": "Rua 18",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 18A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 19",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 19A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 2",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 20",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 20A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 21",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 21A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 22",
    "perimetro": "Avenida Oeste e Avenida Norte"
   },
   {
    "logradouro": "Rua 22A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 23",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 23A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 24",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 24A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 25",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 25A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 26",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 26A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 27",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 27A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 28",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 28A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 29",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 29A",
    "perimetro": "Rua 29 e Avenida Norte"
   },
   {
    "logradouro": "Rua 3",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 30",
    "perimetro": "Avenida Norte e Avenida Oeste"
   },
   {
    "logradouro": "Rua 30A",
    "perimetro": "Rua 29 e Avenida Norte"
   },
   {
    "logradouro": "Rua 31",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 31A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 32",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 32A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 33",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 33A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 34",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 34A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 35",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 35A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 36",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 36A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 37",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 37A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 38",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 38A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 39",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 39A",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 4",
    "perimetro": "Avenida Leste e Avenida Norte"
   },
   {
    "logradouro": "Rua 40",
    "perimetro": "Avenida Sul e Avenida Oeste"
   },
   {
    "logradouro": "Rua 40A",
    "perimetro": "Avenida Norte e Avenida Leste"
   },
   {
    "logradouro": "Rua 41",
    "perimetro": "Avenida Oeste e Avenida Sul"
   },
   {
    "logradouro": "Rua 42",
    "perimetro": "Avenida Sul e fim da via"
   },
   {
    "logradouro": "Rua 43",
    "perimetro": "Avenida Norte e fim da via"
   },
   {
    "logradouro": "Rua 44",
    "perimetro": "Avenida Sul e fim da via"
   },
   {
    "logradouro": "Rua 45",
    "perimetro": "Avenida Contorno das Bases e limite da região"
   },
   {
    "logradouro": "Rua 46",
    "perimetro": "Rodovia Artur Bernardes e limite da região"
   },
   {
    "logradouro": "Rua 47",
    "perimetro": "Avenida Oeste e limite da região"
   },
   {
    "logradouro": "Rua 5",
    "perimetro": "Avenida Santos Dumont e Avenida Norte"
   },
   {
    "logradouro": "Rua 6",
    "perimetro": "Avenida Norte e Avenida Santos Dumont"
   },
   {
    "logradouro": "Rua 7",
    "perimetro": "Avenida Santos Dumont e Avenida Norte"
   },
   {
    "logradouro": "Rua 8",
    "perimetro": "Avenida Norte e Avenida Santos Dumont"
   },
   {
    "logradouro": "Rua 9",
    "perimetro": "Avenida Santos Dumont e Avenida Norte"
   },
   {
    "logradouro": "Rua Almirante Alexandrino",
    "perimetro": "Rua Almirante Dantas Torres e Rua Sampaio Fernandes"
   },
   {
    "logradouro": "Rua Almirante Dantas Torres",
    "perimetro": "Rua Sampaio Fernandes e Rodovia Artur Bernardes"
   },
   {
    "logradouro": "Rua Almirante Newton Braga",
    "perimetro": "Rua Comandante Naércio e Rua Imperial Marinheiro"
   },
   {
    "logradouro": "Rua Almirante Rademaker",
    "perimetro": "Rodovia Artur Bernardes e Rua Almirante Silvio Figueiredo"
   },
   {
    "logradouro": "Rua Almirante Silvio Figueiredo",
    "perimetro": "Rua Sampaio Fernandes e fim da via"
   },
   {
    "logradouro": "Rua Aspirante Blanc",
    "perimetro": "Rua Tenente Malcher e Rua Sargento Godinho"
   },
   {
    "logradouro": "Rua Aspirante Carvalho",
    "perimetro": "Rua Sargento Godinho e Rua Tenente Malcher"
   },
   {
    "logradouro": "Rua Comandante Naércio",
    "perimetro": "Rua Almirante Rademaker e fim da via"
   },
   {
    "logradouro": "Rua Iguatemi",
    "perimetro": "Rua Almirante Silvio Figueiredo e Rua Imperial Marinheiro"
   },
   {
    "logradouro": "Rua Imperial Marinheiro",
    "perimetro": "Rua Almirante Newton Braga e Rua Iguatemi"
   },
   {
    "logradouro": "Rua Interna",
    "perimetro": "Rua Tenente Silva Filho e Rua Tenente Mourão"
   },
   {
    "logradouro": "Rua Major Lamarão",
    "perimetro": "Rua Tenente Mourão e Rua Sargente Raimundo"
   },
   {
    "logradouro": "Rua Pampeiro",
    "perimetro": "Rua Argus e Rodovia Artur Bernardes"
   },
   {
    "logradouro": "Rua Sampaio Fernandes",
    "perimetro": "Rua Almirante Dantas Torres e Rua Almirante Alexandrino"
   },
   {
    "logradouro": "Rua Sargente Raimundo",
    "perimetro": "Rua Aspirante Blanc e fim da via"
   },
   {
    "logradouro": "Rua Sargento Godinho",
    "perimetro": "Rua Aspirante Blanc e Rua Sargente Raimundo"
   },
   {
    "logradouro": "Rua Tenente Deusdedith",
    "perimetro": "Rua Tenente Silva Filho e Rua Tenente Mourão"
   },
   {
    "logradouro": "Rua Tenente Malcher",
    "perimetro": "Rua Aspirante Blanc e Rua Tenente Silva Filho"
   },
   {
    "logradouro": "Rua Tenente Mourão",
    "perimetro": "Avenida Pará e Rua Sargente Raimundo"
   },
   {
    "logradouro": "Rua Tenente Silva Filho",
    "perimetro": "Avenida Pará e Rua Sargento Godinho"
   },
   {
    "logradouro": "Rua do Lazer",
    "perimetro": "Rua 11 e Avenida Contorno"
   },
   {
    "logradouro": "Alameda Celino",
    "perimetro": "Avenida Norte e Alameda Paixão"
   },
   {
    "logradouro": "Alameda Paixão",
    "perimetro": "Avenida Norte e Alameda Celino"
   },
   {
    "logradouro": "Alameda Providência",
    "perimetro": "Avenida Leste e Avenida Norte"
   }
  ]
 },
 {
  "id": "22",
  "nome": "Região 22",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3047,
  "panfletos": 1828,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Arterial Sul",
    "perimetro": "Rua das Rosas e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Avenida Brasil",
    "perimetro": "Avenida Júlio César e Avenida Transamazônica"
   },
   {
    "logradouro": "Avenida Centenário",
    "perimetro": "Avenida Júlio César e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Avenida Contorno Ramos",
    "perimetro": "Avenida Contorno e Avenida Júlio César"
   },
   {
    "logradouro": "Avenida Coronel Brito",
    "perimetro": "Avenida Centenário e Avenida Arterial Sul"
   },
   {
    "logradouro": "Avenida Galeão",
    "perimetro": "Avenida Júlio César e Avenida Santos Dumont"
   },
   {
    "logradouro": "Avenida Júlio César",
    "perimetro": "Rodovia Desembargador Paulo Frota e limite da região"
   },
   {
    "logradouro": "Avenida Padre Bruno Sechi",
    "perimetro": "Passagem Magalhães Barata e Avenida Centenário"
   },
   {
    "logradouro": "Avenida Santos Dumont",
    "perimetro": "Avenida Júlio César e Avenida Contorno"
   },
   {
    "logradouro": "Avenida Transamazônica",
    "perimetro": "Rua Florianópolis e Rua Rio Branco"
   },
   {
    "logradouro": "Avenida dos Trabalhadores",
    "perimetro": "Avenida Centenário"
   },
   {
    "logradouro": "Rodovia Desembargador Paulo Frota",
    "perimetro": "Avenida Júlio César e Avenida Centenário"
   },
   {
    "logradouro": "Rua 1",
    "perimetro": "Avenida Júlio César e Rua Niterói"
   },
   {
    "logradouro": "Rua Acre",
    "perimetro": "Rua Pará e Rua Amazonas"
   },
   {
    "logradouro": "Rua Almirante Leal Ferreira",
    "perimetro": "Rua Tuiuti e Rua Riachuelo"
   },
   {
    "logradouro": "Rua Almirante Sérgio Lima",
    "perimetro": "Rua Riachuelo e Rua Almirante Leal Ferreira"
   },
   {
    "logradouro": "Rua Amapá",
    "perimetro": "Rua Pará e Rua Raposo Tavares"
   },
   {
    "logradouro": "Rua Amazonas",
    "perimetro": "Rua Rio Branco e Rua Acre"
   },
   {
    "logradouro": "Rua Belém",
    "perimetro": "Rua Rio Branco e Rua São Paulo"
   },
   {
    "logradouro": "Rua Boulevard Água Cristal",
    "perimetro": "Avenida Centenário e fim da via"
   },
   {
    "logradouro": "Rua Carlos Chagas",
    "perimetro": "Rua Maranhão e Rua Pedro Teixeira"
   },
   {
    "logradouro": "Rua Congonhas",
    "perimetro": "Avenida Galeão e Avenida Contorno Ramos"
   },
   {
    "logradouro": "Rua Cuiabá",
    "perimetro": "Avenida Transamazônica e Rua Florianópolis"
   },
   {
    "logradouro": "Rua Cumbica",
    "perimetro": "Avenida Contorno Ramos e Avenida Júlio César"
   },
   {
    "logradouro": "Rua Curitiba",
    "perimetro": "Rua Rio de Janeiro e Rua Rio Branco"
   },
   {
    "logradouro": "Rua Eduardo Gomes",
    "perimetro": "Avenida Santos Dumont"
   },
   {
    "logradouro": "Rua Florianópolis",
    "perimetro": "Avenida Transamazônica e Travessa Porto Velho"
   },
   {
    "logradouro": "Rua Fortaleza",
    "perimetro": "Rua Rio Branco e Rua São Paulo"
   },
   {
    "logradouro": "Rua Goiânia",
    "perimetro": "Rua Rio Branco e Rua Fortaleza"
   },
   {
    "logradouro": "Rua Guararapes",
    "perimetro": "Avenida Galeão e Avenida Contorno"
   },
   {
    "logradouro": "Rua Guarulhos",
    "perimetro": "Avenida Santos Dumont"
   },
   {
    "logradouro": "Rua Humaitá",
    "perimetro": "Rua Tuiuti e Rua Amazonas"
   },
   {
    "logradouro": "Rua Jerônimo Gonçalves",
    "perimetro": "Rua Osvaldo Cruz e Rua Piauí"
   },
   {
    "logradouro": "Rua Maceió",
    "perimetro": "Avenida Júlio César e Rua Natal"
   },
   {
    "logradouro": "Rua Manaus",
    "perimetro": "Rua Natal e Rua Vitória"
   },
   {
    "logradouro": "Rua Maranhão",
    "perimetro": "Rua Piauí e fim da via"
   },
   {
    "logradouro": "Rua Natal",
    "perimetro": "Avenida Transamazônica e Rua Olinda"
   },
   {
    "logradouro": "Rua Niterói",
    "perimetro": "Avenida Brasil e Rua Rio Branco"
   },
   {
    "logradouro": "Rua Olinda",
    "perimetro": "Avenida Brasil e Avenida Júlio César"
   },
   {
    "logradouro": "Rua Osvaldo Cruz",
    "perimetro": "Rua Jerônimo Gonçalves e Rua Maranhão"
   },
   {
    "logradouro": "Rua Paissandu",
    "perimetro": "Rua Amazonas e Rua Tuiuti"
   },
   {
    "logradouro": "Rua Pampulha",
    "perimetro": "Avenida Contorno e Avenida Galeão"
   },
   {
    "logradouro": "Rua Paranhos",
    "perimetro": "Avenida Júlio César e fim da via"
   },
   {
    "logradouro": "Rua Pará",
    "perimetro": "Rua Amazonas e Rua Acre"
   },
   {
    "logradouro": "Rua Pedro Teixeira",
    "perimetro": "Rua Piauí e fim da via"
   },
   {
    "logradouro": "Rua Piauí",
    "perimetro": "Rua Amazonas e fim da via"
   },
   {
    "logradouro": "Rua Porto Alegre",
    "perimetro": "Rua Recife e Avenida Transamazônica"
   },
   {
    "logradouro": "Rua Raposo Tavares",
    "perimetro": "Rua Amapá e fim da via"
   },
   {
    "logradouro": "Rua Recife",
    "perimetro": "Rua Rio Branco e Rua São Paulo"
   },
   {
    "logradouro": "Rua Riachuelo",
    "perimetro": "Rua Piauí e Avenida Júlio César"
   },
   {
    "logradouro": "Rua Rio Branco",
    "perimetro": "Avenida Júlio César e Travessa Tocantins"
   },
   {
    "logradouro": "Rua Rio de Janeiro",
    "perimetro": "Rua Niterói e Rua Recife"
   },
   {
    "logradouro": "Rua Rondônia",
    "perimetro": "Rua Amazonas e Rua Amapá"
   },
   {
    "logradouro": "Rua Roraima",
    "perimetro": "Rua Piauí e Rua Raposo Tavares"
   },
   {
    "logradouro": "Rua Salvador",
    "perimetro": "Rua São Paulo e Rua Rio Branco"
   },
   {
    "logradouro": "Rua Sargente Favaro",
    "perimetro": "Avenida Centenário e Travessa 17"
   },
   {
    "logradouro": "Rua São Paulo",
    "perimetro": "Rua Florianópolis e Rua Niterói"
   },
   {
    "logradouro": "Rua Tenente Aviador Silva Filho",
    "perimetro": "Rua Magalhães Barata e Avenida Centenário"
   },
   {
    "logradouro": "Rua Teresina",
    "perimetro": "Avenida Júlio César e Rua Natal"
   },
   {
    "logradouro": "Rua Toneleiro",
    "perimetro": "Rua Paissandu e Rua Humaitá"
   },
   {
    "logradouro": "Rua Tuiuti",
    "perimetro": "Rua Paissandu e Rua Riachuelo"
   },
   {
    "logradouro": "Rua Vira Copos",
    "perimetro": "Avenida Contorno Ramos e Avenida Santos Dumont"
   },
   {
    "logradouro": "Rua Vitória",
    "perimetro": "Rua Porto Alegre e Rua Natal"
   },
   {
    "logradouro": "Rua da Marinha",
    "perimetro": "Avenida Centenário e fim da via"
   },
   {
    "logradouro": "Rua das Rosas",
    "perimetro": "Avenida Centenário e Avenida Arterial Sul"
   },
   {
    "logradouro": "Travessa 1",
    "perimetro": "Travessa Um e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa 10",
    "perimetro": "Avenida Centenário e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa 11",
    "perimetro": "Travessa Major Aviador Seda e Rua Sargente Favaro"
   },
   {
    "logradouro": "Travessa 12",
    "perimetro": "Rua Sargente Favaro e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa 13",
    "perimetro": "Travessa Major Aviador Seda e Rua Sargente Favaro"
   },
   {
    "logradouro": "Travessa 14",
    "perimetro": "Rua Sargente Favaro e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa 15",
    "perimetro": "Travessa Coronel Aurélio e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa 16",
    "perimetro": "Travessa Major Aviador Seda e Rua Sargente Favaro"
   },
   {
    "logradouro": "Travessa 17",
    "perimetro": "Rua das Rosas e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa 2",
    "perimetro": "Travessa Celso Brito e Travessa Um"
   },
   {
    "logradouro": "Travessa 2 de Junho",
    "perimetro": "Rua Eduardo Gomes e Avenida Santos Dumont"
   },
   {
    "logradouro": "Travessa 3",
    "perimetro": "Travessa 4 e Travessa Celso Brito"
   },
   {
    "logradouro": "Travessa 4",
    "perimetro": "Travessa Celso Brito e Travessa 3"
   },
   {
    "logradouro": "Travessa 5",
    "perimetro": "Travessa 6 e Rua Tenente Aviador Silva Filho"
   },
   {
    "logradouro": "Travessa 6",
    "perimetro": "Rua Tenente Aviador Silva Filho e Travessa 5"
   },
   {
    "logradouro": "Travessa 7",
    "perimetro": "Travessa 8 e Rua Tenente Aviador Silva Filho"
   },
   {
    "logradouro": "Travessa 8",
    "perimetro": "Travessa 7 e Rua Tenente Aviador Silva Filho"
   },
   {
    "logradouro": "Travessa 9",
    "perimetro": "Avenida Centenário e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Travessa Altamira",
    "perimetro": "Rua Florianópolis e Travessa Aracaju"
   },
   {
    "logradouro": "Travessa Aracaju",
    "perimetro": "Travessa Altamira e Rua Florianópolis"
   },
   {
    "logradouro": "Travessa Belo Horizonte",
    "perimetro": "Rua São Paulo e Rua Rio Branco"
   },
   {
    "logradouro": "Travessa Boa Vista",
    "perimetro": "Rua Rio Branco e Travessa Belo Horizonte"
   },
   {
    "logradouro": "Travessa Celso Brito",
    "perimetro": "Rua Magalhães Barata e Avenida Centenário"
   },
   {
    "logradouro": "Travessa Coronel Aurélio",
    "perimetro": "Avenida Centenário e Travessa 17"
   },
   {
    "logradouro": "Travessa Coronel Tibério",
    "perimetro": "Travessa 17 e Avenida Centenário"
   },
   {
    "logradouro": "Travessa Guajará",
    "perimetro": "Rua Florianópolis e fim da via"
   },
   {
    "logradouro": "Travessa Itaituba",
    "perimetro": "Rua Florianópolis e fim da via"
   },
   {
    "logradouro": "Travessa João Pessoa",
    "perimetro": "Rua Florianópolis e Travessa São Luiz"
   },
   {
    "logradouro": "Travessa Macapá",
    "perimetro": "Rua Rio Branco e Travessa Porto Velho"
   },
   {
    "logradouro": "Travessa Major Aviador Seda",
    "perimetro": "Rua Magalhães Barata e Avenida Arterial Sul"
   },
   {
    "logradouro": "Travessa Marajó",
    "perimetro": "Rua Rio Branco e fim da via"
   },
   {
    "logradouro": "Travessa Natal",
    "perimetro": "Rua Florianópolis e Avenida Júlio César"
   },
   {
    "logradouro": "Travessa Porto Velho",
    "perimetro": "Rua Florianópolis e Rua Rio Branco"
   },
   {
    "logradouro": "Travessa Sargento Edílson",
    "perimetro": "Avenida Centenário e Travessa 1"
   },
   {
    "logradouro": "Travessa Sargento Favarro",
    "perimetro": "Travessa 1 e Avenida Centenário"
   },
   {
    "logradouro": "Travessa Sargento Frazão",
    "perimetro": "Avenida Centenário e Travessa 1"
   },
   {
    "logradouro": "Travessa Sargento Muniz",
    "perimetro": "Travessa 1 e Avenida Centenário"
   },
   {
    "logradouro": "Travessa São Luiz",
    "perimetro": "Rua Florianópolis e Travessa João Pessoa"
   },
   {
    "logradouro": "Travessa Tocantins",
    "perimetro": "Rua Rio Branco e fim da via"
   },
   {
    "logradouro": "Travessa Um",
    "perimetro": "Travessa 2 e Travessa 1"
   },
   {
    "logradouro": "Travessa Valparaíso",
    "perimetro": "Avenida Contorno e Avenida Galeão"
   },
   {
    "logradouro": "Alameda Pintado",
    "perimetro": "Rua Boulevard Água Cristal"
   },
   {
    "logradouro": "Elevado Gunnar Vingren",
    "perimetro": "Avenida Centenário e Avenida Júlio César"
   }
  ]
 },
 {
  "id": "32",
  "nome": "Região 32",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 2870,
  "panfletos": 1722,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Padre Bruno Sechi",
    "perimetro": "Estrada do Benguí e limite da região"
   },
   {
    "logradouro": "Estrada do Benguí",
    "perimetro": "Fim da via e limite da região"
   },
   {
    "logradouro": "Rua China",
    "perimetro": "Rua Japão e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua Custodio Primeiro de Almeida",
    "perimetro": "Passagem Sargento Getúlio e Passagem José Custodio de Almeida"
   },
   {
    "logradouro": "Rua Francisco de Assis",
    "perimetro": "Rua Custodio Primeiro de Almeida e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua Japão",
    "perimetro": "Avenida Padre Bruno Sechi e Rua China"
   },
   {
    "logradouro": "Rua Jardim da Liberdade",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Rua Quadra Cinco",
    "perimetro": "Estrada do Benguí e fim da via"
   },
   {
    "logradouro": "Rua Quatro",
    "perimetro": "Passagem Santo Antônio e fim da via"
   },
   {
    "logradouro": "Rua São Clemente",
    "perimetro": "Rua da Pratinha e limite da região"
   },
   {
    "logradouro": "Rua Teotonio Vilela",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem Santa Cruz"
   },
   {
    "logradouro": "Rua da Pratinha",
    "perimetro": "Travessa Prahina e Rua São Clemente"
   },
   {
    "logradouro": "Travessa Mariano",
    "perimetro": "Alameda 26 de Setembro e Alameda 23 de Outubro"
   },
   {
    "logradouro": "Alameda 1",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda 13 de Maio",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda 2",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda 23 de Outubro",
    "perimetro": "Passagem Santo Antônio e Alameda 26 de Setembro"
   },
   {
    "logradouro": "Alameda 26 de Setembro",
    "perimetro": "Alameda 23 de Outubro e Passagem Santo Antônio"
   },
   {
    "logradouro": "Alameda 3",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda 4",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda 5",
    "perimetro": "Passagem Sargento Getúlio e Rua Francisco de Assis"
   },
   {
    "logradouro": "Alameda 6",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda Cinco",
    "perimetro": "Passagem Morimitsu e fim da via"
   },
   {
    "logradouro": "Alameda Monte Hermom",
    "perimetro": "Rua Custodio Primeiro de Almeida e fim da via"
   },
   {
    "logradouro": "Alameda Souza Franco",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Alameda São Paulo",
    "perimetro": "Rua da Pratinha e fim da via"
   },
   {
    "logradouro": "Alameda Um",
    "perimetro": "Passagem Morimitsu e fim da via"
   },
   {
    "logradouro": "Passagem 29 de Junho",
    "perimetro": "Passagem Alacid Nunes e fim da via"
   },
   {
    "logradouro": "Passagem Alacid Nunes",
    "perimetro": "Passagem Ribamar e Passagem Parana"
   },
   {
    "logradouro": "Passagem Alegre",
    "perimetro": "Rua São Clemente e Passagem Parana"
   },
   {
    "logradouro": "Passagem Arlindo Luz",
    "perimetro": "Passagem Santo Antônio e fim da via"
   },
   {
    "logradouro": "Passagem Dezenove de Agosto",
    "perimetro": "Rua Custodio Primeiro de Almeida e Passagem Santa Cruz"
   },
   {
    "logradouro": "Passagem Diniz da Paz",
    "perimetro": "Rua da Pratinha e Passagem Santo Antônio"
   },
   {
    "logradouro": "Passagem Figueiredo",
    "perimetro": "Passagem Paulo Maranhão e fim da via"
   },
   {
    "logradouro": "Passagem Florestam",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Passagem Jacob",
    "perimetro": "Rua Teotonio Vilela e fim da via"
   },
   {
    "logradouro": "Passagem Joana D'arc",
    "perimetro": "Rua Teotonio Vilela e fim da via"
   },
   {
    "logradouro": "Passagem José Custodio de Almeida",
    "perimetro": "Rua Custodio Primeiro de Almeida e limite da região"
   },
   {
    "logradouro": "Passagem Kennedy",
    "perimetro": "Rua Japão e Rua Francisco de Assis"
   },
   {
    "logradouro": "Passagem Liberdade",
    "perimetro": "Rua da Pratinha e fim da via"
   },
   {
    "logradouro": "Passagem Limão",
    "perimetro": "Rua Teotonio Vilela e fim da via"
   },
   {
    "logradouro": "Passagem Morimitsu",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Passagem Paloma",
    "perimetro": "Passagem Liberdade e Passagem Jacob"
   },
   {
    "logradouro": "Passagem Parana",
    "perimetro": "Passagem Alegre e fim da via"
   },
   {
    "logradouro": "Passagem Paulo Maranhão",
    "perimetro": "Passagem Figueiredo e fim da via"
   },
   {
    "logradouro": "Passagem Paulo Sodre",
    "perimetro": "Rua da Pratinha e fim da via"
   },
   {
    "logradouro": "Passagem Ribamar",
    "perimetro": "Passagem São José e fim da via"
   },
   {
    "logradouro": "Passagem San Roque",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Passagem Santa Cruz",
    "perimetro": "Passagem Dezenove de Agosto e Passagem Sargento Getúlio"
   },
   {
    "logradouro": "Passagem Santo Antônio",
    "perimetro": "Rua São Clemente e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Passagem Sargento Getúlio",
    "perimetro": "Avenida Padre Bruno Sechi e Rua Custodio Primeiro de Almeida"
   },
   {
    "logradouro": "Passagem São José",
    "perimetro": "Passagem Ribamar e Passagem Nossa Senhora da Conceição"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Rua Quatro e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Passagem São Marcos",
    "perimetro": "Passagem Sargento Getúlio e fim da via"
   },
   {
    "logradouro": "Passagem São Mateus",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Rua Teotonio Vilela e fim da via"
   }
  ]
 },
 {
  "id": "33",
  "nome": "Região 33",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4117,
  "panfletos": 2470,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Arterial Sul",
    "perimetro": "Travessa Major Aviador Seda e Rua Canal da Margem Esquerda"
   },
   {
    "logradouro": "Avenida Centenário",
    "perimetro": "Rua Magalhães Barata e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Avenida Mangueirão",
    "perimetro": "Avenida Centenário e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua 14 de Março",
    "perimetro": "Avenida Mangueirão e Rua 7 de Setembro"
   },
   {
    "logradouro": "Rua 7 de Setembro",
    "perimetro": "Rua Canal da Margem Direita e Travessa Oito de Março"
   },
   {
    "logradouro": "Rua Canal da Margem Direita",
    "perimetro": "Avenida Centenário e Avenida Arterial Sul"
   },
   {
    "logradouro": "Rua Canal da Margem Esquerda",
    "perimetro": "Avenida Arterial Sul e Avenida Mangueirão"
   },
   {
    "logradouro": "Rua Chico Mendes",
    "perimetro": "Avenida Mangueirão e Avenida Arterial Sul"
   },
   {
    "logradouro": "Rua Jaçanã",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua Nova Jerusalém",
    "perimetro": "Rua Chico Mendes e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Rua Primeiro de Junho",
    "perimetro": "Travessa Major Aviador Seda e Passagem Santa Maria"
   },
   {
    "logradouro": "Rua São João",
    "perimetro": "Rua 14 de Março e Passagem Bom Jesus"
   },
   {
    "logradouro": "Rua Treze de Dezembro",
    "perimetro": "Avenida Centenário e Travessa 13"
   },
   {
    "logradouro": "Rua da Marinha",
    "perimetro": "Rodovia Augusto Montenegro e limite da região"
   },
   {
    "logradouro": "Rua da Paz",
    "perimetro": "Travessa Sapucaia"
   },
   {
    "logradouro": "Rua das Jaqueiras",
    "perimetro": "Avenida Arterial Sul e Rua Primeiro de Junho"
   },
   {
    "logradouro": "Travessa 13",
    "perimetro": "Rua Treze de Dezembro e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Travessa Oito de Março",
    "perimetro": "Avenida Mangueirão e Rua 7 de Setembro"
   },
   {
    "logradouro": "Travessa Rui Barbosa",
    "perimetro": "Rua Treze de Dezembro e Rua Chico Mendes"
   },
   {
    "logradouro": "Travessa Sapucaia",
    "perimetro": "Rua Treze de Dezembro e Travessa Oito de Março"
   },
   {
    "logradouro": "Alameda Admirante",
    "perimetro": "Rua das Jaqueiras e Rua Canal da Margem Direita"
   },
   {
    "logradouro": "Alameda Monteiro Lobato",
    "perimetro": "Passagem Pedroso e Passagem Araci de Almeida"
   },
   {
    "logradouro": "Alameda Santa Helena",
    "perimetro": "Rua das Jaqueiras e Rua Canal da Margem Direita"
   },
   {
    "logradouro": "Alameda das Flores",
    "perimetro": "Passagem Perpétuo Socorro e Rua Canal da Margem Direita"
   },
   {
    "logradouro": "Passagem Araci de Almeida",
    "perimetro": "Alameda Monteiro Lobato e fim da via"
   },
   {
    "logradouro": "Passagem Belem",
    "perimetro": "Travessa Rui Barbosa e Avenida Arterial Sul"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Avenida Mangueirão e Rua São João"
   },
   {
    "logradouro": "Passagem Fé Em Deus",
    "perimetro": "Travessa Major Aviador Seda e Rua das Jaqueiras"
   },
   {
    "logradouro": "Passagem Liberdade",
    "perimetro": "Avenida Centenário e Avenida Mangueirão"
   },
   {
    "logradouro": "Passagem Major Miguel",
    "perimetro": "Avenida Centenário e Rua Canal da Margem Direita"
   },
   {
    "logradouro": "Passagem Novo Horizonte",
    "perimetro": "Passagem Santa Maria e Travessa Major Aviador Seda"
   },
   {
    "logradouro": "Passagem Pedroso",
    "perimetro": "Passagem Liberdade e Rua Canal da Margem Direita"
   },
   {
    "logradouro": "Passagem Perpétuo Socorro",
    "perimetro": "Rua Primeiro de Junho e Rua 7 de Setembro"
   },
   {
    "logradouro": "Passagem Santa Maria",
    "perimetro": "Alameda das Flores e Passagem Novo Horizonte"
   },
   {
    "logradouro": "Via Transmangueirão",
    "perimetro": "Avenida Mangueirão e Rodovia Augusto Montenegro"
   }
  ]
 },
 {
  "id": "35",
  "nome": "Região 35",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 4621,
  "panfletos": 2773,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Egydio Salles",
    "perimetro": "Avenida Centenário e Estrada do Benguí"
   },
   {
    "logradouro": "Avenida Padre Bruno Sechi",
    "perimetro": "Passagem Benfica e Estrada do Benguí"
   },
   {
    "logradouro": "Estrada do Benguí",
    "perimetro": "Rodovia Augusto Montenegro e limite da região"
   },
   {
    "logradouro": "Rua Augusto Lobato",
    "perimetro": "Avenida Padre Bruno Sechi e Rua Betânia"
   },
   {
    "logradouro": "Rua Betânia",
    "perimetro": "Rotatória Estrada do Benguí e Passagem Benfica"
   },
   {
    "logradouro": "Rua Campinho",
    "perimetro": "Rua Augusto Lobato e Passagem Benfica"
   },
   {
    "logradouro": "Rua Ferreira Filho",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem Ferreira Filho"
   },
   {
    "logradouro": "Rua Igualdade",
    "perimetro": "Rua Interna A e fim da via"
   },
   {
    "logradouro": "Rua Interna A",
    "perimetro": "Passagem São Miguel e Estrada do Benguí"
   },
   {
    "logradouro": "Rua Interna B",
    "perimetro": "Residencial Monte Fuji e Estrada do Benguí"
   },
   {
    "logradouro": "Rua Olávio Nunes",
    "perimetro": "Passagem Santa Maria e Passagem Batista"
   },
   {
    "logradouro": "Rua Santa Maria",
    "perimetro": "Rua Betânia e Passagem Rosa de Maio"
   },
   {
    "logradouro": "Rua Vitória Regia",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem Fraternidade"
   },
   {
    "logradouro": "Rua da Conquista",
    "perimetro": "Passagem São Pedro e fim da via"
   },
   {
    "logradouro": "Travessa Liberdade",
    "perimetro": "Passagem Zelia Textura e Rua Interna A"
   },
   {
    "logradouro": "Travessa Major Miguel",
    "perimetro": "Passagem Benfica e Rua Santa Maria"
   },
   {
    "logradouro": "Alameda Ananindeua",
    "perimetro": "Rua Betânia e Alameda Ouro Verde"
   },
   {
    "logradouro": "Alameda Castanhal",
    "perimetro": "Rua Betânia e Alameda Ouro Verde"
   },
   {
    "logradouro": "Alameda Diamante",
    "perimetro": "Alameda Ouro Verde e fim da via"
   },
   {
    "logradouro": "Alameda Esmeralda",
    "perimetro": "Alameda Ouro Verde e fim da via"
   },
   {
    "logradouro": "Alameda M",
    "perimetro": "Rua Betânia e Passagem Rosa de Maio"
   },
   {
    "logradouro": "Alameda Moju",
    "perimetro": "Alameda Castanhal e Alameda Ananindeua"
   },
   {
    "logradouro": "Alameda Ouro Verde",
    "perimetro": "Estrada do Benguí e Alameda Diamante"
   },
   {
    "logradouro": "Alameda Safira",
    "perimetro": "Alameda Ouro Verde e fim da via"
   },
   {
    "logradouro": "Alameda Santa Isabel",
    "perimetro": "Alameda Ouro Verde e Rua Betânia"
   },
   {
    "logradouro": "Alameda Topázio",
    "perimetro": "Alameda Ouro Verde e fim da via"
   },
   {
    "logradouro": "Passagem 1 de Julho",
    "perimetro": "Estrada do Benguí e limite da região"
   },
   {
    "logradouro": "Passagem 29 de Abril",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem 7 de Dezembro",
    "perimetro": "Passagem São Paulo e Rua Augusto Lobato"
   },
   {
    "logradouro": "Passagem Batista",
    "perimetro": "Passagem Benfica e Rua Olávio Nunes"
   },
   {
    "logradouro": "Passagem Benfica",
    "perimetro": "Passagem Batista e Passagem São Pedro"
   },
   {
    "logradouro": "Passagem Ferreira Filho",
    "perimetro": "Passagem São Tome e Rua Ferreira Filho"
   },
   {
    "logradouro": "Passagem Fraternidade",
    "perimetro": "Rua Vitória Regia e fim da via"
   },
   {
    "logradouro": "Passagem Isa Cunha",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Passagem Maciel",
    "perimetro": "Passagem São Tome e Rua Campinho"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Nazaré",
    "perimetro": "Estrada do Benguí e fim da via"
   },
   {
    "logradouro": "Passagem Oliveira",
    "perimetro": "Alameda M e Rua Santa Maria"
   },
   {
    "logradouro": "Passagem Piratinga",
    "perimetro": "Passagem Benfica e Passagem São José"
   },
   {
    "logradouro": "Passagem Rita Novaes",
    "perimetro": "Passagem Fraternidade e Passagem São Tome"
   },
   {
    "logradouro": "Passagem Rosa de Maio",
    "perimetro": "Alameda M e Passagem União"
   },
   {
    "logradouro": "Passagem Santa Maria",
    "perimetro": "Rua Betânia e Passagem Benfica"
   },
   {
    "logradouro": "Passagem São José",
    "perimetro": "Passagem Piratinga e Rua Betânia"
   },
   {
    "logradouro": "Passagem São Marcos",
    "perimetro": "Passagem Maciel e Passagem São Paulo"
   },
   {
    "logradouro": "Passagem São Mateus",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem São Paulo"
   },
   {
    "logradouro": "Passagem São Miguel",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem São Paulo"
   },
   {
    "logradouro": "Passagem São Paulo",
    "perimetro": "Passagem Benfica e Passagem São Miguel"
   },
   {
    "logradouro": "Passagem São Pedro",
    "perimetro": "Estrada do Benguí e Passagem Benfica"
   },
   {
    "logradouro": "Passagem São Tiago",
    "perimetro": "Estrada do Benguí e Passagem Benfica"
   },
   {
    "logradouro": "Passagem São Tome",
    "perimetro": "Passagem Rita Novaes e Passagem Benfica"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Rua Betânia e fim da via"
   },
   {
    "logradouro": "Passagem Vlgia",
    "perimetro": "Estrada do Benguí e Alameda Castanhal"
   },
   {
    "logradouro": "Passagem Zelia Textura",
    "perimetro": "Travessa Liberdade e fim da via"
   },
   {
    "logradouro": "Vila María José",
    "perimetro": "Rua Betânia e fim da via"
   },
   {
    "logradouro": "Residencial Monte Fuji",
    "perimetro": "Rua Interna A e Rua Interna B"
   },
   {
    "logradouro": "Rotatória Estrada do Benguí",
    "perimetro": "Estrada do Benguí"
   }
  ]
 },
 {
  "id": "36",
  "nome": "Região 36",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3132,
  "panfletos": 1879,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Engenheiro José Machado",
    "perimetro": "Travessa São Roque e Travessa São Pedro"
   },
   {
    "logradouro": "Avenida Padre Bruno Sechi",
    "perimetro": "Estrada do Benguí e Passagem Magalhães Barata"
   },
   {
    "logradouro": "Rua Ajax de Oliveira",
    "perimetro": "Travessa São Pedro e Passagem Dom Pedro I"
   },
   {
    "logradouro": "Rua Augusto Lobato",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Rua Ferreira Filho",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem São Mateus"
   },
   {
    "logradouro": "Rua Magalhães Barata",
    "perimetro": "Travessa São Pedro e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua São Bento",
    "perimetro": "Sao benedito e Travessa São Pedro"
   },
   {
    "logradouro": "Rua São Clemente",
    "perimetro": "Rua Ajax de Oliveira e limite da região"
   },
   {
    "logradouro": "Rua São José",
    "perimetro": "Travessa Santa Maria e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Travessa Santa Maria",
    "perimetro": "Rua Magalhães Barata e Passagem Benfica"
   },
   {
    "logradouro": "Travessa Santa Rosa",
    "perimetro": "Rua Magalhães Barata e Rua São José"
   },
   {
    "logradouro": "Travessa São Pedro",
    "perimetro": "Rua Magalhães Barata e Passagem São Pedro"
   },
   {
    "logradouro": "Travessa São Roque",
    "perimetro": "Passagem São Sebastião e Rua São Bento"
   },
   {
    "logradouro": "Passagem Benfica",
    "perimetro": "Passagem São Pedro e fim da via"
   },
   {
    "logradouro": "Passagem Dom Pedro I",
    "perimetro": "Passagem do Bloquete e Passagem Nossa Senhora da Conceição"
   },
   {
    "logradouro": "Passagem Fernando Costa",
    "perimetro": "Rua São Clemente e fim da via"
   },
   {
    "logradouro": "Passagem José de Alencar",
    "perimetro": "Rua Ajax de Oliveira e Passagem Magalhães Barata"
   },
   {
    "logradouro": "Passagem Lameira Bittencourt",
    "perimetro": "Travessa São Pedro e Travessa Santa Rosa"
   },
   {
    "logradouro": "Passagem Magalhães Barata",
    "perimetro": "Avenida Padre Bruno Sechi e Passagem José de Alencar"
   },
   {
    "logradouro": "Passagem Marcia Maria",
    "perimetro": "Passagem Benfica e Rua Ferreira Filho"
   },
   {
    "logradouro": "Passagem Natal",
    "perimetro": "Rua Ajax de Oliveira e fim da via"
   },
   {
    "logradouro": "Passagem Nossa Senhora da Conceição",
    "perimetro": "Passagem São José e Passagem Dom Pedro I"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Fátima",
    "perimetro": "Rua Ajax de Oliveira e Rua São Bento"
   },
   {
    "logradouro": "Passagem Nossa Senhora do Perpétuo Socorro",
    "perimetro": "Passagem Fernando Costa e Rua Ajax de Oliveira"
   },
   {
    "logradouro": "Passagem Santa Lucia",
    "perimetro": "Rua São Clemente e fim da via"
   },
   {
    "logradouro": "Passagem Santo",
    "perimetro": "Rua São José e Rua Ajax de Oliveira"
   },
   {
    "logradouro": "Passagem São Benedito",
    "perimetro": "Passagem Fernando Costa e Beco da Jaqueira"
   },
   {
    "logradouro": "Passagem São José",
    "perimetro": "Avenida Padre Bruno Sechi e limite da região"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Passagem Dom Pedro I e fim da via"
   },
   {
    "logradouro": "Passagem São Mateus",
    "perimetro": "Rua São Clemente e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Passagem São Miguel",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Passagem São Pedro",
    "perimetro": "Passagem Nossa Senhora da Conceição e fim da via"
   },
   {
    "logradouro": "Passagem São Roque",
    "perimetro": "Passagem Benfica e fim da via"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Rua São Clemente e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Passagem do Bloquete",
    "perimetro": "Passagem Dom Pedro I e fim da via"
   },
   {
    "logradouro": "Beco da Jaqueira",
    "perimetro": "Passagem São Benedito e sao benedito"
   },
   {
    "logradouro": "sao benedito",
    "perimetro": "Passagem Magalhães Barata e Rua Ajax de Oliveira"
   }
  ]
 },
 {
  "id": "37",
  "nome": "Região 37",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3807,
  "panfletos": 2284,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Greenville",
    "perimetro": "Rodovia Augusto Montenegro e Praça Murauci"
   },
   {
    "logradouro": "Avenida Independência",
    "perimetro": "Avenida Augusto Montenegro e Rua Bom Sucesso"
   },
   {
    "logradouro": "Rua Acapu",
    "perimetro": "Praça Murauci e fim da via"
   },
   {
    "logradouro": "Rua Andiroba",
    "perimetro": "Rua Carlos Santos e fim da via"
   },
   {
    "logradouro": "Rua Angelin",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Azaleia",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Begonia",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Belém",
    "perimetro": "Passagem São Raimundo e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Bragança",
    "perimetro": "Rodovia Augusto Montenegro e Travessa WI 9"
   },
   {
    "logradouro": "Rua Carlos Santos",
    "perimetro": "Rodovia Augusto Montenegro e Travessa São Francisco"
   },
   {
    "logradouro": "Rua Castanheira",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Cedro",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Cerejeira",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Cispreste",
    "perimetro": "Rua Acapu e Praça Murauci"
   },
   {
    "logradouro": "Rua Dom Manuel",
    "perimetro": "Rodovia Augusto Montenegro e Travessa WR 17"
   },
   {
    "logradouro": "Rua Dracena",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Fé em Deus",
    "perimetro": "Travessa Henrique Dias e Passagem Val-de-Cans"
   },
   {
    "logradouro": "Rua Gerânio",
    "perimetro": "Avenida Greenville e Alameda Jatoba"
   },
   {
    "logradouro": "Rua Hortência",
    "perimetro": "Praça Açai e fim da via"
   },
   {
    "logradouro": "Rua Ipê",
    "perimetro": "Praça Açai e fim da via"
   },
   {
    "logradouro": "Rua Jatoba",
    "perimetro": "Rua Retunia e fim da via"
   },
   {
    "logradouro": "Rua João Nunes",
    "perimetro": "Rodovia Augusto Montenegro e Travessa São Francisco"
   },
   {
    "logradouro": "Rua Mogno",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Papoula",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Retunia",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Ronaldo Barata",
    "perimetro": "Travessa WR 17 e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Samambaia",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Sucupira",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Uxi",
    "perimetro": "Alameda Cedro e Rua Belém"
   },
   {
    "logradouro": "Rua Violeta",
    "perimetro": "Avenida Greenville e fim da via"
   },
   {
    "logradouro": "Rua Vitória Regia",
    "perimetro": "Praça Murauci e Alameda Jambo"
   },
   {
    "logradouro": "Rua WB-2",
    "perimetro": "Avenida Independência e Passagem Santa Rita"
   },
   {
    "logradouro": "Rua do Fio",
    "perimetro": "Passagem Tocantins e limite da região"
   },
   {
    "logradouro": "Travessa Cristina Cardoso",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa Henrique Dias",
    "perimetro": "Rua Belém e Avenida Damasco"
   },
   {
    "logradouro": "Travessa Montecarlo",
    "perimetro": "Passagem Val-de-Cans e Passagem São Raimundo"
   },
   {
    "logradouro": "Travessa São Francisco",
    "perimetro": "Rua João Nunes e Rua Carlos Santos"
   },
   {
    "logradouro": "Travessa WA 1",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WB 2",
    "perimetro": "Avenida Independência e Rua Belém"
   },
   {
    "logradouro": "Travessa WC 3",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WD 4",
    "perimetro": "Avenida Independência e Rua Belém"
   },
   {
    "logradouro": "Travessa WE 5",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WF 6",
    "perimetro": "Avenida Independência e Rua Belém"
   },
   {
    "logradouro": "Travessa WG 7",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WH 8",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WI 9",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WJ 10",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WK 11",
    "perimetro": "Avenida Independência e Rua Belém"
   },
   {
    "logradouro": "Travessa WL 12",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Travessa WM 12",
    "perimetro": "Avenida dos Ciprestes e Avenida Independência"
   },
   {
    "logradouro": "Travessa WN 13",
    "perimetro": "Avenida Independência e Avenida dos Ciprestes"
   },
   {
    "logradouro": "Travessa WO 14",
    "perimetro": "Avenida Independência e fim da via"
   },
   {
    "logradouro": "Travessa WP 15",
    "perimetro": "Avenida Independência e Avenida dos Ciprestes"
   },
   {
    "logradouro": "Travessa WQ 16",
    "perimetro": "Avenida Independência e Avenida dos Ciprestes"
   },
   {
    "logradouro": "Travessa WR 17",
    "perimetro": "Avenida Independência e Rua Dom Manuel"
   },
   {
    "logradouro": "Travessa WS 18",
    "perimetro": "Avenida Independência e Passagem Santa Rita"
   },
   {
    "logradouro": "Alameda 1",
    "perimetro": "Rua Bragança e Avenida Independência"
   },
   {
    "logradouro": "Alameda 2",
    "perimetro": "Avenida Independência e Rua Belém"
   },
   {
    "logradouro": "Alameda Acapu",
    "perimetro": "Alameda Tapereba e Rua Carlos Santos"
   },
   {
    "logradouro": "Alameda Angelim",
    "perimetro": "Alameda Tucuma e Rua Carlos Santos"
   },
   {
    "logradouro": "Alameda Açai",
    "perimetro": "Alameda Seringa e Rua Carlos Santos"
   },
   {
    "logradouro": "Alameda Biriba",
    "perimetro": "Alameda Jambo e Rua Belém"
   },
   {
    "logradouro": "Alameda Buriti",
    "perimetro": "Alameda Jatoba e Rua Belém"
   },
   {
    "logradouro": "Alameda Cedro",
    "perimetro": "Rua Uxi e fim da via"
   },
   {
    "logradouro": "Alameda Copaiba",
    "perimetro": "Fim da via e limite da região"
   },
   {
    "logradouro": "Alameda Cupuacu",
    "perimetro": "Rua Belém e fim da via"
   },
   {
    "logradouro": "Alameda Jambo",
    "perimetro": "Alameda Biriba e Rua Vitória Regia"
   },
   {
    "logradouro": "Alameda Jatoba",
    "perimetro": "Alameda Buriti e Rua Gerânio"
   },
   {
    "logradouro": "Alameda Mangaha",
    "perimetro": "Rua Andiroba e fim da via"
   },
   {
    "logradouro": "Alameda Piquia",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Alameda Seringa",
    "perimetro": "Alameda Açai e fim da via"
   },
   {
    "logradouro": "Alameda Tapereba",
    "perimetro": "Alameda Acapu e fim da via"
   },
   {
    "logradouro": "Alameda Tauari",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Alameda Tucuma",
    "perimetro": "Alameda Angelim e fim da via"
   },
   {
    "logradouro": "Alameda dos Girassóis",
    "perimetro": "Avenida Independência e Avenida Damasco"
   },
   {
    "logradouro": "Passagem Cosme e Damião",
    "perimetro": "Rua WB-2 e Travessa WR 17"
   },
   {
    "logradouro": "Passagem Santa Rita",
    "perimetro": "Rodovia Augusto Montenegro e Travessa WR 17"
   },
   {
    "logradouro": "Passagem Sao Francisco",
    "perimetro": "Travessa WF 6 e Travessa São Francisco"
   },
   {
    "logradouro": "Passagem São Raimundo",
    "perimetro": "Rua Belém e limite da região"
   },
   {
    "logradouro": "Passagem Val-de-Cans",
    "perimetro": "Travessa Montecarlo e Avenida Damasco"
   },
   {
    "logradouro": "Passagem We-3",
    "perimetro": "Passagem Santa Rita e Avenida Independência"
   },
   {
    "logradouro": "Praça Açai",
    "perimetro": "Avenida Greenville"
   },
   {
    "logradouro": "Praça Murauci",
    "perimetro": "Avenida Greenville"
   },
   {
    "logradouro": "Tv. Liberdade",
    "perimetro": "Avenida Independência e Passagem Santa Rita"
   }
  ]
 },
 {
  "id": "40",
  "nome": "Região 40",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3398,
  "panfletos": 2039,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Damasco",
    "perimetro": "Alameda dos Girassóis e Rua Benjamin"
   },
   {
    "logradouro": "Avenida Independência",
    "perimetro": "Rua Bom Sucesso e Rua Benjamin"
   },
   {
    "logradouro": "Rua 4 de Agosto",
    "perimetro": "Avenida Damasco e Rua Principal do Conjunto Panorama 21"
   },
   {
    "logradouro": "Rua A",
    "perimetro": "Avenida Independência e Rua Perimetral"
   },
   {
    "logradouro": "Rua Amazonas",
    "perimetro": "Passagem Tocantins e Rua Benjamin"
   },
   {
    "logradouro": "Rua Ananin",
    "perimetro": "Travessa Marabá e Rua Benjamin"
   },
   {
    "logradouro": "Rua Açailândia",
    "perimetro": "Rua Perimetral e Avenida Damasco"
   },
   {
    "logradouro": "Rua Castanhal",
    "perimetro": "Travessa Cameta e Travessa Marabá"
   },
   {
    "logradouro": "Rua Lisboa",
    "perimetro": "Avenida Independência e Rua Benjamin"
   },
   {
    "logradouro": "Rua Olimpia",
    "perimetro": "Avenida Damasco e Rua Principal do Conjunto Panorama 21"
   },
   {
    "logradouro": "Rua Pará",
    "perimetro": "Rua Benjamin e Rua Castanhal"
   },
   {
    "logradouro": "Rua Perimetral",
    "perimetro": "Rua Benjamin e Avenida Independência"
   },
   {
    "logradouro": "Rua Principal do Conjunto Panorama 21",
    "perimetro": "Alameda Professor Marcos Nunes e Passagem São Raimundo"
   },
   {
    "logradouro": "Rua Santarém",
    "perimetro": "Travessa Acara e Travessa Benfica"
   },
   {
    "logradouro": "Rua São Francisco",
    "perimetro": "Rua Principal do Conjunto Panorama 21 e Avenida Damasco"
   },
   {
    "logradouro": "Rua São Miguel",
    "perimetro": "Alameda São José e Rua Principal do Conjunto Panorama 21"
   },
   {
    "logradouro": "Rua São Paulo",
    "perimetro": "Rua Principal do Conjunto Panorama 21 e Avenida Damasco"
   },
   {
    "logradouro": "Rua São Pedro",
    "perimetro": "Avenida Damasco e Rua Principal do Conjunto Panorama 21"
   },
   {
    "logradouro": "Rua do Fio",
    "perimetro": "Passagem Tocantins"
   },
   {
    "logradouro": "Rua do Tubo",
    "perimetro": "Passagem José Sarney e Rua do Fio"
   },
   {
    "logradouro": "Travessa Acara",
    "perimetro": "Rua Castanhal e Rua Santarém"
   },
   {
    "logradouro": "Travessa Benevides",
    "perimetro": "Rua Castanhal e Rua Ananin"
   },
   {
    "logradouro": "Travessa Benfica",
    "perimetro": "Rua Ananin e Rua Santarém"
   },
   {
    "logradouro": "Travessa Cameta",
    "perimetro": "Rua Pará e Rua Castanhal"
   },
   {
    "logradouro": "Travessa Marabá",
    "perimetro": "Rua Castanhal e Rua Ananin"
   },
   {
    "logradouro": "Alameda São José",
    "perimetro": "Rua 4 de Agosto e Rua São Miguel"
   },
   {
    "logradouro": "Passagem América",
    "perimetro": "Rua do Fio e fim da via"
   },
   {
    "logradouro": "Passagem Arnaldo Jordi",
    "perimetro": "Avenida Damasco e Rua 4 de Agosto"
   },
   {
    "logradouro": "Passagem Cosme e Damião",
    "perimetro": "Rua São Miguel e Rua 4 de Agosto"
   },
   {
    "logradouro": "Passagem Estrela",
    "perimetro": "Avenida Damasco e Passagem da Paz"
   },
   {
    "logradouro": "Passagem José Sarney",
    "perimetro": "Passagem Silva Castro e Rua do Tubo"
   },
   {
    "logradouro": "Passagem Maracatiara",
    "perimetro": "Rua Lisboa e Avenida Damasco"
   },
   {
    "logradouro": "Passagem Maués",
    "perimetro": "Passagem Arnaldo Jordi e Passagem Santo Antônio"
   },
   {
    "logradouro": "Passagem Muruci",
    "perimetro": "Rua Lisboa e Avenida Damasco"
   },
   {
    "logradouro": "Passagem Nossa Senhora de Nazaré",
    "perimetro": "Rua 4 de Agosto e Rua São Miguel"
   },
   {
    "logradouro": "Passagem Santa Rita",
    "perimetro": "Passagem Silva Castro e Passagem Veteranos"
   },
   {
    "logradouro": "Passagem Santo Antônio",
    "perimetro": "Rua Principal do Conjunto Panorama 21 e Rua São Paulo"
   },
   {
    "logradouro": "Passagem Santo Inácio",
    "perimetro": "Passagem Val-de-Cans e Rua do Fio"
   },
   {
    "logradouro": "Passagem Silva Castro",
    "perimetro": "Passagem Val-de-Cans e Rua do Fio"
   },
   {
    "logradouro": "Passagem São Antônio",
    "perimetro": "Rua São Paulo e Passagem Val-de-Cans"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Rua A e Rua Benjamin"
   },
   {
    "logradouro": "Passagem São José",
    "perimetro": "Avenida Damasco e Rua Principal do Conjunto Panorama 21"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Rua Principal do Conjunto Panorama 21 e Avenida Damasco"
   },
   {
    "logradouro": "Passagem Tapajós",
    "perimetro": "Rua Lisboa e Avenida Damasco"
   },
   {
    "logradouro": "Passagem Tocantins",
    "perimetro": "Avenida Independência e Avenida Damasco"
   },
   {
    "logradouro": "Passagem Uirapuru",
    "perimetro": "Avenida Damasco e Rua Lisboa"
   },
   {
    "logradouro": "Passagem Val-de-Cans",
    "perimetro": "Avenida Damasco e Rua Benjamin"
   },
   {
    "logradouro": "Passagem Veteranos",
    "perimetro": "Rua do Fio e Passagem Santa Rita"
   },
   {
    "logradouro": "Passagem Vitória Régia",
    "perimetro": "Avenida Damasco e Rua Lisboa"
   },
   {
    "logradouro": "Passagem da Paz",
    "perimetro": "Passagem Val-de-Cans e Rua do Fio"
   }
  ]
 },
 {
  "id": "42",
  "nome": "Região 42",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3775,
  "panfletos": 2265,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Brasil",
    "perimetro": "Rua 23 de Junho e Passagem São Pedro"
   },
   {
    "logradouro": "Avenida Independência",
    "perimetro": "Avenida Brasil e Passagem Val-de-Cans"
   },
   {
    "logradouro": "Avenida São Pedro",
    "perimetro": "Passagem São Pedro e Travessa Dezenove"
   },
   {
    "logradouro": "Rua 23 de Junho",
    "perimetro": "Rua Fé em Deus e Rua Vila 8"
   },
   {
    "logradouro": "Rua 25 de Julho",
    "perimetro": "Avenida Brasil e fim da via"
   },
   {
    "logradouro": "Rua Beija-Flor",
    "perimetro": "Rua Belém e Rua São Domingos"
   },
   {
    "logradouro": "Rua Belém",
    "perimetro": "Travessa Montecarlo e Passagem Bons Amigos"
   },
   {
    "logradouro": "Rua Boa Esperança",
    "perimetro": "Avenida Brasil e Passagem São João"
   },
   {
    "logradouro": "Rua Bom Sucesso",
    "perimetro": "Avenida Independência e Passagem Santa Maria"
   },
   {
    "logradouro": "Rua Cônego Batista Campos",
    "perimetro": "Rua Boa Esperança e Avenida Brasil"
   },
   {
    "logradouro": "Rua Francisquinho",
    "perimetro": "Rua São Domingos e Rua Belém"
   },
   {
    "logradouro": "Rua Fé em Deus",
    "perimetro": "Passagem São Pedro e Rua Belém"
   },
   {
    "logradouro": "Rua Santo Antônio",
    "perimetro": "Rua Bom Sucesso e Travessa 13 de Maio"
   },
   {
    "logradouro": "Rua Sete de Julho",
    "perimetro": "Travessa 13 de Maio e Passagem Santa Maria"
   },
   {
    "logradouro": "Rua Sideral",
    "perimetro": "Rua Vila Oito e Avenida São Pedro"
   },
   {
    "logradouro": "Rua São Domingos",
    "perimetro": "Rua Bom Sucesso e Avenida Brasil"
   },
   {
    "logradouro": "Rua São Jorge",
    "perimetro": "Avenida Brasil e fim da via"
   },
   {
    "logradouro": "Rua Tr Dez",
    "perimetro": "Rua Vila Nove"
   },
   {
    "logradouro": "Rua União",
    "perimetro": "Passagem São Pedro e Rua Belém"
   },
   {
    "logradouro": "Rua Vila 3",
    "perimetro": "Quadra Três e Rua 23 de Junho"
   },
   {
    "logradouro": "Rua Vila 8",
    "perimetro": "Rua Tr Dez e Rua 23 de Junho"
   },
   {
    "logradouro": "Rua Vila Nove",
    "perimetro": "Quadra Treze e Rua 23 de Junho"
   },
   {
    "logradouro": "Rua Vila Oito",
    "perimetro": "Quadra Treze e Quadra Nove"
   },
   {
    "logradouro": "Travessa 13 de Maio",
    "perimetro": "Rua Santo Antônio e fim da via"
   },
   {
    "logradouro": "Travessa São Luís",
    "perimetro": "Passagem São Raimundo e Rua Fé em Deus"
   },
   {
    "logradouro": "Alameda da Paz",
    "perimetro": "Quadra Sete e fim da via"
   },
   {
    "logradouro": "Passagem Abacabeira",
    "perimetro": "Rua Belém e Rua Francisquinho"
   },
   {
    "logradouro": "Passagem Barbosa",
    "perimetro": "Passagem São Domingos e Passagem Iracema"
   },
   {
    "logradouro": "Passagem Boa Esperança",
    "perimetro": "Rua Bom Sucesso e Passagem União"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Passagem São João e Passagem São Pedro"
   },
   {
    "logradouro": "Passagem Bons Amigos",
    "perimetro": "Rua São Domingos e Avenida Independência"
   },
   {
    "logradouro": "Passagem Dez de Junho",
    "perimetro": "Rua São Domingos e Avenida Independência"
   },
   {
    "logradouro": "Passagem José Carneiro",
    "perimetro": "Avenida São Pedro e fim da via"
   },
   {
    "logradouro": "Passagem Primeiro de Agosto",
    "perimetro": "Rua 25 de Julho e Avenida Brasil"
   },
   {
    "logradouro": "Passagem Primeiro de Maio",
    "perimetro": "Rua São Domingos e Avenida Independência"
   },
   {
    "logradouro": "Passagem Santa Maria",
    "perimetro": "Rua Boa Esperança e fim da via"
   },
   {
    "logradouro": "Passagem Silva Lobota",
    "perimetro": "Passagem Santa Maria e Passagem São Pedro"
   },
   {
    "logradouro": "Passagem São Domingos",
    "perimetro": "Avenida São Pedro e fim da via"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Avenida São Pedro e fim da via"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Rua Cônego Batista Campos e Rua São Jorge"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Rua Bom Sucesso e Avenida Brasil"
   },
   {
    "logradouro": "Passagem São Pedro",
    "perimetro": "Avenida São Pedro e fim da via"
   },
   {
    "logradouro": "Passagem São Raimundo",
    "perimetro": "Rua União e Rua Boa Esperança"
   },
   {
    "logradouro": "Passagem Três de Julho",
    "perimetro": "Travessa 13 de Maio e Rua Sete de Julho"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Rua Belém e Avenida Independência"
   },
   {
    "logradouro": "Quadra Nove",
    "perimetro": "Avenida São Pedro e Rua Vila Oito"
   },
   {
    "logradouro": "Quadra Oito",
    "perimetro": "Avenida São Pedro e Quadra Sete"
   },
   {
    "logradouro": "Quadra Quatorze",
    "perimetro": "Avenida São Pedro e Rua Sideral"
   },
   {
    "logradouro": "Quadra Quatro",
    "perimetro": "Avenida São Pedro e Rua 23 de Junho"
   },
   {
    "logradouro": "Quadra Seis",
    "perimetro": "Avenida São Pedro e Quadro Cinco"
   },
   {
    "logradouro": "Quadra Sete",
    "perimetro": "Quadra Oito e Avenida São Pedro"
   },
   {
    "logradouro": "Quadra Treze",
    "perimetro": "Avenida São Pedro e Rua Vila Oito"
   },
   {
    "logradouro": "Quadra Três",
    "perimetro": "Avenida São Pedro e Quadra Quatro"
   },
   {
    "logradouro": "Quadro Cinco",
    "perimetro": "Avenida São Pedro e Quadra Seis"
   }
  ]
 },
 {
  "id": "44",
  "nome": "Região 44",
  "semana": 4,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 2847,
  "panfletos": 1708,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Arriri",
    "perimetro": "Rua TR 3 e Avenida São Pedro"
   },
   {
    "logradouro": "Avenida Brasil",
    "perimetro": "Passagem São Pedro e Passagem Astronauta"
   },
   {
    "logradouro": "Avenida São Pedro",
    "perimetro": "Avenida Arriri e Quadra Quatorze"
   },
   {
    "logradouro": "Avenida das Andorinhas",
    "perimetro": "Rodovia Augusto Montenegro e Passagem São Francisco"
   },
   {
    "logradouro": "Rua Anambé",
    "perimetro": "Rua das Garças e Rua Uirapuru"
   },
   {
    "logradouro": "Rua Andorinhas",
    "perimetro": "Passagem Astronauta e Passagem São Francisco"
   },
   {
    "logradouro": "Rua Aracanga",
    "perimetro": "Rua Cujubim e Rua Araguari"
   },
   {
    "logradouro": "Rua Aracange",
    "perimetro": "Rua Sanhaço e Rua do Azulão"
   },
   {
    "logradouro": "Rua Aracari",
    "perimetro": "Rua dos Anajés e Rua das Marianinhas"
   },
   {
    "logradouro": "Rua Araguari",
    "perimetro": "Rua Cujubim e Rua Aracanga"
   },
   {
    "logradouro": "Rua Boa Esperança",
    "perimetro": "Passagem Ceará e Passagem Nova"
   },
   {
    "logradouro": "Rua Canaã",
    "perimetro": "Rua das Garças e Rua Uirapuru"
   },
   {
    "logradouro": "Rua Canindé",
    "perimetro": "Rua do Azulão e Rua Sanhaço"
   },
   {
    "logradouro": "Rua Caure",
    "perimetro": "Rua das Marianinhas e Rua dos Anajés"
   },
   {
    "logradouro": "Rua Chapim",
    "perimetro": "Rua Sanhaço e Rua do Azulão"
   },
   {
    "logradouro": "Rua Cotinga",
    "perimetro": "Rua das Marianinhas e Rua dos Anajés"
   },
   {
    "logradouro": "Rua Cujubim",
    "perimetro": "Avenida das Andorinhas e Alameda Santa Brígida"
   },
   {
    "logradouro": "Rua Dez de Agosto",
    "perimetro": "Rua Santo Antônio e fim da via"
   },
   {
    "logradouro": "Rua Esperantista",
    "perimetro": "Rua Sideral e Rua Boa Esperança"
   },
   {
    "logradouro": "Rua Jacamim",
    "perimetro": "Rua Cujubim e Rua Jandáia"
   },
   {
    "logradouro": "Rua Jacamiúna",
    "perimetro": "Rua do Azulão e Rua Sanhaço"
   },
   {
    "logradouro": "Rua Jandáia",
    "perimetro": "Rua Uirapuru e Rua Jacamim"
   },
   {
    "logradouro": "Rua L Dois",
    "perimetro": "Rua TR 3 e Rua TR 1"
   },
   {
    "logradouro": "Rua L Um",
    "perimetro": "Passagem Ceará e Rua TR 2"
   },
   {
    "logradouro": "Rua Murajuba",
    "perimetro": "Rua Pitana e Rua Uirapuru"
   },
   {
    "logradouro": "Rua Nova",
    "perimetro": "Rua Boa Esperança e Rua Sideral"
   },
   {
    "logradouro": "Rua Paulo Fonteles",
    "perimetro": "Rua Santo Antônio e fim da via"
   },
   {
    "logradouro": "Rua Pitana",
    "perimetro": "Rua Cujubim e Rua Murajuba"
   },
   {
    "logradouro": "Rua Sanhaço",
    "perimetro": "Avenida das Andorinhas e Rua Murajuba"
   },
   {
    "logradouro": "Rua Santo Antônio",
    "perimetro": "Travessa 13 de Maio e Avenida Brasil"
   },
   {
    "logradouro": "Rua Saíra",
    "perimetro": "Rua Uirapuru e Rua das Garças"
   },
   {
    "logradouro": "Rua TR 1",
    "perimetro": "Rua Sideral e Avenida Brasil"
   },
   {
    "logradouro": "Rua TR 2",
    "perimetro": "Avenida Brasil e Rua Sideral"
   },
   {
    "logradouro": "Rua TR 3",
    "perimetro": "Rua Sideral e Avenida Brasil"
   },
   {
    "logradouro": "Rua TR 4",
    "perimetro": "Travessa 13 de Maio e Avenida Arriri"
   },
   {
    "logradouro": "Rua Tapereira",
    "perimetro": "Rua dos Anajés e Rua das Marianinhas"
   },
   {
    "logradouro": "Rua Uirapuru",
    "perimetro": "Avenida das Andorinhas e Rua Murajuba"
   },
   {
    "logradouro": "Rua Xaua",
    "perimetro": "Rua Uirapuru e Rua das Garças"
   },
   {
    "logradouro": "Rua das Garças",
    "perimetro": "Rua Murajuba e Avenida das Andorinhas"
   },
   {
    "logradouro": "Rua das Marianinhas",
    "perimetro": "Rua Murajuba e Avenida das Andorinhas"
   },
   {
    "logradouro": "Rua do Azulão",
    "perimetro": "Rua Murajuba e Avenida das Andorinhas"
   },
   {
    "logradouro": "Rua dos Anajés",
    "perimetro": "Avenida das Andorinhas e Rua Murajuba"
   },
   {
    "logradouro": "Travessa 13 de Maio",
    "perimetro": "Rua Santo Antônio e Avenida Brasil"
   },
   {
    "logradouro": "Travessa Rio Branco",
    "perimetro": "Avenida Brasil e fim da via"
   },
   {
    "logradouro": "Travessa União",
    "perimetro": "Rua Andorinhas"
   },
   {
    "logradouro": "Alameda Dom Jorge",
    "perimetro": "Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Alameda Floresta",
    "perimetro": "Limite da região"
   },
   {
    "logradouro": "Alameda Mar",
    "perimetro": "Alameda Dom Jorge e fim da via"
   },
   {
    "logradouro": "Alameda Santa Brígida",
    "perimetro": "Rua Murajuba e Rua Santo Antônio"
   },
   {
    "logradouro": "Alameda Treze de Agosto",
    "perimetro": "Passagem Monte Cristo e Rua Boa Esperança"
   },
   {
    "logradouro": "Alameda da Paz",
    "perimetro": "Passagem Astronauta e fim da via"
   },
   {
    "logradouro": "Passagem Astronauta",
    "perimetro": "Alameda da Paz e Avenida Brasil"
   },
   {
    "logradouro": "Passagem Ceará",
    "perimetro": "Passagem Astronauta e Rua Sideral"
   },
   {
    "logradouro": "Passagem Monte Cristo",
    "perimetro": "Alameda Treze de Agosto e Passagem Santa Rita"
   },
   {
    "logradouro": "Passagem Nova",
    "perimetro": "Passagem Astronauta e Rua Boa Esperança"
   },
   {
    "logradouro": "Passagem Santa Rita",
    "perimetro": "Passagem Monte Cristo e Rua Esperantista"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Avenida das Andorinhas e Passagem Astronauta"
   },
   {
    "logradouro": "Passagem São Pedro",
    "perimetro": "Avenida Arriri e Avenida Brasil"
   }
  ]
 },
 {
  "id": "24",
  "nome": "Região 24",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 1853,
  "panfletos": 1112,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Estrada da Eccir",
    "perimetro": "Rodovia Augusto Montenegro e Rua Bolonha"
   },
   {
    "logradouro": "Rua 13 de Junho",
    "perimetro": "Rua Balmoral e Rua Boa Ventura"
   },
   {
    "logradouro": "Rua 26 de Outubro",
    "perimetro": "Rua Canaã e Rua Sagrada Familia"
   },
   {
    "logradouro": "Rua Acapulco",
    "perimetro": "Rua Bolonha e limite da região"
   },
   {
    "logradouro": "Rua Alasca",
    "perimetro": "Rodovia Augusto Montenegro e Rua Bolonha"
   },
   {
    "logradouro": "Rua Aleutas",
    "perimetro": "Rua Bolonha e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Antonio Pena",
    "perimetro": "Estrada da Eccir e Rua Aleutas"
   },
   {
    "logradouro": "Rua Atlanta",
    "perimetro": "Rua Aleutas e Rua Açores"
   },
   {
    "logradouro": "Rua Aviz",
    "perimetro": "Rua Açores e Rua Aleutas"
   },
   {
    "logradouro": "Rua Açores",
    "perimetro": "Rua Bolonha e limite da região"
   },
   {
    "logradouro": "Rua Balmoral",
    "perimetro": "Fim da via e limite da região"
   },
   {
    "logradouro": "Rua Baltimore",
    "perimetro": "Rua Balmoral e fim da via"
   },
   {
    "logradouro": "Rua Barlaventos",
    "perimetro": "Rua Bebedouro"
   },
   {
    "logradouro": "Rua Bebedouro",
    "perimetro": "Rua Barlaventos e fim da via"
   },
   {
    "logradouro": "Rua Belmonte",
    "perimetro": "Limite da região e fim da via"
   },
   {
    "logradouro": "Rua Belterra",
    "perimetro": "Travessa Belem e Rua Belmonte"
   },
   {
    "logradouro": "Rua Boa Ventura",
    "perimetro": "Rua 13 de Junho e Rua Canaã"
   },
   {
    "logradouro": "Rua Bolonha",
    "perimetro": "Rua Búzios e Rua Alicante"
   },
   {
    "logradouro": "Rua Borborema",
    "perimetro": "Rua Búzios e Travessa Belem"
   },
   {
    "logradouro": "Rua Buriti",
    "perimetro": "Rua Búzios e Rua Balmoral"
   },
   {
    "logradouro": "Rua Búzios",
    "perimetro": "Rua Bolonha e Rua Borborema"
   },
   {
    "logradouro": "Rua Canaã",
    "perimetro": "Rua Iguana e Rua Boa Ventura"
   },
   {
    "logradouro": "Rua Iguana",
    "perimetro": "Rua Sagrada Familia e Rua Canaã"
   },
   {
    "logradouro": "Rua Sagrada Familia",
    "perimetro": "Rua Balmoral e Rua Boa Ventura"
   },
   {
    "logradouro": "Rua dos Anjos",
    "perimetro": "Rua 13 de Junho e Rua 26 de Outubro"
   },
   {
    "logradouro": "Travessa Belem",
    "perimetro": "Rua Borborema e Rua Búzios"
   },
   {
    "logradouro": "Vila da Paz",
    "perimetro": "Rua Balmoral e fim da via"
   }
  ]
 },
 {
  "id": "25",
  "nome": "Região 25",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3535,
  "panfletos": 2121,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Estrada da Eccir",
    "perimetro": "Rua Treze de Agosto e Rua Bolonha"
   },
   {
    "logradouro": "Rua Alicante",
    "perimetro": "Rua Andorra e Rua Bolonha"
   },
   {
    "logradouro": "Rua Alsácia",
    "perimetro": "Rua Andorra e Rua Bolonha"
   },
   {
    "logradouro": "Rua Andorra",
    "perimetro": "Rua Antilhas e Rua Bolonha"
   },
   {
    "logradouro": "Rua Anhembi",
    "perimetro": "Rua Andorra e Rua Bolonha"
   },
   {
    "logradouro": "Rua Antilhas",
    "perimetro": "Rua Andorra e Rua Bolonha"
   },
   {
    "logradouro": "Rua Assuan",
    "perimetro": "Rua Belém e Rua Bolonha"
   },
   {
    "logradouro": "Rua Astúrias",
    "perimetro": "Rua Bacabeira e Rua Bolonha"
   },
   {
    "logradouro": "Rua Atenas",
    "perimetro": "Rua Belém e Estrada da Eccir"
   },
   {
    "logradouro": "Rua Açailândia",
    "perimetro": "Estrada da Eccir e Passagem do L II"
   },
   {
    "logradouro": "Rua Bacabeira",
    "perimetro": "Rua Chico Mendes e Rua Astúrias"
   },
   {
    "logradouro": "Rua Belém",
    "perimetro": "Rua Atenas e Rua Antilhas"
   },
   {
    "logradouro": "Rua Bolonha",
    "perimetro": "Rua Alicante e Estrada da Eccir"
   },
   {
    "logradouro": "Rua Bosque",
    "perimetro": "Estrada da Eccir e Rua da Mata"
   },
   {
    "logradouro": "Rua Chico Mendes",
    "perimetro": "Rua Bacabeira e Rua Belém"
   },
   {
    "logradouro": "Rua Deputado João Batista",
    "perimetro": "Passagem Lideres e Passagem Gouveia Silva"
   },
   {
    "logradouro": "Rua Dias da Fonseca",
    "perimetro": "Rodovia Augusto Montenegro e Rua Picarra"
   },
   {
    "logradouro": "Rua Dionisio Barbosa",
    "perimetro": "Rua Rui Barbosa e Rua Dias da Fonseca"
   },
   {
    "logradouro": "Rua Jarbas Passarinho",
    "perimetro": "Rua Chico Mendes e Rua da Mata"
   },
   {
    "logradouro": "Rua Magalhães Barata",
    "perimetro": "Rua Chico Mendes e Travessa Canarinho"
   },
   {
    "logradouro": "Rua Muruci",
    "perimetro": "Rua da Mata e Estrada da Eccir"
   },
   {
    "logradouro": "Rua Mário Andreaza",
    "perimetro": "Rodovia Augusto Montenegro e Rua Paracuri"
   },
   {
    "logradouro": "Rua Paracuri",
    "perimetro": "Alameda Gouveia e Rua Rui Barbosa"
   },
   {
    "logradouro": "Rua Picarra",
    "perimetro": "Passagem Piçarreira e fim da via"
   },
   {
    "logradouro": "Rua Quatro de Setembro",
    "perimetro": "Alameda Gouveia e Rua Rui Barbosa"
   },
   {
    "logradouro": "Rua Rui Barbosa",
    "perimetro": "Rodovia Augusto Montenegro e Rua Paracuri"
   },
   {
    "logradouro": "Rua Santa Rita",
    "perimetro": "Travessa São José e Estrada da Eccir"
   },
   {
    "logradouro": "Rua São Paulo",
    "perimetro": "Alameda Gouveia e Rua Rui Barbosa"
   },
   {
    "logradouro": "Rua Treze de Agosto",
    "perimetro": "Rua da Mata e Rua Atenas"
   },
   {
    "logradouro": "Rua Vinte e Nove de Setembro",
    "perimetro": "Rua da Mata e Rua Belém"
   },
   {
    "logradouro": "Rua da Asseduc",
    "perimetro": "Rodovia Augusto Montenegro e fim da via"
   },
   {
    "logradouro": "Rua da Feira",
    "perimetro": "Alameda Gouveia e Rua Dias da Fonseca"
   },
   {
    "logradouro": "Rua da Mata",
    "perimetro": "Rua Chico Mendes e Rua Açailândia"
   },
   {
    "logradouro": "Rua da Paz",
    "perimetro": "Rua do Campo e Rua Açailândia"
   },
   {
    "logradouro": "Rua das Flores",
    "perimetro": "Rua Mário Andreaza e Rua Rui Barbosa"
   },
   {
    "logradouro": "Rua do Campo",
    "perimetro": "Estrada da Eccir e Rua da Paz"
   },
   {
    "logradouro": "Rua do L",
    "perimetro": "Rua Dias da Fonseca e Rua Açailândia"
   },
   {
    "logradouro": "Travessa Canarinho",
    "perimetro": "Rua da Mata e Rua Treze de Agosto"
   },
   {
    "logradouro": "Travessa Igarapé",
    "perimetro": "Rua da Mata e Rua Açailândia"
   },
   {
    "logradouro": "Travessa Marciano",
    "perimetro": "Rua Treze de Agosto e Rua Açailândia"
   },
   {
    "logradouro": "Travessa Nova Esperança",
    "perimetro": "Rua Deputado João Batista e fim da via"
   },
   {
    "logradouro": "Travessa São José",
    "perimetro": "Rua Jarbas Passarinho e Rua do Campo"
   },
   {
    "logradouro": "Alameda Gouveia",
    "perimetro": "Rodovia Augusto Montenegro e Rua Paracuri"
   },
   {
    "logradouro": "Passagem Bacuri",
    "perimetro": "Rua Bacabeira e Passagem Tapajos"
   },
   {
    "logradouro": "Passagem Beira Rio",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem Gouveia Silva",
    "perimetro": "Rua Deputado João Batista e limite da região"
   },
   {
    "logradouro": "Passagem Lideres",
    "perimetro": "Rua Rui Barbosa e Rua Deputado João Batista"
   },
   {
    "logradouro": "Passagem Piçarreira",
    "perimetro": "Rua Picarra e fim da via"
   },
   {
    "logradouro": "Passagem Silveira",
    "perimetro": "Rua Mário Andreaza e Rua Rui Barbosa"
   },
   {
    "logradouro": "Passagem Tapajos",
    "perimetro": "Rua Bacabeira e Passagem Bacuri"
   },
   {
    "logradouro": "Passagem do L",
    "perimetro": "Passagem Piçarreira e Rua do L"
   }
  ]
 },
 {
  "id": "34",
  "nome": "Região 34",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3207,
  "panfletos": 1924,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Padre Bruno Sechi",
    "perimetro": "Rua 31 de Agosto e limite da região"
   },
   {
    "logradouro": "Rua Andreza",
    "perimetro": "Avenida Padre Bruno Sechi e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Dois",
    "perimetro": "Rua Quatro e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua Esmaelino",
    "perimetro": "Rua São Lourenço e Passagem John Engelhard"
   },
   {
    "logradouro": "Rua Felicidade",
    "perimetro": "Rua Quatro e fim da via"
   },
   {
    "logradouro": "Rua Flor de Lotus",
    "perimetro": "Rua Quatro e fim da via"
   },
   {
    "logradouro": "Rua Flor de Maio",
    "perimetro": "Rua Felicidade"
   },
   {
    "logradouro": "Rua Jasmim",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Rua Quatro",
    "perimetro": "Passagem São Luís e fim da via"
   },
   {
    "logradouro": "Rua São Clemente",
    "perimetro": "Rua Abacabeira e Alameda Raimundo"
   },
   {
    "logradouro": "Rua São José",
    "perimetro": "Passagem Santa Rita e Alameda Bom Sucesso"
   },
   {
    "logradouro": "Rua São Lourenço",
    "perimetro": "Rua São Clemente e Rua Esmaelino"
   },
   {
    "logradouro": "Rua Tayo Costa",
    "perimetro": "Rua Andreza e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Três",
    "perimetro": "Passagem Santa Rita e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua Um",
    "perimetro": "Avenida Padre Bruno Sechi e Rua Quatro"
   },
   {
    "logradouro": "Rua das Acácias",
    "perimetro": "Avenida Padre Bruno Sechi e fim da via"
   },
   {
    "logradouro": "Rua das Rosas",
    "perimetro": "Rodovia Augusto Montenegro e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Travessa Cinco",
    "perimetro": "Limite da região e fim da via"
   },
   {
    "logradouro": "Travessa Santa Clara",
    "perimetro": "Rua Dois e Rua Três"
   },
   {
    "logradouro": "Travessa São Francisco",
    "perimetro": "Avenida Padre Bruno Sechi e Rua das Rosas"
   },
   {
    "logradouro": "Alameda Acapu",
    "perimetro": "Alameda Jatobá e Rua São Clemente"
   },
   {
    "logradouro": "Alameda Aquariquara",
    "perimetro": "Passagem São Luís e Rua São Clemente"
   },
   {
    "logradouro": "Alameda Bom Sucesso",
    "perimetro": "Rua São José e fim da via"
   },
   {
    "logradouro": "Alameda Ipê",
    "perimetro": "Rua São Clemente e Alameda Jatobá"
   },
   {
    "logradouro": "Alameda Isabel",
    "perimetro": "Rua São Clemente e Rua Esmaelino"
   },
   {
    "logradouro": "Alameda Jatobá",
    "perimetro": "Alameda Ipê e Alameda Aquariquara"
   },
   {
    "logradouro": "Alameda Santa Rosa",
    "perimetro": "Rua Dois e fim da via"
   },
   {
    "logradouro": "Alameda Sucupira",
    "perimetro": "Alameda Jatobá e Rua São Clemente"
   },
   {
    "logradouro": "Alameda Vitória",
    "perimetro": "Rua Esmaelino e fim da via"
   },
   {
    "logradouro": "Alameda da Paz",
    "perimetro": "Rua Andreza e Rua Tayo Costa"
   },
   {
    "logradouro": "Alameda das Angélicas",
    "perimetro": "Travessa São Francisco e fim da via"
   },
   {
    "logradouro": "Passagem Anísio",
    "perimetro": "Rua Três e limite da região"
   },
   {
    "logradouro": "Passagem Bianca",
    "perimetro": "Rua São Clemente e fim da via"
   },
   {
    "logradouro": "Passagem Boa Esperança",
    "perimetro": "Rua Quatro e Passagem São Benedito"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Rua São Clemente e Passagem Cristóvão Colombo"
   },
   {
    "logradouro": "Passagem Braganca",
    "perimetro": "Passagem Boa Esperança e fim da via"
   },
   {
    "logradouro": "Passagem Cristóvão Colombo",
    "perimetro": "Passagem Vinte e Sete de Setembro e Passagem John Engelhard"
   },
   {
    "logradouro": "Passagem Fé em Deus",
    "perimetro": "Passagem São Jorge e Rua Três"
   },
   {
    "logradouro": "Passagem John Engelhard",
    "perimetro": "Rua São Clemente e Passagem Santa Rita"
   },
   {
    "logradouro": "Passagem Santa Cecilia",
    "perimetro": "Passagem Anísio e Rua Dois"
   },
   {
    "logradouro": "Passagem Santa Isabel",
    "perimetro": "Rua Três e Rua Dois"
   },
   {
    "logradouro": "Passagem Santa Rita",
    "perimetro": "Rua Dois e Passagem John Engelhard"
   },
   {
    "logradouro": "Passagem São Benedito",
    "perimetro": "Rua Quatro e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Rua Três e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Passagem São Luís",
    "perimetro": "Alameda Aquariquara e Rua Guadalupe"
   },
   {
    "logradouro": "Passagem Vinte e Cinco de Dezembro",
    "perimetro": "Passagem Cristóvão Colombo e Rua São Clemente"
   },
   {
    "logradouro": "Passagem Vinte e Nove de Dezembro",
    "perimetro": "Passagem Cristóvão Colombo e Rua São Clemente"
   },
   {
    "logradouro": "Passagem Vinte e Sete de Setembro",
    "perimetro": "Rua São Clemente e Passagem Cristóvão Colombo"
   },
   {
    "logradouro": "Passagem Vitória",
    "perimetro": "Rua Dois e Rua Três"
   }
  ]
 },
 {
  "id": "38",
  "nome": "Região 38",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3919,
  "panfletos": 2351,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Rodovia Artur Bernardes",
    "perimetro": "Rua Natal e Passagem Uberaba"
   },
   {
    "logradouro": "Rua Almirante Tamandaré",
    "perimetro": "Alameda dos Anjos e Passagem Uberaba"
   },
   {
    "logradouro": "Rua Epitacio Filho",
    "perimetro": "Rua Presidente Castelo Branco"
   },
   {
    "logradouro": "Rua Estrela Dalva",
    "perimetro": "Rodovia Artur Bernardes e Passagem União"
   },
   {
    "logradouro": "Rua Herberth de Suza",
    "perimetro": "Rua Almirante Tamandaré e Alameda Urbano de Araujo"
   },
   {
    "logradouro": "Rua Natal",
    "perimetro": "Rodovia Artur Bernardes e Passagem União"
   },
   {
    "logradouro": "Rua Olga Benário",
    "perimetro": "Travessa Haroldo Veloso e fim da via"
   },
   {
    "logradouro": "Rua Oziel Pereira",
    "perimetro": "Travessa Haroldo Veloso e fim da via"
   },
   {
    "logradouro": "Rua Padre Jósimo",
    "perimetro": "Rua Quintino e Rua Quadra A"
   },
   {
    "logradouro": "Rua Presidente Castelo Branco",
    "perimetro": "Rua Quadra A e Passagem Uberaba"
   },
   {
    "logradouro": "Rua Presidente Costa e Silva",
    "perimetro": "Passagem Uberaba e Passagem Amoras"
   },
   {
    "logradouro": "Rua Presidente Dutra",
    "perimetro": "Passagem Uberaba e Passagem Amoras"
   },
   {
    "logradouro": "Rua Presidente Getúlio Vargas",
    "perimetro": "Rua Quadra A e Passagem Uberaba"
   },
   {
    "logradouro": "Rua Quadra A",
    "perimetro": "Travessa E e Rua Padre Jósimo"
   },
   {
    "logradouro": "Rua Quadra B",
    "perimetro": "Travessa E e Rua Quadra A"
   },
   {
    "logradouro": "Rua Roseli Numes",
    "perimetro": "Rua Almirante Tamandaré e Alameda Urbano de Araujo"
   },
   {
    "logradouro": "Travessa E",
    "perimetro": "Rua Quadra A e Rua Quadra C"
   },
   {
    "logradouro": "Travessa Haroldo Veloso",
    "perimetro": "Rodovia Artur Bernardes e Rodovia do Tapanã"
   },
   {
    "logradouro": "Travessa Vitoria",
    "perimetro": "Rua Quadra B e Rua Quadra A"
   },
   {
    "logradouro": "Alameda 14 de Abril",
    "perimetro": "Rua Presidente Getúlio Vargas e fim da via"
   },
   {
    "logradouro": "Alameda 25 de Agosto",
    "perimetro": "Rua Presidente Castelo Branco e Alameda Assis"
   },
   {
    "logradouro": "Alameda Alegria",
    "perimetro": "Travessa Haroldo Veloso e fim da via"
   },
   {
    "logradouro": "Alameda Amaral",
    "perimetro": "Travessa Haroldo Veloso e Rua Presidente Costa e Silva"
   },
   {
    "logradouro": "Alameda Assis",
    "perimetro": "Rua Presidente Castelo Branco e Alameda 25 de Agosto"
   },
   {
    "logradouro": "Alameda Cinco Estrelas",
    "perimetro": "Rua Presidente Getúlio Vargas e fim da via"
   },
   {
    "logradouro": "Alameda Cristal",
    "perimetro": "Rua Presidente Getúlio Vargas e fim da via"
   },
   {
    "logradouro": "Alameda Elza Meireles",
    "perimetro": "Rua Presidente Dutra e fim da via"
   },
   {
    "logradouro": "Alameda Miranda",
    "perimetro": "Rua Presidente Getúlio Vargas e fim da via"
   },
   {
    "logradouro": "Alameda Mota",
    "perimetro": "Alameda Vitória Regia e Rua Presidente Dutra"
   },
   {
    "logradouro": "Alameda Nossa Senhora das Graças",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Alameda Paulo Henrique",
    "perimetro": "Passagem Sofia Feio e fim da via"
   },
   {
    "logradouro": "Alameda Rodrigues",
    "perimetro": "Alameda Santos e Travessa Haroldo Veloso"
   },
   {
    "logradouro": "Alameda Santa Rita de Cássia",
    "perimetro": "Rua Presidente Costa e Silva e fim da via"
   },
   {
    "logradouro": "Alameda Santos",
    "perimetro": "Alameda Rodrigues e Rua Presidente Castelo Branco"
   },
   {
    "logradouro": "Alameda Senna",
    "perimetro": "Rua Presidente Dutra e Rua Presidente Getúlio Vargas"
   },
   {
    "logradouro": "Alameda São Benedito A",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Alameda São Benedito B",
    "perimetro": "Alameda São Francisco e fim da via"
   },
   {
    "logradouro": "Alameda São Francisco",
    "perimetro": "Alameda São João e Alameda São Benedito B"
   },
   {
    "logradouro": "Alameda São José",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Alameda São João",
    "perimetro": "Rua Presidente Castelo Branco e Alameda São Francisco"
   },
   {
    "logradouro": "Alameda São Marços",
    "perimetro": "Travessa Haroldo Veloso e fim da via"
   },
   {
    "logradouro": "Alameda Urbano de Araujo",
    "perimetro": "Rua Roseli Numes e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Alameda Useraba",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Alameda Vitória Regia",
    "perimetro": "Rodovia Artur Bernardes e Alameda Mota"
   },
   {
    "logradouro": "Alameda Vovo Tomé",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Alameda da Paz",
    "perimetro": "Passagem Amoras e fim da via"
   },
   {
    "logradouro": "Passagem Amoras",
    "perimetro": "Rodovia Artur Bernardes e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Passagem Antonio Vinagre",
    "perimetro": "Rua Quadra A e Passsagem Antônio Vinagre"
   },
   {
    "logradouro": "Passagem Boa Esperança",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Passagem Doutor Calandrini",
    "perimetro": "Passagem Mizael Martins e Passagem Antonio Vinagre"
   },
   {
    "logradouro": "Passagem Doze Amigos",
    "perimetro": "Rua Quadra A e fim da via"
   },
   {
    "logradouro": "Passagem Farias",
    "perimetro": "Rua Vitória e Rua Estrela Dalva"
   },
   {
    "logradouro": "Passagem Felicio Pontes",
    "perimetro": "Passagem Maria de Fátima e Passagem Sofia Feio"
   },
   {
    "logradouro": "Passagem Fé em Deus",
    "perimetro": "Rua Presidente Dutra e Rua Presidente Castelo Branco"
   },
   {
    "logradouro": "Passagem Josue Bengston",
    "perimetro": "Passagem Mizael Martins e Passagem Antonio Vinagre"
   },
   {
    "logradouro": "Passagem Lago Grande",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Passagem Marcos Pereira",
    "perimetro": "Passagem União e Passagem Sofia Feio"
   },
   {
    "logradouro": "Passagem Maria de Fátima",
    "perimetro": "Passagem Antonio Vinagre e fim da via"
   },
   {
    "logradouro": "Passagem Mizael Martins",
    "perimetro": "Passagem Amoras e fim da via"
   },
   {
    "logradouro": "Passagem Oliveira",
    "perimetro": "Rua Presidente Getúlio Vargas e fim da via"
   },
   {
    "logradouro": "Passagem Paz",
    "perimetro": "Passagem Mizael Martins e Passagem Felicio Pontes"
   },
   {
    "logradouro": "Passagem Primavera",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Passagem Silvana Costa",
    "perimetro": "Passagem Mizael Martins e Passagem Antonio Vinagre"
   },
   {
    "logradouro": "Passagem Siqueira",
    "perimetro": "Rua Presidente Dutra e Rua Presidente Getúlio Vargas"
   },
   {
    "logradouro": "Passagem Sofia Feio",
    "perimetro": "Passagem Felicio Pontes e Passagem Antonio Vinagre"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Rua Vitória e Passagem Amoras"
   },
   {
    "logradouro": "Passagem Wladimir Costa",
    "perimetro": "Passagem Mizael Martins e fim da via"
   },
   {
    "logradouro": "Vila Natal",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Passsagem Antônio Vinagre",
    "perimetro": "Passsagem Wladimir Costa e Passagem Antonio Vinagre"
   },
   {
    "logradouro": "Passsagem Wladimir Costa",
    "perimetro": "Passagem Mizael Martins e Passsagem Antônio Vinagre"
   },
   {
    "logradouro": "Residencial Vitória",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   }
  ]
 },
 {
  "id": "39",
  "nome": "Região 39",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 2358,
  "panfletos": 1415,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Rodovia Artur Bernardes",
    "perimetro": "Passagem das Flores e Passagem Uberaba"
   },
   {
    "logradouro": "Rodovia do Tapanã",
    "perimetro": "Estrada do Tapana e Rodovia Artur Bernardes"
   },
   {
    "logradouro": "Estrada do Tapana",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Rua Almirante Tamandaré",
    "perimetro": "Passagem Uberaba e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Guara",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Rua Menino Jesus",
    "perimetro": "Passagem Aleluia e fim da via"
   },
   {
    "logradouro": "Rua Nova 1",
    "perimetro": "Passagem Carneiro e Passagem Bom Sossego"
   },
   {
    "logradouro": "Rua Presidente Castelo Branco",
    "perimetro": "Passagem Uberaba e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Presidente Costa e Silva",
    "perimetro": "Rodovia do Tapanã e Passagem Uberaba"
   },
   {
    "logradouro": "Rua Presidente Dutra",
    "perimetro": "Rodovia do Tapanã e Passagem Uberaba"
   },
   {
    "logradouro": "Rua Presidente Getúlio Vargas",
    "perimetro": "Passagem Uberaba e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Santa Maria",
    "perimetro": "Passagem Santa Maria e Passagem Bom Sossego"
   },
   {
    "logradouro": "Alameda Deus é Amor",
    "perimetro": "Passagem Uberaba e fim da via"
   },
   {
    "logradouro": "Alameda Dom Jesus",
    "perimetro": "Rua Presidente Costa e Silva e fim da via"
   },
   {
    "logradouro": "Alameda Dorot",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Alameda Eliza Branco",
    "perimetro": "Rua Presidente Costa e Silva e fim da via"
   },
   {
    "logradouro": "Alameda Esmeralda",
    "perimetro": "Rua Presidente Costa e Silva e fim da via"
   },
   {
    "logradouro": "Alameda Itacu",
    "perimetro": "Passagem Uberaba e fim da via"
   },
   {
    "logradouro": "Alameda Maraoara",
    "perimetro": "Rua Presidente Castelo Branco e Alameda São Luis"
   },
   {
    "logradouro": "Alameda Nascimento",
    "perimetro": "Rua Presidente Castelo Branco e Rua Presidente Costa e Silva"
   },
   {
    "logradouro": "Alameda Oliveira",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Alameda Silva",
    "perimetro": "Passagem Uberaba e fim da via"
   },
   {
    "logradouro": "Alameda Sorriso",
    "perimetro": "Passagem Uberaba e fim da via"
   },
   {
    "logradouro": "Alameda São Luis",
    "perimetro": "Rua Presidente Costa e Silva e Alameda Maraoara"
   },
   {
    "logradouro": "Alameda Tropical",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Alameda da Paz",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Passagem Aleluia",
    "perimetro": "Rodovia Artur Bernardes e Passagem Santa Terezinha"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Passagem Uberaba e fim da via"
   },
   {
    "logradouro": "Passagem Bom Sossego",
    "perimetro": "Rodovia Artur Bernardes e Rua Nova 1"
   },
   {
    "logradouro": "Passagem Cabral",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Passagem Carneiro",
    "perimetro": "Rodovia Artur Bernardes e Passagem Nova 3"
   },
   {
    "logradouro": "Passagem Dom Pedro Primeiro",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Passagem Joana d'Arc",
    "perimetro": "Rodovia Artur Bernardes e Passagem Santos"
   },
   {
    "logradouro": "Passagem Joelda",
    "perimetro": "Rodovia do Tapanã e Rua Presidente Castelo Branco"
   },
   {
    "logradouro": "Passagem Maranhão",
    "perimetro": "Rodovia Artur Bernardes e Passagem Carneiro"
   },
   {
    "logradouro": "Passagem Monte Alegre",
    "perimetro": "Rodovia Artur Bernardes e Passagem Santos"
   },
   {
    "logradouro": "Passagem Monte Horebe",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Passagem Nova 2",
    "perimetro": "Passagem Cabral e Passagem Carneiro"
   },
   {
    "logradouro": "Passagem Nova 3",
    "perimetro": "Passagem Cabral e Passagem Carneiro"
   },
   {
    "logradouro": "Passagem Osvaldo Passos",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Passagem Santa Maria",
    "perimetro": "Passagem Joana d'Arc e Rua Santa Maria"
   },
   {
    "logradouro": "Passagem Santa Terezinha",
    "perimetro": "Passagem Aleluia e fim da via"
   },
   {
    "logradouro": "Passagem Santana",
    "perimetro": "Passagem Carneiro e Passagem Bom Sossego"
   },
   {
    "logradouro": "Passagem Santos",
    "perimetro": "Passagem Cabral e Passagem Bom Sossego"
   },
   {
    "logradouro": "Passagem São Cristovam",
    "perimetro": "Passagem Joana d'Arc e Passagem Bom Sossego"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Passagem Joana d'Arc e Passagem Bom Sossego"
   },
   {
    "logradouro": "Passagem São Lucas",
    "perimetro": "Passagem Carneiro e Passagem Bom Sossego"
   },
   {
    "logradouro": "Passagem Uberaba",
    "perimetro": "Rodovia do Tapanã e Rodovia Artur Bernardes"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Rua Presidente Getúlio Vargas e fim da via"
   },
   {
    "logradouro": "Vila Lesting",
    "perimetro": "Rua Presidente Dutra e fim da via"
   },
   {
    "logradouro": "Propiedade Santa Maria",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Residencial Padre Josimo Quadra 1",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Residencial Padre Josimo Quadra 2",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Residencial Padre Josimo Quadra 3",
    "perimetro": "Rodovia do Tapanã e Rua Presidente Dutra"
   }
  ]
 },
 {
  "id": "41",
  "nome": "Região 41",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 2325,
  "panfletos": 1395,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Central",
    "perimetro": "Travessa Vinte e Nove e fim da via"
   },
   {
    "logradouro": "Avenida São Pedro",
    "perimetro": "Travessa Dezenove e Rodovia Mário Covas"
   },
   {
    "logradouro": "Rodovia Mário Covas",
    "perimetro": "Passagem Jader Dias e Rua do Jiboia Branca"
   },
   {
    "logradouro": "Rua 23 de Junho",
    "perimetro": "Avenida Brasil e Passagem Monte Sinai"
   },
   {
    "logradouro": "Rua Honolulu",
    "perimetro": "Avenida São Pedro e Rodovia Mário Covas"
   },
   {
    "logradouro": "Rua do Bloco A",
    "perimetro": "Avenida São Pedro e Passagem Barbosa"
   },
   {
    "logradouro": "Rua do Bloco B",
    "perimetro": "Passagem Barbosa e Rua do Bloco A"
   },
   {
    "logradouro": "Rua do Bloco D",
    "perimetro": "Avenida São Pedro e Rua do Bloco B"
   },
   {
    "logradouro": "Rua dos Esperantistas",
    "perimetro": "Travessa Vinte e Nove e Travessa Dezoito"
   },
   {
    "logradouro": "Travessa 10",
    "perimetro": "Travessa Vinte e Três e Travessa Dezenove"
   },
   {
    "logradouro": "Travessa Dezenove",
    "perimetro": "Avenida Central e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Dezoito",
    "perimetro": "Avenida Central e Rua dos Esperantistas"
   },
   {
    "logradouro": "Travessa L 11",
    "perimetro": "Travessa Vinte e Cinco e Travessa Vinte e Um"
   },
   {
    "logradouro": "Travessa L 12",
    "perimetro": "Travessa Vinte e Travessa Vinte e Dois"
   },
   {
    "logradouro": "Travessa L 13",
    "perimetro": "Travessa Vinte e Dois e Travessa Vinte e Sete"
   },
   {
    "logradouro": "Travessa L 15",
    "perimetro": "Travessa Vinte e Sete e Travessa Vinte e Nove"
   },
   {
    "logradouro": "Travessa L 16",
    "perimetro": "Travessa Vinte e Nove e Travessa Vinte e Oito"
   },
   {
    "logradouro": "Travessa L 17",
    "perimetro": "Travessa Vinte e Oito e Travessa Vinte e Sete"
   },
   {
    "logradouro": "Travessa Segunda",
    "perimetro": "Rua 23 de Junho e fim da via"
   },
   {
    "logradouro": "Travessa Vinte",
    "perimetro": "Rua dos Esperantistas e Avenida Central"
   },
   {
    "logradouro": "Travessa Vinte e Cinco",
    "perimetro": "Avenida São Pedro e Avenida Central"
   },
   {
    "logradouro": "Travessa Vinte e Dois",
    "perimetro": "Rua dos Esperantistas e Avenida Central"
   },
   {
    "logradouro": "Travessa Vinte e Nove",
    "perimetro": "Rua dos Esperantistas e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Vinte e Oito",
    "perimetro": "Avenida São Pedro e Rua dos Esperantistas"
   },
   {
    "logradouro": "Travessa Vinte e Quatro",
    "perimetro": "Rua dos Esperantistas e Avenida Central"
   },
   {
    "logradouro": "Travessa Vinte e Seis",
    "perimetro": "Rua dos Esperantistas e Avenida Central"
   },
   {
    "logradouro": "Travessa Vinte e Sete",
    "perimetro": "Rua dos Esperantistas e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Vinte e Três",
    "perimetro": "Avenida Central e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Vinte e Um",
    "perimetro": "Avenida São Pedro e Avenida Central"
   },
   {
    "logradouro": "Alameda Primavera",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Alameda Saldanha Marinho",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Passagem Barbosa",
    "perimetro": "Passagem Jericó e Rua do Bloco B"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Rua 23 de Junho e limite da região"
   },
   {
    "logradouro": "Passagem Emaus",
    "perimetro": "Avenida São Pedro e Rua 23 de Junho"
   },
   {
    "logradouro": "Passagem Iracema",
    "perimetro": "Avenida São Pedro e fim da via"
   },
   {
    "logradouro": "Passagem Jardim Ariri",
    "perimetro": "Rodovia Mário Covas e fim da via"
   },
   {
    "logradouro": "Passagem Jericó",
    "perimetro": "Rua 23 de Junho e Passagem Barbosa"
   },
   {
    "logradouro": "Passagem Monte Sinai",
    "perimetro": "Rua 23 de Junho e Rodovia Mário Covas"
   },
   {
    "logradouro": "Passagem Noespa",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Passagem Park do Milênio",
    "perimetro": "Rua 23 de Junho e fim da via"
   },
   {
    "logradouro": "Passagem São Sebastião",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Rua dos Esperantistas e limite da região"
   },
   {
    "logradouro": "Conjunto Adelia Hachem",
    "perimetro": "Rodovia Mário Covas e fim da via"
   }
  ]
 },
 {
  "id": "43",
  "nome": "Região 43",
  "semana": 5,
  "turno": "NOTURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "18:00 h às 01:20 h",
  "domicilios": 3308,
  "panfletos": 1985,
  "categoria": "Diurno → Noturno",
  "logradouros": [
   {
    "logradouro": "Avenida Central",
    "perimetro": "Travessa Dezoito e Rua Sideral"
   },
   {
    "logradouro": "Avenida Principal",
    "perimetro": "Alameda Doze e Rodovia Mário Covas"
   },
   {
    "logradouro": "Rodovia Mário Covas",
    "perimetro": "Avenida Principal e Avenida São Pedro"
   },
   {
    "logradouro": "Rua 4",
    "perimetro": "Travessa Sete e Travessa Nove"
   },
   {
    "logradouro": "Rua A",
    "perimetro": "Rodovia Mário Covas e Rua C"
   },
   {
    "logradouro": "Rua B",
    "perimetro": "Rua A e fim da via"
   },
   {
    "logradouro": "Rua C",
    "perimetro": "Rua A e fim da via"
   },
   {
    "logradouro": "Rua Coletora",
    "perimetro": "Rua Júpiter e Travessa Seis"
   },
   {
    "logradouro": "Rua Esperantista",
    "perimetro": "Rua dos Esperantistas e Rua Sideral"
   },
   {
    "logradouro": "Rua Júpiter",
    "perimetro": "Travessa Seis e Travessa Sete"
   },
   {
    "logradouro": "Rua L 5",
    "perimetro": "Travessa Nove e Travessa Oito"
   },
   {
    "logradouro": "Rua Netuno",
    "perimetro": "Travessa Seis e Travessa Sete"
   },
   {
    "logradouro": "Rua Nova",
    "perimetro": "Passagem Tupi e fim da via"
   },
   {
    "logradouro": "Rua Saturno",
    "perimetro": "Travessa Seis e Travessa Sete"
   },
   {
    "logradouro": "Rua Sideral",
    "perimetro": "Avenida São Pedro e limite da região"
   },
   {
    "logradouro": "Rua do Equador",
    "perimetro": "Alameda Campos e fim da via"
   },
   {
    "logradouro": "Rua dos Esperantistas",
    "perimetro": "Rua Esperantista e Rodovia Mário Covas"
   },
   {
    "logradouro": "Travessa Dez",
    "perimetro": "Avenida São Pedro e Avenida Central"
   },
   {
    "logradouro": "Travessa Dezesseis",
    "perimetro": "Rua dos Esperantistas e Avenida Central"
   },
   {
    "logradouro": "Travessa Doze",
    "perimetro": "Avenida São Pedro e Avenida Central"
   },
   {
    "logradouro": "Travessa L 15",
    "perimetro": "Travessa Trinta e Travessa Vinte e Nove"
   },
   {
    "logradouro": "Travessa L 17",
    "perimetro": "Travessa Vinte e Nove e Travessa Trinta"
   },
   {
    "logradouro": "Travessa L 4",
    "perimetro": "Travessa L 4 B e Travessa Quatorze"
   },
   {
    "logradouro": "Travessa L 4 B",
    "perimetro": "Travessa Doze e Travessa Treze"
   },
   {
    "logradouro": "Travessa L 5",
    "perimetro": "Travessa Nove e Travessa Dez"
   },
   {
    "logradouro": "Travessa L 6",
    "perimetro": "Travessa Dez e Travessa Doze"
   },
   {
    "logradouro": "Travessa L 8",
    "perimetro": "Travessa Quatorze e Travessa Dezesseis"
   },
   {
    "logradouro": "Travessa L 9",
    "perimetro": "Travessa Dezoito e Travessa Quinze"
   },
   {
    "logradouro": "Travessa L Sete",
    "perimetro": "Travessa Onze e Travessa Treze"
   },
   {
    "logradouro": "Travessa Nove",
    "perimetro": "Avenida Central e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Oito",
    "perimetro": "Avenida São Pedro e Avenida Central"
   },
   {
    "logradouro": "Travessa Onze",
    "perimetro": "Rua dos Esperantistas e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Quatorze",
    "perimetro": "Avenida São Pedro e Rua dos Esperantistas"
   },
   {
    "logradouro": "Travessa Quinze",
    "perimetro": "Rua dos Esperantistas e Avenida Central"
   },
   {
    "logradouro": "Travessa Seis",
    "perimetro": "Rua Netuno e Rua Coletora"
   },
   {
    "logradouro": "Travessa Sete",
    "perimetro": "Rua Netuno e Avenida São Pedro"
   },
   {
    "logradouro": "Travessa Treze",
    "perimetro": "Avenida Central e Travessa L 4 B"
   },
   {
    "logradouro": "Travessa Trinta",
    "perimetro": "Rua dos Esperantistas e Avenida São Pedro"
   },
   {
    "logradouro": "Alameda 1",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 10",
    "perimetro": "Avenida Principal e Alameda 9"
   },
   {
    "logradouro": "Alameda 11",
    "perimetro": "Avenida Principal e Alameda Doze"
   },
   {
    "logradouro": "Alameda 2",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 3",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 4",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 5",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 6",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 7",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda 9",
    "perimetro": "Avenida Principal e Alameda 10"
   },
   {
    "logradouro": "Alameda B",
    "perimetro": "Alameda Nossa Senhora de Fátima e fim da via"
   },
   {
    "logradouro": "Alameda Campo Grande",
    "perimetro": "Rua dos Esperantistas e Alameda Campos"
   },
   {
    "logradouro": "Alameda Campos",
    "perimetro": "Rua do Equador e Avenida Central"
   },
   {
    "logradouro": "Alameda Dois",
    "perimetro": "Via Principal e fim da via"
   },
   {
    "logradouro": "Alameda Doze",
    "perimetro": "Rua A e Alameda 11"
   },
   {
    "logradouro": "Alameda Eduardo Angelim",
    "perimetro": "Alameda Santos e Avenida Central"
   },
   {
    "logradouro": "Alameda Liberdade",
    "perimetro": "Alameda Santos e Avenida Central"
   },
   {
    "logradouro": "Alameda Murure",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda Nossa Senhora de Fátima",
    "perimetro": "Rodovia Mário Covas e Travessa Trinta"
   },
   {
    "logradouro": "Alameda Oito",
    "perimetro": "Avenida Principal e fim da via"
   },
   {
    "logradouro": "Alameda Santos",
    "perimetro": "Alameda Liberdade e fim da via"
   },
   {
    "logradouro": "Alameda São Jorge",
    "perimetro": "Alameda Nossa Senhora de Fátima e fim da via"
   },
   {
    "logradouro": "Alameda Tres",
    "perimetro": "Via Principal e limite da região"
   },
   {
    "logradouro": "Alameda Um",
    "perimetro": "Via Principal e fim da via"
   },
   {
    "logradouro": "Alameda Vitória",
    "perimetro": "Alameda Liberdade e fim da via"
   },
   {
    "logradouro": "Alameda da Paz",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Passagem Andiroba",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Passagem Cedro",
    "perimetro": "Rua dos Esperantistas e Alameda Campos"
   },
   {
    "logradouro": "Passagem Coração de Jesus",
    "perimetro": "Rua dos Esperantistas e fim da via"
   },
   {
    "logradouro": "Passagem Iracema",
    "perimetro": "Avenida Central e Avenida São Pedro"
   },
   {
    "logradouro": "Passagem Lirio dos Vales",
    "perimetro": "Passagem Maranata e fim da via"
   },
   {
    "logradouro": "Passagem Maranata",
    "perimetro": "Travessa Trinta e Rodovia Mário Covas"
   },
   {
    "logradouro": "Passagem Tupi",
    "perimetro": "Alameda Doze e fim da via"
   },
   {
    "logradouro": "Via Principal",
    "perimetro": "Rua dos Esperantistas e fim da via"
   }
  ]
 },
 {
  "id": "48",
  "nome": "Região 48",
  "semana": 5,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3305,
  "panfletos": 1983,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Rodovia do Tapanã",
    "perimetro": "Rua São Clemente e Estrada do Tapana"
   },
   {
    "logradouro": "Estrada do Tapana",
    "perimetro": "Rodovia do Tapanã e Estrada da Piçarreira"
   },
   {
    "logradouro": "Rua 1",
    "perimetro": "Rodovia do Tapanã e limite da região"
   },
   {
    "logradouro": "Rua 2",
    "perimetro": "Rodovia do Tapanã e limite da região"
   },
   {
    "logradouro": "Rua 2 de Julho",
    "perimetro": "Rua Quadra D e fim da via"
   },
   {
    "logradouro": "Rua 2 de Junho",
    "perimetro": "Rua Belmonte e Rua 2 de Julho"
   },
   {
    "logradouro": "Rua 3",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Rua 4",
    "perimetro": "Rua São Luíz e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Bebedouro",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Rua Belmonte",
    "perimetro": "Rua Quadra F e fim da via"
   },
   {
    "logradouro": "Rua Donatilla do Pilar",
    "perimetro": "Residencial Rio Volga Setor e Alameda Alípia Queiróz da Mota"
   },
   {
    "logradouro": "Rua Gerard Sampaio",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Rua Maria de Nazaré",
    "perimetro": "Rodovia do Tapanã e Estrada da Piçarreira"
   },
   {
    "logradouro": "Rua Nova Esperença",
    "perimetro": "Rua São Luíz e fim da via"
   },
   {
    "logradouro": "Rua Quadra A",
    "perimetro": "Rua Quadra E e Travessa Haroldo Veloso"
   },
   {
    "logradouro": "Rua Quadra B",
    "perimetro": "Travessa Haroldo Veloso e fim da via"
   },
   {
    "logradouro": "Rua Quadra C",
    "perimetro": "Travessa Haroldo Veloso e Rua 2 de Julho"
   },
   {
    "logradouro": "Rua Quadra D",
    "perimetro": "Rua 2 de Julho e Rua Quadra A"
   },
   {
    "logradouro": "Rua Quadra E",
    "perimetro": "Rua 2 de Julho e Rua Quadra A"
   },
   {
    "logradouro": "Rua Quadra F",
    "perimetro": "Rua Bebedouro e Travessa Haroldo Veloso"
   },
   {
    "logradouro": "Rua Raquel de Lemos",
    "perimetro": "Rodovia do Tapanã e Alameda Alípia Queiróz da Mota"
   },
   {
    "logradouro": "Rua Santa Aparecida",
    "perimetro": "Rua Bebedouro e Alameda Carmem"
   },
   {
    "logradouro": "Rua São Luíz",
    "perimetro": "Rua Nova Esperença e Rua 4"
   },
   {
    "logradouro": "Rua Vladimir Herzog",
    "perimetro": "Alameda Nascer du Sol e Alameda Vitória"
   },
   {
    "logradouro": "Rua do Residencial Kikuchi",
    "perimetro": "Alameda Vitória e Rodovia do Tapanã"
   },
   {
    "logradouro": "Travessa Haroldo Veloso",
    "perimetro": "Rodovia do Tapanã e Rua 2 de Julho"
   },
   {
    "logradouro": "Alameda Alípia Queiróz da Mota",
    "perimetro": "Rodovia do Tapanã e Rua Raquel de Lemos"
   },
   {
    "logradouro": "Alameda Benedita Carril",
    "perimetro": "Alameda República Argentina e Rua do Residencial Kikuchi"
   },
   {
    "logradouro": "Alameda Carmem",
    "perimetro": "Rodovia do Tapanã e fim da via"
   },
   {
    "logradouro": "Alameda Kubitschek",
    "perimetro": "Rua Vladimir Herzog e Alameda República Argentina"
   },
   {
    "logradouro": "Alameda Nascer du Sol",
    "perimetro": "Rua Vladimir Herzog e fim da via"
   },
   {
    "logradouro": "Alameda Nazaré",
    "perimetro": "Alameda República Argentina e Rua do Residencial Kikuchi"
   },
   {
    "logradouro": "Alameda República Argentina",
    "perimetro": "Rodovia do Tapanã e Alameda Kubitschek"
   },
   {
    "logradouro": "Alameda São José",
    "perimetro": "Alameda República Argentina e Rua do Residencial Kikuchi"
   },
   {
    "logradouro": "Alameda São Raimundo",
    "perimetro": "Alameda República Argentina e Rua do Residencial Kikuchi"
   },
   {
    "logradouro": "Alameda Tiradentes",
    "perimetro": "Passagem das Flores e fim da via"
   },
   {
    "logradouro": "Alameda Vitória",
    "perimetro": "Rua Vladimir Herzog e fim da via"
   },
   {
    "logradouro": "Passagem Dalva",
    "perimetro": "Rua 2 de Junho e Rua Belterra"
   },
   {
    "logradouro": "Passagem das Flores",
    "perimetro": "Alameda Kubitschek e Alameda Vitória"
   },
   {
    "logradouro": "Residencial Rio Volga Setor",
    "perimetro": "Rodovia do Tapanã e Rua Donatilla do Pilar"
   }
  ]
 },
 {
  "id": "49",
  "nome": "Região 49",
  "semana": 5,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2882,
  "panfletos": 1729,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Perimentral III",
    "perimetro": "Rua Nova Olinda e Rua São Clemente"
   },
   {
    "logradouro": "Avenida Perimetral da Ciência",
    "perimetro": "Rua São Clemente e Rua Maria Quitéria"
   },
   {
    "logradouro": "Rua 16 de Agosto",
    "perimetro": "Travessa Sexta e limite da região"
   },
   {
    "logradouro": "Rua A",
    "perimetro": "Alameda 9 e Alameda 11"
   },
   {
    "logradouro": "Rua Alberto Vilar",
    "perimetro": "Rua São Clemente e Rua José Maria da Costa"
   },
   {
    "logradouro": "Rua Almirante Tamandaré",
    "perimetro": "Avenida Perimetral da Ciência e Passagem Amoras"
   },
   {
    "logradouro": "Rua B",
    "perimetro": "Alameda 13 e Alameda 15"
   },
   {
    "logradouro": "Rua Benedito Bandeira",
    "perimetro": "Rua São Clemente e fim da via"
   },
   {
    "logradouro": "Rua Cabanos",
    "perimetro": "Rua Paraíso e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Rua Carlos Mariguelha",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Rua Frei Tito",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Rua Irmã Adelaide",
    "perimetro": "Rua Almirante Tamandaré e Rua Quintino"
   },
   {
    "logradouro": "Rua Maria Quitéria",
    "perimetro": "Rua Quadra B e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Rua Nativos de Oliveira",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Rua Osveraldina",
    "perimetro": "Travessa Cinco e Rua São Clemente"
   },
   {
    "logradouro": "Rua Padre Jósimo",
    "perimetro": "Rua Almirante Tamandaré e Rua Quintino"
   },
   {
    "logradouro": "Rua Paraíso",
    "perimetro": "Rua Cabanos e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Rua Pedro Paulo",
    "perimetro": "Rua Almirante Tamandaré e fim da via"
   },
   {
    "logradouro": "Rua Quadra D",
    "perimetro": "Rua Quadra A e Rua Quadra B"
   },
   {
    "logradouro": "Rua Quintino",
    "perimetro": "Rua Nativos de Oliveira e Rua Quadra D"
   },
   {
    "logradouro": "Rua Santa Clara",
    "perimetro": "Rua Rui Barbosa e fim da via"
   },
   {
    "logradouro": "Rua Santa Terezinha",
    "perimetro": "Fim da via e limite da região"
   },
   {
    "logradouro": "Rua Santos Dias",
    "perimetro": "Rua Carlos Mariguelha e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Rua Sorriso",
    "perimetro": "Rodovia do Tapanã e Passagem Sorriso"
   },
   {
    "logradouro": "Rua São Clemente",
    "perimetro": "Passagem Sorriso e Passagem Felipe Mateus"
   },
   {
    "logradouro": "Rua São Francisco",
    "perimetro": "Rua Santa Clara e Rua Santa Terezinha"
   },
   {
    "logradouro": "Rua São José",
    "perimetro": "Rua Santa Terezinha e Rua Santa Clara"
   },
   {
    "logradouro": "Rua São Vicente Paula",
    "perimetro": "Rua Quadra D e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Rua da Contorno",
    "perimetro": "Travessa 4 e Rua São Clemente"
   },
   {
    "logradouro": "Rua do Comércio",
    "perimetro": "Rua Almirante Tamandaré e Rua São Clemente"
   },
   {
    "logradouro": "Travessa 10",
    "perimetro": "Avenida Perimetral da Ciência e Avenida Perimentral III"
   },
   {
    "logradouro": "Travessa 11",
    "perimetro": "Avenida Perimentral III e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Travessa 12",
    "perimetro": "Avenida Perimentral III e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Travessa 13",
    "perimetro": "Avenida Perimetral da Ciência e Avenida Perimentral III"
   },
   {
    "logradouro": "Travessa 2",
    "perimetro": "Avenida Perimentral III e Rua da Contorno"
   },
   {
    "logradouro": "Travessa 3",
    "perimetro": "Rua da Contorno e Avenida Perimentral III"
   },
   {
    "logradouro": "Travessa 4",
    "perimetro": "Rua da Contorno e Avenida Perimentral III"
   },
   {
    "logradouro": "Travessa 7",
    "perimetro": "Avenida Perimentral III e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Travessa 8",
    "perimetro": "Avenida Perimentral III e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Travessa 9",
    "perimetro": "Avenida Perimentral III e Avenida Perimetral da Ciência"
   },
   {
    "logradouro": "Travessa Cinco",
    "perimetro": "Rua Santa Clara e limite da região"
   },
   {
    "logradouro": "Travessa Perimetral ll",
    "perimetro": "Rua São Clemente e Travessa 13"
   },
   {
    "logradouro": "Travessa Primeira",
    "perimetro": "Travessa Quatro e Rua 16 de Agosto"
   },
   {
    "logradouro": "Travessa Quatro",
    "perimetro": "Rua São Clemente e limite da região"
   },
   {
    "logradouro": "Travessa Segunda",
    "perimetro": "Travessa Quatro e Alameda Raimundo"
   },
   {
    "logradouro": "Travessa Seis",
    "perimetro": "Avenida Perimetral da Ciência e Avenida Perimentral III"
   },
   {
    "logradouro": "Travessa Sexta",
    "perimetro": "Fim da via e limite da região"
   },
   {
    "logradouro": "Travessa Terceira",
    "perimetro": "Travessa Quatro e fim da via"
   },
   {
    "logradouro": "Alameda 1",
    "perimetro": "Rua São Clemente e fim da via"
   },
   {
    "logradouro": "Alameda 10",
    "perimetro": "Rua São Clemente e Alameda 9"
   },
   {
    "logradouro": "Alameda 11",
    "perimetro": "Alameda 8 e fim da via"
   },
   {
    "logradouro": "Alameda 12",
    "perimetro": "Alameda 9 e Rua São Clemente"
   },
   {
    "logradouro": "Alameda 13",
    "perimetro": "Alameda 8 e fim da via"
   },
   {
    "logradouro": "Alameda 14",
    "perimetro": "Rua São Clemente e Alameda 9"
   },
   {
    "logradouro": "Alameda 15",
    "perimetro": "Alameda 8 e Rua Santa Terezinha"
   },
   {
    "logradouro": "Alameda 2",
    "perimetro": "Rua São Clemente e fim da via"
   },
   {
    "logradouro": "Alameda 3",
    "perimetro": "Rua São Clemente e Passagem Sorriso"
   },
   {
    "logradouro": "Alameda 8",
    "perimetro": "Alameda 9 e Rua José Maria da Costa"
   },
   {
    "logradouro": "Alameda 9",
    "perimetro": "Alameda 8 e Passagem Canaã"
   },
   {
    "logradouro": "Alameda Raimundo",
    "perimetro": "Rua São Clemente e Travessa Segunda"
   },
   {
    "logradouro": "Alameda dos Anjos",
    "perimetro": "Rua Almirante Tamandaré e limite da região"
   },
   {
    "logradouro": "Passagem Boa Fé",
    "perimetro": "Passagem Amoras e fim da via"
   },
   {
    "logradouro": "Passagem Canaã",
    "perimetro": "Travessa Perimetral ll e Alameda 9"
   },
   {
    "logradouro": "Passagem Dose Amigo",
    "perimetro": "Rua Presidente Castelo Branco e Rua Quintino"
   },
   {
    "logradouro": "Passagem Fé em Deus",
    "perimetro": "Rua Presidente Castelo Branco e fim da via"
   },
   {
    "logradouro": "Passagem Jacob",
    "perimetro": "Passagem Amoras e Rua Almirante Tamandaré"
   },
   {
    "logradouro": "Passagem Sorriso",
    "perimetro": "Rua Sorriso e Rua Frei Tito"
   }
  ]
 },
 {
  "id": "50",
  "nome": "Região 50",
  "semana": 5,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2752,
  "panfletos": 1651,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Madrid",
    "perimetro": "Rua Guadalupe e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Avenida Padre Bruno Sechi",
    "perimetro": "Rodovia do Tapanã e Rua Andreza"
   },
   {
    "logradouro": "Avenida Perimetral",
    "perimetro": "Rodovia do Tapanã e Alameda São João"
   },
   {
    "logradouro": "Rodovia do Tapanã",
    "perimetro": "Rua São Clemente e Rua Alfa"
   },
   {
    "logradouro": "Rua Alberto Vilar",
    "perimetro": "Rua José Maria da Costa e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua Alfa",
    "perimetro": "Alameda Santos Dumont e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Barbosa Lima Sobrinho I",
    "perimetro": "Rua Lúcio Costa e Rua Oscar Niemeyer"
   },
   {
    "logradouro": "Rua Barbosa Lima Sobrinho II",
    "perimetro": "Rua Lúcio Costa e Rua Oscar Niemeyer"
   },
   {
    "logradouro": "Rua Barcelona",
    "perimetro": "Passagem Braganca e fim da via"
   },
   {
    "logradouro": "Rua Beta",
    "perimetro": "Rodovia do Tapanã e Alameda Santos Dumont"
   },
   {
    "logradouro": "Rua Bilão",
    "perimetro": "Rua Guadalajara e fim da via"
   },
   {
    "logradouro": "Rua Delta",
    "perimetro": "Rodovia do Tapanã e Alameda Santos Dumont"
   },
   {
    "logradouro": "Rua Gama",
    "perimetro": "Rua Búzios e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Guadalajara",
    "perimetro": "Avenida Padre Bruno Sechi e Rua Bilão"
   },
   {
    "logradouro": "Rua Guadalupe",
    "perimetro": "Rua Santa Clara e Travessa Tarcagena"
   },
   {
    "logradouro": "Rua Jocelim Brasil",
    "perimetro": "Rua Juscelino Kubitscheck e Rua Lúcio Costa"
   },
   {
    "logradouro": "Rua José Alves",
    "perimetro": "Rua Juscelino Kubitscheck e Rua Lúcio Costa"
   },
   {
    "logradouro": "Rua José Maria da Costa",
    "perimetro": "Alameda 6 e Rua Santa Terezinha"
   },
   {
    "logradouro": "Rua João Amazonas Pedroso",
    "perimetro": "Rua Oscar Niemeyer e Rua Lúcio Costa"
   },
   {
    "logradouro": "Rua Juscelino Kubitscheck",
    "perimetro": "Rua Vladimir Herzog e Rodovia do Tapanã"
   },
   {
    "logradouro": "Rua Lúcio Costa",
    "perimetro": "Rua Vladimir Herzog e Rua Raimundo Jinkings"
   },
   {
    "logradouro": "Rua Marços Pinheiro",
    "perimetro": "Rua Santa Clara e Alameda 8"
   },
   {
    "logradouro": "Rua Mateus Paulo",
    "perimetro": "Alameda Quatorze e Rua Santa Clara"
   },
   {
    "logradouro": "Rua Nossa NSa do Rosário",
    "perimetro": "Rua Alberto Vilar e Rua Santa Clara"
   },
   {
    "logradouro": "Rua Nossa Senhora de Nazaré",
    "perimetro": "Rua Alberto Vilar e Rua Santa Clara"
   },
   {
    "logradouro": "Rua Olga Benário",
    "perimetro": "Rua Oscar Niemeyer e Rua Lúcio Costa"
   },
   {
    "logradouro": "Rua Oscar Niemeyer",
    "perimetro": "Rua Raimundo Jinkings e Alameda Vitória"
   },
   {
    "logradouro": "Rua Paulo Fonteles l",
    "perimetro": "Rua Pedro Pomar e Rua Oscar Niemeyer"
   },
   {
    "logradouro": "Rua Paulo Fontelles ll",
    "perimetro": "Rua Oscar Niemeyer e Rua Pedro Pomar"
   },
   {
    "logradouro": "Rua Pedro Pomar",
    "perimetro": "Rua Olga Benário e Rua Raimundo Jinkings"
   },
   {
    "logradouro": "Rua Raimundo Jinkings",
    "perimetro": "Rua Lúcio Costa e Rua Oscar Niemeyer"
   },
   {
    "logradouro": "Rua Rui Barbosa",
    "perimetro": "Alameda Quatorze e Rua Santa Clara"
   },
   {
    "logradouro": "Rua Santa Clara",
    "perimetro": "Rua Rui Barbosa e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Rua Santa Maria",
    "perimetro": "Rua Tadeu Capela e Rua Alberto Vilar"
   },
   {
    "logradouro": "Rua Santa Terezinha",
    "perimetro": "Rua Santa Clara e Rua Alberto Vilar"
   },
   {
    "logradouro": "Rua São Clemente",
    "perimetro": "Rodovia do Tapanã e Rua Benedito Bandeira"
   },
   {
    "logradouro": "Rua Tadeu Capela",
    "perimetro": "Rua Santa Clara e fim da via"
   },
   {
    "logradouro": "Rua Valência",
    "perimetro": "Passagem Braganca e fim da via"
   },
   {
    "logradouro": "Travessa Cartagena",
    "perimetro": "Rua Valência e fim da via"
   },
   {
    "logradouro": "Travessa Catalunha",
    "perimetro": "Passagem Braganca e fim da via"
   },
   {
    "logradouro": "Travessa Medina de Campo",
    "perimetro": "Rua Guadalajara e Rua Barcelona"
   },
   {
    "logradouro": "Travessa Montes de Toledo",
    "perimetro": "Rua Guadalupe e Rua Barcelona"
   },
   {
    "logradouro": "Travessa Palma de Mallorca",
    "perimetro": "Travessa Medina de Campo e fim da via"
   },
   {
    "logradouro": "Travessa Segóvia",
    "perimetro": "Passagem Braganca e fim da via"
   },
   {
    "logradouro": "Travessa Tarcagena",
    "perimetro": "Rua Guadalupe e Avenida Madrid"
   },
   {
    "logradouro": "Alameda 1",
    "perimetro": "Avenida Perimetral e Rua São Clemente"
   },
   {
    "logradouro": "Alameda 10",
    "perimetro": "Rua José Maria da Costa e Alameda 27"
   },
   {
    "logradouro": "Alameda 12",
    "perimetro": "Rua José Maria da Costa e Alameda 27"
   },
   {
    "logradouro": "Alameda 17",
    "perimetro": "Avenida Perimetral e Alameda 6"
   },
   {
    "logradouro": "Alameda 19",
    "perimetro": "Avenida Perimetral e Alameda 8"
   },
   {
    "logradouro": "Alameda 2",
    "perimetro": "Alameda 17 e Alameda 9"
   },
   {
    "logradouro": "Alameda 21",
    "perimetro": "Alameda 8 e Avenida Perimetral"
   },
   {
    "logradouro": "Alameda 23",
    "perimetro": "Avenida Perimetral e Alameda 8"
   },
   {
    "logradouro": "Alameda 25",
    "perimetro": "Alameda 8 e Avenida Perimetral"
   },
   {
    "logradouro": "Alameda 27",
    "perimetro": "Alameda 8 e Alameda Quatorze"
   },
   {
    "logradouro": "Alameda 29",
    "perimetro": "Alameda 8 e Avenida Padre Bruno Sechi"
   },
   {
    "logradouro": "Alameda 3",
    "perimetro": "Alameda 8 e Avenida Perimetral"
   },
   {
    "logradouro": "Alameda 4",
    "perimetro": "Alameda 9 e Alameda 17"
   },
   {
    "logradouro": "Alameda 5",
    "perimetro": "Avenida Perimetral e Alameda 8"
   },
   {
    "logradouro": "Alameda 6",
    "perimetro": "Alameda 19 e Alameda 7 de Setembro"
   },
   {
    "logradouro": "Alameda 7 de Setembro",
    "perimetro": "Alameda 8 e Avenida Perimetral"
   },
   {
    "logradouro": "Alameda 8",
    "perimetro": "Rua São Clemente e Avenida Perimetral"
   },
   {
    "logradouro": "Alameda 9",
    "perimetro": "Avenida Perimetral e Alameda 8"
   },
   {
    "logradouro": "Alameda Astúrias",
    "perimetro": "Rua Guadalupe e Travessa Tarcagena"
   },
   {
    "logradouro": "Alameda Quatorze",
    "perimetro": "Rua José Maria da Costa e Rua Mateus Paulo"
   },
   {
    "logradouro": "Alameda Santos Dumont",
    "perimetro": "Rua Delta e Rua Alfa"
   },
   {
    "logradouro": "Alameda Sete de Setembro",
    "perimetro": "Avenida Perimetral e fim da via"
   },
   {
    "logradouro": "Alameda São João",
    "perimetro": "Avenida Perimetral e Rua Santa Clara"
   },
   {
    "logradouro": "Alameda Torre Balança",
    "perimetro": "Rua Bilão e Rua Guadalajara"
   },
   {
    "logradouro": "Alameda Vitória",
    "perimetro": "Rua Oscar Niemeyer e Rua Vladimir Herzog"
   },
   {
    "logradouro": "Passagem do Fio",
    "perimetro": "Rua Delta e Rua Alfa"
   }
  ]
 },
 {
  "id": "55",
  "nome": "Região 55",
  "semana": 5,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 523,
  "panfletos": 314,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Rodovia Artur Bernardes",
    "perimetro": "Propiedade Santa Maria e Travessa da Soledade"
   },
   {
    "logradouro": "Rua 15 de Agosto",
    "perimetro": "Travessa da Soledade e Passagem das Flores"
   },
   {
    "logradouro": "Rua Maura",
    "perimetro": "Rua Coronel Juvêncio Sarmento e fim da via"
   },
   {
    "logradouro": "Rua Padre Júlio Maria",
    "perimetro": "Travessa da Soledade e Passagem Maura"
   },
   {
    "logradouro": "Passagem Maura",
    "perimetro": "Rodovia Artur Bernardes e fim da via"
   },
   {
    "logradouro": "Passagem das Flores",
    "perimetro": "Rodovia Artur Bernardes e Rua 15 de Agosto"
   }
  ]
 },
 {
  "id": "26",
  "nome": "Região 26",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2594,
  "panfletos": 1556,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Beira Mar",
    "perimetro": "Rua Militãqo Coutinho e Travessa Princezinha do Mar"
   },
   {
    "logradouro": "Avenida Central Park",
    "perimetro": "Travessa Osvaldo Rodrigues e fim da via"
   },
   {
    "logradouro": "Avenida Nossa Senhora da Conceição",
    "perimetro": "Rua Maria do Carmo e Rua Militãqo Coutinho"
   },
   {
    "logradouro": "Avenida Paulo Costa",
    "perimetro": "Avenida Nossa Senhora da Conceição e Rua Heitor Costa"
   },
   {
    "logradouro": "Estrada Nostra Senhora de Fátima",
    "perimetro": "Rua Beira Mar e Passagem Carlos Gomes"
   },
   {
    "logradouro": "Estrada do Itaiteua",
    "perimetro": "Travessa Doutor Evandro Bona e Passagem Carlos Gomes"
   },
   {
    "logradouro": "Rua 15 de Agosto",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Rua Amoras",
    "perimetro": "Avenida Franklin de Menezes e Alameda das Mangueiras"
   },
   {
    "logradouro": "Rua Anaja",
    "perimetro": "Alameda Tropical e Passagem das Flores"
   },
   {
    "logradouro": "Rua Bariloche",
    "perimetro": "Alameda das Mangueiras e Travessa Laranjeiras"
   },
   {
    "logradouro": "Rua Beira Mar",
    "perimetro": "Passagem Carlos Gomes e Estrada Nostra Senhora de Fátima"
   },
   {
    "logradouro": "Rua Botafogo",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Brasil",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Buriti",
    "perimetro": "Alameda Tropical e fim da via"
   },
   {
    "logradouro": "Rua Enok Filho",
    "perimetro": "Avenida Beira Mar e Avenida Nossa Senhora da Conceição"
   },
   {
    "logradouro": "Rua Guarujá",
    "perimetro": "Rua Heitor Costa e Travessa Tancredo Neves"
   },
   {
    "logradouro": "Rua Heitor Costa",
    "perimetro": "Avenida Paulo Costa e Travessa Flamengo"
   },
   {
    "logradouro": "Rua Iracema",
    "perimetro": "Rua Água Boa e Rua Heitor Costa"
   },
   {
    "logradouro": "Rua Itaipoa",
    "perimetro": "Rua Água Boa e Rua Heitor Costa"
   },
   {
    "logradouro": "Rua Lebon",
    "perimetro": "Rua Heitor Costa e Rua Água Boa"
   },
   {
    "logradouro": "Rua Macae",
    "perimetro": "Rua Água Boa e Rua Heitor Costa"
   },
   {
    "logradouro": "Rua Maria do Carmo",
    "perimetro": "Avenida Nossa Senhora da Conceição e Avenida Beira Mar"
   },
   {
    "logradouro": "Rua Militão Coutinho",
    "perimetro": "Rua Militãqo Coutinho e fim da via"
   },
   {
    "logradouro": "Rua Militãqo Coutinhas",
    "perimetro": "Avenida Beira Mar e Avenida Nossa Senhora da Conceição"
   },
   {
    "logradouro": "Rua Militãqo Coutinho",
    "perimetro": "Avenida Beira Mar e Avenida Nossa Senhora da Conceição"
   },
   {
    "logradouro": "Rua Miralba Rocha",
    "perimetro": "Rua Paulo Amanajas e Travessa São Miguel"
   },
   {
    "logradouro": "Rua Nova República",
    "perimetro": "Avenida Franklin de Menezes e Rua Anaja"
   },
   {
    "logradouro": "Rua Nova República II",
    "perimetro": "Avenida Franklin de Menezes e Alameda das Mangueiras"
   },
   {
    "logradouro": "Rua Olho Dagua",
    "perimetro": "Rua Água Boa e Rua Heitor Costa"
   },
   {
    "logradouro": "Rua Paulo Amanajas",
    "perimetro": "Alameda das Mangueiras e Travessa Tancredo Neves"
   },
   {
    "logradouro": "Rua Preamar",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Santa Luza",
    "perimetro": "Rua Água Boa e Rua Heitor Costa"
   },
   {
    "logradouro": "Rua São José",
    "perimetro": "Estrada do Itaiteua e fim da via"
   },
   {
    "logradouro": "Rua São Sebastião",
    "perimetro": "Rua Heitor Costa e Travessa Hamilton Brasil"
   },
   {
    "logradouro": "Rua Tucumaeira",
    "perimetro": "Avenida Franklin de Menezes e Rua Água Boa"
   },
   {
    "logradouro": "Rua Vitória",
    "perimetro": "Alameda Tropical e fim da via"
   },
   {
    "logradouro": "Rua Água Boa",
    "perimetro": "Avenida Paulo Costa e Travessa SN"
   },
   {
    "logradouro": "Travessa B Rabelo",
    "perimetro": "Alameda das Mangueiras e Rua São Sebastião"
   },
   {
    "logradouro": "Travessa Bariloche",
    "perimetro": "Travessa Tancredo Neves e Alameda São Paulo"
   },
   {
    "logradouro": "Travessa Beija Flor",
    "perimetro": "Alameda das Mangueiras e Rua Água Boa"
   },
   {
    "logradouro": "Travessa Cristovão Colombo",
    "perimetro": "Alameda São Paulo e Rua Miralba Rocha"
   },
   {
    "logradouro": "Travessa Doutor Evandro Bona",
    "perimetro": "Avenida Franklin de Menezes e Estrada do Itaiteua"
   },
   {
    "logradouro": "Travessa Flamengo",
    "perimetro": "Rua Heitor Costa e Rua Água Boa"
   },
   {
    "logradouro": "Travessa Hamilton Brasil",
    "perimetro": "Alameda das Mangueiras e Rua Heitor Costa"
   },
   {
    "logradouro": "Travessa Heitor Costa",
    "perimetro": "Avenida Paulo Costa e Avenida Beira Mar"
   },
   {
    "logradouro": "Travessa Irma Cristina",
    "perimetro": "Alameda das Mangueiras e Rua Água Boa"
   },
   {
    "logradouro": "Travessa Irmaos Soranso",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Travessa João Amanajas",
    "perimetro": "Alameda das Mangueiras e Rua Miralba Rocha"
   },
   {
    "logradouro": "Travessa Laranjeiras",
    "perimetro": "Avenida Nossa Senhora da Conceição e Travessa Hamilton Brasil"
   },
   {
    "logradouro": "Travessa Las Palmas I",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Travessa Las Palmas II",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Travessa Las Palmas III",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Travessa Marilia Amanajas",
    "perimetro": "Alameda das Mangueiras e fim da via"
   },
   {
    "logradouro": "Travessa Orlando Rodrigues",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Travessa Osvaldo Rodrigues",
    "perimetro": "Rua Água Boa e limite da região"
   },
   {
    "logradouro": "Travessa Paulo Prazeres",
    "perimetro": "Alameda das Mangueiras e fim da via"
   },
   {
    "logradouro": "Travessa Princezinha do Mar",
    "perimetro": "Avenida Beira Mar e Avenida Paulo Costa"
   },
   {
    "logradouro": "Travessa Romano Amanajas",
    "perimetro": "Rua 15 de Agosto e fim da via"
   },
   {
    "logradouro": "Travessa SN",
    "perimetro": "Rua Água Boa"
   },
   {
    "logradouro": "Travessa Santa Etelita",
    "perimetro": "Alameda das Mangueiras e limite da região"
   },
   {
    "logradouro": "Travessa Silvia Amanajas",
    "perimetro": "Alameda das Mangueiras e fim da via"
   },
   {
    "logradouro": "Travessa São Miguel",
    "perimetro": "Rua Miralba Rocha e Alameda das Mangueiras"
   },
   {
    "logradouro": "Travessa Tancredo Neves",
    "perimetro": "Avenida Paulo Costa e Rua Paulo Amanajas"
   },
   {
    "logradouro": "Travessa Tito Franco",
    "perimetro": "Alameda das Mangueiras e Rua São Jerônimo"
   },
   {
    "logradouro": "Travessa Travassos",
    "perimetro": "Alameda das Mangueiras e fim da via"
   },
   {
    "logradouro": "Travessa das Acácias",
    "perimetro": "Alameda das Mangueiras e Travessa Tancredo Neves"
   },
   {
    "logradouro": "Alameda Alenquer",
    "perimetro": "Rua Militãqo Coutinho e Alameda Obidos"
   },
   {
    "logradouro": "Alameda Esmeralda",
    "perimetro": "Avenida Franklin de Menezes e Alameda das Mangueiras"
   },
   {
    "logradouro": "Alameda Feliciano",
    "perimetro": "Rua São José e fim da via"
   },
   {
    "logradouro": "Alameda Mancel Siquiera",
    "perimetro": "Rua Anaja e Avenida Franklin de Menezes"
   },
   {
    "logradouro": "Alameda Obidos",
    "perimetro": "Rua Militãqo Coutinho e Alameda Alenquer"
   },
   {
    "logradouro": "Alameda Santa Rita",
    "perimetro": "Rua Militãqo Coutinho e fim da via"
   },
   {
    "logradouro": "Alameda Santos Dumont",
    "perimetro": "Travessa Doutor Evandro Bona e fim da via"
   },
   {
    "logradouro": "Alameda São Benedito",
    "perimetro": "Travessa Beija Flor e fim da via"
   },
   {
    "logradouro": "Alameda São Judas Tadeu",
    "perimetro": "Rua Militãqo Coutinho e fim da via"
   },
   {
    "logradouro": "Alameda São Paulo",
    "perimetro": "Avenida Nossa Senhora da Conceição e Travessa Romano Amanajas"
   },
   {
    "logradouro": "Alameda Tropical",
    "perimetro": "Avenida Franklin de Menezes e Rua Água Boa"
   },
   {
    "logradouro": "Alameda Xingu",
    "perimetro": "Rua Militãqo Coutinho e fim da via"
   },
   {
    "logradouro": "Alameda das Mangueiras",
    "perimetro": "Avenida Nossa Senhora da Conceição e Rua Amoras"
   },
   {
    "logradouro": "Passagem Amoras",
    "perimetro": "Travessa Doutor Evandro Bona e Rua Amoras"
   },
   {
    "logradouro": "Passagem Carlos Gomes",
    "perimetro": "Estrada do Itaiteua e Rua Beira Mar"
   },
   {
    "logradouro": "Passagem Nova",
    "perimetro": "Estrada do Itaiteua e fim da via"
   },
   {
    "logradouro": "Passagem Trinidade",
    "perimetro": "Estrada do Itaiteua e fim da via"
   },
   {
    "logradouro": "Passagem das Flores",
    "perimetro": "Alameda das Mangueiras e Rua Anaja"
   },
   {
    "logradouro": "Ramal do Itaiteua",
    "perimetro": "Estrada do Itaiteua e limite da região"
   }
  ]
 },
 {
  "id": "27",
  "nome": "Região 27",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2221,
  "panfletos": 1333,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida Atlantida",
    "perimetro": "Rua Jader Barbalho e fim da via"
   },
   {
    "logradouro": "Avenida Beira Mar",
    "perimetro": "Avenida Paulo Costa e Rua Ipanema do Norte"
   },
   {
    "logradouro": "Avenida Paulo Costa",
    "perimetro": "Avenida Beira Mar e Estrada Velha do Outeiro"
   },
   {
    "logradouro": "Estrada Velha do Outeiro",
    "perimetro": "Avenida Paulo Costa e Passagem do Fio"
   },
   {
    "logradouro": "Rua Botafogo",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Brasil",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Cabo Frio",
    "perimetro": "Avenida Paulo Costa e Passagem Nova República"
   },
   {
    "logradouro": "Rua Guarujá",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Heitor Costa",
    "perimetro": "Avenida Beira Mar e Rua Tucumaeira"
   },
   {
    "logradouro": "Rua Ipanema",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Ipanema do Norte",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Iracema",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Itaipoa",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Jader Barbalho",
    "perimetro": "Avenida Beira Mar e limite da região"
   },
   {
    "logradouro": "Rua Lebon",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Macae",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Olho Dagua",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Piquiriana",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua SN Um",
    "perimetro": "Travessa SN e fim da via"
   },
   {
    "logradouro": "Rua Santa Luza",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Sn Dois",
    "perimetro": "Ramal do Itaiteua e fim da via"
   },
   {
    "logradouro": "Rua Sw Dois",
    "perimetro": "Avenida Paulo Costa e Travessa SN 3"
   },
   {
    "logradouro": "Rua São Sebastião",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Rua Tucumaeira",
    "perimetro": "Rua Água Boa e Rua Primeiro de Setembro"
   },
   {
    "logradouro": "Travessa Flamengo",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Travessa Hamilton Brasil",
    "perimetro": "Rua Heitor Costa e Rua Jader Barbalho"
   },
   {
    "logradouro": "Travessa Osvaldo Rodrigues",
    "perimetro": "Rua Água Boa e Rua Heitor Costa"
   },
   {
    "logradouro": "Travessa Presidente Getulio Vargas",
    "perimetro": "Rua Água Boa e Avenida Paulo Costa"
   },
   {
    "logradouro": "Travessa SN",
    "perimetro": "Rua Água Boa e Avenida Paulo Costa"
   },
   {
    "logradouro": "Travessa SN 3",
    "perimetro": "Ramal do Itaiteua e fim da via"
   },
   {
    "logradouro": "Travessa Sol Nasciente",
    "perimetro": "Rua Água Boa e Avenida Paulo Costa"
   },
   {
    "logradouro": "Travessa Tamires",
    "perimetro": "Rua Jader Barbalho e fim da via"
   },
   {
    "logradouro": "Alameda Nossa Senhora de Nazaré",
    "perimetro": "Rua Heitor Costa e fim da via"
   },
   {
    "logradouro": "Passagem Heitor Costa",
    "perimetro": "Travessa Presidente Getulio Vargas e Travessa Sol Nasciente"
   },
   {
    "logradouro": "Passagem Nova República",
    "perimetro": "Avenida Atlantida e Rua Helio Gueiros"
   },
   {
    "logradouro": "Passagem Santa Rita",
    "perimetro": "Rua Tucumaeira e fim da via"
   },
   {
    "logradouro": "Ramal do Itaiteua",
    "perimetro": "Estrada do Itaiteua e Estrada Velha do Outeiro"
   }
  ]
 },
 {
  "id": "28",
  "nome": "Região 28",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3306,
  "panfletos": 1984,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida 16 de Novembro",
    "perimetro": "Rua Tucumaeira e Rua Santa Maria"
   },
   {
    "logradouro": "Avenida Brasil",
    "perimetro": "Rua Dezesseis de Novembro e Passagem Monte Sinai"
   },
   {
    "logradouro": "Estrada Nostra Senhora de Fátima",
    "perimetro": "Passagem Carlos Gomes e fim da via"
   },
   {
    "logradouro": "Estrada Velha do Outeiro",
    "perimetro": "Estrada do Outeiro e limite da região"
   },
   {
    "logradouro": "Estrada da Fazenda",
    "perimetro": "Passagem Mirinzal e fim da via"
   },
   {
    "logradouro": "Estrada do Outeiro",
    "perimetro": "Estrada Velha do Outeiro"
   },
   {
    "logradouro": "Rua 1",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Rua 25 de Junho",
    "perimetro": "Avenida 16 de Novembro e Rua Santa Maria"
   },
   {
    "logradouro": "Rua Adenilton Amorim",
    "perimetro": "Rua Tucumaeira e fim da via"
   },
   {
    "logradouro": "Rua Adonias Oliveira",
    "perimetro": "Avenida 16 de Novembro e Rua 25 de Junho"
   },
   {
    "logradouro": "Rua Amazonas",
    "perimetro": "Rua Primeiro de Setembro e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Rua Anita Gerosa",
    "perimetro": "Rua Dezesseis de Novembro e Avenida Brasil"
   },
   {
    "logradouro": "Rua Aquario",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua Capricornio",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua Dezesseis de Novembro",
    "perimetro": "Rua Tucumaeira e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Rua Edimilson Rodrigues",
    "perimetro": "Rua Niva do Fideles e Alameda Alcino Pimentel"
   },
   {
    "logradouro": "Rua Fortaleza",
    "perimetro": "Rua das Palmeiras e limite da região"
   },
   {
    "logradouro": "Rua Helio Gueiros",
    "perimetro": "Travessa Presidente Getulio Vargas e Rua Tucumaeira"
   },
   {
    "logradouro": "Rua Jader Barbalho",
    "perimetro": "Passagem Piquiarana e Rua Tucumaeira"
   },
   {
    "logradouro": "Rua José Cutrim",
    "perimetro": "Rua Edimilson Rodrigues e Rua do Fidelis"
   },
   {
    "logradouro": "Rua José Ferreira",
    "perimetro": "Estrada Velha do Outeiro e fim da via"
   },
   {
    "logradouro": "Rua Monter",
    "perimetro": "Rua da Paraia e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Rua Niva do Fideles",
    "perimetro": "Rua Edimilson Rodrigues e fim da via"
   },
   {
    "logradouro": "Rua Nossa Senhora de Nazare",
    "perimetro": "Rua das Palmeiras e fim da via"
   },
   {
    "logradouro": "Rua Nova Esperança",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua Novo Horizonte",
    "perimetro": "Rua Adenilton Amorim e Rua Salmo 91"
   },
   {
    "logradouro": "Rua Oliveira Belo",
    "perimetro": "Rua das Palmeiras e fim da via"
   },
   {
    "logradouro": "Rua Palmares",
    "perimetro": "Rua Quilombo dos Palmares e fim da via"
   },
   {
    "logradouro": "Rua Picarreira",
    "perimetro": "Rua Tucumaeira e Rua da Paraia"
   },
   {
    "logradouro": "Rua Primeiro de Setembro",
    "perimetro": "Rua Tucumaeira e fim da via"
   },
   {
    "logradouro": "Rua Principal Tucumareira",
    "perimetro": "Rua Tucumaeira e fim da via"
   },
   {
    "logradouro": "Rua Quilombo dos Palmares",
    "perimetro": "Rua Palmares e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Rua Salmo 91",
    "perimetro": "Rua da Paraia e fim da via"
   },
   {
    "logradouro": "Rua Santa Maria",
    "perimetro": "Estrada Velha do Outeiro e Rua 25 de Junho"
   },
   {
    "logradouro": "Rua Se Cinco",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Se Dois",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Se Quatro",
    "perimetro": "Travessa SN e fim da via"
   },
   {
    "logradouro": "Rua Se Sete",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Se Três",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua Se Um",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Rua São Domingos",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua São Francisco",
    "perimetro": "Travessa Nova Esperança e fim da via"
   },
   {
    "logradouro": "Rua São Pedro",
    "perimetro": "Rua Adenilton Amorim e fim da via"
   },
   {
    "logradouro": "Rua Tucumaeira",
    "perimetro": "Avenida 16 de Novembro e limite da região"
   },
   {
    "logradouro": "Rua da Fab",
    "perimetro": "Estrada Velha do Outeiro e fim da via"
   },
   {
    "logradouro": "Rua da Horta",
    "perimetro": "Passagem Manaus e fim da via"
   },
   {
    "logradouro": "Rua da Paraia",
    "perimetro": "Rua Picarreira e fim da via"
   },
   {
    "logradouro": "Rua das Palmeiras",
    "perimetro": "Rua Primeiro de Setembro e fim da via"
   },
   {
    "logradouro": "Rua do Fideles",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Rua do Fidelis",
    "perimetro": "Estrada Velha do Outeiro e Rua do Fideles"
   },
   {
    "logradouro": "Rua do Limão",
    "perimetro": "Rua 25 de Junho e fim da via"
   },
   {
    "logradouro": "Rua do Miritizal",
    "perimetro": "Alameda Rufino e Passagem Mirinzal"
   },
   {
    "logradouro": "Rua do Patanal",
    "perimetro": "Rua do Fidelis e Rua Edimilson Rodrigues"
   },
   {
    "logradouro": "Rua do Peixe",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua josé Ferreira",
    "perimetro": "Passagen das Flores e fim da via"
   },
   {
    "logradouro": "Travessa Aquarela",
    "perimetro": "Rua Picarreira e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Travessa Aquerela",
    "perimetro": "Rua Primeiro de Setembro e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Travessa Bencão",
    "perimetro": "Travessa Livramento e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Travessa Cabral",
    "perimetro": "Rua Adenilton Amorim e Rua Picarreira"
   },
   {
    "logradouro": "Travessa Dias",
    "perimetro": "Rua Primeiro de Setembro e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Travessa Livramento",
    "perimetro": "Rua Primeiro de Setembro e Rua Adenilton Amorim"
   },
   {
    "logradouro": "Travessa Nova Esperança",
    "perimetro": "Rua Primeiro de Setembro e Rua Picarreira"
   },
   {
    "logradouro": "Travessa Omega",
    "perimetro": "Rua Primeiro de Setembro e Rua Picarreira"
   },
   {
    "logradouro": "Travessa Presidente Getulio Vargas",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Travessa Sol Nasciente",
    "perimetro": "Avenida Paulo Costa e fim da via"
   },
   {
    "logradouro": "Travessa São José",
    "perimetro": "Passagem das Flores e fim da via"
   },
   {
    "logradouro": "Travessa União",
    "perimetro": "Rua Primeiro de Setembro e fim da via"
   },
   {
    "logradouro": "Travessa Vitória",
    "perimetro": "Rua Primeiro de Setembro e Rua Picarreira"
   },
   {
    "logradouro": "Travessa da Paz",
    "perimetro": "Rua Primeiro de Setembro e fim da via"
   },
   {
    "logradouro": "Travessa das Flores",
    "perimetro": "Rua Primeiro de Setembro e Rua São Francisco"
   },
   {
    "logradouro": "Travessa de Saron",
    "perimetro": "Passagem das Flores e fim da via"
   },
   {
    "logradouro": "Alameda 11 de Janeiro",
    "perimetro": "Passagem do Fio e Passagem Assemblea de Deus"
   },
   {
    "logradouro": "Alameda Alcino Pimentel",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda Bom Futuro",
    "perimetro": "Rua do Miritizal e fim da via"
   },
   {
    "logradouro": "Alameda Cutrim",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda José Cotrim",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda Magalhães",
    "perimetro": "Rua Niva do Fideles e fim da via"
   },
   {
    "logradouro": "Alameda Maria Batista",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda Maria de Lurdes",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda Martins",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Alameda Monteiro",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda Nossa Senhora de Fátima",
    "perimetro": "Rua da Fab e Rua do Fidelis"
   },
   {
    "logradouro": "Alameda Rufino",
    "perimetro": "Rua do Fidelis e fim da via"
   },
   {
    "logradouro": "Alameda Santa Isabel",
    "perimetro": "Rua José Cutrim e fim da via"
   },
   {
    "logradouro": "Alameda da Piquia",
    "perimetro": "Rua do Miritizal e fim da via"
   },
   {
    "logradouro": "Passagem Assemblea de Deus",
    "perimetro": "Estrada Nostra Senhora de Fátima e Passagem do Fio"
   },
   {
    "logradouro": "Passagem Belem",
    "perimetro": "Passagem Pinheiro e Passagem Queiros"
   },
   {
    "logradouro": "Passagem Manaus",
    "perimetro": "Rua Edimilson Rodrigues e fim da via"
   },
   {
    "logradouro": "Passagem Manoel Dias",
    "perimetro": "Passagem Carlos Gomes e fim da via"
   },
   {
    "logradouro": "Passagem Marcos Aurelio",
    "perimetro": "Avenida 16 de Novembro e Rua do Peixe"
   },
   {
    "logradouro": "Passagem Mirinzal",
    "perimetro": "Rua do Fidelis e Primeira Rua Invazão Miritizal"
   },
   {
    "logradouro": "Passagem Monte Sinai",
    "perimetro": "Avenida Brasil e fim da via"
   },
   {
    "logradouro": "Passagem Nossa Senhora da Conceicão",
    "perimetro": "Travessa Presidente Getulio Vargas e fim da via"
   },
   {
    "logradouro": "Passagem Nova",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem Perpétuo Socorro",
    "perimetro": "Rua da Horta e fim da via"
   },
   {
    "logradouro": "Passagem Pinheiro",
    "perimetro": "Passagem Assemblea de Deus e Passagem Belem"
   },
   {
    "logradouro": "Passagem Piquiarana",
    "perimetro": "Travessa Sol Nasciente e Rua Jader Barbalho"
   },
   {
    "logradouro": "Passagem Primavera",
    "perimetro": "Rua do Peixe e fim da via"
   },
   {
    "logradouro": "Passagem Queiros",
    "perimetro": "Passagem Assemblea de Deus e fim da via"
   },
   {
    "logradouro": "Passagem Rua Paraíso",
    "perimetro": "Rua do Peixe e fim da via"
   },
   {
    "logradouro": "Passagem Sargent Bastos",
    "perimetro": "Estrada Nostra Senhora de Fátima e Passagem do Fio"
   },
   {
    "logradouro": "Passagem Shalon",
    "perimetro": "Passagem Mirinzal e fim da via"
   },
   {
    "logradouro": "Passagem São Francisco",
    "perimetro": "Passagem Manaus e fim da via"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Avenida 16 de Novembro e Rua 25 de Junho"
   },
   {
    "logradouro": "Passagem São José",
    "perimetro": "Estrada Velha do Outeiro e Alameda Nossa Senhora de Fátima"
   },
   {
    "logradouro": "Passagem União",
    "perimetro": "Avenida 16 de Novembro e Rua Tucumaeira"
   },
   {
    "logradouro": "Passagem Vista Alegre",
    "perimetro": "Rua Principal Tucumareira e Rua do Peixe"
   },
   {
    "logradouro": "Passagem das Flores",
    "perimetro": "Estrada Velha do Outeiro e Travessa de Saron"
   },
   {
    "logradouro": "Passagem do Fio",
    "perimetro": "Estrada do Itaiteua e Estrada Velha do Outeiro"
   },
   {
    "logradouro": "Passagen das Flores",
    "perimetro": "Rua do Fidelis e Rua josé Ferreira"
   },
   {
    "logradouro": "Primeira Rua Invazão Miritizal",
    "perimetro": "Passagem Mirinzal e fim da via"
   }
  ]
 },
 {
  "id": "29",
  "nome": "Região 29 - Mosqueiro",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Par",
  "dias": "Segunda, Quarta e Sexta",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 315,
  "panfletos": 189,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida 16 de Novembro",
    "perimetro": "Rua 15 de Novembro e Passagem Bela Vista"
   },
   {
    "logradouro": "Avenida Beira Mar",
    "perimetro": "Travessa Lauro Sodré e Rua Nossa Senhora do Ó"
   },
   {
    "logradouro": "Rua 15 de Novembro",
    "perimetro": "Avenida 16 de Novembro e Travessa Lauro Sodré"
   },
   {
    "logradouro": "Rua Padre Manuel Raiol",
    "perimetro": "Avenida 16 de Novembro"
   },
   {
    "logradouro": "Travessa Coronel José Mota",
    "perimetro": "Avenida 16 de Novembro e Rua Nossa Senhora do Ó"
   },
   {
    "logradouro": "Travessa Lauro Sodré",
    "perimetro": "Avenida Beira Mar e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Alameda Lauro Bechara",
    "perimetro": "Rua 15 de Novembro e Avenida 16 de Novembro"
   },
   {
    "logradouro": "Alameda Nossa Senhora Fátima",
    "perimetro": "Avenida Beira Mar e fim da via"
   },
   {
    "logradouro": "Alameda Valdiza",
    "perimetro": "Avenida Beira Mar e fim da via"
   }
  ]
 },
 {
  "id": "30",
  "nome": "Região 30",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2500,
  "panfletos": 1500,
  "categoria": "Mudança de Frequência",
  "logradouros": [
   {
    "logradouro": "Avenida 16 de Novembro",
    "perimetro": "Limite da região"
   },
   {
    "logradouro": "Avenida Beira Mar",
    "perimetro": "Doutor José Mariano Cavaleiro de Macedo e limite da região"
   },
   {
    "logradouro": "Avenida Principal",
    "perimetro": "Avenida Beira Mar e Rua Equatorial"
   },
   {
    "logradouro": "Avenida Variante",
    "perimetro": "Doutor José Mariano Cavaleiro de Macedo e limite da região"
   },
   {
    "logradouro": "Rua 5 de Deziembro",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Rua Central",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Rua Copacabana",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Rua César Augusto",
    "perimetro": "Avenida Beira Mar e fim da via"
   },
   {
    "logradouro": "Rua Equatorial",
    "perimetro": "Avenida Variante e fim da via"
   },
   {
    "logradouro": "Rua Felicidade",
    "perimetro": "Rua Para e limite da região"
   },
   {
    "logradouro": "Rua Ipanema",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Rua Jardim Adelaide",
    "perimetro": "Estrada do Curvão e fim da via"
   },
   {
    "logradouro": "Rua Jardim Maues",
    "perimetro": "Avenida Variante e fim da via"
   },
   {
    "logradouro": "Rua Lobato de Almeida",
    "perimetro": "Rua Jardim Adelaide e Doutor José Mariano Cavaleiro de Macedo"
   },
   {
    "logradouro": "Rua Novo Ariramba",
    "perimetro": "Rua dos Marcelinos e Avenida Variante"
   },
   {
    "logradouro": "Rua Para",
    "perimetro": "Rua Felicidade e Avenida Variante"
   },
   {
    "logradouro": "Rua Rio de Janeiro",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Rua Vasco da Gama",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Rua das Acácias",
    "perimetro": "Avenida Beira Mar e Alameda Jardim do Sol"
   },
   {
    "logradouro": "Rua dos Marcelinos",
    "perimetro": "Avenida Principal e Doutor José Mariano Cavaleiro de Macedo"
   },
   {
    "logradouro": "Travessa Commandante Alfredo Solano",
    "perimetro": "Rua dos Marcelinos e Avenida Variante"
   },
   {
    "logradouro": "Travessa São Raimundo",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Alameda Abel Guimarães",
    "perimetro": "Passagem Los Angeles e Passagem Bendelack"
   },
   {
    "logradouro": "Alameda Aragão",
    "perimetro": "Rua César Augusto e fim da via"
   },
   {
    "logradouro": "Alameda Caldas",
    "perimetro": "Avenida 16 de Novembro e fim da via"
   },
   {
    "logradouro": "Alameda Castro Cunha",
    "perimetro": "Avenida Variante e fim da via"
   },
   {
    "logradouro": "Alameda Janoca",
    "perimetro": "Avenida Beira Mar e Rua dos Marcelinos"
   },
   {
    "logradouro": "Alameda Jardim do Sol",
    "perimetro": "Avenida Beira Mar e fim da via"
   },
   {
    "logradouro": "Alameda Mindy",
    "perimetro": "Alameda Castro Cunha e Avenida Variante"
   },
   {
    "logradouro": "Alameda Montevidel",
    "perimetro": "Rua Jardim Maues e fim da via"
   },
   {
    "logradouro": "Alameda Navas Pereira",
    "perimetro": "Rua dos Marcelinos e Avenida Beira Mar"
   },
   {
    "logradouro": "Alameda Nossa Senhora da Conceição",
    "perimetro": "Avenida Beira Mar e fim da via"
   },
   {
    "logradouro": "Alameda Santo Antônio",
    "perimetro": "Avenida Variante e fim da via"
   },
   {
    "logradouro": "Alameda Santos Moura",
    "perimetro": "Avenida Variante e Avenida Beira Mar"
   },
   {
    "logradouro": "Alameda São Benedito",
    "perimetro": "Passagem Bendelack e Alameda Abel Guimarães"
   },
   {
    "logradouro": "Alameda São Paulo",
    "perimetro": "Avenida Variante e fim da via"
   },
   {
    "logradouro": "Alameda Vila Nova",
    "perimetro": "Doutor José Mariano Cavaleiro de Macedo e fim da via"
   },
   {
    "logradouro": "Passagem Bendelack",
    "perimetro": "Passagem São João e Estrada do Curvão"
   },
   {
    "logradouro": "Passagem Carmem Silvia",
    "perimetro": "Avenida Variante e Estrada do Curvão"
   },
   {
    "logradouro": "Passagem Justino",
    "perimetro": "Rua dos Marcelinos e Avenida Variante"
   },
   {
    "logradouro": "Passagem Los Angeles",
    "perimetro": "Avenida Variante e Rua Felicidade"
   },
   {
    "logradouro": "Passagem San Antonio",
    "perimetro": "Rua dos Marcelinos e Avenida Beira Mar"
   },
   {
    "logradouro": "Passagem São Jorge",
    "perimetro": "Avenida Beira Mar e fim da via"
   },
   {
    "logradouro": "Passagem São João",
    "perimetro": "Rua dos Marcelinos e Passagem Bendelack"
   }
  ]
 },
 {
  "id": "53",
  "nome": "Região 53",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 3049,
  "panfletos": 1829,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Estrada Velha do Outeiro",
    "perimetro": "Travessa Brasília e Rua 8 de Maio"
   },
   {
    "logradouro": "Estrada do Matadouro",
    "perimetro": "Rua 8 de Maio e Rua Doutor Lopo de Castro"
   },
   {
    "logradouro": "Rua 8 de Maio",
    "perimetro": "Estrada do Matadouro e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Cabo Luiz Gonzaga",
    "perimetro": "Estrada do Matadouro e Passagem Bom Jesus"
   },
   {
    "logradouro": "Rua Joaquim Rezende",
    "perimetro": "Estrada do Matadouro e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Júlio Gomes",
    "perimetro": "Estrada do Matadouro e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Luiz Azevedo",
    "perimetro": "Estrada do Matadouro e Rodovia Augusto Montenegro"
   },
   {
    "logradouro": "Rua Moura Carvalho",
    "perimetro": "Rua 8 de Maio e Travessa L Um"
   },
   {
    "logradouro": "Rua Primeira da Campina",
    "perimetro": "Estrada do Matadouro e Passagem Bom Jesus"
   },
   {
    "logradouro": "Travessa Brasília",
    "perimetro": "Passagem 17 de Abril e Travessa L Um"
   },
   {
    "logradouro": "Travessa L Um",
    "perimetro": "Rua Moura Carvalho e Travessa Brasília"
   },
   {
    "logradouro": "Travessa Moura Carvalho",
    "perimetro": "Rua 8 de Maio e Rua Doutor Lopo de Castro"
   },
   {
    "logradouro": "Travessa N 1",
    "perimetro": "Travessa N 4 e Rua Moura Carvalho"
   },
   {
    "logradouro": "Travessa N 2",
    "perimetro": "Rua 8 de Maio e Rua Moura Carvalho"
   },
   {
    "logradouro": "Travessa N 3",
    "perimetro": "Rua Moura Carvalho e Rua 8 de Maio"
   },
   {
    "logradouro": "Travessa N 4",
    "perimetro": "Travessa N 1 e limite da região"
   },
   {
    "logradouro": "Travessa São Francisco",
    "perimetro": "Rua Júlio Gomes e Rua Luiz Azevedo"
   },
   {
    "logradouro": "Passagem Bom Jesus",
    "perimetro": "Rua 8 de Maio e Travessa Moura Carvalho"
   },
   {
    "logradouro": "Passagem Castro Alves",
    "perimetro": "Rua 8 de Maio e Travessa Brasília"
   },
   {
    "logradouro": "Passagem Demetro de Moraes",
    "perimetro": "Rua Luiz Azevedo e Rua 8 de Maio"
   },
   {
    "logradouro": "Passagem Leopoldina de Castro",
    "perimetro": "Rua 8 de Maio e Passagem Tijuca"
   },
   {
    "logradouro": "Passagem Nossa de Fátima",
    "perimetro": "Passagem Castro Alves e Estrada Velha do Outeiro"
   },
   {
    "logradouro": "Passagem Pinheiro",
    "perimetro": "Fim da via"
   },
   {
    "logradouro": "Passagem SD",
    "perimetro": "Passagem Castro Alves e Rua Moura Carvalho"
   },
   {
    "logradouro": "Passagem Santa Maria",
    "perimetro": "Passagem Bom Jesus e Passagem Tijuca"
   },
   {
    "logradouro": "Passagem Tijuca",
    "perimetro": "Passagem Bom Jesus e fim da via"
   },
   {
    "logradouro": "Passagem Triangulo",
    "perimetro": "Rua 8 de Maio e Rodovia Augusto Montenegro"
   }
  ]
 },
 {
  "id": "54",
  "nome": "Região 54",
  "semana": 6,
  "turno": "DIURNO",
  "frequencia": "Alternado Ímpar",
  "dias": "Terça, Quinta e Sábado",
  "horario": "06:00 h às 15:20 h",
  "domicilios": 2016,
  "panfletos": 1210,
  "categoria": "Noturno → Diurno",
  "logradouros": [
   {
    "logradouro": "Avenida Contorno",
    "perimetro": "Avenida Contorno Norte e Avenida Contorno Leste"
   },
   {
    "logradouro": "Avenida Contorno Leste",
    "perimetro": "Avenida Contorno e Travessa Brasília"
   },
   {
    "logradouro": "Avenida Contorno Norte",
    "perimetro": "Rua Moura Carvalho e Avenida Contorno"
   },
   {
    "logradouro": "Avenida Contorno Oeste",
    "perimetro": "Rua 8 de Maio e Travessa N 7"
   },
   {
    "logradouro": "Avenida Contorno Sul",
    "perimetro": "Travessa W 7 e Estrada da Maracacuera"
   },
   {
    "logradouro": "Estrada da Maracacuera",
    "perimetro": "Rodovia Augusto Montenegro e Passagem Brasília"
   },
   {
    "logradouro": "Travessa Brasília",
    "perimetro": "Travessa L Um e Passagem Brasília"
   },
   {
    "logradouro": "Travessa L 2",
    "perimetro": "Rua Moura Carvalho e Travessa Brasília"
   },
   {
    "logradouro": "Travessa L 3",
    "perimetro": "Rua Moura Carvalho e Travessa Brasília"
   },
   {
    "logradouro": "Travessa L 4",
    "perimetro": "Travessa Brasília e Rua Moura Carvalho"
   },
   {
    "logradouro": "Travessa L 5",
    "perimetro": "Avenida Contorno Norte e Avenida Contorno Leste"
   },
   {
    "logradouro": "Travessa L 6",
    "perimetro": "Avenida Contorno Norte e Avenida Contorno Leste"
   },
   {
    "logradouro": "Travessa L 7",
    "perimetro": "Travessa N 7 e Avenida Contorno Leste"
   },
   {
    "logradouro": "Travessa N 4",
    "perimetro": "Avenida Contorno Oeste e Rua Moura Carvalho"
   },
   {
    "logradouro": "Travessa N 5",
    "perimetro": "Avenida Contorno Norte e Travessa W 4"
   },
   {
    "logradouro": "Travessa N 6",
    "perimetro": "Travessa W 5 e Avenida Contorno Norte"
   },
   {
    "logradouro": "Travessa N 7",
    "perimetro": "Avenida Contorno Oeste e Travessa L 7"
   },
   {
    "logradouro": "Travessa S 1",
    "perimetro": "Travessa Brasília e Estrada da Maracacuera"
   },
   {
    "logradouro": "Travessa S 2",
    "perimetro": "Estrada da Maracacuera e Travessa Brasília"
   },
   {
    "logradouro": "Travessa S 3",
    "perimetro": "Travessa Brasília e Estrada da Maracacuera"
   },
   {
    "logradouro": "Travessa S 4",
    "perimetro": "Estrada da Maracacuera e Avenida Contorno Leste"
   },
   {
    "logradouro": "Travessa S 5",
    "perimetro": "Avenida Contorno Leste e Avenida Contorno Sul"
   },
   {
    "logradouro": "Travessa S 6",
    "perimetro": "Avenida Contorno Sul e Avenida Contorno Leste"
   },
   {
    "logradouro": "Travessa S 7",
    "perimetro": "Avenida Contorno Leste e Avenida Contorno Sul"
   },
   {
    "logradouro": "Travessa W 2",
    "perimetro": "Passagem Passarela e Estrada da Maracacuera"
   },
   {
    "logradouro": "Travessa W 3",
    "perimetro": "Estrada da Maracacuera e Passagem Passarela"
   },
   {
    "logradouro": "Travessa W 4",
    "perimetro": "Avenida Contorno Oeste e Avenida Contorno Sul"
   },
   {
    "logradouro": "Travessa W 5",
    "perimetro": "Travessa W 7 e Avenida Contorno Sul"
   },
   {
    "logradouro": "Travessa W 6",
    "perimetro": "Avenida Contorno Oeste e Avenida Contorno Sul"
   },
   {
    "logradouro": "Travessa W 7",
    "perimetro": "Travessa W 5 e Avenida Contorno Sul"
   },
   {
    "logradouro": "Alameda C 1",
    "perimetro": "Travessa W 5 e fim da via"
   },
   {
    "logradouro": "Alameda C 2",
    "perimetro": "Travessa W 7 e fim da via"
   },
   {
    "logradouro": "Alameda C 3",
    "perimetro": "Travessa W 7 e fim da via"
   },
   {
    "logradouro": "Passagem Passarela",
    "perimetro": "Rodovia Augusto Montenegro e Travessa W 6"
   }
  ]
 }
];
