// assets
import Lecture00_SpeakerName01 from '../public/images/lecture_imgs/00-Member_Shadow.png'
import Lecture00_SpeakerName02 from '../public/images/lecture_imgs/00-Member_Shadow.png'

// import Lecture01_SpeakerName01 from '../public/images/lecture_imgs/01-Speaker_Name_01.png'
import Lecture02_JorgeMaia from '../public/images/lecture_imgs/02-Jorge_Maia.png'
// import Lecture03_FernandoDeCome from '../public/images/lecture_imgs/03-Fernando_Come.png'
// import Lecture04_SpeakerName01 from '../public/images/lecture_imgs/04-Speaker_Name_01.png'
import Lecture05_KamilaSantos from '../public/images/lecture_imgs/05-Kamila_Santos.png'
// import Lecture06_SpeakerName01 from '../public/images/lecture_imgs/06-Speaker_Name_01.png'
// import Lecture07_SpeakerName01 from '../public/images/lecture_imgs/07-Speaker_Name_01.png'
// import Lecture08_SpeakerName01 from '../public/images/lecture_imgs/08-Speaker_Name_01.png'
// import Lecture09_SpeakerName01 from '../public/images/lecture_imgs/09-Speaker_Name_01.png'
// import Lecture10_SpeakerName01 from '../public/images/lecture_imgs/10-Speaker_Name_01.png'
import Lecture11_AlineSouza from '../public/images/lecture_imgs/11-Aline_Souza.jpeg'
import Lecture12_LuizPaulo from '../public/images/lecture_imgs/12-Luiz_Paulo_Carvalho.png'
// import Lecture13_SpeakerName01 from '../public/images/lecture_imgs/13-Speaker_Name_01.png'
import Lecture14_JulianaMascarenhas from '../public/images/lecture_imgs/14-Juliana_mascarenhas.png'
// import Lecture15_SpeakerName01 from '../public/images/lecture_imgs/15-Speaker_Name_01.png'
// import Lecture16_SpeakerName01 from '../public/images/lecture_imgs/16-Speaker_Name_01.png'
import Lecture17_DaviBaptista from '../public/images/lecture_imgs/17-Davi_Baptista.jpg'
import Lecture18_CarlosRischioto from '../public/images/lecture_imgs/18-Carlos_Rischioto.jpeg'
// import Lecture19_SpeakerName01 from '../public/images/lecture_imgs/19-Speaker_Name_01.png'
import Lecture20_MeyrileneAvelino from '../public/images/lecture_imgs/20-Meirylene_Avelino.jpg'
import Lecture21_AntonioCarlos from '../public/images/lecture_imgs/21-Antonio_Carlos_Meira_Neto.jpg'
// import Lecture22_SpeakerName01 from '../public/images/lecture_imgs/22-Speaker_Name_01.png'
import Lecture23_CarolinaGalvao from '../public/images/lecture_imgs/23-Carolina_Galvão_de_Oliveira.jpg'
// import Lecture15_SpeakerName24 from '../public/images/lecture_imgs/15-Speaker_Name_24.png'
// import Lecture16_SpeakerName25 from '../public/images/lecture_imgs/16-Speaker_Name_25.png'
import Lecture26_MayzaCristina from '../public/images/lecture_imgs/26-Mayza_Cristina.jpg'
import Lecture27_RobertoAzevedo from '../public/images/lecture_imgs/27-Roberto_Azevedo.jpg'
// import Lecture28_SpeakerName01 from '../public/images/lecture_imgs/28-Speaker_Name_01.png'
import Lecture29_YgorSperanza from '../public/images/lecture_imgs/29-Ygor_Speranza.jpeg'
import Lecture30_SilviaTrein from '../public/images/lecture_imgs/30-Silvia_Heimfarth_Dapper.jpg'
// import Lecture31_SpeakerName25 from '../public/images/lecture_imgs/31-Speaker_Name_25.png'
//import Lecture32_RenataMiranda from '../public/images/lecture_imgs/32-Renata_Miranda.jpg'
// import Lecture33_SpeakerName01 from '../public/images/lecture_imgs/33-Speaker_Name_01.png'
import Lecture34_VitorDavid from '../public/images/lecture_imgs/34-Vitor_David.png'
import Lecture35_JeffersonBrandao from '../public/images/lecture_imgs/35-Jeff_Brandão.jpeg'
import Lecture36_CarlaVieira from '../public/images/lecture_imgs/36-Carla_Vieira.jpeg'
// import Lecture37_SpeakerName01 from '../public/images/lecture_imgs/37-Speaker_Name_01.png'
import Lecture38_LeonardoLeite from '../public/images/lecture_imgs/38-Leonardo_Leite.jpg'
import Lecture39_SimaraConceicao from '../public/images/lecture_imgs/39-Simara_Conceicao.jpg'
// import Lecture40_SpeakerName01 from '../public/images/lecture_imgs/40-Speaker_Name_01.png'
import Lecture41_LuizYanai from '../public/images/lecture_imgs/41-Luiz_Yanai.png'
import Lecture42_KarolAttekita from '../public/images/lecture_imgs/42-Karol_Attekita.png'
//import Lecture43_LarissaBenevides from '../public/images/lecture_imgs/43-Larissa_Benevides.jpg'


const shifts = {
    '2023-08-21' : {
        'Manhã': {
            '08:40' : {
                title : 'Abertura'
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Inteligência Artificial - O que mudou nos dispositivos conectados e no desenvolvimento de software?',
                description : 'Jorge Maia é Arquiteto de soluções de IoT e Nuvem na CrazyTechLabs desde 2014. Reconhecido como Learn Expert e Regional Lead para Treinadores Certificados pela Microsoft, que também o premiou nos últimos 7 anos o MVP (Most Valuable Professional) na categoria de Azure e IoT, é também Mestre em Sistemas Mecatrônicos e Doutorando no tema.\n Nesta sessão ele discutirá com a audiência sobre o panorama de soluções conectadas e também sobre as evoluções no desenvolvimento de software com a chegada do GPT e outras ferramentas de IA.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Jorge Maia', 'image': Lecture02_JorgeMaia},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }
        },
        'Tarde' : {
            '13:20' : {
                title : 'Ciência de Dados (não achei na planilha)',
                description : 'Não achei o que esse cara vai fazer na planilha.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Fernando De Come', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Desmistificando a carreira em tecnologia: de estágio a liderança técnica',
                description : 'Estudo programação desde 2013, atualmente sou líder técnica , minha especialidade é Java com Spring, Microsserviços e AWS. Sou co-autora dos livros Jornada Java e Jornada Microsserviços , crio conteúdo no Instagram e Youtube Kamila code e sou Microsoft MVP. Nessa palestra vou tirar suas maiores dúvidas sobre as etapas da carreira em tecnologia, desde como conseguir o primeiro estagio até uma cargo de liderança técnica',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Kamila Santos Oliveira', 'image': Lecture05_KamilaSantos}
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
        } 
    },
    '2023-08-22' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Modularização: Vantagens e desvantagens',
                description : 'Formada em Sistemas de Informação, pós graduada em Engenharia de Software pela UNICAMP e atualmente cursando a segunda pós graduação em Arquitetura de Software. Com mais de 10 anos de experiência em desenvolvimento, dos quais 5 deles focada em desenvolvimento Mobile (Android). No tema da palestra de hoje, o intuito é abordar a modularização de um aplicativo: O que significa modularizar, quais as vantagens, desvantagens, riscos e algumas formas de realizar tal modularização.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Aline Souza', 'image': Lecture11_AlineSouza},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Ética e Computação, esse encontro é apenas uma opção?',
                description : 'Bacharel em Sistemas de Informação pela UNIRIO; mestre em Informática com ênfase em Sistemas de Informação, pelo PPGI/UNIRIO; atualmente doutorando em Informática no Instituto de Computação da UFRJ, mais especificamente no PPGI, integrando o Laboratório CORES como líder da área de Ética. Desde o início do doutoramento transitou por temas como Transparência, Desinformação e LGPD, para finalmente abstraí-los na ética aplicada, tratando da área nos escopos geral, computacional e de pesquisa, assim como na instrução ou educação nestes tópicos. De mãos dadas com a meta-ciência, enfatizando o estudo do setor acadêmico da computação brasileira, cientificamente; com uma perspectiva crítica, materialista, existencialista e distante do positivismo. Nesta dinâmica vamos falar sobre a relação entre ética, moral e computação, como é preciso ir além da dita "computação pura" para efetivamente pensar numa ética computacional e como Sistemas de Informação apresenta um alinhamento adequado para esta combinação. Indo além disso, por que estudar ética e moral enquanto estudante de computação? O que isso te oferece como diferencial? E a pergunta crucial, ainda é opcional no seu futuro profissional?',
                local : 'online',// presential ou online
                speakers : [
                    {'name' : 'Luiz Paulo Carvalho', 'image': Lecture12_LuizPaulo},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Data Science skills: O que o mercado busca?',
                description : 'O que te diferencia em um mercado em constante crescimento tal qual como a área de dados? Dentre os principais perfis, o cientista de dados, ganhou um espaço considerável em diversas organizações e empresas. Ainda assim, muitos podem ficar confusos com o vasto número de conhecimento necessário na área. Venha entender quais são as principais skills de um cientista de dados para o mercado em 2023. ',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Juliana Mascarenhas', 'image': Lecture14_JulianaMascarenhas}
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Trabalhando com Game Design no Brasil',
                description : 'Davi Baptista é um Game Designer e Sound Designer em São Paulo, experiente na criação de jogos 2D e 3D na Unity. Atualmente, trabalha como Game Designer na Dumativa e é cofundador da Nano Knight Studio. Trabalhando com Game Design no Brasil. A palestra vai tratar sobre a realidade de ser um profissional da área, falando um pouco sobre os desafios da área, rotina, e o que é necessário para conseguir viver de games.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Davi Arcos Baptista', 'image': Lecture17_DaviBaptista},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-23' : {
        'Manhã' : {
            '08:40' : {
                title : 'Blockchain além das Criptomoedas',
                description : 'Líderes de vanguarda construíram redes em blockchain para reinventar seus negócios, mas o potencial desta tecnologia vai muito além do que vemos hoje em produção. Nesta palestra, Carlos Rischioto, Arquiteto líder e Blockchain SME da IBM no Brasil, apresentará casos de uso de Blockchain que estão em produção, com alto volume de transações e trará exemplos de diferentes Industrias que estão testando esta tecnologia para revolucionar seus negócios.',
                local : 'online',// presential ou online
                speakers : [
                    {'name' : 'Carlos Rischioto', 'image': Lecture18_CarlosRischioto},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Segurança da Informação: Conheça uma das profissões mais promissoras do mercado',
                description : 'Conheça sobre uma das profissões mais promissoras do mercado de tecnologia e descubra que a segurança das informações também é uma responsabilidade sua! Meirylene Avelino é Analista de Segurança da Informação, Graduada e Mestre em Ciência da Computação, com linha de Pesquisa em garantia de autenticidade de conteúdos web utilizando Blockchain. Especialista em gestão de acessos privilegiados, IAM e implantação e arquiteturas de soluções de PAM. Palestrante em eventos sobre temas correlatos a tecnologia e a Segurança da Informação. Voluntária em projetos de diversidade de gêneros em carreiras de tecnologia. Realiza treinamentos de equipes em Segurança da Informação. Cocriadora e Idealizadora da GloboSec Week - Programa de integração entre academia e empresa com o objetivo de conscientizar e ensinar sobre Segurança da Informação e descobrir novos talentos para a área de Cybersecurity da Globo. Recebeu o XIV Prêmio Josué de Castro de Extensão, pela Universidade Federal Fluminense, na 21 Semana de Extensão da Universidade. Indicada para a premiação Woman that Build Awards da Globant 2022. Membro da CSBC Sociedade Brasileira de Computação. Voluntária no WOMCY Reconhecida pela instituição Daryus como uma das TOP 20 mulheres mais influentes em Segurança da Informação.',
                local : 'online',// presential ou online
                speakers : [
                    {'name' : 'Meirylene Avelino', 'image': Lecture20_MeyrileneAvelino},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Introdução a Process Mining - percepções sobre pesquisa e mercado de trabalho',
                description : 'Sobre o palestrante: Possui graduação em Sistemas de Informação pela Universidade de São Paulo (2015) e doutorado direto em andamento em Sistemas de Informação pela Universidade de São Paulo. Atualmente é cientista de dados senior no Itau Unibanco, com 9 anos de experiência no tema Analytics e 5 anos no tema Ciência de Dados. Sobre a palestra: O objetivo da palestra será a introdução do tema Process Mining e o compartilhamento das experiências do palestrante sobre pesquisa cientifica e exemplos de uso no mercado de trabalho sobre este tema.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Antonio Carlos Meira Neto', 'image': Lecture21_AntonioCarlos},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Descomplicando as Entrevistas',
                description : 'Sou a Carol, formada em Sistemas de Informação na EACH, e atualmente atuo como desenvolvedora de back-end pleno na PagSeguro. Apaixonada por tecnologia, decidi compartilhar minha jornada em uma palestra sobre os primeiros passos na busca por um estágio e entrevistas técnicas. Abordaremos dicas valiosas para se destacar em entrevistas técnicas e os assuntos mais comuns abordados nesses processos. ',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Carolina Galvão de Oliveira', 'image': Lecture23_CarolinaGalvao},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Quem é essa tal de Experiência do Usuário? ',
                description : 'Vamos entender o que é UX e como ele faz parte do nosso cotidiano',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Mayza Cristina da Silva', 'image': Lecture26_MayzaCristina},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-24' : {
        'Manhã' : {
            '08:40' : {
                title : 'Como se tornar um Consultor SAP',
                description : 'Como se tornar um Consultor SAP',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Roberto Azevedo', 'image': Lecture27_RobertoAzevedo},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Fazer Jogos NÃO É Arte',
                description : 'Eu sou o Ygor, Lead Game Designer na Tapps Games e criador de jogos a mais de 10 anos. E eu te pergunto: o que fazer um jogo e um cachorro-quente têm em comum? Se um jogo é feito em uma floresta e não há ninguém para jogá-lo, ele faz sucesso? A resposta para essas (e muitas outras perguntas estapafúrdias) você encontra nessa palestra, onde falaremos do processo de criação de novos jogos, da validação de conceitos, das fases de produção, de prototipagem e de inovação de jogos digitais. Se você sempre quis fazer seu jogo ou acha que, se você fizesse um, ele seria melhor que todos outros, essa palestra [talvez] seja pra você!',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Ygor Speranza',  'image': Lecture29_YgorSperanza},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Criatividade Aplicada ao Design da Experiência do Usuário ',
                description : 'Nesta palestra, será explorada a importância do pensamento divergente como base para a criatividade. Partindo do questionamento "Como podemos ser (mais) criativos?", serão apresentadas formas para idear produtos desejáveis, praticáveis e viáveis, que consideram aspectos sobre sustentabilidade e inovação voltados para o desenvolvimento de produtos digitais e UX Design. Silvia doutora em Engenharia, bacharela e mestra em Design que sempre buscou a ampliação do seu conhecimento por meio de estudos transdisciplinares, articulando disciplinas tecnológicas e das humanidades, na busca da compreensão da complexidade. Atualmente é professora do curso de Design da Famecos, líder de projetos no IDEAR - Laboratório Interdisciplinar de Empreendedorismo e Inovação da PUCRS e membro do Núcleo de Inovação Pedagógica da PUCRS. ',
                local : 'online',// presential ou online
                speakers : [
                    {'name' : 'Silvia Trein Heimfarth Dapper', 'image': Lecture30_SilviaTrein},

                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Acessibilidade em Produtos Digitais. ',
                description : 'Designer carioca com muita determinação em aprender e crescer! Pensando em ajudar Designers que entram no mercado de trabalho, fundei a comunidade "Jovens Ux e Ui", com o objetivo de aprimorar os profissionais que estão ingressando no mercado de Ux / Ui. Esse aprimoramento compreende todas as etapas de uma formação de um profissional de Ux e Ui. Em busca desse aperfeiçoamento incorporamos pontos específicos como: Acessibilidade, Portfólio e mentorias. Como Accessibility Product Design, busco uma constante evolução das minhas Hards Skills e Soft Skills. Tanto em projetos pessoais, quanto em projetos dentro da Bradesco Seguros (empresa em que atuo atualmente). Focando em acessibilidade, tenho como meta criar produtos acessíveis e que possam ser utilizado por tadas as pessoas. ',
                local : 'online',// presential ou online
                speakers : [
                    {'name' : 'Vitor David', 'image': Lecture34_VitorDavid},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Explorando tecnologias imersivas: AR, VR e metaverso e o impacto na sociedade e negócios ',
                description : 'Jefferson Brandão, desenvolvedor de realidade aumentada e fundador da Artech Studio, além de atualmente trabalhar como instrutor na Estação Hack from Meta, traz uma palestra inspiradora sobre inovação com tecnologias imersivas. Descubra como essas tecnologias impactam a sociedade e o futuro do metaverso. ',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Jefferson Brandão', 'image': Lecture35_JeffersonBrandao},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            }
        }
    },
    '2023-08-25' : {
        'Manhã' : {
            '08:40' : {
                title : 'Como a computação pode combater a discriminação algorítmica',
                description : 'Carla Vieira é mestre em Inteligência Artificial pela USP e Engenheira de Dados na QuantumBlack. Foi reconhecida como Google Developer Expert em Machine Learning e participa das discussões sobre Inteligência Artificial e ética - tema da sua dissertação de mestrado.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Carla Vieira', 'image': Lecture36_CarlaVieira},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Diferentes formas de se fazer DevOps',
                description : 'Leonardo Leite recebeu o título de doutor em Ciência da Computação pelo IME USP em 2022. Desde 2014 é desenvolvedor de software no Serviço Federal Brasileiro de Processamento de Dados (Serpro), no qual apoiou com sucesso a implantação de práticas de DevOps, como a adoção de testes automatizados, pipelines de implantação, entrega contínua e monitoramento. Em seu doutorado, por meio de entrevistas com dezenas de profissionais de TI, Leonardo pesquisou como as organizações produtoras de software têm estruturado a divisão do trabalho e a interação entre profissionais de desenvolvimento e infraestrutura, ou seja, as "formas de se fazer DevOps". Nesta palestra você entenderá essas diferentes formas de se fazer DevOps e como uma delas, empregando times de plataforma, tem mostrado melhores resultados em termos de desempenho de entrega. Esta palestra é também uma prévia do livro "DevOps, como se faz? Dos silos aos times de plataforma", a ser lançado pela editora Casa do Código.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Leonardo Alexandre Ferreira Leite', 'image': Lecture38_LeonardoLeite},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Oficina de TDD + Pair programming',
                description : 'Desenvolvedora de software na Thoughtworks, LinkedIn Top Voice e Criadora de conteúdo no Quero Ser Dev. Ajudando a reduzir a lacuna de raça e gênero no mercado de tecnologia.',
                local : 'presential',
                speakers : [
                    {'name' : 'Simara Conceição do Nascimento', 'image': Lecture39_SimaraConceicao},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Arquiteturas de Processamento de Dados na Nuvem',
                description : 'Luiz Yanai é Mestre e Engenheiro de Computação pela POLI-USP e atualmente trabalha como especialista de analytics na Amazon Web Services. Nesta palestra vamos falar sobre cloud computing e como ela vem ajudando na transformação digital das empresas no mundo inteiro.',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Luiz Yanai', 'image': Lecture41_LuizYanai}
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : 'Carreira em desenvolvimento de jogos',
                description : 'Carreira em Desenvolvimento de Jogos. Uma visão geral sobre sobre as diferentes carreiras no mercado de games.',
                local : 'online',// presential ou online
                speakers : [
                    {'name' : 'Karol Attekita', 'image': Lecture42_KarolAttekita},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',// presential ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': Lecture00_SpeakerName01/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Encerramento',
            }
        }
    }
}

export default shifts