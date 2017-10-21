/**
 * https://github.com/yanxyz/note
 * compat: ES2015
 */

/* global SITE_BASEURL */

document.addEventListener('DOMContentLoaded', () => {
  nav()
  insert()
})

/**
 * 根据 pathname 创建 breadcrumb
 *
 * 支持两种首页地址 HOME_PAGE：自定义域名 '/'; github.io '/note/'
 * pathname 要删掉开头的首页地址 HOME_PAGE
 * HOME_PAGE 在模板中定义
 */
function nav() {
  const INDEX = '/index.html'
  let pathname = location.pathname

  // 删除末尾 '/index.html'
  if (pathname.endsWith(INDEX)) {
    pathname = pathname.slice(0, - INDEX.length)
  }
  // 跳过首页
  if (pathname === SITE_BASEURL) return

  // 删除末尾 '/'
  while (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  // 删除开头 HOME_PAGE
  let path = SITE_BASEURL
  const parts = pathname.slice(path.length).split('/')
  const list = [`<a href="${path}">Home</a>`]
  const n = parts.length - 1
  for (let i = 0; i < n; i++) {
    const p = parts[i]
    if (!p) continue // 跳过连续的 '/'
    path += `${p}/`
    list.push(`<a href="${path}">${p}</a>`)
  }
  list.push(parts[n])
  document.getElementById('site-nav').innerHTML = list.join('<span class="divider">/</span>')
}

function insert() {
  // anchors
  const entry = document.querySelector('.markdown-body')

  // external links
  entry.querySelectorAll('a[href]').forEach(a => {
    if (a.host === location.host ||
      a.getElementsByTagName('img').length) {
      return
    }
    a.innerHTML = `<svg aria-hidden="true" class="octicon octicon-link-external" width="14" height="14"><use xlink:href="#octicon-link-external"></use></svg>` + a.textContent
  })

  const headings = entry.querySelectorAll('h2, h3')
  // toc
  const tocContainer = document.getElementById('toc-container')
  if (tocContainer) buildToc(headings)
  // anchors
  headings.forEach(heading => {
    const id = heading.id
    if (!id || heading.childElementCount) return

    heading.innerHTML = `<a href="#${id}" class="anchor" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" width="14" height="14"><use xlink:href="#octicon-link"></use></svg></a>` + heading.textContent
  })
}

function buildToc(headings) {
  const list = []
  let p = 0
  let nested = false
  headings.forEach(h => {
    const id = h.id
    if (!id) return
    const n = parseInt(h.tagName[1])
    if (p) {
      if (n > p) {
        list.push('<ol>')
        nested = true
      } else if (n < p && nested) {
        list.push('</li></ol></li>')
        nested = false
      } else {
        list.push('</li>')
      }
    }

    list.push(`<li><a href="#${id}">${h.textContent}</a>`)
    p = n
  })

  if (nested) {
    list.push('</li></ol></li>')
  } else {
    list.push('</li>')
  }

  document.getElementById('toc').innerHTML = list.join('')

  const container = document.getElementById('toc-container')
  const toggle = document.getElementById('toc-button')
  toggle.addEventListener('click', toggleTOC)
  document.getElementById('toc-close').addEventListener('click', toggleTOC)
  document.body.addEventListener('click', function (e) {
    if (e.target !== toggle && !container.contains(e.target)) {
      document.body.classList.remove('open')
    }
  })
}

function toggleTOC(event) {
  event.preventDefault()
  event.stopPropagation()
  document.body.classList.toggle('open')
}
