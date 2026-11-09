document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  const textos = {
    "pt": {
      "checkpointSummary": "Landing page gamer com jogos, acessórios e carrinho persistente.",
      "checkpointDescription": "Landing page gamer com catálogo de jogos e acessórios, filtros por categoria e carrinho funcional com quantidades, remoção de itens e cálculo automático do total.",
      "checkpointDetails": "Desenvolvida com HTML, CSS e JavaScript, com carrinho salvo no navegador, FAQ expansível, formulário de contato e resumo de pedido demonstrativo, sem pagamento real.",
      "cineverseSummary": "Plataforma full stack para descobrir filmes e séries com dados do TMDB.",
      "cineverseDescription1": "Plataforma responsiva para descobrir filmes e séries, com busca, catálogos, filtros e páginas de detalhes com elenco, notas, trailers e recomendações.",
      "cineverseDescription2": "Desenvolvida com Next.js App Router, React, TypeScript, Tailwind CSS, TanStack Query, Zustand e Motion. Integra a API do TMDB por uma rota server-side, mantendo a chave protegida no servidor.",
      "navAbout": "sobre",
      "navProjects": "projetos",
      "navContact": "contato",
      "designerTitle": "designer",
      "designerText": "Designer focado em interfaces bonitas, limpas e fáceis de usar.",
      "coderTitle": "coder",
      "coderText": "Desenvolvedor front-end que cria sites modernos, responsivos e eficientes.",
      "workTitle": "Últimos trabalhos",
      "project1Title": "Site sobre vendas de cosméticos",
      "project1Text": "Landing page de catálogo com seções, produtos e contato.",
      "project2Title": "Site de restaurante",
      "project2Text": "Projeto inspirado em eFood com cards de restaurantes.",
      "project3Title": "Beuren Store",
      "project3Text": "E-commerce full stack com catálogo, carrinho e autenticação.",
      "project4Title": "Landing page simples",
      "project4Text": "Página de evento com chamada principal e informações.",
      "aboutTitle": "Quem sou eu?",
      "aboutLead": "Sou desenvolvedor front-end e estudante de programação focado em criar interfaces modernas e experiências visuais bonitas.",
      "aboutText1": "Atualmente estudo desenvolvimento Full Stack Python pela EBAC e desenvolvo projetos reais para construir meu portfólio profissional.",
      "aboutText2": "Gosto de aprender criando projetos práticos, explorando design moderno, animações e experiências interativas para web.",
      "factsTitle": "Fatos curiosos sobre mim",
      "fact1": "Sou mestre de RPG de mesa",
      "fact2": "Toco guitarra e baixo",
      "fact3": "Adoro filmes e séries",
      "fact4": "Gosto de criar coisas novas",
      "fact5": "Aprendo criando projetos reais",
      "skillsTitle": "Soft skills",
      "level1": "Ótimo",
      "level2": "Muito bom",
      "level3": "Bom",
      "level4": "Não muito bom",
      "skill1": "Trabalho em equipe",
      "skill2": "Comunicação",
      "skill3": "Criatividade",
      "skill4": "Resolução de problemas",
      "skill5": "Aprendizado rápido",
      "frontendTitle": "Front-end developer",
      "front1": "HTML5 semântico",
      "front2": "CSS3 responsivo",
      "front3": "JavaScript moderno",
      "front4": "Consumo de APIs REST",
      "front5": "UI responsiva",
      "front6": "Figma para desenvolvimento",
      "backendTitle": "Python & Back-end",
      "back1": "APIs com FastAPI",
      "back2": "Autenticação JWT",
      "back3": "CRUD completo",
      "back4": "Deploy de aplicações",
      "contactTitle": "Contato",
      "contactText": "Entre em contato comigo pelas redes sociais ou envie uma mensagem diretamente.",
      "emailTitle": "Me envie um email",
      "nameLabel": "Nome",
      "emailLabel": "Email",
      "messageLabel": "Mensagem",
      "namePlaceholder": "Seu nome",
      "emailPlaceholder": "Seu email",
      "messagePlaceholder": "Digite sua mensagem",
      "sendButton": "Abrir aplicativo de email",
      "portfolioTitle": "Portfolio",
      "portfolioText": "Confira alguns projetos que desenvolvi durante meus estudos e prática profissional.",
      "projPage1Title": "Loja de Cosméticos",
      "projPage1Text1": "Site de catálogo para venda de cosméticos, com seções de produtos, categorias, contato e layout responsivo.",
      "projPage1Text2": "Foi desenvolvido com HTML semântico, CSS personalizado e JavaScript para interações básicas da página.",
      "projectDescription1": "E-commerce Full Stack com catálogo dinâmico de produtos, cadastro e login de usuários, carrinho persistente, checkout e histórico de pedidos.",
      "projectDescription2": "Frontend desenvolvido com HTML, SCSS e JavaScript. Backend com Django REST Framework, API REST e PostgreSQL. Aplicação hospedada na Vercel e Render.",
      "projectDescription3": "Rede social Full Stack com cadastro, autenticação JWT, criação e edição de posts, feed, seguidores, curtidas e comentários.",
      "projectDescription4": "Frontend desenvolvido em React e backend com Django REST Framework, PostgreSQL e API REST.",
      "projectDescription5": "Aplicação inspirada em delivery de restaurantes, exibindo cards, categorias e informações vindas de uma API.",
      "projectDescription6": "Desenvolvida com React, Styled Components, React Router, Redux Toolkit e consumo de API.",
      "projectDescription7": "Dashboard financeiro para gerenciamento de receitas, despesas e metas pessoais, com gráficos interativos, filtros por categoria, pesquisa e acompanhamento do saldo em tempo real.",
      "projectDescription8": "Desenvolvido com React, TypeScript, Vite e Recharts. Possui relatórios financeiros, exportação CSV, backup e restauração em JSON, persistência de dados no navegador e interface responsiva.",
      "projectDescription9": "Landing page desenvolvida para divulgação de um evento de tecnologia.",
      "projectDescription10": "Projeto responsivo com informações do evento, localização e chamada principal.",
      "projectDescription11": "Landing page moderna para uma plataforma fictícia de produtividade e inteligência artificial.",
      "projectDescription12": "Layout responsivo com animações, planos, FAQ e dashboard visual.",
      "neuralDescription": "Landing page de uma plataforma de inteligência artificial para ajudar na criação de ideias, textos e organização de tarefas.",
      "neuralDetails": "Apresenta recursos, planos e exemplos de conversas com uma assistente de IA.",
      "neuralSummary": "Landing page de uma plataforma de IA para criar ideias, textos e organizar tarefas.",
      "skipContent": "Pular para o conteúdo",
      "menu": "Menu",
      "mainNavigation": "Principal",
      "homeTitle": "Josué Beuren — desenvolvedor web e designer",
      "portraitAlt": "Retrato de Josué Beuren",
      "twitterSummary": "Rede social full stack desenvolvida com React, Django e PostgreSQL.",
      "catalogTitle": "Catálogo",
      "viewProject": "Ver projeto",
      "fullStackCategory": "Full Stack",
      "landingPagesCategory": "Landing Pages",
      "reactCategory": "E-commerce / React",
      "previousProjects": "Anterior",
      "nextProjects": "Próximo",
      "pauseProjects": "Pausar movimento",
      "resumeProjects": "Retomar movimento",
      "formHelp": "Abre um rascunho no seu aplicativo de email. Revise e envie por lá, ou escreva para",
      "draftOpened": "Solicitamos a abertura do aplicativo de email. A mensagem ainda não foi enviada. Se o aplicativo não abrir, use o endereço acima.",
      "responsivo": "Responsivo"
    },
    "en": {
      "checkpointSummary": "Gaming landing page with games, accessories and a persistent shopping cart.",
      "checkpointDescription": "Gaming landing page featuring a game and accessory catalog, category filters and a functional cart with quantity controls, item removal and automatic totals.",
      "checkpointDetails": "Built with HTML, CSS and JavaScript, featuring browser cart storage, an expandable FAQ, a contact form and a demo order summary without real payments.",
      "cineverseSummary": "Full-stack platform for discovering movies and series with TMDB data.",
      "cineverseDescription1": "Responsive platform for discovering movies and series, with search, catalogs, filters and detail pages featuring cast, ratings, trailers and recommendations.",
      "cineverseDescription2": "Built with Next.js App Router, React, TypeScript, Tailwind CSS, TanStack Query, Zustand and Motion. Integrates the TMDB API through a server-side route, keeping the API key protected on the server.",
      "navAbout": "about",
      "navProjects": "projects",
      "navContact": "contact",
      "designerTitle": "designer",
      "designerText": "Designer focused on beautiful, clean and easy-to-use interfaces.",
      "coderTitle": "coder",
      "coderText": "Front-end developer who creates modern, responsive and efficient websites.",
      "workTitle": "Some of my latest work",
      "project1Title": "Cosmetics sales website",
      "project1Text": "Catalog landing page with sections, products and contact.",
      "project2Title": "Restaurant website",
      "project2Text": "Project inspired by eFood with restaurant cards.",
      "project3Title": "Beuren Store",
      "project3Text": "Full-stack e-commerce with a catalog, cart and authentication.",
      "project4Title": "Simple landing page",
      "project4Text": "Event page with main call and information.",
      "aboutTitle": "Who am I?",
      "aboutLead": "I am a front-end developer and programming student focused on creating modern interfaces and beautiful visual experiences.",
      "aboutText1": "I currently study Full Stack Python development at EBAC and build real projects to create my professional portfolio.",
      "aboutText2": "I enjoy learning by building practical projects, exploring modern design, animations and interactive web experiences.",
      "factsTitle": "Fun facts about me",
      "fact1": "I am a tabletop RPG game master",
      "fact2": "I play guitar and bass",
      "fact3": "I love movies and TV series",
      "fact4": "I enjoy creating new things",
      "fact5": "I learn by building real projects",
      "skillsTitle": "Soft skills",
      "level1": "Excellent",
      "level2": "Very good",
      "level3": "Good",
      "level4": "Not very good",
      "skill1": "Teamwork",
      "skill2": "Communication",
      "skill3": "Creativity",
      "skill4": "Problem solving",
      "skill5": "Fast learning",
      "frontendTitle": "Front-end developer",
      "front1": "Semantic HTML5",
      "front2": "Responsive CSS3",
      "front3": "Modern JavaScript",
      "front4": "REST API consumption",
      "front5": "Responsive UI",
      "front6": "Figma for development",
      "backendTitle": "Python & Back-end",
      "back1": "FastAPI APIs",
      "back2": "JWT Authentication",
      "back3": "Full CRUD",
      "back4": "Application deployment",
      "contactTitle": "Contact",
      "contactText": "Get in touch with me through social media or send me a message directly.",
      "emailTitle": "Send me an email",
      "nameLabel": "Name",
      "emailLabel": "Email",
      "messageLabel": "Message",
      "namePlaceholder": "Your name",
      "emailPlaceholder": "Your email",
      "messagePlaceholder": "Type your message",
      "sendButton": "Open email app",
      "portfolioTitle": "Portfolio",
      "portfolioText": "Check out some projects I developed during my studies and professional practice.",
      "projPage1Title": "Cosmetics Store",
      "projPage1Text1": "Catalog website for cosmetics sales with products, categories, contact and responsive layout.",
      "projPage1Text2": "Built with semantic HTML, custom CSS and JavaScript for basic interactions.",
      "projectDescription1": "Full-stack e-commerce with a dynamic product catalog, registration and login, persistent cart, checkout and order history.",
      "projectDescription2": "Frontend built with HTML, SCSS and JavaScript. Backend built with Django REST Framework, a REST API and PostgreSQL. Hosted on Vercel and Render.",
      "projectDescription3": "Full-stack social network with registration, JWT authentication, post creation and editing, a feed, followers, likes and comments.",
      "projectDescription4": "Frontend built with React and backend with Django REST Framework, PostgreSQL and a REST API.",
      "projectDescription5": "Restaurant delivery application displaying cards, categories and information from an API.",
      "projectDescription6": "Built with React, Styled Components, React Router, Redux Toolkit and API integration.",
      "projectDescription7": "Financial dashboard for managing income, expenses and personal goals, with interactive charts, category filters, search and balance tracking.",
      "projectDescription8": "Built with React, TypeScript, Vite and Recharts. Includes financial reports, CSV exports, JSON backup and restore, browser storage and a responsive interface.",
      "projectDescription9": "Landing page promoting a technology event.",
      "projectDescription10": "Responsive project with event information, location and a main call to action.",
      "projectDescription11": "Modern landing page for a fictional productivity and artificial intelligence platform.",
      "projectDescription12": "Responsive layout with animations, pricing plans, an FAQ and a visual dashboard.",
      "neuralDescription": "Landing page for an artificial intelligence platform that helps create ideas, write text and organize tasks.",
      "neuralDetails": "Showcases features, plans and example conversations with an AI assistant.",
      "neuralSummary": "Landing page for an AI platform to create ideas, write text and organize tasks.",
      "skipContent": "Skip to content",
      "menu": "Menu",
      "mainNavigation": "Main",
      "homeTitle": "Josué Beuren — web developer and designer",
      "portraitAlt": "Portrait of Josué Beuren",
      "twitterSummary": "Full-stack social network built with React, Django and PostgreSQL.",
      "catalogTitle": "Catalog",
      "viewProject": "View project",
      "fullStackCategory": "Full Stack",
      "landingPagesCategory": "Landing Pages",
      "reactCategory": "E-commerce / React",
      "previousProjects": "Previous",
      "nextProjects": "Next",
      "pauseProjects": "Pause motion",
      "resumeProjects": "Resume motion",
      "formHelp": "Opens a draft in your email app. Review and send it there, or write to",
      "draftOpened": "We requested your email app to open. Your message has not been sent. If the app does not open, use the address above.",
      "responsivo": "Responsive"
    }
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const langButton = document.querySelector('.lang-btn')
  const menuButton = document.querySelector('.menu-toggle')
  const navigation = document.getElementById('main-navigation')
  const mobileLayout = window.matchMedia('(max-width: 900px)')
  const slider = document.querySelector('.home-projects-slider')
  const track = document.querySelector('.home-projects-track')
  let language = 'pt'

  try {
    language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'
  } catch {
    // The site remains usable when browser storage is unavailable.
  }

  const translate = key => textos[language][key] ?? key


  function applyLanguage() {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = textos[language][element.dataset.i18n]
      if (value !== undefined) element.textContent = value
    })
    for (const attribute of ['placeholder', 'aria-label', 'alt']) {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        const key = element.getAttribute(`data-i18n-${attribute}`)
        if (textos[language][key] !== undefined) element.setAttribute(attribute, translate(key))
      })
    }
    if (langButton) {
      langButton.textContent = language === 'pt' ? 'PT / EN' : 'EN / PT'
      langButton.setAttribute('aria-label', language === 'pt' ? 'Switch to English' : 'Mudar para português')
    }
    const titles = {
      index: ['JB | Designer e Desenvolvedor Full Stack', 'JB | Designer & Full-Stack Developer'],
      about: ['Sobre | Josué Beuren', 'About | Josué Beuren'],
      projects: ['Projetos | Josué Beuren', 'Projects | Josué Beuren'],
      contact: ['Contato | Josué Beuren', 'Contact | Josué Beuren']
    }
    const page = Object.keys(titles).find(key => document.body.classList.contains(`page-${key}`))
    if (page) document.title = titles[page][language === 'pt' ? 0 : 1]
    document.querySelectorAll('[data-project-name]').forEach(link => {
      link.setAttribute('aria-label', `${translate('viewProject')} — ${link.dataset.projectName}`)
    })
    const status = document.getElementById('form-status')
    if (status?.textContent) status.textContent = translate('draftOpened')
  }

  langButton?.addEventListener('click', () => {
    language = language === 'pt' ? 'en' : 'pt'
    try {
      localStorage.setItem('portfolio-language', language)
    } catch {
      // Language still changes for the current page.
    }
    applyLanguage()
  })
  applyLanguage()

  /* Progressive enhancement: navigation stays visible if JavaScript fails. */
  if (menuButton && navigation) {
    function closeMenu(restoreFocus = false) {
      navigation.classList.remove('is-open')
      menuButton.setAttribute('aria-expanded', 'false')
      if (restoreFocus) menuButton.focus()
    }
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true'
      menuButton.setAttribute('aria-expanded', String(open))
      navigation.classList.toggle('is-open', open)
    })
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu()
    })
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true)
    })
    document.addEventListener('click', event => {
      if (!event.target.closest('#header')) closeMenu()
    })
    mobileLayout.addEventListener('change', () => closeMenu(navigation.contains(document.activeElement)))
    document.documentElement.classList.add('menu-ready')
  }

  const face = document.getElementById('face')
  if (face) {
    const resetPortrait = () => face.classList.remove('designer-active', 'coder-active')
    for (const name of ['designer', 'coder']) {
      const panel = document.getElementById(name)
      const activate = () => {
        resetPortrait()
        face.classList.add(`${name}-active`)
      }
      panel?.addEventListener('mouseenter', activate)
      panel?.addEventListener('focus', activate)
    }
    face.addEventListener('mouseleave', resetPortrait)
    face.addEventListener('focusout', event => {
      if (!face.contains(event.relatedTarget)) resetPortrait()
    })
  }

  /* Only sections below the viewport receive an initial hidden state. */
  const reveals = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          entry.target.classList.add('active')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' })
    reveals.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add('active')
      } else {
        section.classList.add('reveal-pending')
        revealObserver.observe(section)
      }
    })
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        reveals.forEach(section => section.classList.remove('reveal-pending'))
        revealObserver.disconnect()
      }
    })
  }

  /* Translate the duplicated track directly for a seamless, continuous loop.
     Keyboard focus temporarily restores native scrolling to the original links. */
  if (slider && track) {
    const cards = [...track.children]
    for (const card of cards) {
      const clone = card.cloneNode(true)
      clone.dataset.clone = 'true'
      clone.setAttribute('aria-hidden', 'true')
      clone.querySelectorAll('a, button, [tabindex]').forEach(link => link.tabIndex = -1)
      track.append(clone)
    }
    applyLanguage()
    slider.classList.add('is-looping')

    let distance = 0
    let step = 0
    let position = 0
    let frame = 0
    let previousTime = 0
    let focused = false
    let visible = true

    function measure() {
      distance = track.children[cards.length].offsetLeft - cards[0].offsetLeft
      step = cards[1].offsetLeft - cards[0].offsetLeft
      if (distance > 0) position %= distance
    }
    measure()
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(slider)
    else window.addEventListener('resize', measure)

    function animate(time) {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 0
      previousTime = time
      if (distance > 0) {
        position = (position + elapsed * 0.03) % distance
        track.style.transform = `translate3d(${-position}px, 0, 0)`
      }
      frame = requestAnimationFrame(animate)
    }

    function syncAnimation() {
      cancelAnimationFrame(frame)
      previousTime = 0
      if (!focused && visible && !document.hidden) {
        frame = requestAnimationFrame(animate)
      }
    }

    const scrollToCard = direction => {
      syncAnimation()
      const index = Math.round(slider.scrollLeft / step)
      const next = (index + direction + cards.length) % cards.length
      slider.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: reducedMotion.matches ? 'instant' : 'smooth' })
    }
    slider.addEventListener('keydown', event => {
      if (event.target === slider && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault()
        scrollToCard(event.key === 'ArrowLeft' ? -1 : 1)
      }
    })
    slider.addEventListener('focusin', () => {
      focused = true
      track.style.transform = 'translate3d(0, 0, 0)'
      syncAnimation()
    })
    slider.addEventListener('focusout', event => {
      focused = slider.contains(event.relatedTarget)
      if (!focused) {
        position = 0
        slider.scrollLeft = 0
      }
      syncAnimation()
    })
    document.addEventListener('visibilitychange', syncAnimation)
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting
        syncAnimation()
      }).observe(slider)
    }
    syncAnimation()
  }

  const contactForm = document.getElementById('contact-form')
  contactForm?.addEventListener('submit', event => {
    event.preventDefault()
    if (!contactForm.reportValidity()) return
    const data = new FormData(contactForm)
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const message = String(data.get('message')).trim()
    if (!name || !message) {
      const field = contactForm.elements.namedItem(!name ? 'name' : 'message')
      field.setCustomValidity(language === 'pt' ? 'Preencha este campo.' : 'Please fill out this field.')
      field.reportValidity()
      field.addEventListener('input', () => field.setCustomValidity(''), { once: true })
      return
    }
    const subject = language === 'pt' ? `Contato pelo portfólio — ${name}` : `Portfolio enquiry — ${name}`
    const body = `${translate('nameLabel')}: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:josuebeurensilvaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    document.getElementById('form-status').textContent = translate('draftOpened')
  })
})
