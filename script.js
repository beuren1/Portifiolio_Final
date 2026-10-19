document.addEventListener('DOMContentLoaded', () => {

  const face = document.getElementById('face')
  const designer = document.getElementById('designer')
  const coder = document.getElementById('coder')
  const langBtn = document.querySelector('.lang-btn')


  /* HERO HOVER */

  if (face && designer && coder) {

    designer.addEventListener('mouseenter', () => {

      face.classList.add('designer-active')

      face.classList.remove('coder-active')

    })


    coder.addEventListener('mouseenter', () => {

      face.classList.add('coder-active')

      face.classList.remove('designer-active')

    })


    face.addEventListener('mouseleave', () => {

      face.classList.remove('designer-active')

      face.classList.remove('coder-active')

    })

  }


  /* TRADUÇÕES */

  const textos = {

    pt: {

      /* NAV */

      navAbout: 'sobre',

      navProjects: 'projetos',

      navBlog: 'blog',

      navContact: 'contato',


      /* HOME */

      designerTitle: 'designer',

      designerText:
        'Designer focado em interfaces bonitas, limpas e fáceis de usar.',

      coderTitle: 'coder',

      coderText:
        'Desenvolvedor front-end que cria sites modernos, responsivos e eficientes.',

      workTitle: 'Últimos trabalhos',

      project1Title:
        'Site sobre vendas de cosméticos',

      project1Text:
        'Landing page de catálogo com seções, produtos e contato.',

      project2Title:
        'Site de restaurante',

      project2Text:
        'Projeto inspirado em eFood com cards de restaurantes.',

      project3Title:
        'Loja de roupas',

      project3Text:
        'Página de produtos com visual moderno para loja virtual.',

      project4Title:
        'Landing page simples',

      project4Text:
        'Página de evento com chamada principal e informações.',


      /* ABOUT */

      aboutTitle:
        'Quem sou eu?',

      aboutLead:
        'Sou desenvolvedor front-end e estudante de programação focado em criar interfaces modernas e experiências visuais bonitas.',

      aboutText1:
        'Atualmente estudo desenvolvimento Full Stack Python pela EBAC e desenvolvo projetos reais para construir meu portfólio profissional.',

      aboutText2:
        'Gosto de aprender criando projetos práticos, explorando design moderno, animações e experiências interativas para web.',

      factsTitle:
        'Fatos curiosos sobre mim',

      fact1:
        'Sou mestre de RPG de mesa',

      fact2:
        'Toco guitarra e baixo',

      fact3:
        'Adoro filmes e séries',

      fact4:
        'Gosto de criar coisas novas',

      fact5:
        'Aprendo criando projetos reais',

      skillsTitle:
        'Soft skills',

      level1:
        'Ótimo',

      level2:
        'Muito bom',

      level3:
        'Bom',

      level4:
        'Não muito bom',

      skill1:
        'Trabalho em equipe',

      skill2:
        'Comunicação',

      skill3:
        'Criatividade',

      skill4:
        'Resolução de problemas',

      skill5:
        'Aprendizado rápido',

      frontendTitle:
        'Front-end developer',

      front1:
        'HTML5 semântico',

      front2:
        'CSS3 responsivo',

      front3:
        'JavaScript moderno',

      front4:
        'Consumo de APIs REST',

      front5:
        'UI responsiva',

      front6:
        'Figma para desenvolvimento',

      backendTitle:
        'Python & Back-end',

      back1:
        'APIs com FastAPI',

      back2:
        'Autenticação JWT',

      back3:
        'CRUD completo',

      back4:
        'Deploy de aplicações',


      /* CONTACT */

      contactTitle:
        'Contato',

      contactText:
        'Entre em contato comigo pelas redes sociais ou envie uma mensagem diretamente.',

      emailTitle:
        'Me envie um email',

      nameLabel:
        'Nome',

      emailLabel:
        'Email',

      messageLabel:
        'Mensagem',

      namePlaceholder:
        'Seu nome',

      emailPlaceholder:
        'Seu email',

      messagePlaceholder:
        'Digite sua mensagem',

      sendButton:
        'Enviar email',


      /* PROJECTS PAGE */

      portfolioTitle:
        'Portfolio',

      portfolioText:
        'Confira alguns projetos que desenvolvi durante meus estudos e prática profissional.',

      projPage1Title:
        'Loja de Cosméticos',

      projPage1Text1:
        'Site de catálogo para venda de cosméticos, com seções de produtos, categorias, contato e layout responsivo.',

      projPage1Text2:
        'Foi desenvolvido com HTML semântico, CSS personalizado e JavaScript para interações básicas da página.',

      projPage2Title:
        'Projeto eFood',

      projPage2Text1:
        'Aplicação inspirada em delivery de restaurantes, exibindo cards, categorias e informações vindas de uma API.',

      projPage2Text2:
        'Foi feita com React, Styled Components, React Router e consumo de API para renderização dinâmica dos dados.',

      projPage3Title:
        'Loja de Roupas',

      projPage3Text1:
        'Página de apresentação para uma loja de roupas, com foco visual em produtos, categorias e identidade da marca.',

      projPage3Text2:
        'Foi criada com HTML e CSS, trabalhando organização de seções, responsividade e composição visual dos cards.',

      projPage4Title:
        'Landing Page Evento',

      projPage4Text1:
        'Landing page simples para divulgação de evento, com chamada principal, informações, preço, localização e botão de ação.',

      projPage4Text2:
        'Foi desenvolvida usando HTML, CSS e estrutura responsiva para adaptar o conteúdo em diferentes tamanhos de tela.'

    },


    en: {

      /* NAV */

      navAbout:
        'about',

      navProjects:
        'projects',

      navBlog:
        'blog',

      navContact:
        'contact',


      /* HOME */

      designerTitle:
        'designer',

      designerText:
        'Designer focused on beautiful, clean and easy-to-use interfaces.',

      coderTitle:
        'coder',

      coderText:
        'Front-end developer who creates modern, responsive and efficient websites.',

      workTitle:
        'Some of my latest work',

      project1Title:
        'Cosmetics sales website',

      project1Text:
        'Catalog landing page with sections, products and contact.',

      project2Title:
        'Restaurant website',

      project2Text:
        'Project inspired by eFood with restaurant cards.',

      project3Title:
        'Clothing store',

      project3Text:
        'Product page with a modern look for an online store.',

      project4Title:
        'Simple landing page',

      project4Text:
        'Event page with main call and information.',


      /* ABOUT */

      aboutTitle:
        'Who am I?',

      aboutLead:
        'I am a front-end developer and programming student focused on creating modern interfaces and beautiful visual experiences.',

      aboutText1:
        'I currently study Full Stack Python development at EBAC and build real projects to create my professional portfolio.',

      aboutText2:
        'I enjoy learning by building practical projects, exploring modern design, animations and interactive web experiences.',

      factsTitle:
        'Fun facts about me',

      fact1:
        'I am a tabletop RPG game master',

      fact2:
        'I play guitar and bass',

      fact3:
        'I love movies and TV series',

      fact4:
        'I enjoy creating new things',

      fact5:
        'I learn by building real projects',

      skillsTitle:
        'Soft skills',

      level1:
        'Excellent',

      level2:
        'Very good',

      level3:
        'Good',

      level4:
        'Not very good',

      skill1:
        'Teamwork',

      skill2:
        'Communication',

      skill3:
        'Creativity',

      skill4:
        'Problem solving',

      skill5:
        'Fast learning',

      frontendTitle:
        'Front-end developer',

      front1:
        'Semantic HTML5',

      front2:
        'Responsive CSS3',

      front3:
        'Modern JavaScript',

      front4:
        'REST API consumption',

      front5:
        'Responsive UI',

      front6:
        'Figma for development',

      backendTitle:
        'Python & Back-end',

      back1:
        'FastAPI APIs',

      back2:
        'JWT Authentication',

      back3:
        'Full CRUD',

      back4:
        'Application deployment',


      /* CONTACT */

      contactTitle:
        'Contact',

      contactText:
        'Get in touch with me through social media or send me a message directly.',

      emailTitle:
        'Send me an email',

      nameLabel:
        'Name',

      emailLabel:
        'Email',

      messageLabel:
        'Message',

      namePlaceholder:
        'Your name',

      emailPlaceholder:
        'Your email',

      messagePlaceholder:
        'Type your message',

      sendButton:
        'Send email',


      /* PROJECTS PAGE */

      portfolioTitle:
        'Portfolio',

      portfolioText:
        'Check out some projects I developed during my studies and professional practice.',

      projPage1Title:
        'Cosmetics Store',

      projPage1Text1:
        'Catalog website for cosmetics sales with products, categories, contact and responsive layout.',

      projPage1Text2:
        'Built with semantic HTML, custom CSS and JavaScript for basic interactions.',

      projPage2Title:
        'eFood Project',

      projPage2Text1:
        'Restaurant delivery inspired application displaying restaurant cards and API data.',

      projPage2Text2:
        'Built with React, Styled Components, React Router and API consumption.',

      projPage3Title:
        'Clothing Store',

      projPage3Text1:
        'Landing page for a clothing store focused on products and brand identity.',

      projPage3Text2:
        'Created with HTML and CSS focusing on responsive layout and visual composition.',

      projPage4Title:
        'Event Landing Page',

      projPage4Text1:
        'Simple landing page for an event with call-to-action, information and location.',

      projPage4Text2:
        'Built with HTML, CSS and responsive structure for multiple screen sizes.'

    }

  }


  /* IDIOMA */

  let idiomaAtual = 'pt'


  if (langBtn) {

    langBtn.addEventListener('click', () => {

      idiomaAtual =
        idiomaAtual === 'pt'
          ? 'en'
          : 'pt'


      /* TEXTOS */

      document
        .querySelectorAll('[data-i18n]')
        .forEach((elemento) => {

          const chave =
            elemento.getAttribute('data-i18n')

          if (textos[idiomaAtual][chave]) {

            elemento.textContent =
              textos[idiomaAtual][chave]

          }

        })


      /* PLACEHOLDERS */

      document
        .querySelectorAll('[data-i18n-placeholder]')
        .forEach((elemento) => {

          const chave =
            elemento.getAttribute(
              'data-i18n-placeholder'
            )

          if (textos[idiomaAtual][chave]) {

            elemento.placeholder =
              textos[idiomaAtual][chave]

          }

        })


      langBtn.textContent =
        idiomaAtual === 'pt'
          ? 'PT / EN'
          : 'EN / PT'

    })

  }


  /* ANIMAÇÕES */

  const reveals =
    document.querySelectorAll('.reveal')


  function revealOnScroll() {

    reveals.forEach((section) => {

      const sectionTop =
        section
          .getBoundingClientRect()
          .top

      if (
        sectionTop <
        window.innerHeight - 120
      ) {

        section.classList.add('active')

      }

    })

  }


  window.addEventListener(
    'scroll',
    revealOnScroll
  )

  revealOnScroll()


  /* CARROSSEL DA HOME */

  const track =
    document.querySelector(
      '.home-projects-track'
    )


  if (track) {

    /*
      Duplica os 5 cards automaticamente
      para deixar o movimento contínuo.
    */

    track.innerHTML +=
      track.innerHTML


    let position = 0

    let paused = false


    function animateProjects() {

      if (!paused) {

        position -= 0.5


        if (
          Math.abs(position) >=
          track.scrollWidth / 2
        ) {

          position = 0

        }


        track.style.transform =
          `translateX(${position}px)`

      }


      requestAnimationFrame(
        animateProjects
      )

    }


    track.addEventListener(
      'mouseenter',
      () => {

        paused = true

      }
    )


    track.addEventListener(
      'mouseleave',
      () => {

        paused = false

      }
    )


    animateProjects()

  }

})