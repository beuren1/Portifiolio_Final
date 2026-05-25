document.addEventListener('DOMContentLoaded', () => {
  const face = document.getElementById('face')
  const designer = document.getElementById('designer')
  const coder = document.getElementById('coder')
  const langBtn = document.querySelector('.lang-btn')

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

  const textos = {
    pt: {
      navAbout: 'sobre',
      navProjects: 'projetos',
      navBlog: 'blog',
      navContact: 'contato',
      designerTitle: 'designer',
      designerText: 'Designer focado em interfaces bonitas, limpas e fáceis de usar.',
      coderTitle: 'coder',
      coderText: 'Desenvolvedor front-end que cria sites modernos, responsivos e eficientes.',
      workTitle: 'Últimos trabalhos',
      project1Title: 'Site sobre vendas de cosméticos',
      project1Text: 'Landing page de catálogo com seções, produtos e contato.',
      project2Title: 'Site de restaurante',
      project2Text: 'Projeto inspirado em eFood com cards de restaurantes.',
      project3Title: 'Loja de roupas',
      project3Text: 'Página de produtos com visual moderno para loja virtual.',
      project4Title: 'Landing page simples',
      project4Text: 'Página de evento com chamada principal e informações.'
    },
    en: {
      navAbout: 'about',
      navProjects: 'projects',
      navBlog: 'blog',
      navContact: 'contact',
      designerTitle: 'designer',
      designerText: 'Designer focused on beautiful, clean and easy-to-use interfaces.',
      coderTitle: 'coder',
      coderText: 'Front-end developer who creates modern, responsive and efficient websites.',
      workTitle: 'Some of my latest work',
      project1Title: 'Cosmetics sales website',
      project1Text: 'Catalog landing page with sections, products and contact.',
      project2Title: 'Restaurant website',
      project2Text: 'Project inspired by eFood with restaurant cards.',
      project3Title: 'Clothing store',
      project3Text: 'Product page with a modern look for an online store.',
      project4Title: 'Simple landing page',
      project4Text: 'Event page with main call and information.'
    }
  }

  let idiomaAtual = 'pt'

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt'

      document.querySelectorAll('[data-i18n]').forEach((elemento) => {
        const chave = elemento.getAttribute('data-i18n')
        if (textos[idiomaAtual][chave]) {
          elemento.textContent = textos[idiomaAtual][chave]
        }
      })

      langBtn.textContent = idiomaAtual === 'pt' ? 'PT / EN' : 'EN / PT'
    })
  }

  const reveals = document.querySelectorAll('.reveal')

  function revealOnScroll() {
    reveals.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top

      if (sectionTop < window.innerHeight - 120) {
        section.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', revealOnScroll)
  revealOnScroll()
})